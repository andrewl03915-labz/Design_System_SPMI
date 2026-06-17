import FileUploader from '../components/ui/FileUploader'

export default function FileUploaderPage() {
  return (
    <section className="ds-section ds-section--file-uploader">
      <div className="ds-page-intro">
        <h2>Загрузка файлов</h2>
        <p>
          File uploader используется для загрузки документов, изображений и
          других файлов внутри формы или рабочего процесса. Компонент помогает
          ясно показать точку загрузки, допустимые форматы и текущее состояние
          выбранного файла.
        </p>

      </div>

      <div className="ds-section-block">
        <h3>Превью</h3>
        <p>
          File uploader объединяет загрузку по клику и drag-and-drop в одном
          понятном контейнере.
        </p>

        <div className="ds-demo-card">
          <FileUploader
            label="Копия паспорта"
            helperText="PDF, JPG или PNG до 10 МБ."
            accept=".pdf,.jpg,.jpeg,.png"
            maxSize={10 * 1024 * 1024}
          />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Варианты</h3>
        <p>Ниже показаны типичные варианты использования uploader в интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <FileUploader
              label="Загрузить документ"
              helperText="PDF или DOCX до 5 МБ."
              accept=".pdf,.doc,.docx"
              maxSize={5 * 1024 * 1024}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Загрузка изображения</h3>
            <FileUploader
              label="Фотография профиля"
              helperText="JPG или PNG до 3 МБ."
              accept=".jpg,.jpeg,.png"
              maxSize={3 * 1024 * 1024}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <FileUploader
              label="Архивная загрузка"
              helperText="Загрузка файлов сейчас недоступна."
              disabled
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Для file uploader особенно важны состояния по умолчанию, активного
          перетаскивания, выбранного файла, ошибки и недоступности, потому что
          они объясняют пользователю, что можно сделать и что уже произошло.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <FileUploader
              label="Вложение к заявке"
              helperText="PDF до 10 МБ."
              accept=".pdf"
              maxSize={10 * 1024 * 1024}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Ошибка</h3>
            <FileUploader
              label="Обязательный документ"
              helperText="PDF до 10 МБ."
              error="Этот тип файла не поддерживается. Пожалуйста, загрузите документ в формате PDF."
              accept=".pdf"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <FileUploader
              label="Финальная загрузка"
              helperText="После отправки формы загрузка блокируется."
              disabled
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура uploader включает label, скрытое поле выбора файла,
          контейнер dropzone, иконку загрузки, заголовок, вспомогательный текст
          и сообщение об ошибке.
        </p>

        <div className="ds-demo-card">
          <FileUploader
            label="Академическая справка"
            helperText="Только PDF, не более 10 МБ."
            accept=".pdf"
            maxSize={10 * 1024 * 1024}
          />

          <ul className="ds-guidelines">
            <li>Label должен ясно объяснять, какой файл требуется загрузить.</li>
            <li>Helper text должен указывать допустимые форматы и ограничения.</li>
            <li>Dropzone должен быть достаточно заметным и доступным для клика с клавиатуры.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>Компонент особенно полезен в заявках, профилях, настройках и административных формах.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Форма заявки</h3>
            <FileUploader
              label="Мотивационное письмо"
              helperText="PDF или DOCX до 5 МБ."
              accept=".pdf,.doc,.docx"
              maxSize={5 * 1024 * 1024}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Настройки аккаунта</h3>
            <FileUploader
              label="Изображение профиля"
              helperText="PNG или JPG до 3 МБ."
              accept=".png,.jpg,.jpeg"
              maxSize={3 * 1024 * 1024}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Сценарий верификации</h3>
            <FileUploader
              label="Документ, удостоверяющий личность"
              helperText="PDF, JPG или PNG до 10 МБ."
              accept=".pdf,.jpg,.jpeg,.png"
              maxSize={10 * 1024 * 1024}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте file uploader, когда пользователю нужно прикрепить файл к текущему процессу.</li>
          <li>Всегда указывайте допустимые форматы и ограничения по размеру.</li>
          <li>Ошибка должна объяснять, что именно нужно исправить.</li>
          <li>Не полагайтесь только на drag-and-drop, всегда оставляйте загрузку по клику.</li>
          <li>Компонент должен быть встроен в контекст формы, а не существовать изолированно без пояснений.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-card">
              <FileUploader
                label="Загрузить диплом"
                helperText="Только PDF, до 10 МБ."
                accept=".pdf"
                maxSize={10 * 1024 * 1024}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Уточняйте формат, размер и назначение файла.</li>
              <li>Делайте dropzone визуально заметной и понятной.</li>
              <li>Поддерживайте и клик, и drag-and-drop.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-card">
              <p>
                Загрузите что-нибудь сюда.
              </p>
            </div>
            <ul className="ds-guidelines">
              <li>Не используйте размытые и неинформативные подписи.</li>
              <li>Не скрывайте допустимые форматы файла.</li>
              <li>Не делайте uploader понятным только за счёт иконки.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>label</code>, <code>helperText</code>,{' '}
          <code>accept</code>, <code>error</code>, <code>disabled</code> и{' '}
          <code>onChange</code>. В MVP file uploader реализован как single-file
          field с поддержкой загрузки по клику и drag-and-drop в одном контейнере.
        </div>
      </div>
    </section>
  )
}