import { NavLink } from 'react-router-dom'
import Icon from '../components/ui/Icon'

const HOME_SECTIONS = [
  {
    title: 'Основы',
    description:
      'Базовый слой системы: обзорная страница основ, цвета, типографика, сетка и токены.',
    meta: 'Основы · Цвет · Типографика · Сетка · Токены',
    to: '/foundations',
  },
  {
    title: 'Действия и формы',
    description:
      'Компоненты для пользовательских действий и ввода данных: кнопка, поле ввода, многострочное поле, выпадающий список, флажок, переключатель и загрузка файлов.',
    meta: 'Кнопка · Поле ввода · Многострочное поле · Выпадающий список · Флажок · Радиокнопки · Загрузка файлов',
    to: '/components/button',
  },
  {
    title: 'Контент и вёрстка',
    description:
      'Компоненты для представления информации, организации контента и паттернов компоновки внутри интерфейса.',
    meta: 'Бейдж · Карточка · Таблица · Вкладки · Аккордеон',
    to: '/components/badge',
  },
  {
    title: 'Навигация',
    description:
      'Навигационные элементы, которые помогают пользователю понимать своё положение в системе и перемещаться между разделами.',
    meta: 'Хлебные крошки · Пагинация · Поиск',
    to: '/components/breadcrumbs',
  },
  {
    title: 'Уведомления и оверлеи',
    description:
      'Компоненты для системной обратной связи, модальных сценариев и вспомогательных интерактивных слоёв.',
    meta: 'Уведомление · Модальное окно · Подсказка',
    to: '/components/notification',
  },
  {
    title: 'Ресурсы',
    description:
      'Визуальные системные ресурсы и базовые графические элементы, используемые во всей библиотеке.',
    meta: 'Иконки',
    to: '/components/icon',
  },
]

const QUICK_PATHS = [
  {
    title: 'Перейти к основам',
    description:
      'Начните с основ, чтобы увидеть базовые правила цвета, типографики, сетки и токенов.',
    to: '/foundations',
  },
  {
    title: 'Перейти к кнопкам',
    description:
      'Откройте «Кнопку» как базовый компонент действия внутри группы «Действия и формы».',
    to: '/components/button',
  },
  {
    title: 'Перейти к уведомлениям',
    description:
      'Откройте «Уведомление» как пример компонента обратной связи внутри группы «Уведомления и оверлеи».',
    to: '/components/notification',
  },
  {
    title: 'Перейти к иконкам',
    description:
      'Перейдите к «Иконкам», чтобы посмотреть системный слой ресурсов и его роль в интерфейсе.',
    to: '/components/icon',
  },
]

export default function Home() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Главная</h2>
        <p>
          Это стартовая страница живой документации дизайн-системы Санкт-Петербургского
          горного университета. Она повторяет структуру боковой навигации и помогает
          быстро перейти от обзора к основам, группам компонентов и
          конкретным страницам системы.
        </p>

      </div>

      <div className="ds-section-block">
        <h3>Структура документации</h3>
        <p>
          Документация организована по тем же разделам, которые пользователь
          видит в боковой панели. Это делает главную страницу
          обзорной точкой входа в реальную структуру
          системы.
        </p>

        <div className="ds-home-sections-grid">
          {HOME_SECTIONS.map((item) => (
            <NavLink
              key={item.title}
              to={item.to}
              className="ds-home-section-card"
            >
              <div className="ds-home-section-card__top">
                <h3 className="ds-home-section-card__title">{item.title}</h3>
                <span className="ds-home-section-card__icon" aria-hidden="true">
                  <Icon name="arrowRight" size={18} />
                </span>
              </div>

              <p className="ds-home-section-card__description">
                {item.description}
              </p>

              <div className="ds-home-section-card__meta">{item.meta}</div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Как организована система</h3>
        <p>
          Сначала документация задаёт основы как визуальный и системный
          слой, а затем раскрывает библиотеку компонентов по функциональным
          группам. Такой порядок помогает читать систему последовательно: от
          базовых решений к интерфейсным строительным блокам.
        </p>

        <div className="ds-principles-grid">
          <div className="ds-principle-card">
            <h4>Базовый слой</h4>
            <p>
              Цвет, типографика, сетка и токены задают единый визуальный язык и
              основу реализации для всей системы.
            </p>
          </div>

          <div className="ds-principle-card">
            <h4>Функциональная группировка</h4>
            <p>
              Компоненты сгруппированы по назначению: формы, контент, навигация,
              паттерны обратной связи и ресурсы.
            </p>
          </div>

          <div className="ds-principle-card">
            <h4>Масштабируемая навигация</h4>
            <p>
              Такая структура позволяет расширять библиотеку без потери логики,
              читаемости и навигационной целостности.
            </p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Быстрые переходы</h3>
        <p>
          Ниже собраны прямые входы в ключевые точки системы. Они соответствуют
          реальным маршрутам и помогают начать работу без лишнего поиска по
          боковой панели.
        </p>

        <div className="ds-home-quickpaths-grid">
          {QUICK_PATHS.map((item) => (
            <NavLink key={item.title} to={item.to} className="ds-home-quickpath-card">
              <div className="ds-home-quickpath-card__top">
                <h4 className="ds-home-quickpath-card__title">{item.title}</h4>
                <span className="ds-home-quickpath-card__icon" aria-hidden="true">
                  <Icon name="arrowRight" size={18} />
                </span>
              </div>

              <p className="ds-home-quickpath-card__description">
                {item.description}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  )
}
