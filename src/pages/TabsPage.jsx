import Tabs from '../components/ui/Tabs'
import Badge from '../components/ui/Badge'
import CopyControl from '../components/ui/CopyControl'

const overviewTabs = [
  {
    value: 'overview',
    label: 'Обзор',
    content: (
      <div className="ds-demo-column">
        <h3>Обзор</h3>
        <p>
          Вкладка обзора помогает собрать основную информацию о разделе или сущности
          в одном компактном представлении.
        </p>
      </div>
    ),
  },
  {
    value: 'details',
    label: 'Детали',
    content: (
      <div className="ds-demo-column">
        <h3>Детали</h3>
        <p>
          Детальная вкладка подходит для более плотного контента, расширенных описаний
          и связанных данных.
        </p>
      </div>
    ),
  },
  {
    value: 'settings',
    label: 'Настройки',
    content: (
      <div className="ds-demo-column">
        <h3>Настройки</h3>
        <p>
          Вкладка настроек хорошо работает для управления параметрами, режимами и
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
        <h2>Вкладки</h2>
        <p>
          Tabs используются для переключения между связанными разделами контента
          без перехода на другую страницу. Компонент помогает организовывать
          интерфейс, сокращать визуальную перегрузку и поддерживать понятную
          навигацию внутри одного контекста.
        </p>

      </div>

      <div className="ds-section-block">
        <h3>Предпросмотр</h3>
        <p>
          Tabs позволяют показывать только один активный блок контента за раз,
          сохраняя структуру страницы компактной и читаемой.
        </p>

        <div className="ds-demo-card">
          <CopyControl interactive
            jsx={`<Tabs
  items={[
    { value: 'overview', label: 'Обзор', content: <p>Сводка по разделу.</p> },
    { value: 'details', label: 'Детали', content: <p>Расширенное описание.</p> },
    { value: 'settings', label: 'Настройки', content: <p>Параметры и режимы.</p> },
  ]}
/>`}
          >
            <Tabs items={overviewTabs} />
          </CopyControl>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>Ниже показаны типичные сценарии использования tabs в системном интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Навигация по разделам</h3>
            <Tabs
              items={[
                {
                  value: 'foundation',
                  label: 'Основы',
                  content: <p>Цвет, типографика, spacing, radius и shadows.</p>,
                },
                {
                  value: 'components',
                  label: 'Компоненты',
                  content: <p>Набор переиспользуемых UI-элементов для интерфейсов.</p>,
                },
                {
                  value: 'patterns',
                  label: 'Паттерны',
                  content: <p>Повторяемые решения для организации layout и взаимодействия.</p>,
                },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Компактное переключение контента</h3>
            <Tabs
              items={[
                {
                  value: 'description',
                  label: 'Описание',
                  content: <p>Краткое описание образовательной программы.</p>,
                },
                {
                  value: 'requirements',
                  label: 'Требования',
                  content: <p>Требования к поступлению, формату документов и дедлайнам.</p>,
                },
                {
                  value: 'contacts',
                  label: 'Контакты',
                  content: <p>Контактная информация и каналы связи с приёмной комиссией.</p>,
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Для tabs особенно важны состояния по умолчанию, активной вкладки и
          поведение, близкое к недоступному. В MVP основной акцент делается на
          активном состоянии и понятной смене контента.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <div className="ds-tabs__list">
              <button type="button" className="ds-tabs__tab">Обзор</button>
              <button type="button" className="ds-tabs__tab">Детали</button>
              <button type="button" className="ds-tabs__tab">Настройки</button>
            </div>
          </div>

          <div className="ds-demo-card">
            <h3>Активно</h3>
            <div className="ds-tabs__list">
              <button type="button" className="ds-tabs__tab ds-tabs__tab--active">Обзор</button>
              <button type="button" className="ds-tabs__tab">Детали</button>
              <button type="button" className="ds-tabs__tab">Настройки</button>
            </div>
            <p>Активное состояние показывает текущий раздел и управляет видимой панелью контента.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Композиция</h3>
        <p>
          Tabs хорошо сочетаются с badge, cards и информационными блоками,
          когда нужно разделить контент без создания отдельных страниц.
        </p>

        <div className="ds-demo-card">
          <Tabs
            items={[
              {
                value: 'status',
                label: 'Статус',
                content: (
                  <div className="ds-demo-column">
                    <Badge variant="success">Стабильно</Badge>
                    <p>Текущая вкладка показывает системный статус и основные сигналы состояния.</p>
                  </div>
                ),
              },
              {
                value: 'guidelines',
                label: 'Рекомендации',
                content: (
                  <div className="ds-demo-column">
                    <p>Используйте вкладки для связанных разделов, а не для полностью независимых сценариев.</p>
                  </div>
                ),
              },
              {
                value: 'notes',
                label: 'Примечания',
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
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте tabs для переключения между связанными разделами внутри одного контекста.</li>
          <li>Названия вкладок должны быть короткими, ясными и легко сравнимыми между собой.</li>
          <li>Tabs хорошо работают, когда контент логически делится на 2–5 разделов.</li>
          <li>Если вкладок слишком много, лучше использовать другую навигационную модель.</li>
          <li>Tabs должны сохранять единый visual rhythm с карточками, секциями и другими navigation-elements.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-column">
              <Tabs
                items={[
                  { value: 'one', label: 'Обзор', content: <p>Содержимое обзора.</p> },
                  { value: 'two', label: 'Детали', content: <p>Содержимое деталей.</p> },
                  { value: 'three', label: 'Настройки', content: <p>Содержимое настроек.</p> },
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
            <h3>Не рекомендуется</h3>
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
        <h3>Примечание по реализации</h3>
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