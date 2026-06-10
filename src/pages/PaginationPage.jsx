import React, { useState } from 'react'
import Pagination from '../components/ui/Pagination'

export default function PaginationPage() {
  const [previewPage, setPreviewPage] = useState(2)
  const [tablePage, setTablePage] = useState(4)
  const [compactPage, setCompactPage] = useState(1)

  return (
    <section className="ds-section ds-section--pagination">
      <div className="ds-page-intro">
        <h2>Pagination</h2>
        <p>
          Pagination используется для навигации по большим наборам данных,
          разбитым на отдельные страницы. Компонент помогает управлять длинными
          списками, таблицами и коллекциями контента без перегрузки одного экрана.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Navigation</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, radius, border, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Preview</h3>
        <p>
          Pagination помогает перемещаться между страницами данных и clearly
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
        <h3>Variants</h3>
        <p>Ниже показаны типичные сценарии использования pagination в интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Standard list navigation</h3>
            <Pagination
              currentPage={previewPage}
              totalPages={5}
              onPageChange={setPreviewPage}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Larger data set</h3>
            <Pagination
              currentPage={tablePage}
              totalPages={8}
              onPageChange={setTablePage}
            />
          </div>

          <div className="ds-demo-card">
            <h3>First page state</h3>
            <Pagination
              currentPage={compactPage}
              totalPages={4}
              onPageChange={setCompactPage}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Для pagination особенно важны active, default и disabled states,
          потому что они помогают понять текущую страницу и доступность
          навигации вперёд или назад.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Current page</h3>
            <Pagination
              currentPage={3}
              totalPages={5}
              onPageChange={() => {}}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Start of range</h3>
            <Pagination
              currentPage={1}
              totalPages={5}
              onPageChange={() => {}}
            />
          </div>

          <div className="ds-demo-card">
            <h3>End of range</h3>
            <Pagination
              currentPage={5}
              totalPages={5}
              onPageChange={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Structure</h3>
        <p>
          Базовая структура pagination включает navigation container, previous
          control, list of page items, current page indicator и next control.
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
        <h3>Examples</h3>
        <p>Компонент особенно полезен для таблиц, списков результатов и административных разделов.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Applications table</h3>
            <Pagination
              currentPage={tablePage}
              totalPages={8}
              onPageChange={setTablePage}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Search results</h3>
            <Pagination
              currentPage={2}
              totalPages={6}
              onPageChange={() => {}}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Documentation archive</h3>
            <Pagination
              currentPage={4}
              totalPages={7}
              onPageChange={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте pagination для длинных наборов данных, разбитых на страницы.</li>
          <li>Не применяйте pagination там, где лучше работает infinite scroll или simple list.</li>
          <li>Текущая страница должна быть визуально выделена.</li>
          <li>Previous и Next должны ясно показывать доступность навигации.</li>
          <li>Pagination дополняет таблицу или список, а не заменяет их контекст.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-card">
              <Pagination
                currentPage={3}
                totalPages={6}
                onPageChange={() => {}}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Выделяйте current page clearly.</li>
              <li>Сохраняйте predictable navigation order.</li>
              <li>Используйте disabled states на границах диапазона.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
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
        <h3>Implementation note</h3>
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