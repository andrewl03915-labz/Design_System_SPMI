import { NavLink } from 'react-router-dom'
import Icon from '../components/ui/Icon'

const FOUNDATION_AREAS = [
  {
    title: 'Цвет',
    to: '/foundations/color',
    description:
      'Цветовая система описывает фирменные цвета, семантические роли, иерархию поверхностей и статусные цвета для интерфейсов университета.',
    meta: 'Палитра · Семантические роли · Поверхности · Обратная связь',
  },
  {
    title: 'Типографика',
    to: '/foundations/typography',
    description:
      'Типографика определяет основную гарнитуру, иерархию текста, токены шкалы и правила чтения в интерфейсе.',
    meta: 'Гарнитура · Шкала · Заголовки · Основной текст',
  },
  {
    title: 'Сетка',
    to: '/foundations/grid',
    description:
      'Сетка задаёт структуру страниц, контейнеры, отступы, адаптивное поведение и пространственный ритм системы.',
    meta: 'Компоновка · Колонки · Отступы · Адаптивность',
  },
  {
    title: 'Токены',
    to: '/foundations/tokens',
    description:
      'Токены связывают базовые решения с кодом и обеспечивают единый источник истины для компонентов.',
    meta: 'Примитивные · Семантические · Алиасы · Реализация',
  },
]

export default function FoundationsPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Основы</h2>
        <p>
          Основы формируют визуальную и системную базу дизайн-системы.
          Этот раздел объединяет цвет, типографику, сетку и токены как набор
          правил, переменных и решений, на которых строятся компоненты и
          интерфейсные сценарии.
        </p>

      </div>

      <div className="ds-section-block">
        <h3>Изучение основ</h3>
        <p>
          Основы разделены на самостоятельные направления, чтобы каждая тема
          раскрывалась глубже и не терялась внутри одной обзорной страницы.
        </p>

        <div className="ds-foundation-nav-grid">
          {FOUNDATION_AREAS.map((item) => (
            <NavLink
              key={item.title}
              to={item.to}
              className="ds-foundation-nav-card"
            >
              <div className="ds-foundation-nav-card__top">
                <span className="ds-foundation-nav-card__eyebrow">
                  Основа
                </span>
                <span
                  className="ds-foundation-nav-card__icon"
                  aria-hidden="true"
                >
                  <Icon name="arrowRight" size={18} />
                </span>
              </div>

              <div className="ds-foundation-nav-card__body">
                <h3 className="ds-foundation-nav-card__title">{item.title}</h3>
                <p className="ds-foundation-nav-card__description">
                  {item.description}
                </p>
              </div>

              <div className="ds-foundation-nav-card__meta">{item.meta}</div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Как работает система</h3>
        <p>
          Основы работают как связующий слой между визуальной идентичностью
          проекта и компонентным уровнем. Они задают правила, которыми затем
          пользуются «Кнопка», «Поле ввода», «Уведомление», «Иконки» и другие
          части системы.
        </p>

        <div className="ds-principles-grid">
          <div className="ds-principle-card">
            <h4>Идентичность</h4>
            <p>
              Цвет и типографика передают характер, академичность и визуальную
              принадлежность университета.
            </p>
          </div>

          <div className="ds-principle-card">
            <h4>Структура</h4>
            <p>
              Сетка и пространственные правила помогают строить устойчивые,
              читаемые и масштабируемые решения по компоновке.
            </p>
          </div>

          <div className="ds-principle-card">
            <h4>Согласованность</h4>
            <p>
              Токены превращают визуальные решения в единый системный язык для
              кода, документации и компонентов.
            </p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Связь с компонентами</h3>
        <p>
          Компоненты не должны самостоятельно определять визуальные значения.
          Они используют основы как источник решений для цвета, текста,
          отступов, границ, поверхностей и состояний.
        </p>

        <div className="ds-demo-card">
          <div className="ds-foundation-flow">
            <div className="ds-foundation-flow__item">
              <span className="ds-foundation-flow__label">Цвет</span>
              <p>Основной, акцентный, успех, предупреждение, поверхности</p>
            </div>

            <div className="ds-foundation-flow__arrow" aria-hidden="true">
              <Icon name="arrowRight" size={18} />
            </div>

            <div className="ds-foundation-flow__item">
              <span className="ds-foundation-flow__label">Токены</span>
              <p>Семантические переменные и карта реализации</p>
            </div>

            <div className="ds-foundation-flow__arrow" aria-hidden="true">
              <Icon name="arrowRight" size={18} />
            </div>

            <div className="ds-foundation-flow__item">
              <span className="ds-foundation-flow__label">Компоненты</span>
              <p>Кнопка, Поле ввода, Бейдж, Уведомление, Иконки</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Начало работы</h3>
        <p>
          Начинать работу с системой лучше с основ, чтобы сразу увидеть
          логику цвета, типографики, компоновки и реализации на основе токенов.
        </p>

        <ol className="ds-guidelines ds-guidelines--ordered">
          <li>Изучите «Цвет», чтобы понять фирменную палитру и семантические роли.</li>
          <li>Откройте «Типографику», чтобы увидеть иерархию и токены шкалы.</li>
          <li>Проверьте «Сетку» перед проектированием экранов с плотной компоновкой.</li>
          <li>Используйте «Токены» как опорный слой для разработки компонентов.</li>
        </ol>
      </div>
    </section>
  )
}
