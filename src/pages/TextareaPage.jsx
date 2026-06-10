import React from 'react'
import Textarea from '../components/ui/Textarea'

export default function TextareaPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Textarea</h2>
        <p>
          Textarea используется для ввода более длинного текста: комментариев,
          описаний, сообщений и других многострочных значений. В документации важно
          показать не только стиль поля, но и правила работы с label, helper text,
          validation и disabled-state.
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
          Базовая структура textarea состоит из label, многострочной области ввода,
          placeholder и вспомогательного или error-text.
        </p>

        <div className="ds-demo-card">
          <div className="ds-demo-column">
            <Textarea
              label="Description"
              placeholder="Введите описание"
              helperText="Опишите задачу или содержание коротким связным текстом"
              rows={4}
            />
          </div>

          <ul className="ds-guidelines">
            <li>Label объясняет, какие данные ожидаются от пользователя.</li>
            <li>Placeholder подсказывает формат или ожидаемое содержание, но не заменяет label.</li>
            <li>Helper text помогает задать контекст, ограничение или ожидаемый тон ответа.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Examples</h3>
        <p>Ниже показаны базовые примеры textarea в разных сценариях.</p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <h3>Empty</h3>
            <Textarea label="Comment" placeholder="Введите комментарий" rows={4} />
          </div>

          <div className="ds-demo-card">
            <h3>Filled</h3>
            <Textarea
              label="Comment"
              value="Текущий MVP уже покрывает foundations, tokens и базовые компоненты."
              readOnly
              rows={4}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <Textarea
              label="Internal note"
              placeholder="Недоступно"
              disabled
              rows={4}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Состояния textarea помогают показать активное редактирование, ошибку ввода
          и временную недоступность поля.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Default</h3>
            <Textarea
              label="Project description"
              placeholder="Введите краткое описание проекта"
              rows={4}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Focus</h3>
            <Textarea
              label="Message"
              placeholder="Введите сообщение"
              helperText="Активное поле ввода"
              className="is-focus-demo"
              rows={4}
            />
            <p>Focus-state показывает активное взаимодействие с полем и помогает удерживать контекст ввода.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Error</h3>
            <Textarea
              label="Description"
              placeholder="Введите описание"
              error="Опишите задачу чуть подробнее, минимум одним полным предложением"
              rows={4}
            />
            <p>Error-state должен объяснять, что именно нужно исправить, а не просто сигнализировать о проблеме.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <Textarea
              label="Moderator note"
              placeholder="Недоступно"
              helperText="Поле станет доступно после смены статуса"
              disabled
              rows={4}
            />
            <p>Disabled-state показывает, что поле существует в сценарии, но пока не доступно для редактирования.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте textarea для многострочного и содержательного ввода, а не для коротких значений.</li>
          <li>Каждое поле должно иметь понятный label.</li>
          <li>Placeholder используется только как дополнительная подсказка по содержанию или формату.</li>
          <li>Helper text добавляется только тогда, когда он реально снижает вероятность ошибки.</li>
          <li>Textarea должен наследовать системные tokens типографики, цвета, границы и spacing.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-column">
              <Textarea
                label="Project summary"
                placeholder="Кратко опишите цель, контекст и ожидаемый результат"
                helperText="2–4 предложения обычно достаточно"
                rows={4}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Используйте label для ясного обозначения поля.</li>
              <li>Подсказывайте ожидаемый формат или объём текста, если это помогает.</li>
              <li>Сохраняйте единый ритм spacing и типографики с другими form-components.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-column">
              <Textarea placeholder="Напишите что-нибудь..." rows={4} />
            </div>
            <ul className="ds-guidelines">
              <li>Не оставляйте textarea без label.</li>
              <li>Не полагайтесь только на placeholder как на описание поля.</li>
              <li>Не делайте error-message слишком общим или оторванным от поля.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>label</code>, <code>placeholder</code>,{' '}
          <code>helperText</code>, <code>error</code> и <code>disabled</code>, а также
          поддерживает нативные props элемента <code>textarea</code>, включая{' '}
          <code>rows</code>. Helper- и error-text связываются с полем через{' '}
          <code>aria-describedby</code>, а error-state передаёт{' '}
          <code>aria-invalid</code>.
        </div>
      </div>
    </section>
  )
}