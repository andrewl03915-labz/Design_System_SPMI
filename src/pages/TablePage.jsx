import React from 'react'
import Table from '../components/ui/Table'

const programColumns = [
  { key: 'program', label: 'Program' },
  { key: 'degree', label: 'Degree' },
  { key: 'deadline', label: 'Deadline' },
  {
    key: 'status',
    label: 'Status',
    render: (value) => (
      <span className="ds-table__status">
        <span
          className={`ds-table__dot ${
            value === 'Open'
              ? 'ds-table__dot--success'
              : value === 'Closing soon'
              ? 'ds-table__dot--warning'
              : 'ds-table__dot--neutral'
          }`}
        />
        {value}
      </span>
    ),
  },
]

const programData = [
  {
    id: 1,
    program: 'Design Systems',
    degree: 'Master',
    deadline: '15 July',
    status: 'Open',
  },
  {
    id: 2,
    program: 'Digital Management',
    degree: 'Bachelor',
    deadline: '22 July',
    status: 'Closing soon',
  },
  {
    id: 3,
    program: 'Applied Informatics',
    degree: 'Bachelor',
    deadline: 'Completed',
    status: 'Closed',
  },
]

const compactColumns = [
  { key: 'document', label: 'Document' },
  { key: 'type', label: 'Type' },
  { key: 'updated', label: 'Updated' },
]

const compactData = [
  { id: 1, document: 'Passport copy', type: 'PDF', updated: 'Yesterday' },
  { id: 2, document: 'Application form', type: 'DOCX', updated: 'Today' },
  { id: 3, document: 'Portfolio', type: 'ZIP', updated: '2 days ago' },
]

export default function TablePage() {
  return (
    <section className="ds-section ds-section--table">
      <div className="ds-page-intro">
        <h2>Table</h2>
        <p>
          Table используется для структурированного отображения связанных данных
          в строках и колонках. Компонент особенно полезен для списков,
          статусов, документов, сроков и административных данных, где важно
          быстро сравнивать значения между несколькими записями.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Data display</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, radius, border, text, shadow</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Structure</h3>
        <p>
          Базовая структура table включает caption, header row, body rows и cells
          с согласованным выравниванием и predictable spacing.
        </p>

        <div className="ds-demo-card">
          <Table
            caption="Admissions overview"
            columns={programColumns}
            data={programData}
          />

          <ul className="ds-guidelines">
            <li>Таблица подходит для сравнений между несколькими сущностями по одним и тем же полям.</li>
            <li>Заголовки колонок должны быть короткими и однозначными.</li>
            <li>Содержимое ячеек должно оставаться читаемым и визуально устойчивым.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Variants</h3>
        <p>Ниже показаны базовые visual variants для разных сценариев использования.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Default</h3>
            <Table columns={programColumns} data={programData} />
          </div>

          <div className="ds-demo-card">
            <h3>Striped</h3>
            <Table columns={programColumns} data={programData} striped />
          </div>

          <div className="ds-demo-card">
            <h3>Compact</h3>
            <Table columns={compactColumns} data={compactData} compact />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Для table в MVP особенно важны default, hover и empty-state, потому что
          они напрямую влияют на читаемость списков и на восприятие данных.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Default</h3>
            <Table columns={programColumns} data={programData} />
          </div>

          <div className="ds-demo-card">
            <h3>Hover</h3>
            <p>
              Hover-state помогает отслеживать строку при чтении плотных наборов данных,
              особенно в административных и учебных таблицах.
            </p>
            <Table columns={programColumns} data={programData} />
          </div>

          <div className="ds-demo-card">
            <h3>Empty</h3>
            <Table
              columns={compactColumns}
              data={[]}
              caption="Uploaded files"
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Examples</h3>
        <p>Компонент подходит для admissions views, documents lists и structured system overviews.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Programs</h3>
            <Table columns={programColumns} data={programData} striped />
          </div>

          <div className="ds-demo-card">
            <h3>Documents</h3>
            <Table columns={compactColumns} data={compactData} compact />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте table, когда пользователю нужно сравнивать данные по колонкам и строкам.</li>
          <li>Не применяйте таблицу для коротких списков, если карточки или обычный list-pattern читаются лучше.</li>
          <li>Сохраняйте названия колонок короткими и понятными.</li>
          <li>Избегайте перегрузки одной таблицы слишком большим количеством колонок в MVP.</li>
          <li>Используйте compact-вариант там, где плотность данных выше, но не в ущерб читаемости.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-column">
              <Table columns={programColumns} data={programData} />
            </div>
            <ul className="ds-guidelines">
              <li>Делайте структуру строк и колонок предсказуемой.</li>
              <li>Поддерживайте единое выравнивание и spacing.</li>
              <li>Используйте статусные метки аккуратно и по смыслу.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-column">
              <div className="ds-note">
                Не превращайте table в перегруженный grid с длинными абзацами,
                хаотичным выравниванием и слишком большим числом колонок в одном
                viewport.
              </div>
            </div>
            <ul className="ds-guidelines">
              <li>Не используйте таблицу там, где данные лучше читаются как cards.</li>
              <li>Не делайте колонки слишком многословными.</li>
              <li>Не перегружайте строки лишними визуальными акцентами.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>columns</code>, <code>data</code>,{' '}
          <code>caption</code>, <code>striped</code> и <code>compact</code>.
          Для кастомного отображения ячеек используется функция{' '}
          <code>render</code> в описании колонки. В MVP table реализован как
          responsive wrapper вокруг нативной HTML-таблицы.
        </div>
      </div>
    </section>
  )
}