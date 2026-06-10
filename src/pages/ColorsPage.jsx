import React from 'react'

const PRIMITIVE_GROUPS = [
  {
    title: 'Surfaces',
    items: [
      { token: '--color-white', value: '#ffffff', name: 'White' },
      { token: '--color-bg-base', value: '#f6f7f5', name: 'Background base' },
      { token: '--color-surface-base', value: '#ffffff', name: 'Surface base' },
      { token: '--color-surface-alt-base', value: '#eef1ec', name: 'Surface alt base' },
    ],
  },
  {
    title: 'Text',
    items: [
      { token: '--color-text-base', value: '#1f2933', name: 'Text base' },
      { token: '--color-text-muted-base', value: '#5c6670', name: 'Text muted base' },
    ],
  },
  {
    title: 'Borders',
    items: [
      { token: '--color-border-subtle-base', value: '#d4d9de', name: 'Border subtle base' },
      { token: '--color-border-strong-base', value: '#a7b0ba', name: 'Border strong base' },
    ],
  },
  {
    title: 'Brand',
    items: [
      { token: '--color-primary-base', value: '#125735', name: 'Primary green' },
      { token: '--color-primary-hover-base', value: '#0d4027', name: 'Primary hover' },
      { token: '--color-primary-active-base', value: '#092b1a', name: 'Primary active' },
      { token: '--color-primary-soft-base', value: '#e4f2e8', name: 'Primary soft' },
      { token: '--color-gold-base', value: '#c8962a', name: 'Gold' },
      { token: '--color-gold-soft-base', value: '#f9f0d9', name: 'Gold soft' },
    ],
  },
  {
    title: 'Status',
    items: [
      { token: '--color-success-base', value: '#1d7a3a', name: 'Success' },
      { token: '--color-success-bg-base', value: '#e3f4e8', name: 'Success background' },
      { token: '--color-warning-base', value: '#b7791f', name: 'Warning' },
      { token: '--color-warning-bg-base', value: '#fff4e0', name: 'Warning background' },
      { token: '--color-error-base', value: '#b3261e', name: 'Error' },
      { token: '--color-error-bg-base', value: '#fce7e7', name: 'Error background' },
      { token: '--color-info-base', value: '#2563a6', name: 'Info' },
      { token: '--color-info-bg-base', value: '#e6f0fb', name: 'Info background' },
    ],
  },
]

const SEMANTIC_TOKENS = [
  { token: '--color-bg', role: 'Page background', mapsTo: '--color-bg-base' },
  { token: '--color-surface', role: 'Card and panel surface', mapsTo: '--color-surface-base' },
  { token: '--color-surface-alt', role: 'Alternative neutral surface', mapsTo: '--color-surface-alt-base' },
  { token: '--color-text', role: 'Primary text', mapsTo: '--color-text-base' },
  { token: '--color-text-muted', role: 'Secondary text', mapsTo: '--color-text-muted-base' },
  { token: '--color-border-subtle', role: 'Soft borders and dividers', mapsTo: '--color-border-subtle-base' },
  { token: '--color-border-strong', role: 'Higher-emphasis borders', mapsTo: '--color-border-strong-base' },
  { token: '--color-primary', role: 'Primary brand color', mapsTo: '--color-primary-base' },
  { token: '--color-primary-hover', role: 'Primary hover state', mapsTo: '--color-primary-hover-base' },
  { token: '--color-primary-active', role: 'Primary active state', mapsTo: '--color-primary-active-base' },
  { token: '--color-primary-soft', role: 'Soft primary-tinted background', mapsTo: '--color-primary-soft-base' },
  { token: '--color-accent-gold', role: 'Brand accent gold', mapsTo: '--color-gold-base' },
  { token: '--color-accent-gold-soft', role: 'Soft gold background', mapsTo: '--color-gold-soft-base' },
  { token: '--color-success', role: 'Success foreground', mapsTo: '--color-success-base' },
  { token: '--color-success-bg', role: 'Success background', mapsTo: '--color-success-bg-base' },
  { token: '--color-warning', role: 'Warning foreground', mapsTo: '--color-warning-base' },
  { token: '--color-warning-bg', role: 'Warning background', mapsTo: '--color-warning-bg-base' },
  { token: '--color-error', role: 'Error foreground', mapsTo: '--color-error-base' },
  { token: '--color-error-bg', role: 'Error background', mapsTo: '--color-error-bg-base' },
  { token: '--color-info', role: 'Info foreground', mapsTo: '--color-info-base' },
  { token: '--color-info-bg', role: 'Info background', mapsTo: '--color-info-bg-base' },
  { token: '--color-neutral-bg', role: 'Neutral helper background', mapsTo: '--color-surface-alt-base' },
  { token: '--color-accent', role: 'Compatibility alias', mapsTo: '--color-accent-gold' },
]

export default function ColorsPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Color</h2>
        <p>
          Цветовая система определяет визуальную идентичность, контраст,
          иерархию и состояния интерфейса. В проекте используются primitive и
          semantic color tokens, чтобы связать брендовые решения с реальными
          сценариями применения в интерфейсе.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Foundations</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Model: Primitive + Semantic tokens</span>
          <span className="ds-meta-item">Theme: Green / Gold</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Primitive palette</h3>
        <p>
          Primitive tokens — это базовые цветовые значения системы. Они не
          описывают конкретный UI-сценарий, а задают исходные цвета, на которые
          затем ссылаются semantic tokens.
        </p>

        <div className="ds-foundation-stack">
          {PRIMITIVE_GROUPS.map((group) => (
            <div className="ds-foundation-group" key={group.title}>
              <div className="ds-foundation-group__header">
                <h4>{group.title}</h4>
              </div>

              <div className="ds-color-grid">
                {group.items.map((item) => (
                  <div className="ds-color-card" key={item.token}>
                    <div
                      className="ds-color-swatch"
                      style={{ backgroundColor: `var(${item.token})` }}
                      aria-hidden="true"
                    />
                    <div className="ds-color-card__content">
                      <p className="ds-color-card__name">{item.name}</p>
                      <p className="ds-color-card__token">{item.token}</p>
                      <p className="ds-color-card__value">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Semantic tokens</h3>
        <p>
          Semantic tokens определяют, как цвет используется в интерфейсе: для
          текста, поверхностей, границ, бренда и статусов. Именно semantic слой
          должен использоваться в компонентах вместо прямых primitive values.
        </p>

        <div className="ds-demo-column">
          {SEMANTIC_TOKENS.map((item) => (
            <div className="ds-demo-card ds-token-map-row" key={item.token}>
              <div
                className="ds-token-map-row__swatch"
                style={{
                  backgroundColor:
                    item.token === '--color-text' || item.token === '--color-text-muted'
                      ? 'var(--color-surface-alt)'
                      : `var(${item.token})`,
                }}
                aria-hidden="true"
              />
              <div className="ds-token-map-row__content">
                <p className="ds-token-map-row__title">{item.token}</p>
                <p className="ds-token-map-row__role">{item.role}</p>
                <p className="ds-token-map-row__meta">Maps to {item.mapsTo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Brand accents</h3>
        <p>
          Зелёный является основным фирменным цветом системы и отвечает за
          primary actions и active emphasis. Золотой используется как
          поддерживающий акцент и не должен конкурировать с primary action color.
        </p>

        <div className="ds-brand-pair">
          <div className="ds-brand-pair__item ds-brand-pair__item--green">
            <p className="ds-brand-pair__title">Primary green</p>
            <p className="ds-brand-pair__token">--color-primary</p>
          </div>

          <div className="ds-brand-pair__item ds-brand-pair__item--gold">
            <p className="ds-brand-pair__title">Accent gold</p>
            <p className="ds-brand-pair__token">--color-accent-gold</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Status colors</h3>
        <p>
          Success, warning, error и info образуют отдельный semantic слой для
          notification patterns, validation, alerts и system feedback.
        </p>

        <div className="ds-status-grid">
          <div className="ds-status-card ds-status-card--success">
            <p className="ds-status-card__title">Success</p>
            <p className="ds-status-card__token">--color-success / --color-success-bg</p>
          </div>

          <div className="ds-status-card ds-status-card--warning">
            <p className="ds-status-card__title">Warning</p>
            <p className="ds-status-card__token">--color-warning / --color-warning-bg</p>
          </div>

          <div className="ds-status-card ds-status-card--error">
            <p className="ds-status-card__title">Error</p>
            <p className="ds-status-card__token">--color-error / --color-error-bg</p>
          </div>

          <div className="ds-status-card ds-status-card--info">
            <p className="ds-status-card__title">Info</p>
            <p className="ds-status-card__token">--color-info / --color-info-bg</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Surfaces and text</h3>
        <p>
          Нейтральные поверхности и текстовые цвета обеспечивают читаемость,
          глубину и стабильный фон для брендовых акцентов. Именно они должны
          занимать большую часть интерфейса.
        </p>

        <div className="ds-surface-layers">
          <div className="ds-surface-layers__item ds-surface-layers__item--bg">
            <p>Background</p>
            <span>--color-bg</span>
          </div>
          <div className="ds-surface-layers__item ds-surface-layers__item--surface">
            <p>Surface</p>
            <span>--color-surface</span>
          </div>
          <div className="ds-surface-layers__item ds-surface-layers__item--alt">
            <p>Surface alt</p>
            <span>--color-surface-alt</span>
          </div>
        </div>

        <div className="ds-text-tone-list">
          <div className="ds-text-tone-list__item">
            <p className="ds-text-sample-primary">Primary text — --color-text</p>
          </div>
          <div className="ds-text-tone-list__item">
            <p className="ds-text-sample-muted">Secondary text — --color-text-muted</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте semantic tokens в компонентах вместо прямых base values.</li>
          <li>Primary green должен оставаться основным action color системы.</li>
          <li>Accent gold используйте дозированно, как дополнительный фирменный акцент.</li>
          <li>Большая часть интерфейса должна строиться на neutral surfaces и text colors.</li>
          <li>State colors применяйте только по смыслу: success, warning, error и info не должны быть декоративными.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компоненты должны использовать semantic color tokens, например
          <code> --color-primary </code>, <code> --color-text </code>,
          <code> --color-surface </code> и <code> --color-success </code>.
          Primitive tokens остаются foundation layer и не должны напрямую
          использоваться в компонентном слое без причины.
        </div>
      </div>
    </section>
  )
}