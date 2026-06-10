import React from 'react'
import { NavLink } from 'react-router-dom'

const HOME_SECTIONS = [
  {
    title: 'Foundations',
    description:
      'Базовый слой системы: foundations landing page, color, typography, grid и tokens.',
    meta: 'Foundations · Color · Typography · Grid · Tokens',
    to: '/foundations',
  },
  {
    title: 'Actions & Forms',
    description:
      'Компоненты для пользовательских действий и ввода данных: button, input, textarea, select, checkbox, radio и file uploader.',
    meta: 'Button · Input · Textarea · Select · Checkbox · Radio · File Uploader',
    to: '/components/button',
  },
  {
    title: 'Content & Layout',
    description:
      'Компоненты для представления информации, структуры контента и layout patterns внутри интерфейса.',
    meta: 'Badge · Card · Table · Tabs · Accordion',
    to: '/components/badge',
  },
  {
    title: 'Navigation',
    description:
      'Навигационные элементы, которые помогают пользователю понимать своё положение в системе и перемещаться между разделами.',
    meta: 'Breadcrumbs · Pagination · Search',
    to: '/components/breadcrumbs',
  },
  {
    title: 'Feedback & Overlays',
    description:
      'Компоненты для системной обратной связи, модальных сценариев и вспомогательных interactive layers.',
    meta: 'Notification · Modal · Tooltip',
    to: '/components/notification',
  },
  {
    title: 'Assets',
    description:
      'Визуальные системные ресурсы и базовые графические элементы, используемые во всей библиотеке.',
    meta: 'Icon',
    to: '/components/icon',
  },
]

const QUICK_PATHS = [
  {
    title: 'Open Foundations',
    description:
      'Начните с foundations, чтобы увидеть базовые правила цвета, типографики, сетки и tokens.',
    to: '/foundations',
  },
  {
    title: 'Open Button',
    description:
      'Перейдите к Button как к базовому action component внутри группы Actions & Forms.',
    to: '/components/button',
  },
  {
    title: 'Open Notification',
    description:
      'Откройте Notification как пример feedback component внутри группы Feedback & Overlays.',
    to: '/components/notification',
  },
  {
    title: 'Open Icon',
    description:
      'Перейдите к Icon, чтобы посмотреть системный asset layer и его роль в интерфейсе.',
    to: '/components/icon',
  },
]

const SYSTEM_STATUS = [
  'Foundations вынесены в самостоятельный navigation block.',
  'Компоненты организованы по смысловым группам, а не по случайному списку.',
  'Home синхронизирован с текущей sidebar navigation structure.',
  'Documentation layer постепенно обновляется до более зрелого состояния.',
]

export default function Home() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Home</h2>
        <p>
          Это стартовая страница живой документации дизайн-системы Mining
          University. Она повторяет структуру sidebar navigation и помогает
          быстро перейти от overview к foundations, component groups и
          конкретным страницам системы.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Documentation type: Living system</span>
          <span className="ds-meta-item">Navigation model: Sidebar-driven</span>
          <span className="ds-meta-item">Structure: Foundations + component groups</span>
          <span className="ds-meta-item">Status: In progress</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Documentation structure</h3>
        <p>
          Документация организована по тем же разделам, которые пользователь
          видит в sidebar. Это делает Home не отдельной абстрактной страницей,
          а обзорной точкой входа в реальную структуру системы.
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
                  →
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
        <h3>How the system is organised</h3>
        <p>
          Сначала документация задаёт foundations как визуальный и системный
          слой, а затем раскрывает component library по функциональным группам.
          Такой порядок помогает читать систему последовательно: от базовых
          решений к интерфейсным building blocks.
        </p>

        <div className="ds-principles-grid">
          <div className="ds-principle-card">
            <h4>Foundational layer</h4>
            <p>
              Color, typography, grid и tokens задают единый visual language и
              implementation basis для всей системы.
            </p>
          </div>

          <div className="ds-principle-card">
            <h4>Functional grouping</h4>
            <p>
              Компоненты сгруппированы по назначению: формы, контент, навигация,
              feedback patterns и assets.
            </p>
          </div>

          <div className="ds-principle-card">
            <h4>Scalable navigation</h4>
            <p>
              Такая структура позволяет расширять библиотеку без потери
              логики, читаемости и навигационной целостности.
            </p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
  <h3>Quick paths</h3>
  <p>
    Ниже собраны прямые входы в ключевые точки системы. Они соответствуют
    реальным route paths и помогают начать работу без лишнего поиска по
    sidebar.
  </p>

  <div className="ds-home-quickpaths-grid">
    {QUICK_PATHS.map((item) => (
      <NavLink key={item.title} to={item.to} className="ds-home-quickpath-card">
        <div className="ds-home-quickpath-card__top">
          <h4 className="ds-home-quickpath-card__title">{item.title}</h4>
          <span className="ds-home-quickpath-card__icon" aria-hidden="true">
            →
          </span>
        </div>

        <p className="ds-home-quickpath-card__description">
          {item.description}
        </p>
      </NavLink>
    ))}
  </div>
</div>

      <div className="ds-section-block">
        <h3>System status</h3>
        <p>
          Documentation layer уже заметно вырос по сравнению с ранним MVP.
          Сейчас основная задача — поддерживать согласованность между sidebar,
          page structure, component documentation и foundations language.
        </p>

        <div className="ds-home-status-grid">
          {SYSTEM_STATUS.map((item) => (
            <div key={item} className="ds-home-status-card">
              <span className="ds-home-status-card__dot" aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}