import { NavLink } from 'react-router-dom'
import logoSrc from '../../assets/spmi-logo.svg'

const navLinkClass = ({ isActive }) => `ds-link${isActive ? ' active' : ''}`

export default function Sidebar() {
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
          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Обзор</div>
            <NavLink to="/" end className={navLinkClass}>
              Главная
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Основы</div>

            <NavLink to="/foundations" end className={navLinkClass}>
              Основы
            </NavLink>
            <NavLink to="/foundations/color" className={navLinkClass}>
              Цвет
            </NavLink>
            <NavLink to="/foundations/typography" className={navLinkClass}>
              Типографика
            </NavLink>
            <NavLink to="/foundations/grid" className={navLinkClass}>
              Сетка
            </NavLink>
            <NavLink to="/foundations/tokens" className={navLinkClass}>
              Токены
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Действия и формы</div>

            <NavLink to="/components/button" className={navLinkClass}>
              Кнопка
            </NavLink>
            <NavLink to="/components/input" className={navLinkClass}>
              Поле ввода
            </NavLink>
            <NavLink to="/components/textarea" className={navLinkClass}>
              Многострочное поле
            </NavLink>
            <NavLink to="/components/select" className={navLinkClass}>
              Выпадающий список
            </NavLink>
            <NavLink to="/components/checkbox" className={navLinkClass}>
              Флажок
            </NavLink>
            <NavLink to="/components/radio" className={navLinkClass}>
              Радиокнопки
            </NavLink>
            <NavLink to="/components/file-uploader" className={navLinkClass}>
              Загрузка файлов
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Контент и вёрстка</div>

            <NavLink to="/components/badge" className={navLinkClass}>
              Бейдж
            </NavLink>
            <NavLink to="/components/card" className={navLinkClass}>
              Карточка
            </NavLink>
            <NavLink to="/components/table" className={navLinkClass}>
              Таблица
            </NavLink>
            <NavLink to="/components/tabs" className={navLinkClass}>
              Вкладки
            </NavLink>
            <NavLink to="/components/accordion" className={navLinkClass}>
              Аккордеон
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Навигация</div>

            <NavLink to="/components/breadcrumbs" className={navLinkClass}>
              Хлебные крошки
            </NavLink>
            <NavLink to="/components/pagination" className={navLinkClass}>
              Пагинация
            </NavLink>
            <NavLink to="/components/search" className={navLinkClass}>
              Поиск
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Уведомления и оверлеи</div>

            <NavLink to="/components/notification" className={navLinkClass}>
              Уведомление
            </NavLink>
            <NavLink to="/components/modal" className={navLinkClass}>
              Модальное окно
            </NavLink>
            <NavLink to="/components/tooltip" className={navLinkClass}>
              Подсказка
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Ресурсы</div>

            <NavLink to="/components/icon" className={navLinkClass}>
              Иконки
            </NavLink>
          </div>
        </nav>
      </div>
    </aside>
  )
}
