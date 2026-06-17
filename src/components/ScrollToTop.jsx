import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// При каждой смене маршрута возвращает прокрутку страницы в самое начало,
// чтобы новая страница компонента всегда открывалась сверху.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
