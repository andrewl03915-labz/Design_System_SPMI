// Превращает отрисованный DOM-узел в аккуратный, отформатированный HTML-сниппет:
// убирает «технический шум» React (сгенерированные id, служебные aria-ссылки),
// схлопывает SVG-иконки в одну строку и делает отступы по вложенности.

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img',
  'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
])

// Атрибуты, которые ссылаются на сгенерированные id и в готовом сниппете не нужны.
const DROP_ATTRS = new Set([
  'aria-describedby',
  'aria-labelledby',
  'aria-controls',
  'aria-activedescendant',
])

function escapeText(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// Сгенерированный React id: «:r0:» (React 18) или «_r_1e_» (React 19).
const isGeneratedId = (v) => v.includes(':') || /_r_[0-9a-z]+_/i.test(v)

function serializeAttrs(el) {
  let out = ''
  for (const attr of el.attributes) {
    if (DROP_ATTRS.has(attr.name)) continue
    // id/for со сгенерированными React-id выкидываем (читаемые id оставляем).
    if ((attr.name === 'id' || attr.name === 'for') && isGeneratedId(attr.value)) continue
    out += attr.value === '' ? ` ${attr.name}` : ` ${attr.name}="${attr.value}"`
  }
  return out
}

function serialize(node, depth) {
  const pad = '  '.repeat(depth)

  if (node.nodeType === 3) {
    const text = node.textContent.replace(/\s+/g, ' ').trim()
    return text ? pad + escapeText(text) : ''
  }
  if (node.nodeType !== 1) return ''

  const tag = node.tagName.toLowerCase()

  // SVG-иконки оставляем компактной строкой, без разворачивания путей.
  if (tag === 'svg') {
    return pad + node.outerHTML.replace(/\s*\n\s*/g, '').replace(/>\s+</g, '><')
  }

  const attrs = serializeAttrs(node)
  if (VOID.has(tag)) return `${pad}<${tag}${attrs} />`

  const kids = [...node.childNodes].filter(
    (n) => n.nodeType === 1 || (n.nodeType === 3 && n.textContent.trim())
  )

  if (kids.length === 0) return `${pad}<${tag}${attrs}></${tag}>`

  const onlyText = kids.every((n) => n.nodeType === 3)
  if (onlyText) {
    const text = escapeText(node.textContent.replace(/\s+/g, ' ').trim())
    return `${pad}<${tag}${attrs}>${text}</${tag}>`
  }

  const inner = kids.map((k) => serialize(k, depth + 1)).filter(Boolean).join('\n')
  return `${pad}<${tag}${attrs}>\n${inner}\n${pad}</${tag}>`
}

export function serializeHtml(rootEl) {
  return serialize(rootEl, 0)
}
