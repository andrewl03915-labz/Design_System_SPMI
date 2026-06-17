const PRIMITIVE_GROUPS = [
  {
    title: 'Поверхности',
    items: [
      { token: '--color-white', value: '#ffffff', name: 'Белый' },
      { token: '--color-bg-base', value: '#f6f7f5', name: 'Базовый фон' },
      { token: '--color-surface-base', value: '#ffffff', name: 'Базовая поверхность' },
      { token: '--color-surface-alt-base', value: '#eef1ec', name: 'Альтернативная базовая поверхность' },
    ],
  },
  {
    title: 'Текст',
    items: [
      { token: '--color-text-base', value: '#1f2933', name: 'Базовый текст' },
      { token: '--color-text-muted-base', value: '#5c6670', name: 'Приглушённый базовый текст' },
    ],
  },
  {
    title: 'Границы',
    items: [
      { token: '--color-border-subtle-base', value: '#d4d9de', name: 'Базовая мягкая граница' },
      { token: '--color-border-strong-base', value: '#a7b0ba', name: 'Базовая акцентная граница' },
    ],
  },
  {
    title: 'Бренд',
    items: [
      { token: '--color-primary-base', value: '#125735', name: 'Основной зелёный' },
      { token: '--color-primary-hover-base', value: '#0d4027', name: 'Основной hover' },
      { token: '--color-primary-active-base', value: '#092b1a', name: 'Основной active' },
      { token: '--color-primary-soft-base', value: '#e4f2e8', name: 'Мягкий основной' },
      { token: '--color-gold-base', value: '#c8962a', name: 'Золотой' },
      { token: '--color-gold-soft-base', value: '#f9f0d9', name: 'Мягкий золотой' },
    ],
  },
  {
    title: 'Статусы',
    items: [
      { token: '--color-success-base', value: '#1d7a3a', name: 'Успех' },
      { token: '--color-success-bg-base', value: '#e3f4e8', name: 'Фон успеха' },
      { token: '--color-warning-base', value: '#b7791f', name: 'Предупреждение' },
      { token: '--color-warning-bg-base', value: '#fff4e0', name: 'Фон предупреждения' },
      { token: '--color-error-base', value: '#b3261e', name: 'Ошибка' },
      { token: '--color-error-bg-base', value: '#fce7e7', name: 'Фон ошибки' },
      { token: '--color-info-base', value: '#2563a6', name: 'Информация' },
      { token: '--color-info-bg-base', value: '#e6f0fb', name: 'Информационный фон' },
    ],
  },
]

const SEMANTIC_TOKENS = [
  { token: '--color-bg', role: 'Фон страницы', mapsTo: '--color-bg-base' },
  { token: '--color-surface', role: 'Поверхность карточек и панелей', mapsTo: '--color-surface-base' },
  { token: '--color-surface-alt', role: 'Альтернативная нейтральная поверхность', mapsTo: '--color-surface-alt-base' },
  { token: '--color-text', role: 'Основной текст', mapsTo: '--color-text-base' },
  { token: '--color-text-muted', role: 'Вторичный текст', mapsTo: '--color-text-muted-base' },
  { token: '--color-border-subtle', role: 'Мягкие границы и разделители', mapsTo: '--color-border-subtle-base' },
  { token: '--color-border-strong', role: 'Границы с повышенным акцентом', mapsTo: '--color-border-strong-base' },
  { token: '--color-primary', role: 'Основной цвет бренда', mapsTo: '--color-primary-base' },
  { token: '--color-primary-hover', role: 'Состояние hover для основного цвета', mapsTo: '--color-primary-hover-base' },
  { token: '--color-primary-active', role: 'Состояние active для основного цвета', mapsTo: '--color-primary-active-base' },
  { token: '--color-primary-soft', role: 'Мягкий фон с оттенком основного цвета', mapsTo: '--color-primary-soft-base' },
  { token: '--color-accent-gold', role: 'Золотой акцент бренда', mapsTo: '--color-gold-base' },
  { token: '--color-accent-gold-soft', role: 'Мягкий золотой фон', mapsTo: '--color-gold-soft-base' },
  { token: '--color-success', role: 'Цвет текста успеха', mapsTo: '--color-success-base' },
  { token: '--color-success-bg', role: 'Фон успеха', mapsTo: '--color-success-bg-base' },
  { token: '--color-warning', role: 'Цвет текста предупреждения', mapsTo: '--color-warning-base' },
  { token: '--color-warning-bg', role: 'Фон предупреждения', mapsTo: '--color-warning-bg-base' },
  { token: '--color-error', role: 'Цвет текста ошибки', mapsTo: '--color-error-base' },
  { token: '--color-error-bg', role: 'Фон ошибки', mapsTo: '--color-error-bg-base' },
  { token: '--color-info', role: 'Цвет информационного текста', mapsTo: '--color-info-base' },
  { token: '--color-info-bg', role: 'Информационный фон', mapsTo: '--color-info-bg-base' },
  { token: '--color-neutral-bg', role: 'Нейтральный вспомогательный фон', mapsTo: '--color-surface-alt-base' },
  { token: '--color-accent', role: 'Совместимый alias', mapsTo: '--color-accent-gold' },
]

export default function ColorsPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Цвет</h2>
        <p>
          Цветовая система определяет визуальную идентичность, контраст,
          иерархию и состояния интерфейса. В проекте используются primitive и
          semantic color tokens, чтобы связать брендовые решения с реальными
          сценариями применения в интерфейсе.
        </p>


      </div>

      <div className="ds-section-block">
        <h3>Базовая палитра</h3>
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
        <h3>Семантические токены</h3>
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
                <p className="ds-token-map-row__meta">Связан с {item.mapsTo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Брендовые акценты</h3>
        <p>
          Зелёный является основным фирменным цветом системы и отвечает за
          primary actions и active emphasis. Золотой используется как
          поддерживающий акцент и не должен конкурировать с primary action color.
        </p>

        <div className="ds-brand-pair">
          <div className="ds-brand-pair__item ds-brand-pair__item--green">
            <p className="ds-brand-pair__title">Основной зелёный</p>
            <p className="ds-brand-pair__token">--color-primary</p>
          </div>

          <div className="ds-brand-pair__item ds-brand-pair__item--gold">
            <p className="ds-brand-pair__title">Акцентный золотой</p>
            <p className="ds-brand-pair__token">--color-accent-gold</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Статусные цвета</h3>
        <p>
          Success, warning, error и info образуют отдельный semantic слой для
          notification patterns, validation, alerts и system feedback.
        </p>

        <div className="ds-status-grid">
          <div className="ds-status-card ds-status-card--success">
            <p className="ds-status-card__title">Успех</p>
            <p className="ds-status-card__token">--color-success / --color-success-bg</p>
          </div>

          <div className="ds-status-card ds-status-card--warning">
            <p className="ds-status-card__title">Предупреждение</p>
            <p className="ds-status-card__token">--color-warning / --color-warning-bg</p>
          </div>

          <div className="ds-status-card ds-status-card--error">
            <p className="ds-status-card__title">Ошибка</p>
            <p className="ds-status-card__token">--color-error / --color-error-bg</p>
          </div>

          <div className="ds-status-card ds-status-card--info">
            <p className="ds-status-card__title">Информация</p>
            <p className="ds-status-card__token">--color-info / --color-info-bg</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Поверхности и текст</h3>
        <p>
          Нейтральные поверхности и текстовые цвета обеспечивают читаемость,
          глубину и стабильный фон для брендовых акцентов. Именно они должны
          занимать большую часть интерфейса.
        </p>

        <div className="ds-surface-layers">
          <div className="ds-surface-layers__item ds-surface-layers__item--bg">
            <p>Фон</p>
            <span>--color-bg</span>
          </div>
          <div className="ds-surface-layers__item ds-surface-layers__item--surface">
            <p>Поверхность</p>
            <span>--color-surface</span>
          </div>
          <div className="ds-surface-layers__item ds-surface-layers__item--alt">
            <p>Альтернативная поверхность</p>
            <span>--color-surface-alt</span>
          </div>
        </div>

        <div className="ds-text-tone-list">
          <div className="ds-text-tone-list__item">
            <p className="ds-text-sample-primary">Основной текст — --color-text</p>
          </div>
          <div className="ds-text-tone-list__item">
            <p className="ds-text-sample-muted">Вторичный текст — --color-text-muted</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте semantic tokens в компонентах вместо прямых base values.</li>
          <li>Primary green должен оставаться основным action color системы.</li>
          <li>Accent gold используйте дозированно, как дополнительный фирменный акцент.</li>
          <li>Большая часть интерфейса должна строиться на neutral surfaces и text colors.</li>
          <li>State colors применяйте только по смыслу: success, warning, error и info не должны быть декоративными.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
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