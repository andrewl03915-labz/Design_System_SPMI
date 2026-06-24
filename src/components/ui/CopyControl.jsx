import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { buildStandalone } from '../../lib/standalone'
import { serializeHtml } from '../../lib/serializeHtml'

const FORMATS = [
  { key: 'standalone', label: 'HTML + CSS' },
  { key: 'html', label: 'HTML', dev: true },
  { key: 'jsx', label: 'JSX', dev: true },
]

function Note({ format, interactive }) {
  if (format === 'standalone') {
    return (
      <p className="ds-copy__note">
        Самодостаточный сниппет: вставляется в любой проект без подключения файлов —
        со стилями, hover/disabled и анимациями. Шрифт NT Somic в него не входит, текст
        отрисуется системным.{' '}
        <Link to="/foundations/typography">Как подключить шрифт →</Link>
        {interactive && (
          <>
            {' '}
            Это интерактивный компонент: вид и CSS-состояния скопируются, но поведение
            (переключение, раскрытие, открытие) даёт только JS — используйте формат JSX.
          </>
        )}
      </p>
    )
  }
  if (format === 'html') {
    return (
      <p className="ds-copy__note">
        Только разметка. Заработает, если к проекту подключён CSS дизайн-системы
        (<code>tokens.css</code> и <code>components.css</code>).
        {interactive && (
          <> Интерактивность (JS-поведение) сюда не входит — см. формат JSX.</>
        )}
      </p>
    )
  }
  return (
    <p className="ds-copy__note">
      Полное поведение компонента. Заработает в React-проекте, куда добавлены исходники
      компонентов дизайн-системы и подключён её CSS
      (<code>tokens.css</code>, <code>components.css</code>).
    </p>
  )
}

// Все классы ds-* в поддереве демо — для точного отбора правил в автономном сниппете.
function derivePrefixes(root) {
  const set = new Set()
  const collect = (el) => el.classList.forEach((c) => c.startsWith('ds-') && set.add(c))
  collect(root)
  root.querySelectorAll('[class]').forEach(collect)
  return [...set]
}

/**
 * Оборачивает живое демо компонента и даёт кнопку копирования. HTML и нужные
 * CSS-классы определяются автоматически из отрисованной разметки.
 *
 * <CopyControl jsx={`<Button variant="primary">Кнопка</Button>`}>
 *   <Button variant="primary">Кнопка</Button>
 * </CopyControl>
 *
 * jsx — необязателен; cssPrefixes — необязательный ручной override автоопределения.
 */
export default function CopyControl({ children, jsx, html: htmlOverride, cssPrefixes, interactive }) {
  const demoRef = useRef(null)
  const [copied, setCopied] = useState(false)

  const formats = FORMATS.filter((f) => (f.key === 'jsx' ? Boolean(jsx) : true))
  const [format, setFormat] = useState('standalone')

  const buildCode = () => {
    if (format === 'jsx') return jsx || ''
    const node = demoRef.current?.firstElementChild
    // htmlOverride нужен для компонентов, которые нельзя считать из демо
    // напрямую (например Modal — портал-оверлей, видимый только при open).
    const html = htmlOverride ?? (node ? serializeHtml(node) : '')
    if (!html) return ''
    if (format === 'html') return html
    const prefixes =
      cssPrefixes?.length ? cssPrefixes : node ? derivePrefixes(node) : []
    return buildStandalone(html, prefixes)
  }

  const copy = async () => {
    const code = buildCode()
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = code
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="ds-copy">
      <div className="ds-copy__demo" ref={demoRef}>
        {children}
      </div>

      <div className="ds-copy__bar">
        <div className="ds-copy__formats" role="tablist" aria-label="Формат копирования">
          {formats.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={format === f.key}
              className={`ds-copy__format${format === f.key ? ' is-active' : ''}`}
              onClick={() => {
                setFormat(f.key)
                setCopied(false)
              }}
            >
              {f.label}
              {f.dev && <sup className="ds-copy__dev-mark">*</sup>}
            </button>
          ))}
        </div>

        <button type="button" className="ds-copy__btn" onClick={copy}>
          {copied ? 'Скопировано' : 'Скопировать'}
        </button>
      </div>

      {formats.find((f) => f.key === format)?.dev && (
        <span className="ds-copy__legend">* для разработчиков</span>
      )}

      <Note format={format} interactive={interactive} />
    </div>
  )
}
