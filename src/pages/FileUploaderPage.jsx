import React from 'react'
import FileUploader from '../components/ui/FileUploader'

export default function FileUploaderPage() {
  return (
    <section className="ds-section ds-section--file-uploader">
      <div className="ds-page-intro">
        <h2>File uploader</h2>
        <p>
          File uploader используется для загрузки документов, изображений и
          других файлов внутри формы или рабочего процесса. Компонент помогает
          ясно показать точку загрузки, допустимые форматы и текущее состояние
          выбранного файла.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Form</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, radius, border, text, shadow</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Preview</h3>
        <p>
          File uploader объединяет click-to-upload и drag-and-drop в одном
          понятном контейнере.
        </p>

        <div className="ds-demo-card">
          <FileUploader
            label="Passport copy"
            helperText="PDF, JPG or PNG up to 10 MB."
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Variants</h3>
        <p>Ниже показаны типичные варианты использования uploader в интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Default</h3>
            <FileUploader
              label="Upload document"
              helperText="PDF or DOCX up to 5 MB."
              accept=".pdf,.doc,.docx"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Image upload</h3>
            <FileUploader
              label="Profile photo"
              helperText="JPG or PNG up to 3 MB."
              accept=".jpg,.jpeg,.png"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <FileUploader
              label="Archived upload"
              helperText="Uploading is currently unavailable."
              disabled
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Для file uploader особенно важны default, drag-active, selected,
          error и disabled states, потому что они объясняют пользователю, что
          можно сделать и что уже произошло.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Default</h3>
            <FileUploader
              label="Application attachment"
              helperText="PDF up to 10 MB."
              accept=".pdf"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Error</h3>
            <FileUploader
              label="Required document"
              helperText="PDF up to 10 MB."
              error="This file type is not supported. Please upload a PDF document."
              accept=".pdf"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <FileUploader
              label="Final upload"
              helperText="Uploads are locked after submission."
              disabled
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Structure</h3>
        <p>
          Базовая структура uploader включает label, hidden file input,
          dropzone container, upload icon, title, helper text и error message.
        </p>

        <div className="ds-demo-card">
          <FileUploader
            label="Transcript"
            helperText="PDF only, maximum 10 MB."
            accept=".pdf"
          />

          <ul className="ds-guidelines">
            <li>Label должен ясно объяснять, какой файл требуется загрузить.</li>
            <li>Helper text должен указывать допустимые форматы и ограничения.</li>
            <li>Dropzone должен быть достаточно заметным и доступным для клика с клавиатуры.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Examples</h3>
        <p>Компонент особенно полезен в заявках, профилях, настройках и административных формах.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Application form</h3>
            <FileUploader
              label="Motivation letter"
              helperText="PDF or DOCX up to 5 MB."
              accept=".pdf,.doc,.docx"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Account settings</h3>
            <FileUploader
              label="Profile image"
              helperText="PNG or JPG up to 3 MB."
              accept=".png,.jpg,.jpeg"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Verification flow</h3>
            <FileUploader
              label="Identity document"
              helperText="PDF, JPG or PNG up to 10 MB."
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте file uploader, когда пользователю нужно прикрепить файл к текущему процессу.</li>
          <li>Всегда указывайте допустимые форматы и ограничения по размеру.</li>
          <li>Ошибка должна объяснять, что именно нужно исправить.</li>
          <li>Не полагайтесь только на drag-and-drop, всегда оставляйте click-to-upload.</li>
          <li>Компонент должен быть встроен в контекст формы, а не существовать изолированно без пояснений.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-card">
              <FileUploader
                label="Upload diploma"
                helperText="PDF only, up to 10 MB."
                accept=".pdf"
              />
            </div>
            <ul className="ds-guidelines">
              <li>Уточняйте формат, размер и назначение файла.</li>
              <li>Делайте dropzone визуально заметной и понятной.</li>
              <li>Поддерживайте и клик, и drag-and-drop.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-card">
              <p>
                Upload something here.
              </p>
            </div>
            <ul className="ds-guidelines">
              <li>Не используйте размытые и неинформативные подписи.</li>
              <li>Не скрывайте допустимые форматы файла.</li>
              <li>Не делайте uploader единственным понятным только через иконку.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>label</code>, <code>helperText</code>,{' '}
          <code>accept</code>, <code>error</code>, <code>disabled</code> и{' '}
          <code>onChange</code>. В MVP file uploader реализован как single-file
          field с click-to-upload и drag-and-drop support в одном контейнере.
        </div>
      </div>
    </section>
  )
}