export default function Breadcrumbs({
  items = [],
  separator = '/',
  className = '',
}) {
  if (!items.length) return null

  return (
    <nav
      className={`ds-breadcrumbs ${className}`.trim()}
      aria-label="Навигационная цепочка"
    >
      <ol className="ds-breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.label || index} className="ds-breadcrumbs__item">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="ds-breadcrumbs__link"
                  // '#' — это placeholder-ссылка: оставляем кликабельной,
                  // но без перехода и прыжка в начало страницы.
                  onClick={item.href === '#' ? (event) => event.preventDefault() : undefined}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={`ds-breadcrumbs__current ${isLast ? 'is-current' : ''}`.trim()}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="ds-breadcrumbs__separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}