import React from 'react'
import Accordion from '../components/ui/Accordion'

const previewItems = [
  {
    title: 'What documents are required?',
    content: (
      <p>
        Upload your passport copy, academic transcript and motivation letter
        before submitting the application.
      </p>
    ),
    defaultOpen: true,
  },
  {
    title: 'When will I receive a response?',
    content: (
      <p>
        Applications are usually reviewed within ten working days after all
        required documents are submitted.
      </p>
    ),
  },
]

const settingsItems = [
  {
    title: 'Profile settings',
    content: (
      <p>
        Manage personal information, contact details and account preferences in
        one place.
      </p>
    ),
  },
  {
    title: 'Notification settings',
    content: (
      <p>
        Choose which updates you want to receive by email and which alerts stay
        inside the product interface.
      </p>
    ),
    defaultOpen: true,
  },
  {
    title: 'Security settings',
    content: (
      <p>
        Update your password, enable two-factor authentication and review recent
        login activity.
      </p>
    ),
  },
]

export default function AccordionPage() {
  return (
    <section className="ds-section ds-section--accordion">
      <div className="ds-page-intro">
        <h2>Accordion</h2>
        <p>
          Accordion используется для показа и скрытия связанных блоков контента
          внутри ограниченного пространства. Компонент помогает структурировать
          длинные списки информации и раскрывать детали только тогда, когда они
          действительно нужны пользователю.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Disclosure</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, radius, border, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Preview</h3>
        <p>
          Accordion помогает показывать контент по запросу, не перегружая экран
          всеми деталями сразу.
        </p>

        <div className="ds-demo-card">
          <Accordion items={previewItems} />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Variants</h3>
        <p>Ниже показаны типичные сценарии использования accordion в документации и product UI.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>FAQ pattern</h3>
            <Accordion items={previewItems} />
          </div>

          <div className="ds-demo-card">
            <h3>Settings groups</h3>
            <Accordion items={settingsItems} />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Для accordion наиболее важны состояния collapsed и expanded, потому
          что именно они определяют, доступен ли пользователю скрытый контент.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Collapsed</h3>
            <Accordion
              items={[
                {
                  title: 'Application timeline',
                  content: (
                    <p>
                      The full review timeline becomes visible after the section
                      is expanded.
                    </p>
                  ),
                },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Expanded</h3>
            <Accordion
              items={[
                {
                  title: 'Application timeline',
                  content: (
                    <p>
                      The application is reviewed after document verification,
                      eligibility check and final approval.
                    </p>
                  ),
                  defaultOpen: true,
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Structure</h3>
        <p>
          Базовая структура accordion включает item container, trigger button,
          title, icon indicator и expandable content panel.
        </p>

        <div className="ds-demo-card">
          <Accordion
            items={[
              {
                title: 'Admission requirements',
                content: (
                  <p>
                    This panel contains detailed explanation, supporting text and
                    additional context for the selected topic.
                  </p>
                ),
                defaultOpen: true,
              },
            ]}
          />

          <ul className="ds-guidelines">
            <li>Каждый item должен иметь короткий и понятный заголовок.</li>
            <li>Trigger должен clearly indicate expandable behavior.</li>
            <li>Скрытый контент должен появляться только по запросу пользователя.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Examples</h3>
        <p>Accordion особенно полезен для FAQ, настроек, правил и длинных поясняющих блоков.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>FAQ</h3>
            <Accordion
              items={[
                {
                  title: 'Can I edit my application after submission?',
                  content: (
                    <p>
                      Changes are available until the final submission deadline.
                    </p>
                  ),
                },
                {
                  title: 'How do I upload missing documents?',
                  content: (
                    <p>
                      Open your application dashboard and use the upload section
                      in the required documents block.
                    </p>
                  ),
                },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Policies</h3>
            <Accordion
              items={[
                {
                  title: 'Attendance policy',
                  content: (
                    <p>
                      Students are expected to attend all required sessions and
                      notify the program coordinator about justified absence.
                    </p>
                  ),
                },
                {
                  title: 'Assessment policy',
                  content: (
                    <p>
                      Final grades combine coursework, participation and end-of-term evaluation.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте accordion для связанных блоков вторичного или подробного контента.</li>
          <li>Не скрывайте внутри accordion критически важную информацию, которую нужно видеть сразу.</li>
          <li>Заголовки должны быть короткими, понятными и сканируемыми.</li>
          <li>Используйте accordion там, где действительно есть смысл в progressive disclosure.</li>
          <li>Не перегружайте один item слишком большим количеством сложного контента.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-card">
              <Accordion
                items={[
                  {
                    title: 'Required documents',
                    content: (
                      <p>
                        Upload a passport copy, academic transcript and language
                        certificate before the deadline.
                      </p>
                    ),
                    defaultOpen: true,
                  },
                ]}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Пишите ясные, конкретные заголовки.</li>
              <li>Используйте accordion для logically grouped details.</li>
              <li>Делайте раскрываемый контент кратким и полезным.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-card">
              <Accordion
                items={[
                  {
                    title: 'Click here to see many different things that may or may not be useful',
                    content: (
                      <p>
                        This item uses a vague title and does not help the user
                        predict what is hidden inside the panel.
                      </p>
                    ),
                    defaultOpen: true,
                  },
                ]}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Не делайте заголовки размытыми и слишком длинными.</li>
              <li>Не используйте accordion как контейнер для несвязанных тем.</li>
              <li>Не прячьте essential content без причины.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>items</code>, где каждый item содержит{' '}
          <code>title</code>, <code>content</code> и optional{' '}
          <code>defaultOpen</code>. В MVP accordion реализован как простой
          disclosure pattern с независимым раскрытием каждого item.
        </div>
      </div>
    </section>
  )
}