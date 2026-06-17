import { useState } from 'react'
import Search from '../components/ui/Search'

export default function SearchPage() {
  // у каждого примера — своё независимое значение строки поиска
  const [queries, setQueries] = useState({
    preview: 'Дизайн-система',
    variantsDefault: 'Кнопка',
    variantsEmpty: '',
    statesEmpty: '',
    statesFilled: 'Стипендия',
    structure: 'Заявка',
    exTable: 'Заявка',
    exDocs: 'Пагинация',
    exUsers: '',
    recommend: 'Токены',
  })

  const setQuery = (key) => (value) => setQueries((prev) => ({ ...prev, [key]: value }))

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
      </div>

      <div className="ds-section-block">
        <h3>Предпросмотр</h3>
        <p>
          Search помогает быстро ввести поисковый запрос и управлять его
          состоянием в одном компактном поле.
        </p>

        <div className="ds-demo-card">
          <Search
            value={queries.preview}
            onChange={setQuery('preview')}
            placeholder="Поиск компонентов"
          />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Варианты</h3>
        <p>Ниже показаны типичные варианты использования поля поиска в интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <Search
              value={queries.variantsDefault}
              onChange={setQuery('variantsDefault')}
              placeholder="Поиск компонентов"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Пустое состояние</h3>
            <Search
              value={queries.variantsEmpty}
              onChange={setQuery('variantsEmpty')}
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
          Для search особенно важны пустое, заполненное состояния, фокус и
          недоступность, потому что они напрямую влияют на ввод запроса и
          восприятие доступности действия.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Пусто</h3>
            <Search
              value={queries.statesEmpty}
              onChange={setQuery('statesEmpty')}
              placeholder="Поиск студентов"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Заполнено</h3>
            <Search
              value={queries.statesFilled}
              onChange={setQuery('statesFilled')}
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
            value={queries.structure}
            onChange={setQuery('structure')}
            placeholder="Поиск заявок"
          />

          <ul className="ds-guidelines">
            <li>Поле поиска должно ясно обозначать назначение через placeholder или label.</li>
            <li>Иконка помогает быстро распознать сценарий поиска.</li>
            <li>Действие очистки полезно, когда запрос уже введён и его нужно быстро сбросить.</li>
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
              value={queries.exTable}
              onChange={setQuery('exTable')}
              placeholder="Поиск заявок"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Поиск по документации</h3>
            <Search
              value={queries.exDocs}
              onChange={setQuery('exDocs')}
              placeholder="Поиск по документации"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Каталог пользователей</h3>
            <Search
              value={queries.exUsers}
              onChange={setQuery('exUsers')}
              placeholder="Поиск пользователей"
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте search для быстрого поиска по большому набору элементов.</li>
          <li>Не подменяйте search обычным полем ввода, если у поля есть отдельный сценарий поиска.</li>
          <li>Placeholder должен подсказывать, что именно можно искать.</li>
          <li>Действие очистки должно быть доступно только когда значение непустое.</li>
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
                value={queries.recommend}
                onChange={setQuery('recommend')}
                placeholder="Поиск по документации"
              />
            </div>
            <ul className="ds-guidelines">
              <li>Делайте поиск сфокусированным и понятным.</li>
              <li>Уточняйте область поиска через placeholder.</li>
              <li>Показывайте действие очистки только при наличии значения.</li>
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
              <li>Не делайте поле визуально неотличимым от обычного поля ввода.</li>
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
          реализован как управляемое поле ввода с ведущей иконкой и необязательным
          действием очистки.
        </div>
      </div>
    </section>
  )
}
