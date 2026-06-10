import React from 'react'
import Tooltip from '../components/ui/Tooltip'
import Button from '../components/ui/Button'

export default function TooltipPage() {
  return (
    <section className="ds-section ds-section--tooltip">
      <div className="ds-page-intro">
        <h2>Tooltip</h2>
        <p>
          Tooltip используется для кратких пояснений, helper hints и
          дополнительного контекста рядом с существующим элементом интерфейса.
          Компонент помогает уточнить значение или действие без перегрузки
          основного layout.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Feedback</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, radius, shadow, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Preview</h3>
        <p>
          Tooltip показывает короткое пояснение по hover или keyboard focus и
          работает как supporting layer рядом с trigger element.
        </p>

        <div className="ds-demo-card">
          <Tooltip content="This action saves the current changes.">
            <Button variant="secondary">Save draft</Button>
          </Tooltip>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Variants</h3>
        <p>Ниже показаны типичные варианты использования tooltip в интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Top placement</h3>
            <Tooltip content="Additional context displayed above the trigger.">
              <span className="ds-tooltip-demo-trigger">Info</span>
            </Tooltip>
          </div>

          <div className="ds-demo-card">
            <h3>Bottom placement</h3>
            <Tooltip content="Additional context displayed below the trigger." placement="bottom">
              <span className="ds-tooltip-demo-trigger">Help</span>
            </Tooltip>
          </div>

          <div className="ds-demo-card">
            <h3>Text trigger</h3>
            <Tooltip content="This term refers to the evaluation stage after submission.">
              <span className="ds-tooltip-demo-text">Review stage</span>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Для tooltip особенно важны default, visible, focus-triggered и
          disabled states, потому что компонент должен быть деликатным, но
          предсказуемым.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Default</h3>
            <Tooltip content="This tooltip appears on interaction.">
              <span className="ds-tooltip-demo-trigger">Default</span>
            </Tooltip>
          </div>

          <div className="ds-demo-card">
            <h3>Visible on focus</h3>
            <Tooltip content="Keyboard users should receive the same guidance.">
              <button type="button" className="ds-tooltip-demo-trigger">
                Focus me
              </button>
            </Tooltip>
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <Tooltip content="This tooltip is disabled." disabled>
              <span className="ds-tooltip-demo-trigger">Disabled</span>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Structure</h3>
        <p>
          Базовая структура tooltip включает trigger, tooltip bubble, content и
          directional arrow.
        </p>

        <div className="ds-demo-card">
          <Tooltip content="Upload a PDF document with a maximum size of 10 MB.">
            <span className="ds-tooltip-demo-trigger">?</span>
          </Tooltip>

          <ul className="ds-guidelines">
            <li>Tooltip должен содержать короткое и полезное пояснение.</li>
            <li>Trigger должен оставаться понятным и доступным сам по себе.</li>
            <li>Tooltip не должен заменять постоянный важный текст интерфейса.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Examples</h3>
        <p>Компонент особенно полезен в таблицах, формах, dense layouts и settings panels.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>In forms</h3>
            <Tooltip content="Use your legal name exactly as it appears in official documents.">
              <span className="ds-tooltip-demo-trigger">Name help</span>
            </Tooltip>
          </div>

          <div className="ds-demo-card">
            <h3>In settings</h3>
            <Tooltip content="Notifications are sent only for critical account updates.">
              <span className="ds-tooltip-demo-trigger">Policy info</span>
            </Tooltip>
          </div>

          <div className="ds-demo-card">
            <h3>In compact interfaces</h3>
            <Tooltip content="Archive hides the item from the active list without deleting it.">
              <span className="ds-tooltip-demo-trigger">Archive</span>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте tooltip для кратких пояснений и secondary context.</li>
          <li>Не помещайте в tooltip критически важную информацию.</li>
          <li>Tooltip должен дополнять trigger, а не объяснять полностью непонятный интерфейс.</li>
          <li>Формулируйте текст коротко, чтобы он быстро считывался.</li>
          <li>Поддерживайте hover и keyboard focus, а не только pointer interaction.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-card">
              <Tooltip content="Your profile is visible only to administrators.">
                <span className="ds-tooltip-demo-trigger">Visibility</span>
              </Tooltip>
            </div>
            <ul className="ds-guidelines">
              <li>Пишите короткий и конкретный helper text.</li>
              <li>Используйте tooltip для secondary explanation.</li>
              <li>Привязывайте его к понятному trigger element.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-card">
              <p>
                Tooltip with a long paragraph that tries to replace the main
                instruction, validation message or onboarding explanation.
              </p>
            </div>
            <ul className="ds-guidelines">
              <li>Не используйте tooltip для длинных инструкций.</li>
              <li>Не прячьте в нём обязательную или критичную информацию.</li>
              <li>Не делайте tooltip единственным способом понять интерфейс.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>content</code>, <code>children</code>,{' '}
          <code>placement</code> и <code>disabled</code>. В MVP tooltip
          реализован как lightweight helper overlay с поддержкой hover и
          keyboard focus.
        </div>
      </div>
    </section>
  )
}