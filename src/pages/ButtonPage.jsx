import React from 'react'
import Button from '../components/ui/Button'

export default function ButtonPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Button</h2>
        <p>
          Button — базовый компонент действия. В MVP представлены варианты primary,
          secondary и ghost, а также ключевые состояния, которые помогают выстраивать
          понятную иерархию действий в интерфейсе.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Action</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, radius, shadow, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Preview</h3>
        <p>
          Preview показывает кнопку в простом контексте, где видно различие между
          primary и secondary actions.
        </p>

        <div className="ds-demo-card">
          <p>
            Используйте кнопки для явных действий пользователя. В одной action area должна
            быть понятна главная кнопка и вторичные альтернативы.
          </p>

          <div className="ds-demo-row">
            <Button variant="primary">Save changes</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="ghost">Learn more</Button>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Variants</h3>
        <p>Варианты кнопки различаются по роли и визуальному приоритету.</p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <Button variant="primary">Primary</Button>
            <p>Главное действие в текущем блоке или сценарии.</p>
          </div>

          <div className="ds-demo-card">
            <Button variant="secondary">Secondary</Button>
            <p>Вторичное действие, которое поддерживает основной сценарий.</p>
          </div>

          <div className="ds-demo-card">
            <Button variant="ghost">Ghost</Button>
            <p>Низкоприоритетное действие для вспомогательных сценариев и менее заметных команд.</p>
          </div>
        </div>
      </div>

  <div className="ds-section-block">
  <h3>States</h3>
  <p>
    Состояния помогают показать доступность действия, интерактивность и контекст
    взаимодействия.
  </p>

  <div className="ds-split-grid">
    <div className="ds-demo-card">
      <h3>Default</h3>
      <div className="ds-demo-row">
        <Button variant="primary">Primary</Button>
      </div>
      <p>Базовое состояние активной кнопки в рабочем интерфейсе.</p>
    </div>

    <div className="ds-demo-card">
      <h3>Hover</h3>
      <div className="ds-demo-row">
        <Button variant="secondary" className="is-hover-demo">
          Secondary
        </Button>
      </div>
      <p>Hover подчёркивает интерактивность и помогает быстрее считывать доступное действие.</p>
    </div>

    <div className="ds-demo-card">
      <h3>Focus</h3>
      <div className="ds-demo-row">
        <Button variant="ghost" className="is-focus-demo">
          Ghost
        </Button>
      </div>
      <p>Focus-state важен для клавиатурной навигации, доступности и ясного положения курсора.</p>
    </div>

    <div className="ds-demo-card">
      <h3>Disabled</h3>
      <div className="ds-demo-row">
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>
      <p>Disabled показывает, что действие временно недоступно, но по-прежнему существует в сценарии.</p>
    </div>
  </div>
</div>

      <div className="ds-section-block">
        <h3>Usage hierarchy</h3>
        <p>
          Иерархия кнопок помогает странице оставаться понятной и не создавать конкуренцию
          между действиями.
        </p>

        <ul className="ds-guidelines">
  <li>В одной action area должна быть только одна primary button.</li>
  <li>Primary используйте для главного завершающего или подтверждающего действия.</li>
  <li>Secondary подходит для безопасной альтернативы: отмены, возврата, промежуточного шага.</li>
  <li>Ghost используйте для низкоприоритетных, вспомогательных или справочных действий.</li>
  <li>Disabled-state должен объяснять временную недоступность, а не скрывать важную логику интерфейса.</li>
</ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-row">
              <Button variant="primary">Publish</Button>
              <Button variant="secondary">Save draft</Button>
            </div>
            <ul className="ds-guidelines">
              <li>Используйте primary для главного действия.</li>
              <li>Формулируйте label как ясный глагол действия.</li>
              <li>Разводите primary и secondary по смысловому приоритету.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-row">
              <Button variant="primary">Save</Button>
              <Button variant="primary">Continue</Button>
              <Button variant="ghost">Click here</Button>
            </div>
           <ul className="ds-guidelines">
  <li>Не ставьте две primary buttons рядом в одной зоне действий.</li>
  <li>Не используйте ghost как основной CTA.</li>
  <li>Не делайте label расплывчатым: “Click here”, “Submit”, “Continue” без контекста.</li>
</ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
  <h3>Implementation note</h3>
  <div className="ds-note">
    Компонент использует свойство <code>variant</code> со значениями{' '}
    <code>primary</code>, <code>secondary</code> и <code>ghost</code>. Состояние{' '}
    <code>disabled</code> передаётся стандартным HTML-атрибутом, текст кнопки —
    через <code>children</code>, а тип кнопки по умолчанию задан как{' '}
    <code>button</code> для предсказуемого поведения внутри форм.
  </div>
</div>
    </section>
  )
}