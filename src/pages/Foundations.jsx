import React from 'react'
import { NavLink } from 'react-router-dom'

const FOUNDATION_AREAS = [
  {
    title: 'Color',
    to: '/foundations/color',
    description:
      'Цветовая система описывает брендовые цвета, semantic roles, surface hierarchy и status colors для интерфейсов университета.',
    meta: 'Palette · Semantic roles · Surfaces · Feedback',
  },
  {
    title: 'Typography',
    to: '/foundations/typography',
    description:
      'Типографика определяет основную гарнитуру, иерархию текста, scale tokens и правила чтения в интерфейсе.',
    meta: 'Font family · Scale · Headings · Body text',
  },
  {
    title: 'Grid',
    to: '/foundations/grid',
    description:
      'Сетка задаёт структуру страниц, контейнеры, отступы, responsive behavior и пространственный ритм системы.',
    meta: 'Layout · Columns · Spacing · Responsiveness',
  },
  {
    title: 'Tokens',
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
        <h2>Foundations</h2>
        <p>
          Foundations формируют визуальную и системную основу дизайн-системы.
          Этот раздел объединяет цвет, типографику, сетку и токены как набор
          правил, переменных и решений, на которых строятся компоненты и
          интерфейсные сценарии.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Foundations</span>
          <span className="ds-meta-item">Status: In progress</span>
          <span className="ds-meta-item">Structure: 4 sections</span>
          <span className="ds-meta-item">Role: Visual and system foundation</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Explore foundations</h3>
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
                  Foundation
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
        <h3>How the system works</h3>
        <p>
          Foundations работают как связующий слой между визуальной идентичностью
          проекта и компонентным уровнем. Они задают правила, которыми затем
          пользуются Button, Input, Notification, Icon и другие части системы.
        </p>

        <div className="ds-principles-grid">
          <div className="ds-principle-card">
            <h4>Identity</h4>
            <p>
              Цвет и типографика передают характер, академичность и визуальную
              принадлежность университета.
            </p>
          </div>

          <div className="ds-principle-card">
            <h4>Structure</h4>
            <p>
              Сетка и пространственные правила помогают строить устойчивые,
              читаемые и масштабируемые layouts.
            </p>
          </div>

          <div className="ds-principle-card">
            <h4>Consistency</h4>
            <p>
              Токены превращают визуальные решения в единый системный язык для
              кода, документации и компонентов.
            </p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Relationship with components</h3>
        <p>
          Компоненты не должны самостоятельно определять визуальные значения.
          Они используют foundations как источник решений для цвета, текста,
          spacing, borders, surfaces и states.
        </p>

        <div className="ds-demo-card">
          <div className="ds-foundation-flow">
            <div className="ds-foundation-flow__item">
              <span className="ds-foundation-flow__label">Color</span>
              <p>Primary, accent, success, warning, surfaces</p>
            </div>

            <div className="ds-foundation-flow__arrow" aria-hidden="true">
              →
            </div>

            <div className="ds-foundation-flow__item">
              <span className="ds-foundation-flow__label">Tokens</span>
              <p>Semantic variables and implementation mapping</p>
            </div>

            <div className="ds-foundation-flow__arrow" aria-hidden="true">
              →
            </div>

            <div className="ds-foundation-flow__item">
              <span className="ds-foundation-flow__label">Components</span>
              <p>Button, Input, Badge, Notification, Icon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Getting started</h3>
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

      <div className="ds-section-block">
        <h3>System status</h3>
        <p>
          Foundations уже собраны как самостоятельный documentation block и
          постепенно переходят от обзорного формата к более зрелой структуре
          с отдельными pages и расширенным наполнением.
        </p>

        <div className="ds-status-inline-list">
          <span className="ds-status-inline-item ds-status-inline-item--ready">
            Color page available
          </span>
          <span className="ds-status-inline-item ds-status-inline-item--ready">
            Typography page available
          </span>
          <span className="ds-status-inline-item ds-status-inline-item--ready">
            Grid page available
          </span>
          <span className="ds-status-inline-item ds-status-inline-item--ready">
            Tokens page available
          </span>
        </div>
      </div>
    </section>
  )
}