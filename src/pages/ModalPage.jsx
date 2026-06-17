import { useState } from 'react'
import Modal from '../components/ui/Modal'
import Button from '../components/ui/Button'
import Notification from '../components/ui/Notification'
import Icon from '../components/ui/Icon'

export default function ModalPage() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section className="ds-section ds-section--modal">
      <div className="ds-page-intro">
        <h2>Модальное окно</h2>
        <p>
          Modal используется для временного вывода важного контента поверх
          текущего интерфейса. Компонент помогает сфокусировать внимание на
          подтверждении действия, короткой форме или важном сообщении без
          перехода на отдельную страницу.
        </p>

      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура modal состоит из overlay, контейнера диалога, header,
          body и необязательного footer с действиями.
        </p>

        <div className="ds-demo-card">
          <div className="ds-demo-row">
            <Button variant="primary" onClick={() => setIsPreviewOpen(true)}>
              Открыть модальное окно
            </Button>
          </div>

          <ul className="ds-guidelines">
            <li>Modal должен использоваться для задач, требующих временного фокуса.</li>
            <li>Структура header, body и footer делает содержимое предсказуемым.</li>
            <li>Закрытие должно быть понятным и доступным.</li>
          </ul>
        </div>

        <Modal
          open={isPreviewOpen}
          title="Детали заявки"
          onClose={() => setIsPreviewOpen(false)}
          footer={
            <>
              <Button variant="ghost" onClick={() => setIsPreviewOpen(false)}>
                Отмена
              </Button>
              <Button variant="primary" onClick={() => setIsPreviewOpen(false)}>
                Продолжить
              </Button>
            </>
          }
        >
          <p>
            Modal помогает показать связанный контент поверх текущего контекста,
            не разрывая пользовательский сценарий.
          </p>
        </Modal>
      </div>

      <div className="ds-section-block">
        <h3>Варианты</h3>
        <p>Ниже показаны типичные сценарии использования modal в системном интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Подтверждение</h3>
            <Button variant="secondary" onClick={() => setIsConfirmOpen(true)}>
              Открыть окно подтверждения
            </Button>
          </div>

          <div className="ds-demo-card">
            <h3>Форма в модальном окне</h3>
            <Button variant="primary" onClick={() => setIsFormOpen(true)}>
              Открыть форму
            </Button>
          </div>
        </div>

        <Modal
          open={isConfirmOpen}
          title="Удалить черновик"
          onClose={() => setIsConfirmOpen(false)}
          footer={
            <>
              <Button variant="ghost" onClick={() => setIsConfirmOpen(false)}>
                Оставить черновик
              </Button>
              <Button variant="primary" onClick={() => setIsConfirmOpen(false)}>
                Удалить
              </Button>
            </>
          }
        >
          <Notification variant="warning" title="Это действие повлияет на сохранённый прогресс">
            <p>После удаления черновика восстановить введённые данные будет нельзя.</p>
          </Notification>
        </Modal>

        <Modal
          open={isFormOpen}
          title="Запросить консультацию"
          onClose={() => setIsFormOpen(false)}
          footer={
            <>
              <Button variant="ghost" onClick={() => setIsFormOpen(false)}>
                Отмена
              </Button>
              <Button variant="primary" onClick={() => setIsFormOpen(false)}>
                Отправить запрос
              </Button>
            </>
          }
        >
          <div className="ds-demo-column">
            <label className="ds-field-label" htmlFor="modal-name">
              Имя
            </label>
            <input
              id="modal-name"
              className="ds-input"
              placeholder="Ваше полное имя"
            />

            <label className="ds-field-label" htmlFor="modal-email">
              Email
            </label>
            <input
              id="modal-email"
              className="ds-input"
              placeholder="name@example.com"
            />
          </div>
        </Modal>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Для modal особенно важны закрытое состояние, открытое состояние, сценарий
          закрытия и иерархия действий. В документации состояния должны различаться
          не только описанием, но и самой структурой демонстрации.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Закрыто</h3>
            <div className="ds-demo-row">
              <Button variant="secondary">Открыть модальное окно</Button>
            </div>
            <p>
              В закрытом состоянии пользователь видит только trigger, а основной
              контент страницы остаётся полностью доступным.
            </p>
          </div>

          <div className="ds-demo-card">
            <h3>Открыто</h3>
            <div className="ds-modal-preview">
              <div className="ds-modal-preview__backdrop" />
              <div className="ds-modal-preview__dialog">
                <div className="ds-modal-preview__header">
                  <strong>Детали заявки</strong>
                  <button type="button" className="ds-modal__close" aria-label="Закрыть">
                    <Icon name="close" size={18} />
                  </button>
                </div>
                <div className="ds-modal-preview__body">
                  Modal открыт и визуально отделён от основного интерфейса с помощью overlay.
                </div>
                <div className="ds-modal-preview__footer">
                  <Button variant="ghost">Отмена</Button>
                  <Button variant="primary">Продолжить</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="ds-demo-card">
            <h3>Открыто с предупреждением</h3>
            <div className="ds-modal-preview">
              <div className="ds-modal-preview__backdrop" />
              <div className="ds-modal-preview__dialog">
                <div className="ds-modal-preview__header">
                  <strong>Удалить черновик</strong>
                  <button type="button" className="ds-modal__close" aria-label="Закрыть">
                    <Icon name="close" size={18} />
                  </button>
                </div>
                <div className="ds-modal-preview__body">
                  <Notification variant="warning" title="Это действие повлияет на сохранённый прогресс">
                    <p>После удаления черновика восстановить введённые данные будет нельзя.</p>
                  </Notification>
                </div>
                <div className="ds-modal-preview__footer">
                  <Button variant="ghost">Оставить черновик</Button>
                  <Button variant="primary">Удалить</Button>
                </div>
              </div>
            </div>
            <p>
              Состояние warning усиливает внимание к риску и делает destructive action более осознанным.
            </p>
          </div>

          <div className="ds-demo-card">
            <h3>Иерархия действий</h3>
            <div className="ds-modal-preview">
              <div className="ds-modal-preview__backdrop" />
              <div className="ds-modal-preview__dialog">
                <div className="ds-modal-preview__header">
                  <strong>Подтвердить отправку</strong>
                  <button type="button" className="ds-modal__close" aria-label="Закрыть">
                    <Icon name="close" size={18} />
                  </button>
                </div>
                <div className="ds-modal-preview__body">
                  Primary action визуально выделено, а dismiss action остаётся вторичным.
                </div>
                <div className="ds-modal-preview__footer">
                  <Button variant="ghost">Проверить ещё раз</Button>
                  <Button variant="primary">Отправить</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>Ниже показаны разные сценарии применения modal с различающимся типом содержимого.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Сценарий подтверждения</h3>
            <div className="ds-modal-preview ds-modal-preview--compact">
              <div className="ds-modal-preview__backdrop" />
              <div className="ds-modal-preview__dialog">
                <div className="ds-modal-preview__header">
                  <strong>Удалить черновик</strong>
                  <button type="button" className="ds-modal__close" aria-label="Закрыть">
                    <Icon name="close" size={18} />
                  </button>
                </div>
                <div className="ds-modal-preview__body">
                  Вы действительно хотите удалить черновик? Это действие нельзя отменить.
                </div>
                <div className="ds-modal-preview__footer">
                  <Button variant="ghost">Отмена</Button>
                  <Button variant="primary">Удалить</Button>
                </div>
              </div>
            </div>
            <p>
              Подходит для действий, которые меняют данные и требуют явного подтверждения.
            </p>
          </div>

          <div className="ds-demo-card">
            <h3>Короткая форма</h3>
            <div className="ds-modal-preview ds-modal-preview--form">
              <div className="ds-modal-preview__backdrop" />
              <div className="ds-modal-preview__dialog">
                <div className="ds-modal-preview__header">
                  <strong>Запросить консультацию</strong>
                  <button type="button" className="ds-modal__close" aria-label="Закрыть">
                    <Icon name="close" size={18} />
                  </button>
                </div>
                <div className="ds-modal-preview__body">
                  <div className="ds-demo-column">
                    <label className="ds-field-label" htmlFor="example-name">
                      Имя
                    </label>
                    <input
                      id="example-name"
                      className="ds-input"
                      placeholder="Ваше полное имя"
                    />

                    <label className="ds-field-label" htmlFor="example-email">
                      Email
                    </label>
                    <input
                      id="example-email"
                      className="ds-input"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="ds-modal-preview__footer">
                  <Button variant="ghost">Отмена</Button>
                  <Button variant="primary">Отправить запрос</Button>
                </div>
              </div>
            </div>
            <p>
              Хороший сценарий для короткой формы, которая не требует отдельной страницы.
            </p>
          </div>

          <div className="ds-demo-card">
            <h3>Важное уведомление</h3>
            <div className="ds-modal-preview ds-modal-preview--notice">
              <div className="ds-modal-preview__backdrop" />
              <div className="ds-modal-preview__dialog">
                <div className="ds-modal-preview__header">
                  <strong>Срок подачи заявки изменён</strong>
                  <button type="button" className="ds-modal__close" aria-label="Закрыть">
                    <Icon name="close" size={18} />
                  </button>
                </div>
                <div className="ds-modal-preview__body">
                  <Notification variant="warning" title="Пожалуйста, ознакомьтесь с обновлёнными сроками">
                    <p>
                      Срок подачи документов изменён. Проверьте новый дедлайн и
                      убедитесь, что все файлы загружены заранее.
                    </p>
                  </Notification>
                </div>
                <div className="ds-modal-preview__footer">
                  <Button variant="primary">Понятно</Button>
                </div>
              </div>
            </div>
            <p>
              Используйте такой modal для важной информации, которую пользователь не должен пропустить.
            </p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте modal только для действительно важного и контекстно связанного контента.</li>
          <li>Не перегружайте modal длинными сценариями и сложной навигацией.</li>
          <li>Заголовок должен сразу объяснять цель окна.</li>
          <li>Footer должен ясно разделять primary action и dismiss action.</li>
          <li>Если контент требует длинного чтения или полноценной работы, лучше использовать отдельную страницу.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-note">
              Используйте modal для коротких, сфокусированных задач: подтверждение,
              одно важное сообщение или небольшая форма.
            </div>
            <ul className="ds-guidelines">
              <li>Делайте заголовок кратким и конкретным.</li>
              <li>Сохраняйте понятную иерархию действий.</li>
              <li>Используйте modal как временный слой, а не как отдельное приложение.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-note">
              Не превращайте modal в длинный многошаговый сценарий с перегруженным
              контентом, множеством полей и сложной вложенной логикой.
            </div>
            <ul className="ds-guidelines">
              <li>Не помещайте в modal слишком много информации.</li>
              <li>Не делайте несколько равноценных primary actions.</li>
              <li>Не используйте modal там, где отдельная страница будет яснее.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>open</code>, <code>title</code>,{' '}
          <code>children</code>, <code>onClose</code> и <code>footer</code>.
          В MVP modal реализован как controlled dialog с overlay и базовым
          dismiss behaviour через backdrop и кнопку закрытия.
        </div>
      </div>
    </section>
  )
}