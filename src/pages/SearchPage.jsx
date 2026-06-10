import React, { useState } from 'react'
import Search from '../components/ui/Search'

export default function SearchPage() {
  const [query, setQuery] = useState('Design system')
  const [emptyQuery, setEmptyQuery] = useState('')
  const [tableQuery, setTableQuery] = useState('Application')

  return (
    <section className="ds-section ds-section--search">
      <div className="ds-page-intro">
        <h2>Search</h2>
        <p>
          Search используется для быстрого поиска по спискам, разделам,
          документам и наборам данных внутри интерфейса. Компонент помогает
          пользователю быстро уточнить набор результатов и сократить время на
          навигацию по большому объёму контента.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Input / Utility</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, radius, border, text, shadow</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Preview</h3>
        <p>
          Search помогает быстро ввести поисковый запрос и управлять его
          состоянием в одном компактном поле.
        </p>

        <div className="ds-demo-card">
          <Search
            value={query}
            onChange={setQuery}
            placeholder="Search components"
          />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Variants</h3>
        <p>Ниже показаны типичные варианты использования search field в интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Default</h3>
            <Search
              value={query}
              onChange={setQuery}
              placeholder="Search components"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Empty state</h3>
            <Search
              value={emptyQuery}
              onChange={setEmptyQuery}
              placeholder="Search documentation"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <Search
              value="Search unavailable"
              onChange={() => {}}
              placeholder="Search"
              disabled
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Для search особенно важны empty, filled, focus и disabled states,
          потому что они напрямую влияют на ввод запроса и восприятие доступности
          действия.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Empty</h3>
            <Search
              value=""
              onChange={() => {}}
              placeholder="Search students"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Filled</h3>
            <Search
              value="Scholarship"
              onChange={() => {}}
              placeholder="Search students"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <Search
              value="Archived search"
              onChange={() => {}}
              placeholder="Search students"
              disabled
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Structure</h3>
        <p>
          Базовая структура search включает field container, leading icon, input
          field и optional clear action.
        </p>

        <div className="ds-demo-card">
          <Search
            value={tableQuery}
            onChange={setTableQuery}
            placeholder="Search applications"
          />

          <ul className="ds-guidelines">
            <li>Search должен clearly indicate назначение поля через placeholder или label.</li>
            <li>Иконка помогает быстро распознать search pattern.</li>
            <li>Clear action полезен, когда запрос уже введён и его нужно быстро сбросить.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Examples</h3>
        <p>Компонент особенно полезен в таблицах, документации, списках и административных интерфейсах.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Table filter</h3>
            <Search
              value={tableQuery}
              onChange={setTableQuery}
              placeholder="Search applications"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Documentation search</h3>
            <Search
              value="Pagination"
              onChange={() => {}}
              placeholder="Search documentation"
            />
          </div>

          <div className="ds-demo-card">
            <h3>User directory</h3>
            <Search
              value=""
              onChange={() => {}}
              placeholder="Search users"
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте search для быстрого поиска по большому набору элементов.</li>
          <li>Не подменяйте search обычным input, если у поля есть отдельный сценарий поиска.</li>
          <li>Placeholder должен подсказывать, что именно можно искать.</li>
          <li>Clear action должен быть доступен только когда значение непустое.</li>
          <li>Search помогает уточнять результаты, но не заменяет полноценную навигацию.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-card">
              <Search
                value="Design tokens"
                onChange={() => {}}
                placeholder="Search documentation"
              />
            </div>
            <ul className="ds-guidelines">
              <li>Делайте search focused и понятным.</li>
              <li>Уточняйте область поиска через placeholder.</li>
              <li>Показывайте clear action только при наличии значения.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-card">
              <p>
                Input without search icon, vague placeholder and no clear pattern
                of what the user is searching for.
              </p>
            </div>
            <ul className="ds-guidelines">
              <li>Не делайте поле визуально неотличимым от generic input.</li>
              <li>Не используйте слишком общий placeholder.</li>
              <li>Не скрывайте сценарий использования search от пользователя.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>value</code>, <code>onChange</code>,{' '}
          <code>placeholder</code> и <code>disabled</code>. В MVP search
          реализован как controlled input pattern с leading icon и optional
          clear action.
        </div>
      </div>
    </section>
  )
}