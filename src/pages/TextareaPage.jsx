import Textarea from '../components/ui/Textarea'
import CopyControl from '../components/ui/CopyControl'

export default function TextareaPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Многострочное поле</h2>
        <p>
          Textarea используется для ввода более длинного текста: комментариев,
          описаний, сообщений и других многострочных значений. В документации важно
          показать не только стиль поля, но и правила работы с label, helper text,
          validation и disabled-state.
        </p>


      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура textarea состоит из label, многострочной области ввода,
          placeholder и вспомогательного текста или текста ошибки.
        </p>

        <div className="ds-demo-card">
          <div className="ds-demo-column">
            <Textarea
              label="Описание"
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
        <h3>Примеры</h3>
        <p>Ниже показаны базовые примеры textarea в разных сценариях.</p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <h3>Пусто</h3>
            <CopyControl jsx={`<Textarea label="Комментарий" placeholder="Введите комментарий" rows={4} />`}>
              <Textarea label="Комментарий" placeholder="Введите комментарий" rows={4} />
            </CopyControl>
          </div>

          <div className="ds-demo-card">
            <h3>Заполнено</h3>
            <CopyControl
              jsx={`<Textarea
  label="Комментарий"
  value="Текущий MVP уже покрывает foundations, tokens и базовые компоненты."
  readOnly
  rows={4}
/>`}
            >
              <Textarea
                label="Комментарий"
                value="Текущий MVP уже покрывает foundations, tokens и базовые компоненты."
                readOnly
                rows={4}
              />
            </CopyControl>
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <CopyControl jsx={`<Textarea label="Внутренняя заметка" placeholder="Недоступно" disabled rows={4} />`}>
              <Textarea
                label="Внутренняя заметка"
                placeholder="Недоступно"
                disabled
                rows={4}
              />
            </CopyControl>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Состояния textarea помогают показать активное редактирование, ошибку ввода
          и временную недоступность поля.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <Textarea
              label="Описание проекта"
              placeholder="Введите краткое описание проекта"
              rows={4}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Ошибка</h3>
            <Textarea
              label="Описание"
              placeholder="Введите описание"
              error="Опишите задачу чуть подробнее, минимум одним полным предложением"
              rows={4}
            />
            <p>Error-state должен объяснять, что именно нужно исправить, а не просто сигнализировать о проблеме.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <Textarea
              label="Заметка модератора"
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
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте textarea для многострочного и содержательного ввода, а не для коротких значений.</li>
          <li>Каждое поле должно иметь понятный label.</li>
          <li>Placeholder используется только как дополнительная подсказка по содержанию или формату.</li>
          <li>Helper text добавляется только тогда, когда он реально снижает вероятность ошибки.</li>
          <li>Textarea должен наследовать системные tokens типографики, цвета, границы и spacing.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-column">
              <Textarea
                label="Краткое описание проекта"
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
            <h3>Не рекомендуется</h3>
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
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>label</code>, <code>placeholder</code>,{' '}
          <code>helperText</code>, <code>error</code> и <code>disabled</code>, а также
          поддерживает нативные props элемента <code>textarea</code>, включая{' '}
          <code>rows</code>. Helper text и текст ошибки связываются с полем через{' '}
          <code>aria-describedby</code>, а состояние ошибки передаётся через{' '}
          <code>aria-invalid</code>.
        </div>
      </div>
    </section>
  )
}