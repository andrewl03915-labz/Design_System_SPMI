import Table from '../components/ui/Table'
import CopyControl from '../components/ui/CopyControl'

const programColumns = [
  { key: 'program', label: 'Программа' },
  { key: 'degree', label: 'Степень' },
  { key: 'deadline', label: 'Срок подачи' },
  {
    key: 'status',
    label: 'Статус',
    render: (value) => (
      <span className="ds-table__status">
        <span
          className={`ds-table__dot ${
            value === 'Открыт'
              ? 'ds-table__dot--success'
              : value === 'Скоро закрывается'
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
    program: 'Дизайн-системы',
    degree: 'Магистратура',
    deadline: '15 июля',
    status: 'Открыт',
  },
  {
    id: 2,
    program: 'Цифровой менеджмент',
    degree: 'Бакалавриат',
    deadline: '22 июля',
    status: 'Скоро закрывается',
  },
  {
    id: 3,
    program: 'Прикладная информатика',
    degree: 'Бакалавриат',
    deadline: 'Завершено',
    status: 'Закрыт',
  },
]

const compactColumns = [
  { key: 'document', label: 'Документ' },
  { key: 'type', label: 'Тип' },
  { key: 'updated', label: 'Обновлено' },
]

const compactData = [
  { id: 1, document: 'Копия паспорта', type: 'PDF', updated: 'Вчера' },
  { id: 2, document: 'Форма заявления', type: 'DOCX', updated: 'Сегодня' },
  { id: 3, document: 'Портфолио', type: 'ZIP', updated: '2 дня назад' },
]

export default function TablePage() {
  return (
    <section className="ds-section ds-section--table">
      <div className="ds-page-intro">
        <h2>Таблица</h2>
        <p>
          Table используется для структурированного отображения связанных данных
          в строках и колонках. Компонент особенно полезен для списков,
          статусов, документов, сроков и административных данных, где важно
          быстро сравнивать значения между несколькими записями.
        </p>


      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура table включает caption, строку заголовков, строки
          данных и ячейки с согласованным выравниванием и предсказуемыми
          отступами.
        </p>

        <div className="ds-demo-card">
          <Table
            caption="Обзор приёмной кампании"
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
        <h3>Варианты</h3>
        <p>Ниже показаны базовые visual variants для разных сценариев использования.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <CopyControl jsx={`<Table columns={columns} data={data} />`}>
              <Table columns={programColumns} data={programData} />
            </CopyControl>
          </div>

          <div className="ds-demo-card">
            <h3>С чередованием строк</h3>
            <CopyControl jsx={`<Table columns={columns} data={data} striped />`}>
              <Table columns={programColumns} data={programData} striped />
            </CopyControl>
          </div>

          <div className="ds-demo-card">
            <h3>Компактная</h3>
            <CopyControl jsx={`<Table columns={columns} data={data} compact />`}>
              <Table columns={compactColumns} data={compactData} compact />
            </CopyControl>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Для table в MVP особенно важны default, hover и empty-state, потому что
          они напрямую влияют на читаемость списков и на восприятие данных.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <Table columns={programColumns} data={programData} />
          </div>

          <div className="ds-demo-card">
            <h3>Наведение</h3>
            <p>
              Hover-state помогает отслеживать строку при чтении плотных наборов данных,
              особенно в административных и учебных таблицах.
            </p>
            <Table columns={programColumns} data={programData} />
          </div>

          <div className="ds-demo-card">
            <h3>Пустое состояние</h3>
            <Table
              columns={compactColumns}
              data={[]}
              caption="Загруженные файлы"
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>Компонент подходит для admissions views, documents lists и структурированных системных обзоров.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Программы</h3>
            <Table columns={programColumns} data={programData} striped />
          </div>

          <div className="ds-demo-card">
            <h3>Документы</h3>
            <Table columns={compactColumns} data={compactData} compact />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте table, когда пользователю нужно сравнивать данные по колонкам и строкам.</li>
          <li>Не применяйте таблицу для коротких списков, если карточки или обычный list-pattern читаются лучше.</li>
          <li>Сохраняйте названия колонок короткими и понятными.</li>
          <li>Избегайте перегрузки одной таблицы слишком большим количеством колонок в MVP.</li>
          <li>Используйте compact-вариант там, где плотность данных выше, но не в ущерб читаемости.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
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
            <h3>Не рекомендуется</h3>
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
        <h3>Примечание по реализации</h3>
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