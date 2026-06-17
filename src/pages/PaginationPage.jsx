import { useState } from 'react'
import Pagination from '../components/ui/Pagination'

export default function PaginationPage() {
  // у каждого примера — своя независимая текущая страница
  const [pages, setPages] = useState({
    preview: 2,
    list: 2,
    big: 4,
    first: 1,
    statesCurrent: 3,
    statesStart: 1,
    statesEnd: 5,
    structure: 2,
    exTable: 4,
    exSearch: 2,
    exArchive: 4,
    recommend: 3,
  })

  const setPage = (key) => (value) => setPages((prev) => ({ ...prev, [key]: value }))

  return (
    <section className="ds-section ds-section--pagination">
      <div className="ds-page-intro">
        <h2>Пагинация</h2>
        <p>
          Pagination используется для навигации по большим наборам данных,
          разбитым на отдельные страницы. Компонент помогает управлять длинными
          списками, таблицами и коллекциями контента без перегрузки одного экрана.
        </p>
      </div>

      <div className="ds-section-block">
        <h3>Предпросмотр</h3>
        <p>
          Pagination помогает перемещаться между страницами данных и наглядно
          показывает текущую позицию в наборе результатов.
        </p>

        <div className="ds-demo-card">
          <Pagination
            currentPage={pages.preview}
            totalPages={5}
            onPageChange={setPage('preview')}
          />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Варианты</h3>
        <p>Ниже показаны типичные сценарии использования pagination в интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Стандартная навигация по списку</h3>
            <Pagination
              currentPage={pages.list}
              totalPages={5}
              onPageChange={setPage('list')}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Большой набор данных</h3>
            <Pagination
              currentPage={pages.big}
              totalPages={8}
              onPageChange={setPage('big')}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Состояние первой страницы</h3>
            <Pagination
              currentPage={pages.first}
              totalPages={4}
              onPageChange={setPage('first')}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Для pagination особенно важны active, default и disabled states,
          потому что они помогают понять текущую страницу и доступность
          навигации вперёд или назад.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Текущая страница</h3>
            <Pagination
              currentPage={pages.statesCurrent}
              totalPages={5}
              onPageChange={setPage('statesCurrent')}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Начало диапазона</h3>
            <Pagination
              currentPage={pages.statesStart}
              totalPages={5}
              onPageChange={setPage('statesStart')}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Конец диапазона</h3>
            <Pagination
              currentPage={pages.statesEnd}
              totalPages={5}
              onPageChange={setPage('statesEnd')}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура pagination включает навигационный контейнер, кнопку
          «Назад», список страниц, индикатор текущей страницы и кнопку «Вперёд».
        </p>

        <div className="ds-demo-card">
          <Pagination
            currentPage={pages.structure}
            totalPages={5}
            onPageChange={setPage('structure')}
          />

          <ul className="ds-guidelines">
            <li>Пагинация должна ясно обозначать текущую страницу.</li>
            <li>Предыдущая и следующая страницы должны быть легко доступны.</li>
            <li>Недоступные состояния должны показывать границы диапазона.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>Компонент особенно полезен для таблиц, списков результатов и административных разделов.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Таблица заявок</h3>
            <Pagination
              currentPage={pages.exTable}
              totalPages={8}
              onPageChange={setPage('exTable')}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Результаты поиска</h3>
            <Pagination
              currentPage={pages.exSearch}
              totalPages={6}
              onPageChange={setPage('exSearch')}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Архив документации</h3>
            <Pagination
              currentPage={pages.exArchive}
              totalPages={7}
              onPageChange={setPage('exArchive')}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте pagination для длинных наборов данных, разбитых на страницы.</li>
          <li>Не применяйте pagination там, где лучше работает бесконечная прокрутка или простой список.</li>
          <li>Текущая страница должна быть визуально выделена.</li>
          <li>Кнопки «Назад» и «Вперёд» должны ясно показывать доступность навигации.</li>
          <li>Pagination дополняет таблицу или список, а не заменяет их контекст.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-card">
              <Pagination
                currentPage={pages.recommend}
                totalPages={6}
                onPageChange={setPage('recommend')}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Явно выделяйте текущую страницу.</li>
              <li>Сохраняйте предсказуемый порядок навигации.</li>
              <li>Используйте недоступные состояния на границах диапазона.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-card">
              <p>
                Назад 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 Вперёд
              </p>
            </div>
            <ul className="ds-guidelines">
              <li>Не перегружайте pagination слишком большим количеством страниц без группировки.</li>
              <li>Не скрывайте текущую позицию пользователя.</li>
              <li>Не делайте кнопки навигации визуально одинаковыми без выделения активной.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>currentPage</code>, <code>totalPages</code> и{' '}
          <code>onPageChange</code>. В MVP pagination реализован как простой
          управляемый паттерн навигации с кнопками «Назад»/«Вперёд» и числовыми
          элементами страниц.
        </div>
      </div>
    </section>
  )
}
