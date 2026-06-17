export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = '',
}) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    onPageChange?.(page)
  }

  return (
    <nav
      className={`ds-pagination ${className}`.trim()}
      aria-label="Навигация по страницам"
    >
      <button
        type="button"
        className="ds-pagination__control"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </button>

      <ol className="ds-pagination__list">
        {pages.map((page) => {
          const isCurrent = page === currentPage

          return (
            <li key={page} className="ds-pagination__item">
              <button
                type="button"
                className={`ds-pagination__page ${isCurrent ? 'is-current' : ''}`.trim()}
                aria-current={isCurrent ? 'page' : undefined}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          )
        })}
      </ol>

      <button
        type="button"
        className="ds-pagination__control"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Вперёд
      </button>
    </nav>
  )
}