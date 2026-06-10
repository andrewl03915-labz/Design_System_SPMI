import React, { useState } from 'react'
import Modal from '../components/ui/Modal'
import Button from '../components/ui/Button'
import Notification from '../components/ui/Notification'

export default function ModalPage() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section className="ds-section ds-section--modal">
      <div className="ds-page-intro">
        <h2>Modal</h2>
        <p>
          Modal используется для временного вывода важного контента поверх
          текущего интерфейса. Компонент помогает сфокусировать внимание на
          подтверждении действия, короткой форме или важном сообщении без
          перехода на отдельную страницу.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Overlay</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, radius, border, shadow, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Structure</h3>
        <p>
          Базовая структура modal состоит из overlay, dialog container, header,
          body и optional footer with actions.
        </p>

        <div className="ds-demo-card">
          <div className="ds-demo-row">
            <Button variant="primary" onClick={() => setIsPreviewOpen(true)}>
              Open modal
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
          title="Application details"
          onClose={() => setIsPreviewOpen(false)}
          footer={
            <>
              <Button variant="ghost" onClick={() => setIsPreviewOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsPreviewOpen(false)}>
                Continue
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
        <h3>Variants</h3>
        <p>Ниже показаны типичные сценарии использования modal в системном интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Confirmation</h3>
            <Button variant="secondary" onClick={() => setIsConfirmOpen(true)}>
              Open confirmation modal
            </Button>
          </div>

          <div className="ds-demo-card">
            <h3>Form modal</h3>
            <Button variant="primary" onClick={() => setIsFormOpen(true)}>
              Open form modal
            </Button>
          </div>
        </div>

        <Modal
          open={isConfirmOpen}
          title="Delete draft"
          onClose={() => setIsConfirmOpen(false)}
          footer={
            <>
              <Button variant="ghost" onClick={() => setIsConfirmOpen(false)}>
                Keep draft
              </Button>
              <Button variant="primary" onClick={() => setIsConfirmOpen(false)}>
                Delete
              </Button>
            </>
          }
        >
          <Notification variant="warning" title="This action affects saved progress">
            <p>После удаления черновика восстановить введённые данные будет нельзя.</p>
          </Notification>
        </Modal>

        <Modal
          open={isFormOpen}
          title="Request consultation"
          onClose={() => setIsFormOpen(false)}
          footer={
            <>
              <Button variant="ghost" onClick={() => setIsFormOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsFormOpen(false)}>
                Send request
              </Button>
            </>
          }
        >
          <div className="ds-demo-column">
            <label className="ds-field-label" htmlFor="modal-name">
              Name
            </label>
            <input
              id="modal-name"
              className="ds-input"
              placeholder="Your full name"
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
  <h3>States</h3>
  <p>
    Для modal особенно важны closed-state, open-state, dismiss pattern и
    action hierarchy. В документации состояния должны различаться не только
    описанием, но и самой структурой демонстрации.
  </p>

  <div className="ds-demo-column">
    <div className="ds-demo-card">
      <h3>Closed</h3>
      <div className="ds-demo-row">
        <Button variant="secondary">Open modal</Button>
      </div>
      <p>
        В закрытом состоянии пользователь видит только trigger, а основной
        контент страницы остаётся полностью доступным.
      </p>
    </div>

    <div className="ds-demo-card">
      <h3>Open</h3>
      <div className="ds-modal-preview">
        <div className="ds-modal-preview__backdrop" />
        <div className="ds-modal-preview__dialog">
          <div className="ds-modal-preview__header">
            <strong>Application details</strong>
            <span>×</span>
          </div>
          <div className="ds-modal-preview__body">
            Modal открыт и визуально отделён от основного интерфейса через overlay.
          </div>
          <div className="ds-modal-preview__footer">
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Continue</Button>
          </div>
        </div>
      </div>
    </div>

    <div className="ds-demo-card">
      <h3>Open with warning</h3>
      <div className="ds-modal-preview">
        <div className="ds-modal-preview__backdrop" />
        <div className="ds-modal-preview__dialog">
          <div className="ds-modal-preview__header">
            <strong>Delete draft</strong>
            <span>×</span>
          </div>
          <div className="ds-modal-preview__body">
            <Notification variant="warning" title="This action affects saved progress">
              <p>После удаления черновика восстановить введённые данные будет нельзя.</p>
            </Notification>
          </div>
          <div className="ds-modal-preview__footer">
            <Button variant="ghost">Keep draft</Button>
            <Button variant="primary">Delete</Button>
          </div>
        </div>
      </div>
      <p>
        Warning-state усиливает внимание к риску и делает destructive action более осознанным.
      </p>
    </div>

    <div className="ds-demo-card">
      <h3>Action hierarchy</h3>
      <div className="ds-modal-preview">
        <div className="ds-modal-preview__backdrop" />
        <div className="ds-modal-preview__dialog">
          <div className="ds-modal-preview__header">
            <strong>Confirm submission</strong>
            <span>×</span>
          </div>
          <div className="ds-modal-preview__body">
            Primary action визуально выделен, а dismiss action остаётся вторичным.
          </div>
          <div className="ds-modal-preview__footer">
            <Button variant="ghost">Review again</Button>
            <Button variant="primary">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="ds-section-block">
  <h3>Examples</h3>
  <p>Ниже показаны разные сценарии применения modal с различающимся типом содержимого.</p>

  <div className="ds-demo-column">
    <div className="ds-demo-card">
      <h3>Confirmation flow</h3>
      <div className="ds-modal-preview ds-modal-preview--compact">
        <div className="ds-modal-preview__backdrop" />
        <div className="ds-modal-preview__dialog">
          <div className="ds-modal-preview__header">
            <strong>Delete draft</strong>
            <span>×</span>
          </div>
          <div className="ds-modal-preview__body">
            Вы действительно хотите удалить черновик? Это действие нельзя отменить.
          </div>
          <div className="ds-modal-preview__footer">
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Delete</Button>
          </div>
        </div>
      </div>
      <p>
        Подходит для действий, которые меняют данные и требуют явного подтверждения.
      </p>
    </div>

    <div className="ds-demo-card">
      <h3>Short task form</h3>
      <div className="ds-modal-preview ds-modal-preview--form">
        <div className="ds-modal-preview__backdrop" />
        <div className="ds-modal-preview__dialog">
          <div className="ds-modal-preview__header">
            <strong>Request consultation</strong>
            <span>×</span>
          </div>
          <div className="ds-modal-preview__body">
            <div className="ds-demo-column">
              <label className="ds-field-label" htmlFor="example-name">
                Name
              </label>
              <input
                id="example-name"
                className="ds-input"
                placeholder="Your full name"
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
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Send request</Button>
          </div>
        </div>
      </div>
      <p>
        Хороший сценарий для короткой формы, которая не требует отдельной страницы.
      </p>
    </div>

    <div className="ds-demo-card">
      <h3>Important notice</h3>
      <div className="ds-modal-preview ds-modal-preview--notice">
        <div className="ds-modal-preview__backdrop" />
        <div className="ds-modal-preview__dialog">
          <div className="ds-modal-preview__header">
            <strong>Application deadline updated</strong>
            <span>×</span>
          </div>
          <div className="ds-modal-preview__body">
            <Notification variant="warning" title="Please review the updated timeline">
              <p>
                Срок подачи документов изменён. Проверьте новый дедлайн и
                убедитесь, что все файлы загружены заранее.
              </p>
            </Notification>
          </div>
          <div className="ds-modal-preview__footer">
            <Button variant="primary">Understood</Button>
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
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте modal только для действительно важного и контекстно связанного контента.</li>
          <li>Не перегружайте modal длинными сценариями и сложной навигацией.</li>
          <li>Заголовок должен сразу объяснять цель окна.</li>
          <li>Footer должен ясно разделять primary action и dismiss action.</li>
          <li>Если контент требует длинного чтения или полноценной работы, лучше использовать отдельную страницу.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-note">
              Используйте modal для коротких, сфокусированных задач: подтверждение,
              одно важное сообщение или небольшая форма.
            </div>
            <ul className="ds-guidelines">
              <li>Делайте заголовок кратким и конкретным.</li>
              <li>Сохраняйте понятную action hierarchy.</li>
              <li>Используйте modal как временный слой, а не как отдельное приложение.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
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
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>open</code>, <code>title</code>,{' '}
          <code>children</code>, <code>onClose</code> и <code>footer</code>.
          В MVP modal реализован как controlled dialog с overlay и базовым
          dismiss behaviour через backdrop и close-button.
        </div>
      </div>
    </section>
  )
}
