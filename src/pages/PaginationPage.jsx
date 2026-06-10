import React, { useState } from 'react'
import Pagination from '../components/ui/Pagination'

export default function PaginationPage() {
  const [previewPage, setPreviewPage] = useState(2)
  const [tablePage, setTablePage] = useState(4)
  const [compactPage, setCompactPage] = useState(1)

  return (
    <section className="ds-section ds-section--pagination">
      <div className="ds-page-intro">
        <h2>Пагинация</h2>
        <p>
          Pagination используется для навигации по большим наборам данных,
          разбитым на отдельные страницы. Компонент помогает управлять длинными
          списками, таблицами и коллекциями контента без перегрузки одного экрана.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Категория: Навигация</span>
          <span className="ds-meta-item">Статус: Готово</span>
          <span className="ds-meta-item">Токены: color, spacing, radius, border, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Предпросмотр</h3>
        <p>
          Pagination помогает перемещаться между страницами данных и наглядно
          показывает текущую позицию в наборе результатов.
        </p>

        <div className="ds-demo-card">
          <Pagination
            currentPage={previewPage}
            totalPages={5}
            onPageChange={setPreviewPage}
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
              currentPage={previewPage}
              totalPages={5}
              onPageChange={setPreviewPage}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Большой набор данных</h3>
            <Pagination
              currentPage={tablePage}
              totalPages={8}
              onPageChange={setTablePage}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Состояние первой страницы</h3>
            <Pagination
              currentPage={compactPage}
              totalPages={4}
              onPageChange={setCompactPage}
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
              currentPage={3}
              totalPages={5}
              onPageChange={() => {}}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Начало диапазона</h3>
            <Pagination
              currentPage={1}
              totalPages={5}
              onPageChange={() => {}}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Конец диапазона</h3>
            <Pagination
              currentPage={5}
              totalPages={5}
              onPageChange={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура pagination включает navigation container, previous
          control, список страниц, индикатор текущей страницы и next control.
        </p>

        <div className="ds-demo-card">
          <Pagination
            currentPage={2}
            totalPages={5}
            onPageChange={() => {}}
          />

          <ul className="ds-guidelines">
            <li>Pagination должен clearly indicate текущую страницу.</li>
            <li>Предыдущая и следующая страницы должны быть легко доступны.</li>
            <li>Disabled states должны показывать границы диапазона.</li>
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
              currentPage={tablePage}
              totalPages={8}
              onPageChange={setTablePage}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Результаты поиска</h3>
            <Pagination
              currentPage={2}
              totalPages={6}
              onPageChange={() => {}}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Архив документации</h3>
            <Pagination
              currentPage={4}
              totalPages={7}
              onPageChange={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте pagination для длинных наборов данных, разбитых на страницы.</li>
          <li>Не применяйте pagination там, где лучше работает infinite scroll или простой список.</li>
          <li>Текущая страница должна быть визуально выделена.</li>
          <li>Previous и Next должны ясно показывать доступность навигации.</li>
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
                currentPage={3}
                totalPages={6}
                onPageChange={() => {}}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Явно выделяйте текущую страницу.</li>
              <li>Сохраняйте предсказуемый порядок навигации.</li>
              <li>Используйте disabled states на границах диапазона.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-card">
              <p>
                Previous 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 Next
              </p>
            </div>
            <ul className="ds-guidelines">
              <li>Не перегружайте pagination слишком большим количеством страниц без группировки.</li>
              <li>Не скрывайте текущую позицию пользователя.</li>
              <li>Не делайте controls визуально одинаковыми без active-state.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>currentPage</code>, <code>totalPages</code> и{' '}
          <code>onPageChange</code>. В MVP pagination реализован как простой
          controlled navigation pattern с previous/next controls и числовыми
          page items.
        </div>
      </div>
    </section>
  )
}