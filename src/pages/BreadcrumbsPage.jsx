import React from 'react'
import Breadcrumbs from '../components/ui/Breadcrumbs'

const simpleItems = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Breadcrumbs' },
]

const nestedItems = [
  { label: 'Home', href: '#' },
  { label: 'Admissions', href: '#' },
  { label: 'Applications', href: '#' },
  { label: 'Application details' },
]

const settingsItems = [
  { label: 'Home', href: '#' },
  { label: 'Account', href: '#' },
  { label: 'Security settings' },
]

export default function BreadcrumbsPage() {
  return (
    <section className="ds-section ds-section--breadcrumbs">
      <div className="ds-page-intro">
        <h2>Breadcrumbs</h2>
        <p>
          Breadcrumbs показывают путь пользователя внутри иерархии интерфейса и
          помогают быстро понять текущий уровень навигации. Компонент особенно
          полезен в разделах с вложенной структурой, где важно сохранить
          ориентацию и быстрый возврат на предыдущие уровни.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Navigation</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Preview</h3>
        <p>
          Breadcrumbs должны кратко и ясно показывать путь без перегрузки
          интерфейса.
        </p>

        <div className="ds-demo-card">
          <Breadcrumbs items={simpleItems} />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Variants</h3>
        <p>Ниже показаны типичные варианты breadcrumb navigation для разных уровней вложенности.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Three-level path</h3>
            <Breadcrumbs items={simpleItems} />
          </div>

          <div className="ds-demo-card">
            <h3>Deeper hierarchy</h3>
            <Breadcrumbs items={nestedItems} />
          </div>

          <div className="ds-demo-card">
            <h3>Custom separator</h3>
            <Breadcrumbs items={settingsItems} separator="›" />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Для breadcrumbs важнее не interactive states в стиле кнопки, а ясное
          различие между linked ancestors и current page.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Linked ancestors</h3>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '#' },
                { label: 'Programs', href: '#' },
                { label: 'Design' },
              ]}
            />
            <p>
              Предыдущие уровни представлены как ссылки и позволяют быстро
              вернуться назад по иерархии.
            </p>
          </div>

          <div className="ds-demo-card">
            <h3>Current page</h3>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '#' },
                { label: 'Documents', href: '#' },
                { label: 'Upload files' },
              ]}
            />
            <p>
              Последний элемент обозначает текущую страницу и не должен выглядеть
              как обычная ссылка.
            </p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Structure</h3>
        <p>
          Базовая структура breadcrumb состоит из navigation wrapper, ordered list,
          linked items, separator и current item.
        </p>

        <div className="ds-demo-card">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '#' },
              { label: 'Students', href: '#' },
              { label: 'Profile', href: '#' },
              { label: 'Edit profile' },
            ]}
          />

          <ul className="ds-guidelines">
            <li>Breadcrumbs должны отражать реальную навигационную иерархию.</li>
            <li>Последний элемент обозначает текущую страницу.</li>
            <li>Предыдущие уровни должны быть короткими и понятными.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Examples</h3>
        <p>Компонент особенно полезен в сложных, вложенных и административных интерфейсах.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Admissions flow</h3>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '#' },
                { label: 'Admissions', href: '#' },
                { label: 'Applications', href: '#' },
                { label: 'Review application' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Account settings</h3>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '#' },
                { label: 'Account', href: '#' },
                { label: 'Preferences', href: '#' },
                { label: 'Notifications' },
              ]}
              separator="›"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Content hierarchy</h3>
            <Breadcrumbs
              items={[
                { label: 'Library', href: '#' },
                { label: 'Guides', href: '#' },
                { label: 'Design system', href: '#' },
                { label: 'Navigation patterns' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте breadcrumbs там, где есть реальная иерархия уровней.</li>
          <li>Не применяйте компонент для плоской навигации без вложенности.</li>
          <li>Последний элемент должен обозначать текущую страницу, а не дублировать link-state.</li>
          <li>Подписи должны быть короткими и понятными.</li>
          <li>Breadcrumbs дополняют page title, а не заменяют его.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-card">
              <Breadcrumbs
                items={[
                  { label: 'Home', href: '#' },
                  { label: 'Programs', href: '#' },
                  { label: 'Master’s degree' },
                ]}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Показывайте понятный и последовательный путь.</li>
              <li>Сохраняйте короткие названия разделов.</li>
              <li>Используйте current item как финальную точку пути.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-card">
                <div className="ds-breadcrumbs-demo ds-breadcrumbs-demo--bad">
              <p>
                Home / Very long section name that behaves like a page subtitle /
                Another verbose navigation level / Current page title
              </p>
            </div>
            </div>
            <ul className="ds-guidelines">
              <li>Не делайте breadcrumb длинным и шумным.</li>
              <li>Не используйте его вместо локального меню.</li>
              <li>Не превращайте current item в обычную ссылку.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>items</code> и optional <code>separator</code>.
          Каждый item может содержать <code>label</code> и <code>href</code>.
          Последний элемент считается текущей страницей и получает{' '}
          <code>aria-current="page"</code>.
        </div>
      </div>
    </section>
  )
}