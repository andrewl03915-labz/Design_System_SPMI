import React from 'react'
import { NavLink } from 'react-router-dom'

const FOUNDATION_AREAS = [
  {
    title: 'Цвет',
    to: '/foundations/color',
    description:
      'Цветовая система описывает фирменные цвета, семантические роли, иерархию поверхностей и статусные цвета для интерфейсов университета.',
    meta: 'Palette · Semantic roles · Surfaces · Feedback',
  },
  {
    title: 'Типографика',
    to: '/foundations/typography',
    description:
      'Типографика определяет основную гарнитуру, иерархию текста, scale tokens и правила чтения в интерфейсе.',
    meta: 'Font family · Scale · Headings · Body text',
  },
  {
    title: 'Сетка',
    to: '/foundations/grid',
    description:
      'Сетка задаёт структуру страниц, контейнеры, отступы, responsive behavior и пространственный ритм системы.',
    meta: 'Layout · Columns · Spacing · Responsiveness',
  },
  {
    title: 'Токены',
    to: '/foundations/tokens',
    description:
      'Токены связывают foundation decisions с кодом и обеспечивают единый source of truth для компонентов.',
    meta: 'Primitive · Semantic · Aliases · Implementation',
  },
]

export default function FoundationsPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Основы</h2>
        <p>
          Foundations формируют визуальную и системную основу дизайн-системы.
          Этот раздел объединяет цвет, типографику, сетку и токены как набор
          правил, переменных и решений, на которых строятся компоненты и
          интерфейсные сценарии.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Категория: Foundations</span>
          <span className="ds-meta-item">Статус: В разработке</span>
          <span className="ds-meta-item">Структура: 4 раздела</span>
          <span className="ds-meta-item">Роль: Визуальная и системная основа</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Изучение основ</h3>
        <p>
          Foundations разделены на самостоятельные направления, чтобы каждая тема
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
                  →
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
          Foundations работают как связующий слой между визуальной идентичностью
          проекта и компонентным уровнем. Они задают правила, которыми затем
          пользуются Button, Input, Notification, Icon и другие части системы.
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
              читаемые и масштабируемые layout-решения.
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
          Они используют foundations как источник решений для цвета, текста,
          spacing, borders, surfaces и states.
        </p>

        <div className="ds-demo-card">
          <div className="ds-foundation-flow">
            <div className="ds-foundation-flow__item">
              <span className="ds-foundation-flow__label">Цвет</span>
              <p>Primary, accent, success, warning, surfaces</p>
            </div>

            <div className="ds-foundation-flow__arrow" aria-hidden="true">
              →
            </div>

            <div className="ds-foundation-flow__item">
              <span className="ds-foundation-flow__label">Токены</span>
              <p>Семантические переменные и карта реализации</p>
            </div>

            <div className="ds-foundation-flow__arrow" aria-hidden="true">
              →
            </div>

            <div className="ds-foundation-flow__item">
              <span className="ds-foundation-flow__label">Компоненты</span>
              <p>Button, Input, Badge, Notification, Icon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Начало работы</h3>
        <p>
          Начинать работу с системой лучше с foundations, чтобы сразу увидеть
          логику цвета, типографики, layout и token-based implementation.
        </p>

        <ol className="ds-guidelines ds-guidelines--ordered">
          <li>Изучите Color, чтобы понять brand palette и semantic roles.</li>
          <li>Откройте Typography, чтобы увидеть hierarchy и scale tokens.</li>
          <li>Проверьте Grid перед проектированием layout-heavy экранов.</li>
          <li>Используйте Tokens как reference layer для разработки компонентов.</li>
        </ol>
      </div>

      
    </section>
  )
}