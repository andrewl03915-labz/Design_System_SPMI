import React from 'react'
import Notification from '../components/ui/Notification'

export default function NotificationPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Notification</h2>
        <p>
          Notification используется для отображения важной обратной связи,
          статуса процесса, предупреждений и системных сообщений внутри
          текущего контекста страницы. Компонент помогает сообщать о результате
          действия или состоянии интерфейса без перехода к отдельному экрану.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Feedback</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, radius, border, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Structure</h3>
        <p>
          Базовая структура notification состоит из semantic icon, title и
          explanatory text.
        </p>

        <div className="ds-demo-card">
          <Notification variant="info" title="Application received">
            <p>
              Мы получили вашу заявку и передали её в обработку. Следующее
              обновление статуса появится после проверки документов.
            </p>
          </Notification>

          <ul className="ds-guidelines">
            <li>Notification должен сообщать состояние или результат в текущем контексте.</li>
            <li>Заголовок должен быть коротким и сразу объяснять смысл сообщения.</li>
            <li>Текст должен уточнять, что произошло или что нужно сделать дальше.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Variants</h3>
        <p>Ниже показаны основные semantic variants для разных типов обратной связи.</p>

        <div className="ds-demo-column">
          <Notification variant="info" title="Information">
            <p>Информационное сообщение помогает объяснить состояние интерфейса или процесса.</p>
          </Notification>

          <Notification variant="success" title="Changes saved">
            <p>Изменения были успешно сохранены и уже применены к вашему профилю.</p>
          </Notification>

          <Notification variant="warning" title="Missing documents">
            <p>Некоторые обязательные документы ещё не загружены. Проверьте список перед отправкой.</p>
          </Notification>

          <Notification variant="error" title="Submission failed">
            <p>Не удалось отправить форму. Проверьте обязательные поля и повторите попытку.</p>
          </Notification>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Для notification в MVP важнее semantic states по смыслу сообщения,
          чем интерактивные hover- или pressed-states. Основная задача компонента
          — ясно передавать тип обратной связи.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Default</h3>
            <Notification variant="info" title="Review in progress">
              <p>Заявка находится на рассмотрении приёмной комиссии.</p>
            </Notification>
          </div>

          <div className="ds-demo-card">
            <h3>Success</h3>
            <Notification variant="success" title="Payment confirmed">
              <p>Оплата подтверждена, и доступ к следующему шагу уже открыт.</p>
            </Notification>
          </div>

          <div className="ds-demo-card">
            <h3>Warning</h3>
            <Notification variant="warning" title="Deadline approaching">
              <p>До окончания приёма заявок осталось меньше двух дней.</p>
            </Notification>
          </div>

          <div className="ds-demo-card">
            <h3>Error</h3>
            <Notification variant="error" title="Connection problem">
              <p>Система временно недоступна. Попробуйте отправить данные ещё раз позже.</p>
            </Notification>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Examples</h3>
        <p>Компонент хорошо работает в формах, настройках и информационных карточках.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>In forms</h3>
            <Notification variant="error" title="Please check the form">
              <p>Некоторые обязательные поля заполнены некорректно. Исправьте ошибки и отправьте форму снова.</p>
            </Notification>
          </div>

          <div className="ds-demo-card">
            <h3>In settings</h3>
            <Notification variant="success" title="Preferences updated">
              <p>Настройки уведомлений обновлены. Вы можете изменить их снова в любой момент.</p>
            </Notification>
          </div>

          <div className="ds-demo-card">
            <h3>In dashboard sections</h3>
            <Notification variant="info" title="Scheduled maintenance">
              <p>В субботу с 02:00 до 04:00 часть сервисов будет работать с ограничениями.</p>
            </Notification>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте notification для заметной, но встроенной в контекст обратной связи.</li>
          <li>Выбирайте variant по смыслу сообщения, а не по визуальному предпочтению.</li>
          <li>Заголовок должен быстро объяснять суть, а текст — уточнять последствия или следующий шаг.</li>
          <li>Не перегружайте интерфейс слишком большим количеством notification в одной области.</li>
          <li>Для фоновых и краткоживущих сообщений лучше использовать другой паттерн, например toast.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-column">
              <Notification variant="warning" title="Upload required">
                <p>Загрузите копию паспорта, чтобы завершить подачу документов.</p>
              </Notification>
            </div>
            <ul className="ds-guidelines">
              <li>Пишите короткий, конкретный заголовок.</li>
              <li>Объясняйте, что произошло и что делать дальше.</li>
              <li>Используйте семантический variant последовательно.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-column">
              <Notification variant="info" title="Notice">
                <p>Произошло нечто важное. Ознакомьтесь с ситуацией.</p>
              </Notification>
            </div>
            <ul className="ds-guidelines">
              <li>Не делайте заголовки слишком общими и неинформативными.</li>
              <li>Не используйте нейтральный текст там, где пользователю нужен конкретный следующий шаг.</li>
              <li>Не смешивайте semantic meaning и декоративное использование цвета.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>title</code>, <code>children</code> и{' '}
          <code>variant</code> со значениями <code>info</code>, <code>success</code>,{' '}
          <code>warning</code> и <code>error</code>. В MVP notification реализован
          как inline feedback block для сообщений внутри текущего контекста
          страницы.
        </div>
      </div>
    </section>
  )
}