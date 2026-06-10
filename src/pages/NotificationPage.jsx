import React from 'react'
import Notification from '../components/ui/Notification'

export default function NotificationPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Уведомление</h2>
        <p>
          Notification используется для отображения важной обратной связи,
          статуса процесса, предупреждений и системных сообщений внутри
          текущего контекста страницы. Компонент помогает сообщать о результате
          действия или состоянии интерфейса без перехода к отдельному экрану.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Категория: Feedback</span>
          <span className="ds-meta-item">Статус: Готово</span>
          <span className="ds-meta-item">Токены: color, spacing, radius, border, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура notification состоит из semantic icon, title и
          поясняющего текста.
        </p>

        <div className="ds-demo-card">
          <Notification variant="info" title="Заявка получена">
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
        <h3>Варианты</h3>
        <p>Ниже показаны основные semantic variants для разных типов обратной связи.</p>

        <div className="ds-demo-column">
          <Notification variant="info" title="Информация">
            <p>Информационное сообщение помогает объяснить состояние интерфейса или процесса.</p>
          </Notification>

          <Notification variant="success" title="Изменения сохранены">
            <p>Изменения были успешно сохранены и уже применены к вашему профилю.</p>
          </Notification>

          <Notification variant="warning" title="Не хватает документов">
            <p>Некоторые обязательные документы ещё не загружены. Проверьте список перед отправкой.</p>
          </Notification>

          <Notification variant="error" title="Не удалось отправить">
            <p>Не удалось отправить форму. Проверьте обязательные поля и повторите попытку.</p>
          </Notification>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Для notification в MVP важнее semantic states по смыслу сообщения,
          чем интерактивные hover- или pressed-states. Основная задача компонента
          — ясно передавать тип обратной связи.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <Notification variant="info" title="Проверка продолжается">
              <p>Заявка находится на рассмотрении приёмной комиссии.</p>
            </Notification>
          </div>

          <div className="ds-demo-card">
            <h3>Успех</h3>
            <Notification variant="success" title="Оплата подтверждена">
              <p>Оплата подтверждена, и доступ к следующему шагу уже открыт.</p>
            </Notification>
          </div>

          <div className="ds-demo-card">
            <h3>Предупреждение</h3>
            <Notification variant="warning" title="Срок скоро истекает">
              <p>До окончания приёма заявок осталось меньше двух дней.</p>
            </Notification>
          </div>

          <div className="ds-demo-card">
            <h3>Ошибка</h3>
            <Notification variant="error" title="Проблема с соединением">
              <p>Система временно недоступна. Попробуйте отправить данные ещё раз позже.</p>
            </Notification>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>Компонент хорошо работает в формах, настройках и информационных карточках.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>В формах</h3>
            <Notification variant="error" title="Проверьте форму">
              <p>Некоторые обязательные поля заполнены некорректно. Исправьте ошибки и отправьте форму снова.</p>
            </Notification>
          </div>

          <div className="ds-demo-card">
            <h3>В настройках</h3>
            <Notification variant="success" title="Параметры обновлены">
              <p>Настройки уведомлений обновлены. Вы можете изменить их снова в любой момент.</p>
            </Notification>
          </div>

          <div className="ds-demo-card">
            <h3>В разделах dashboard</h3>
            <Notification variant="info" title="Плановые работы">
              <p>В субботу с 02:00 до 04:00 часть сервисов будет работать с ограничениями.</p>
            </Notification>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте notification для заметной, но встроенной в контекст обратной связи.</li>
          <li>Выбирайте variant по смыслу сообщения, а не по визуальному предпочтению.</li>
          <li>Заголовок должен быстро объяснять суть, а текст — уточнять последствия или следующий шаг.</li>
          <li>Не перегружайте интерфейс слишком большим количеством notification в одной области.</li>
          <li>Для фоновых и краткоживущих сообщений лучше использовать другой паттерн, например toast.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-column">
              <Notification variant="warning" title="Требуется загрузка">
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
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-column">
              <Notification variant="info" title="Уведомление">
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
        <h3>Примечание по реализации</h3>
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