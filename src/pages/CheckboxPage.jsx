import React from 'react'
import Checkbox from '../components/ui/Checkbox'

export default function CheckboxPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Checkbox</h2>
        <p>
          Checkbox используется для подтверждения согласия, выбора независимых
          опций и управления множественным выбором. Компонент подходит для форм,
          настроек, фильтров и сценариев, где пользователь может отметить один
          или несколько пунктов.
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
          Базовая структура checkbox состоит из control-area, label и
          вспомогательного или error-text.
        </p>

        <div className="ds-demo-card">
          <div className="ds-demo-column">
            <Checkbox
              label="Я согласен с правилами подачи заявки"
              helperText="Подтверждение требуется перед переходом к следующему шагу"
            />
          </div>

          <ul className="ds-guidelines">
            <li>Checkbox подходит для независимых опций и подтверждений.</li>
            <li>Label должен ясно описывать, что именно выбирает или подтверждает пользователь.</li>
            <li>Helper text полезен, когда нужно уточнить последствие выбора.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Examples</h3>
        <p>Ниже показаны базовые сценарии использования checkbox.</p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <h3>Unchecked</h3>
            <Checkbox label="Получать обновления о новых программах" />
          </div>

          <div className="ds-demo-card">
            <h3>Checked</h3>
            <Checkbox label="Подписка на обновления активна" defaultChecked />
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <Checkbox label="Опция временно недоступна" disabled />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Состояния checkbox помогают показать активный выбор, фокус клавиатурной
          навигации, ошибку и недоступность.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Default</h3>
            <Checkbox label="Выбрать этот параметр" />
          </div>

          <div className="ds-demo-card">
            <h3>Checked</h3>
            <Checkbox label="Параметр уже выбран" defaultChecked />
            <p>Checked-state показывает активный и подтверждённый выбор.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Focus</h3>
            <div className="is-focus-demo">
              <Checkbox label="Фокус на control-area" />
            </div>
            <p>Focus-state должен помогать пользователю при навигации с клавиатуры.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Error</h3>
            <Checkbox
              label="Я подтверждаю согласие на обработку данных"
              error="Необходимо подтвердить согласие, чтобы продолжить"
            />
            <p>Error-state должен объяснять, какое действие требуется выполнить.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <Checkbox
              label="Опция будет доступна после выбора программы"
              helperText="Сначала завершите предыдущий шаг"
              disabled
            />
            <p>Disabled-state показывает, что элемент существует в сценарии, но пока недоступен.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте checkbox для независимых выборов и согласий.</li>
          <li>Если нужно выбрать только один вариант из группы, лучше использовать radio.</li>
          <li>Label должен быть однозначным и не требовать дополнительной интерпретации.</li>
          <li>Checkbox должен наследовать системные tokens spacing, radius, border и типографики.</li>
          <li>Не прячьте смысл выбора только во вспомогательном тексте.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-column">
              <Checkbox
                label="Я согласен получать уведомления о статусе заявки"
                helperText="Настройку можно изменить позже"
              />
            </div>
            <ul className="ds-guidelines">
              <li>Пишите label как ясное утверждение или понятную независимую опцию.</li>
              <li>Добавляйте helper text только тогда, когда он реально помогает понять выбор.</li>
              <li>Сохраняйте визуальную иерархию и spacing такими же, как у других form-controls.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-column">
              <Checkbox label="ОК" />
            </div>
            <ul className="ds-guidelines">
              <li>Не используйте короткие и неинформативные label.</li>
              <li>Не применяйте checkbox там, где требуется выбор только одного варианта.</li>
              <li>Не делайте смысл выбора двусмысленным или слишком общим.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>label</code>, <code>helperText</code>,{' '}
          <code>error</code>, <code>disabled</code> и поддерживает нативные props
          элемента <code>input type="checkbox"</code>. Helper- и error-text
          связываются с компонентом через <code>aria-describedby</code>, а
          error-state передаёт <code>aria-invalid</code>.
        </div>
      </div>
    </section>
  )
}