import Input from '../components/ui/Input'

export default function InputPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Поле ввода</h2>
        <p>
          Input используется для ввода пользовательских данных и демонстрирует базовые
          состояния поля формы. В документации важны не только визуальные стили, но и
          правила работы с label, placeholder, validation и disabled-state.
        </p>


      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура input состоит из label, поля ввода, placeholder и
          вспомогательного текста или текста ошибки.
        </p>

        <div className="ds-demo-card">
          <div className="ds-demo-column">
            <Input
              label="Email"
              placeholder="Введите email"
              helperText="Пример: name@example.com"
            />
          </div>

          <ul className="ds-guidelines">
            <li>Label объясняет, какие данные ожидаются от пользователя.</li>
            <li>Placeholder может подсказывать формат, но не заменяет label.</li>
            <li>Helper text или error text уточняет состояние поля и дальнейшее действие.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>Ниже показаны базовые примеры, которые помогают читать компонент в контексте.</p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <h3>Пустое поле</h3>
            <Input label="Имя" placeholder="Введите имя" />
          </div>

          <div className="ds-demo-card">
            <h3>Заполненное поле</h3>
            <Input label="Имя" value="Алексей" readOnly />
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <Input label="Организация" placeholder="Недоступно" disabled />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Состояния поля помогают показать активное взаимодействие, ошибку ввода или
          временную недоступность.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <Input label="Полное имя" placeholder="Введите полное имя" />
            <p>Базовое состояние поля для стандартного ввода без ошибок и дополнительных ограничений.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Ошибка</h3>
            <Input
              label="Email"
              placeholder="name@example.com"
              error="Введите email в формате name@example.com"
            />
            <p>Состояние error должно объяснять, что именно нужно исправить, а не просто сигнализировать о проблеме.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <Input
              label="Подразделение"
              placeholder="Недоступно"
              disabled
              helperText="Поле станет доступно после выбора роли"
            />
            <p>Состояние disabled сообщает, что поле временно недоступно для редактирования, но остаётся читаемым в контексте формы.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Валидация и ошибки</h3>
        <p>
          Хорошая валидация помогает пользователю исправить ввод быстро и без лишнего
          напряжения. Ошибка должна не только сигнализировать о проблеме, но и подсказывать,
          что именно требуется изменить.
        </p>

        <ul className="ds-guidelines">
          <li>Не используйте placeholder вместо label.</li>
          <li>Формулируйте error text так, чтобы он объяснял исправление, а не только проблему.</li>
          <li>Показывайте ошибку рядом с полем и в том же визуальном контексте.</li>
          <li>Не скрывайте helper text, если он помогает понять формат или ожидаемое значение.</li>
          <li>Сохраняйте одинаковую структуру spacing, label и текста во всех полях формы.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Каждое поле должно иметь понятный label.</li>
          <li>Placeholder используется только как дополнительная подсказка по формату или примеру значения.</li>
          <li>Helper text добавляется только там, где он реально снижает вероятность ошибки.</li>
          <li>Input должен наследовать системные tokens типографики, цвета, границы и spacing.</li>
          <li>Disabled-поле должно выглядеть недоступным, но оставаться читаемым.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-column">
              <Input
                label="Email"
                placeholder="name@example.com"
                helperText="Используйте рабочий адрес"
              />
            </div>
            <ul className="ds-guidelines">
              <li>Используйте label для ясного обозначения поля.</li>
              <li>Добавляйте helper text, если он реально помогает.</li>
              <li>Сохраняйте единый ритм и отступы между полями формы.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-column">
              <Input placeholder="Введите email" />
            </div>
            <ul className="ds-guidelines">
              <li>Не оставляйте поле без label.</li>
              <li>Не полагайтесь только на placeholder как на описание поля.</li>
              <li>Не делайте сообщение об ошибке слишком общим, например «Ошибка» или «Некорректно».</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>label</code>, <code>placeholder</code>,{' '}
          <code>helperText</code>, <code>error</code> и <code>disabled</code>, а также
          поддерживает нативные props поля ввода. Helper text и error text связываются с полем
          через <code>aria-describedby</code>, а состояние ошибки дополнительно передаётся через{' '}
          <code>aria-invalid</code> для более предсказуемого поведения и доступности.
        </div>
      </div>
    </section>
  )
}