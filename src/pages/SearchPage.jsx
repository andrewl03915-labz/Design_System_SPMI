import React, { useState } from 'react'
import Search from '../components/ui/Search'

export default function SearchPage() {
  const [query, setQuery] = useState('Design system')
  const [emptyQuery, setEmptyQuery] = useState('')
  const [tableQuery, setTableQuery] = useState('Application')

  return (
    <section className="ds-section ds-section--search">
      <div className="ds-page-intro">
        <h2>Поиск</h2>
        <p>
          Search используется для быстрого поиска по спискам, разделам,
          документам и наборам данных внутри интерфейса. Компонент помогает
          пользователю быстро уточнить набор результатов и сократить время на
          навигацию по большому объёму контента.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Категория: Поле ввода / Утилита</span>
          <span className="ds-meta-item">Статус: Готово</span>
          <span className="ds-meta-item">Токены: color, spacing, radius, border, text, shadow</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Предпросмотр</h3>
        <p>
          Search помогает быстро ввести поисковый запрос и управлять его
          состоянием в одном компактном поле.
        </p>

        <div className="ds-demo-card">
          <Search
            value={query}
            onChange={setQuery}
            placeholder="Поиск компонентов"
          />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Варианты</h3>
        <p>Ниже показаны типичные варианты использования search field в интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <Search
              value={query}
              onChange={setQuery}
              placeholder="Поиск компонентов"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Пустое состояние</h3>
            <Search
              value={emptyQuery}
              onChange={setEmptyQuery}
              placeholder="Поиск по документации"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <Search
              value="Поиск недоступен"
              onChange={() => {}}
              placeholder="Поиск"
              disabled
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Для search особенно важны empty, filled, focus и disabled states,
          потому что они напрямую влияют на ввод запроса и восприятие доступности
          действия.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Пусто</h3>
            <Search
              value=""
              onChange={() => {}}
              placeholder="Поиск студентов"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Заполнено</h3>
            <Search
              value="Scholarship"
              onChange={() => {}}
              placeholder="Поиск студентов"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <Search
              value="Архивный поиск"
              onChange={() => {}}
              placeholder="Поиск студентов"
              disabled
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура search включает контейнер поля, ведущую иконку, поле
          ввода и необязательное действие очистки.
        </p>

        <div className="ds-demo-card">
          <Search
            value={tableQuery}
            onChange={setTableQuery}
            placeholder="Поиск заявок"
          />

          <ul className="ds-guidelines">
            <li>Search должен clearly indicate назначение поля через placeholder или label.</li>
            <li>Иконка помогает быстро распознать search pattern.</li>
            <li>Clear action полезен, когда запрос уже введён и его нужно быстро сбросить.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>Компонент особенно полезен в таблицах, документации, списках и административных интерфейсах.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Фильтр таблицы</h3>
            <Search
              value={tableQuery}
              onChange={setTableQuery}
              placeholder="Поиск заявок"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Поиск по документации</h3>
            <Search
              value="Pagination"
              onChange={() => {}}
              placeholder="Поиск по документации"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Каталог пользователей</h3>
            <Search
              value=""
              onChange={() => {}}
              placeholder="Поиск пользователей"
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте search для быстрого поиска по большому набору элементов.</li>
          <li>Не подменяйте search обычным input, если у поля есть отдельный сценарий поиска.</li>
          <li>Placeholder должен подсказывать, что именно можно искать.</li>
          <li>Clear action должен быть доступен только когда значение непустое.</li>
          <li>Search помогает уточнять результаты, но не заменяет полноценную навигацию.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-card">
              <Search
                value="Design tokens"
                onChange={() => {}}
                placeholder="Поиск по документации"
              />
            </div>
            <ul className="ds-guidelines">
              <li>Делайте search сфокусированным и понятным.</li>
              <li>Уточняйте область поиска через placeholder.</li>
              <li>Показывайте clear action только при наличии значения.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-card">
              <p>
                Поле ввода без иконки поиска, с расплывчатым placeholder и без
                ясного сценария того, что именно ищет пользователь.
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
        <h3>Примечание по реализации</h3>
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