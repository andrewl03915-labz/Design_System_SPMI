import Select from '../components/ui/Select'

const facultyOptions = [
  { value: 'design', label: 'ИБИО' },
  { value: 'engineering', label: 'Горный факультет' },
  { value: 'it', label: 'Экономический факультет' },
  { value: 'management', label: 'Строительный факультет' },
]

export default function SelectPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Выпадающий список</h2>
        <p>
          Select используется для выбора одного значения из заранее заданного списка.
          Компонент особенно полезен в формах, фильтрах и административных интерфейсах,
          где важно обеспечить быстрый и предсказуемый выбор.
        </p>


      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура select состоит из label, поля выбора, placeholder
          или выбранного значения, а также helper text или текста ошибки.
        </p>

        <div className="ds-demo-card">
          <div className="ds-demo-column">
            <Select
              label="Факультет"
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
        <h3>Примеры</h3>
        <p>Ниже показаны базовые сценарии использования select в интерфейсе.</p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <h3>Пусто</h3>
            <Select
              label="Программа"
              placeholder="Выберите программу"
              defaultValue=""
              options={[
                { value: 'bachelor', label: 'Бакалавриат' },
                { value: 'master', label: 'СпецВО' }
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Выбрано</h3>
            <Select
              label="Семестр"
              value="spring"
              onChange={() => {}}
              options={[
                { value: 'autumn', label: 'Осенний семестр' },
                { value: 'spring', label: 'Весенний семестр' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <Select
              label="Общежитие"
              placeholder="Недоступно"
              disabled
              defaultValue=""
              options={[
                { value: 'spb', label: 'Санкт-Петербург' },
                { value: 'msk', label: 'Москва' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Состояния select помогают показать активное взаимодействие, ошибку выбора
          или временную недоступность контрола.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <Select
              label="Уровень обучения"
              placeholder="Выберите уровень"
              defaultValue=""
              options={[
                { value: 'bachelor', label: 'Бакалавриат' },
                { value: 'master', label: 'Специалитет' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Фокус</h3>
            <Select
              label="Кафедра"
              placeholder="Выберите кафедру"
              defaultValue=""
              className="is-focus-demo"
              options={[
                { value: 'ux', label: 'Высшая математика' },
                { value: 'product', label: 'Иностранные языки' },
                { value: 'research', label: 'История' },
              ]}
            />
            <p>Focus-state помогает показать активный выбор и поддерживает визуальный контекст взаимодействия.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Ошибка</h3>
            <Select
              label="Траектория поступления"
              placeholder="Выберите направление"
              defaultValue=""
              error="Пожалуйста, выберите одно направление из списка"
              options={[
                { value: 'design', label: 'Экономическая теория' },
                { value: 'analytics', label: 'АОтраслевая экономика' },
              ]}
            />
            <p>Error-state должен объяснять, какое действие требуется выполнить пользователю.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <Select
              label="Формат обучения"
              placeholder="Недоступно"
              disabled
              defaultValue=""
              helperText="Поле станет доступно на следующем шаге"
              options={[
                { value: 'offline', label: 'Очно' },
                { value: 'online', label: 'Онлайн' },
              ]}
            />
            <p>Disabled-state показывает, что поле присутствует в сценарии, но пока недоступно.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте select, когда пользователь выбирает одно значение из готового списка.</li>
          <li>Если вариантов мало и они важны для сравнения, лучше рассмотреть radio-group.</li>
          <li>Label должен ясно объяснять, какой выбор требуется.</li>
          <li>Placeholder не заменяет label и служит только дополнительной подсказкой.</li>
          <li>Select должен наследовать системные tokens типографики, spacing, границы и цвета.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-column">
              <Select
                label="Факультет"
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
            <h3>Не рекомендуется</h3>
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
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>label</code>, <code>placeholder</code>,{' '}
          <code>helperText</code>, <code>error</code>, <code>disabled</code> и{' '}
          <code>options</code>, а также поддерживает нативные props элемента{' '}
          <code>select</code>. Helper text и текст ошибки связываются с полем через{' '}
          <code>aria-describedby</code>, а состояние ошибки передаётся через{' '}
          <code>aria-invalid</code>.
        </div>
      </div>
    </section>
  )
}