import React from 'react'
import Tabs from '../components/ui/Tabs'
import Badge from '../components/ui/Badge'

const overviewTabs = [
  {
    value: 'overview',
    label: 'Overview',
    content: (
      <div className="ds-demo-column">
        <h3>Overview</h3>
        <p>
          Вкладка overview помогает собрать основную информацию о разделе или сущности
          в одном компактном представлении.
        </p>
      </div>
    ),
  },
  {
    value: 'details',
    label: 'Details',
    content: (
      <div className="ds-demo-column">
        <h3>Details</h3>
        <p>
          Детальная вкладка подходит для более плотного контента, расширенных описаний
          и связанных данных.
        </p>
      </div>
    ),
  },
  {
    value: 'settings',
    label: 'Settings',
    content: (
      <div className="ds-demo-column">
        <h3>Settings</h3>
        <p>
          Вкладка settings хорошо работает для управления параметрами, режимами и
          дополнительными настройками.
        </p>
      </div>
    ),
  },
]

export default function TabsPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Tabs</h2>
        <p>
          Tabs используются для переключения между связанными разделами контента
          без перехода на другую страницу. Компонент помогает организовывать
          интерфейс, сокращать визуальную перегрузку и поддерживать понятную
          навигацию внутри одного контекста.
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
          Tabs позволяют показывать только один активный блок контента за раз,
          сохраняя структуру страницы компактной и читаемой.
        </p>

        <div className="ds-demo-card">
          <Tabs items={overviewTabs} />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Examples</h3>
        <p>Ниже показаны типичные сценарии использования tabs в системном интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Section navigation</h3>
            <Tabs
              items={[
                {
                  value: 'foundation',
                  label: 'Foundations',
                  content: <p>Цвет, типографика, spacing, radius и shadows.</p>,
                },
                {
                  value: 'components',
                  label: 'Components',
                  content: <p>Набор переиспользуемых UI-элементов для интерфейсов.</p>,
                },
                {
                  value: 'patterns',
                  label: 'Patterns',
                  content: <p>Повторяемые решения для организации layout и взаимодействия.</p>,
                },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Compact content switch</h3>
            <Tabs
              items={[
                {
                  value: 'description',
                  label: 'Description',
                  content: <p>Краткое описание образовательной программы.</p>,
                },
                {
                  value: 'requirements',
                  label: 'Requirements',
                  content: <p>Требования к поступлению, формату документов и дедлайнам.</p>,
                },
                {
                  value: 'contacts',
                  label: 'Contacts',
                  content: <p>Контактная информация и каналы связи с приёмной комиссией.</p>,
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Для tabs особенно важны default, active, focus и disabled-like поведение
          в структуре навигации. В MVP основной акцент делается на active-state и
          понятной смене контента.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Default</h3>
            <div className="ds-tabs__list">
              <button type="button" className="ds-tabs__tab">Overview</button>
              <button type="button" className="ds-tabs__tab">Details</button>
              <button type="button" className="ds-tabs__tab">Settings</button>
            </div>
          </div>

          <div className="ds-demo-card">
            <h3>Active</h3>
            <div className="ds-tabs__list">
              <button type="button" className="ds-tabs__tab ds-tabs__tab--active">Overview</button>
              <button type="button" className="ds-tabs__tab">Details</button>
              <button type="button" className="ds-tabs__tab">Settings</button>
            </div>
            <p>Active-state показывает текущий раздел и управляет видимой панелью контента.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Focus</h3>
            <div className="ds-tabs__list">
              <button type="button" className="ds-tabs__tab is-focus-demo">Overview</button>
              <button type="button" className="ds-tabs__tab">Details</button>
              <button type="button" className="ds-tabs__tab">Settings</button>
            </div>
            <p>Focus-state помогает навигации с клавиатуры и делает взаимодействие более предсказуемым.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Composition</h3>
        <p>
          Tabs хорошо сочетаются с badge, cards и информационными блоками,
          когда нужно разделить контент без создания отдельных страниц.
        </p>

        <div className="ds-demo-card">
          <Tabs
            items={[
              {
                value: 'status',
                label: 'Status',
                content: (
                  <div className="ds-demo-column">
                    <Badge variant="success">Stable</Badge>
                    <p>Текущая вкладка показывает системный статус и основные сигналы состояния.</p>
                  </div>
                ),
              },
              {
                value: 'guidelines',
                label: 'Guidelines',
                content: (
                  <div className="ds-demo-column">
                    <p>Используйте вкладки для связанных разделов, а не для полностью независимых сценариев.</p>
                  </div>
                ),
              },
              {
                value: 'notes',
                label: 'Notes',
                content: (
                  <div className="ds-demo-column">
                    <p>Сохраняйте названия вкладок короткими, ясными и семантически устойчивыми.</p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте tabs для переключения между связанными разделами внутри одного контекста.</li>
          <li>Названия вкладок должны быть короткими, ясными и легко сравнимыми между собой.</li>
          <li>Tabs хорошо работают, когда контент логически делится на 2–5 разделов.</li>
          <li>Если вкладок слишком много, лучше использовать другую навигационную модель.</li>
          <li>Tabs должны сохранять единый visual rhythm с карточками, секциями и другими navigation-elements.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-column">
              <Tabs
                items={[
                  { value: 'one', label: 'Overview', content: <p>Overview content.</p> },
                  { value: 'two', label: 'Details', content: <p>Details content.</p> },
                  { value: 'three', label: 'Settings', content: <p>Settings content.</p> },
                ]}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Делайте подписи вкладок короткими и содержательными.</li>
              <li>Используйте tabs там, где разделы действительно связаны друг с другом.</li>
              <li>Сохраняйте predictable active-state и понятную панель контента.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-column">
              <div className="ds-tabs__list">
                <button type="button" className="ds-tabs__tab">Очень длинное название вкладки номер один</button>
                <button type="button" className="ds-tabs__tab">Очень длинное название вкладки номер два</button>
                <button type="button" className="ds-tabs__tab">Очень длинное название вкладки номер три</button>
              </div>
            </div>
            <ul className="ds-guidelines">
              <li>Не делайте названия вкладок слишком длинными и трудно сравнимыми.</li>
              <li>Не используйте tabs для полностью несвязанных сценариев.</li>
              <li>Не перегружайте один блок слишком большим количеством вкладок.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает массив <code>items</code> с полями <code>value</code>,{' '}
          <code>label</code> и <code>content</code>, а также поддерживает{' '}
          <code>defaultValue</code>. В MVP вкладки реализованы как локально
          управляемая навигация внутри одного контекста страницы.
        </div>
      </div>
    </section>
  )
}