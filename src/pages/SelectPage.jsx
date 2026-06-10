import React from 'react'
import Select from '../components/ui/Select'

const facultyOptions = [
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'it', label: 'Information Technology' },
  { value: 'management', label: 'Management' },
]

export default function SelectPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Select</h2>
        <p>
          Select используется для выбора одного значения из заранее заданного списка.
          Компонент особенно полезен в формах, фильтрах и административных интерфейсах,
          где важно обеспечить быстрый и предсказуемый выбор.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Form</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, radius, text, border</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Structure</h3>
        <p>
          Базовая структура select состоит из label, поля выбора, placeholder
          или selected-value, а также helper- или error-text.
        </p>

        <div className="ds-demo-card">
          <div className="ds-demo-column">
            <Select
              label="Faculty"
              placeholder="Выберите факультет"
              helperText="Поле позволяет выбрать один вариант из списка"
              defaultValue=""
              options={facultyOptions}
            />
          </div>

          <ul className="ds-guidelines">
            <li>Label объясняет, какой именно выбор требуется от пользователя.</li>
            <li>Placeholder помогает задать контекст, если значение ещё не выбрано.</li>
            <li>Helper text полезен, когда нужно уточнить назначение или ограничение поля.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Examples</h3>
        <p>Ниже показаны базовые сценарии использования select в интерфейсе.</p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <h3>Empty</h3>
            <Select
              label="Programme"
              placeholder="Выберите программу"
              defaultValue=""
              options={[
                { value: 'bachelor', label: 'Bachelor' },
                { value: 'master', label: 'Master' },
                { value: 'phd', label: 'PhD' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Selected</h3>
            <Select
              label="Semester"
              value="spring"
              onChange={() => {}}
              options={[
                { value: 'autumn', label: 'Autumn semester' },
                { value: 'spring', label: 'Spring semester' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <Select
              label="Campus"
              placeholder="Недоступно"
              disabled
              defaultValue=""
              options={[
                { value: 'spb', label: 'Saint Petersburg' },
                { value: 'msk', label: 'Moscow' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Состояния select помогают показать активное взаимодействие, ошибку выбора
          или временную недоступность контрола.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Default</h3>
            <Select
              label="Study level"
              placeholder="Выберите уровень"
              defaultValue=""
              options={[
                { value: 'bachelor', label: 'Bachelor' },
                { value: 'master', label: 'Master' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Focus</h3>
            <Select
              label="Department"
              placeholder="Выберите кафедру"
              defaultValue=""
              className="is-focus-demo"
              options={[
                { value: 'ux', label: 'UX / UI' },
                { value: 'product', label: 'Product Design' },
                { value: 'research', label: 'Design Research' },
              ]}
            />
            <p>Focus-state помогает показать активный выбор и поддерживает визуальный контекст взаимодействия.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Error</h3>
            <Select
              label="Admission track"
              placeholder="Выберите направление"
              defaultValue=""
              error="Пожалуйста, выберите одно направление из списка"
              options={[
                { value: 'design', label: 'Design track' },
                { value: 'analytics', label: 'Analytics track' },
              ]}
            />
            <p>Error-state должен объяснять, какое действие требуется выполнить пользователю.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <Select
              label="Education format"
              placeholder="Недоступно"
              disabled
              defaultValue=""
              helperText="Поле станет доступно на следующем шаге"
              options={[
                { value: 'offline', label: 'Offline' },
                { value: 'online', label: 'Online' },
              ]}
            />
            <p>Disabled-state показывает, что поле присутствует в сценарии, но пока недоступно.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте select, когда пользователь выбирает одно значение из готового списка.</li>
          <li>Если вариантов мало и они важны для сравнения, лучше рассмотреть radio-group.</li>
          <li>Label должен ясно объяснять, какой выбор требуется.</li>
          <li>Placeholder не заменяет label и служит только дополнительной подсказкой.</li>
          <li>Select должен наследовать системные tokens типографики, spacing, границы и цвета.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-column">
              <Select
                label="Faculty"
                placeholder="Выберите факультет"
                helperText="Доступен выбор одного значения"
                defaultValue=""
                options={facultyOptions}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Используйте понятный label и предсказуемые названия опций.</li>
              <li>Группируйте варианты логично и не перегружайте список лишними значениями.</li>
              <li>Сохраняйте единый визуальный ритм с другими полями формы.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-column">
              <Select
                placeholder="Выберите..."
                defaultValue=""
                options={facultyOptions}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Не оставляйте select без label.</li>
              <li>Не используйте расплывчатые названия вариантов.</li>
              <li>Не превращайте select в скрытый список без контекста и пояснения.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>label</code>, <code>placeholder</code>,{' '}
          <code>helperText</code>, <code>error</code>, <code>disabled</code> и{' '}
          <code>options</code>, а также поддерживает нативные props элемента{' '}
          <code>select</code>. Helper- и error-text связываются с полем через{' '}
          <code>aria-describedby</code>, а error-state передаёт{' '}
          <code>aria-invalid</code>.
        </div>
      </div>
    </section>
  )
}
