// Сборка «автономного» сниппета: HTML-разметка + встроенный <style> только с теми
// правилами и токенами, которые компонент использует НЕПОСРЕДСТВЕННО (плюс токены,
// от которых они зависят по цепочке var()). Источник правды — реальные CSS-файлы.
import componentsCss from '../styles/components.css?raw'
import tokensCss from '../styles/tokens.css?raw'

// Разбивает CSS на правила верхнего уровня (с учётом вложенности и комментариев).
function parseTopLevel(css) {
  const segs = []
  let depth = 0
  let buf = ''
  let inComment = false
  for (let p = 0; p < css.length; p++) {
    const c = css[p]
    if (!inComment && c === '/' && css[p + 1] === '*') {
      inComment = true
      p++
      continue
    }
    if (inComment) {
      if (c === '*' && css[p + 1] === '/') {
        inComment = false
        p++
      }
      continue
    }
    buf += c
    if (c === '{') depth++
    else if (c === '}') {
      depth--
      if (depth === 0) {
        segs.push(buf.trim())
        buf = ''
      }
    }
  }
  return segs.filter(Boolean)
}

const prelude = (rule) => rule.slice(0, rule.indexOf('{')).trim()

// Имена переменных, на которые ссылается фрагмент CSS: var(--foo) -> '--foo'
function varsIn(text) {
  const out = []
  const re = /var\(\s*(--[\w-]+)/g
  let m
  while ((m = re.exec(text))) out.push(m[1])
  return out
}

const COMPONENT_RULES = parseTopLevel(componentsCss)

// Карта токенов { '--name': 'value' } и их порядок (берём объявления внутри :root).
const TOKENS = (() => {
  const blocks = parseTopLevel(tokensCss).filter((r) => /^:root\b/.test(prelude(r)))
  const source = blocks.length
    ? blocks.map((r) => r.slice(r.indexOf('{') + 1, r.lastIndexOf('}'))).join('\n')
    : tokensCss
  const list = []
  const seen = new Set()
  const re = /(--[\w-]+)\s*:\s*([^;]+);/g
  let m
  while ((m = re.exec(source))) {
    const name = m[1]
    if (seen.has(name)) continue
    seen.add(name)
    list.push({ name, value: m[2].trim() })
  }
  return list
})()
const TOKEN_MAP = new Map(TOKENS.map((t) => [t.name, t.value]))

/**
 * Собирает автономный сниппет.
 * @param {string} markup  — HTML-разметка компонента
 * @param {string[]} prefixes — классы-префиксы компонента, напр. ['ds-button']
 */
// Проверяет, относится ли правило к конкретной разметке: хотя бы один из его
// селекторов (без псевдоклассов/псевдоэлементов) должен матчить элемент разметки.
// Так primary-кнопка не тянет правила .ds-button--secondary/--ghost, но сохраняет
// базовые .ds-button и общие состояния вроде :disabled.
function ruleMatchesMarkup(rule, root) {
  const selectorList = prelude(rule)
  if (selectorList.startsWith('@')) {
    // @media/@supports: правило релевантно, если релевантно любое вложенное.
    const inner = rule.slice(rule.indexOf('{') + 1, rule.lastIndexOf('}'))
    return parseTopLevel(inner).some((r) => ruleMatchesMarkup(r, root))
  }
  const elements = [root, ...root.querySelectorAll('*')]
  return selectorList.split(',').some((sel) => {
    const base = sel.replace(/:{1,2}[\w-]+(\([^)]*\))?/g, '').trim()
    if (!base) return true // селектор состоял только из псевдоклассов
    try {
      return elements.some((el) => el.matches(base))
    } catch {
      return false
    }
  })
}

export function buildStandalone(markup, prefixes) {
  const matchesPrefix = (rule) => prefixes.some((p) => rule.includes('.' + p))

  // Разметка как настоящий DOM — для точной проверки релевантности правил.
  const root = document.createElement('div')
  root.innerHTML = markup

  // 1. Правила компонента (база + состояния выбранного варианта), включая @media.
  //    Грубый фильтр по префиксу + точная проверка на соответствие разметке.
  const kept = COMPONENT_RULES.filter((rule) => {
    const head = prelude(rule)
    if (head.startsWith('@keyframes') || head.startsWith('@font-face')) return false
    if (!matchesPrefix(rule)) return false
    return ruleMatchesMarkup(rule, root)
  })

  // 2. @keyframes, на которые ссылаются оставленные правила.
  const keyframes = COMPONENT_RULES.filter((r) => prelude(r).startsWith('@keyframes'))
  const usedKeyframes = keyframes.filter((kf) => {
    const name = prelude(kf).replace('@keyframes', '').trim()
    return kept.some((rule) =>
      new RegExp('animation(-name)?\\s*:[^;]*\\b' + name + '\\b').test(rule)
    )
  })

  // 3. Только нужные токены: собираем var() из правил и транзитивно тянем зависимости.
  const needed = new Set()
  const queue = []
  for (const rule of [...kept, ...usedKeyframes]) queue.push(...varsIn(rule))
  while (queue.length) {
    const v = queue.shift()
    if (needed.has(v)) continue
    needed.add(v)
    const value = TOKEN_MAP.get(v)
    if (value) queue.push(...varsIn(value))
  }

  const rootDecls = TOKENS.filter((t) => needed.has(t.name)).map(
    (t) => `  ${t.name}: ${t.value};`
  )
  const rootBlock = rootDecls.length ? `:root {\n${rootDecls.join('\n')}\n}` : ''

  const css = [rootBlock, ...kept, ...usedKeyframes].filter(Boolean).join('\n\n')

  return `<style>\n${css}\n</style>\n${markup}`
}
