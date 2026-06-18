import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logoSrc from '../../assets/spmi-logo.svg'
import Icon from '../ui/Icon'

const navLinkClass = ({ isActive }) => `ds-link${isActive ? ' active' : ''}`

const NAV_SECTIONS = [
  {
    title: 'Обзор',
    links: [{ to: '/', label: 'Главная', end: true }],
  },
  {
    title: 'Основы',
    links: [
      { to: '/foundations', label: 'Основы', end: true },
      { to: '/foundations/color', label: 'Цвет' },
      { to: '/foundations/typography', label: 'Типографика' },
      { to: '/foundations/grid', label: 'Сетка' },
      { to: '/foundations/tokens', label: 'Токены' },
    ],
  },
  {
    title: 'Действия и формы',
    links: [
      { to: '/components/button', label: 'Кнопка' },
      { to: '/components/input', label: 'Поле ввода' },
      { to: '/components/textarea', label: 'Многострочное поле' },
      { to: '/components/select', label: 'Выпадающий список' },
      { to: '/components/checkbox', label: 'Флажок' },
      { to: '/components/radio', label: 'Радиокнопки' },
      { to: '/components/file-uploader', label: 'Загрузка файлов' },
    ],
  },
  {
    title: 'Контент и вёрстка',
    links: [
      { to: '/components/badge', label: 'Бейдж' },
      { to: '/components/card', label: 'Карточка' },
      { to: '/components/table', label: 'Таблица' },
      { to: '/components/tabs', label: 'Вкладки' },
      { to: '/components/accordion', label: 'Аккордеон' },
    ],
  },
  {
    title: 'Навигация',
    links: [
      { to: '/components/breadcrumbs', label: 'Хлебные крошки' },
      { to: '/components/pagination', label: 'Пагинация' },
      { to: '/components/search', label: 'Поиск' },
    ],
  },
  {
    title: 'Уведомления и оверлеи',
    links: [
      { to: '/components/notification', label: 'Уведомление' },
      { to: '/components/modal', label: 'Модальное окно' },
      { to: '/components/tooltip', label: 'Подсказка' },
    ],
  },
  {
    title: 'Ресурсы',
    links: [{ to: '/components/icon', label: 'Иконки' }],
  },
]

// Заголовок категории, в которой находится текущая страница.
function findActiveSectionTitle(pathname) {
  const section = NAV_SECTIONS.find((s) => s.links.some((l) => l.to === pathname))
  return section ? section.title : null
}

export default function Sidebar() {
  const { pathname } = useLocation()
  const [openSections, setOpenSections] = useState(() => {
    const active = findActiveSectionTitle(pathname)
    return active ? { [active]: true } : {}
  })

  // при переходе на другую страницу раскрываем её категорию —
  // корректировка состояния во время рендера (без эффекта), как рекомендует React
  const [prevPathname, setPrevPathname] = useState(pathname)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    const active = findActiveSectionTitle(pathname)
    if (active && !openSections[active]) {
      setOpenSections((prev) => ({ ...prev, [active]: true }))
    }
  }

  const toggleSection = (title) =>
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }))

  return (
    <aside className="ds-sidebar">
      <div className="ds-sidebar-brand">
        <span className="ds-logo">
          <img src={logoSrc} className="ds-logo-svg" alt="" aria-hidden="true" />
        </span>
        <span className="ds-sidebar-title">
          Горный университет<br />Дизайн-система
        </span>
      </div>

      <div className="ds-sidebar-scroll">
        <nav className="ds-sidebar-nav" aria-label="Основная навигация">
          {NAV_SECTIONS.map((section) => {
            const isOpen = Boolean(openSections[section.title])

            return (
              <div
                key={section.title}
                className={`ds-sidebar-section ${isOpen ? 'is-open' : ''}`.trim()}
              >
                <button
                  type="button"
                  className="ds-sidebar-section-toggle"
                  aria-expanded={isOpen}
                  onClick={() => toggleSection(section.title)}
                >
                  <span className="ds-sidebar-section-title">{section.title}</span>
                  <span className="ds-sidebar-section-chevron" aria-hidden="true">
                    <Icon name="chevronDown" size={16} />
                  </span>
                </button>

                <div className="ds-sidebar-section-list">
                  <div className="ds-sidebar-section-list-inner">
                    {section.links.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.end}
                        className={navLinkClass}
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
