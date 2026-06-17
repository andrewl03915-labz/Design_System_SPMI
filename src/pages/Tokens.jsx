const TOKEN_LAYERS = [
  {
    title: 'Примитивные токены',
    token: '--green-700 / --space-4 / --radius-md',
    description:
      'Примитивные токены содержат базовые значения: цвета палитры, размеры, радиусы, тени и шаги scale.',
  },
  {
    title: 'Семантические токены',
    token: '--color-primary / --color-text / --color-border-subtle',
    description:
      'Семантические токены описывают роль значения в интерфейсе и связывают foundations с практическим использованием.',
  },
  {
    title: 'Использование в компонентах',
    token: 'Button → background / Input → border / Notification → feedback',
    description:
      'Компоненты используют semantic tokens вместо локальных чисел и случайных значений, чтобы оставаться согласованными.',
  },
]

export default function TokensPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Токены</h2>
        <p>
          Токены — это именованные значения, которые фиксируют визуальные решения
          системы и делают их повторяемыми в дизайне и коде. Они связывают foundations
          с компонентами и помогают поддерживать единый источник истины для интерфейса.
        </p>


      </div>

      <div className="ds-section-block">
        <h3>Почему токены важны</h3>
        <p>
          Без токенов интерфейс быстро начинает зависеть от hardcoded values:
          случайных hex-кодов, разрозненных отступов и локальных font-size решений.
          Tokens превращают эти значения в системный язык, которым одинаково
          пользуются дизайнеры и разработчики.
        </p>

        <div className="ds-demo-card">
          <div className="ds-token-summary-grid">
            <div className="ds-token-summary-card">
              <h4>Согласованность</h4>
              <p>
                Один и тот же token используется в разных местах системы и делает
                интерфейс визуально связным.
              </p>
            </div>

            <div className="ds-token-summary-card">
              <h4>Масштабируемость</h4>
              <p>
                Изменение token value обновляет сразу все связанные паттерны,
                не требуя ручной правки каждого компонента.
              </p>
            </div>

            <div className="ds-token-summary-card">
              <h4>Общий язык</h4>
              <p>
                Tokens создают общий словарь между foundations, component pages и кодовой базой.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Слои токенов</h3>
        <p>
          Система токенов строится послойно: от базовых значений к смысловым ролям,
          а затем к использованию внутри компонентов.
        </p>

        <div className="ds-token-layer-list">
          {TOKEN_LAYERS.map((item) => (
            <div key={item.title} className="ds-token-layer-card">
              <div className="ds-token-layer-card__top">
                <h4 className="ds-token-layer-card__title">{item.title}</h4>
                <span className="ds-token-layer-card__token">{item.token}</span>
              </div>
              <p className="ds-token-layer-card__description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Поток токенов</h3>
        <p>
          Хорошая token architecture показывает, как foundation values становятся
          рабочими решениями в интерфейсе.
        </p>

        <div className="ds-demo-card">
          <div className="ds-token-flow">
            <div className="ds-token-flow__item">
              <span className="ds-token-flow__label">Примитивный слой</span>
              <p>Базовая палитра, шкала отступов, значения радиусов, размеры текста</p>
            </div>

            <div className="ds-token-flow__arrow" aria-hidden="true">
              →
            </div>

            <div className="ds-token-flow__item">
              <span className="ds-token-flow__label">Семантический слой</span>
              <p>Основное действие, фон, текст, приглушённый текст, успех, предупреждение</p>
            </div>

            <div className="ds-token-flow__arrow" aria-hidden="true">
              →
            </div>

            <div className="ds-token-flow__item">
              <span className="ds-token-flow__label">Компонентный слой</span>
              <p>Button, Input, Badge, Notification и будущие UI-паттерны</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>
          Ниже показаны типичные связи между foundation values, semantic mapping
          и использованием в компонентной системе.
        </p>

        <div className="ds-token-example-grid">
          <div className="ds-token-example-card">
            <span className="ds-token-example-card__eyebrow">Цвет</span>
            <h4 className="ds-token-example-card__title">От primitive к semantic</h4>
            <p className="ds-token-example-card__code">
              --green-700 → --color-primary
            </p>
            <p className="ds-token-example-card__text">
              Базовое brand value становится semantic token для primary actions и links.
            </p>
          </div>

          <div className="ds-token-example-card">
            <span className="ds-token-example-card__eyebrow">Отступы</span>
            <h4 className="ds-token-example-card__title">От шкалы к layout</h4>
            <p className="ds-token-example-card__code">
              --space-4 → card padding / field gap
            </p>
            <p className="ds-token-example-card__text">
              Один spacing token повторяется в layout и помогает удерживать единый ритм.
            </p>
          </div>

          <div className="ds-token-example-card">
            <span className="ds-token-example-card__eyebrow">Типографика</span>
            <h4 className="ds-token-example-card__title">Связь роли текста</h4>
            <p className="ds-token-example-card__code">
              --text-base → body content
            </p>
            <p className="ds-token-example-card__text">
              Типографический token задаёт стандартный размер для основного интерфейсного текста.
            </p>
          </div>

          <div className="ds-token-example-card">
            <span className="ds-token-example-card__eyebrow">Компоненты</span>
            <h4 className="ds-token-example-card__title">Семантика в действии</h4>
            <p className="ds-token-example-card__code">
              Button → background: var(--color-primary)
            </p>
            <p className="ds-token-example-card__text">
              Компонент использует semantic role, а не raw color value.
            </p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте tokens вместо hardcoded values в коде и макетах.</li>
          <li>Выбирайте semantic token по смыслу, а не по визуальному совпадению.</li>
          <li>Храните raw values в primitive layer, а не внутри компонентов.</li>
          <li>Компоненты должны ссылаться на semantic layer, а не на palette напрямую.</li>
          <li>Нейминг токенов должен быть последовательным, понятным и масштабируемым.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-card">
              <div className="ds-token-guidance-card">
                <p className="ds-token-guidance-card__code">
                  color: var(--color-text-muted);
                </p>
                <p className="ds-token-guidance-card__text">
                  Используйте token, который описывает роль текста в интерфейсе.
                </p>
              </div>
            </div>

            <ul className="ds-guidelines">
              <li>Сначала определяйте meaning, затем выбирайте token.</li>
              <li>Используйте tokens как shared language между design и code.</li>
              <li>Документируйте связь primitive, semantic и component layers.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-card">
              <div className="ds-token-guidance-card ds-token-guidance-card--bad">
                <p className="ds-token-guidance-card__code ds-token-guidance-card__code--bad">
                  color: #6b7280;
                </p>
                <p className="ds-token-guidance-card__text ds-token-guidance-card__text--bad">
                  Не используйте локальные значения только потому, что они визуально подходят.
                </p>
              </div>
            </div>

            <ul className="ds-guidelines">
              <li>Не вставляйте hex values прямо в компоненты.</li>
              <li>Не смешивайте primitive и semantic naming в одном уровне.</li>
              <li>Не выбирайте token только по похожему цвету или размеру.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          В MVP token architecture строится как минимум из двух обязательных слоёв:
          primitive tokens для базовых значений и semantic tokens для ролей интерфейса.
          Компоненты должны использовать semantic tokens как основной integration layer.
        </div>
      </div>
    </section>
  )
}