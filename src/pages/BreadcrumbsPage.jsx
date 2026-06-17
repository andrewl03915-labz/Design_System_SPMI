import Breadcrumbs from '../components/ui/Breadcrumbs'

const simpleItems = [
  { label: 'Главная', href: '#' },
  { label: 'Компоненты', href: '#' },
  { label: '"Хлебные крошки"' },
]

const nestedItems = [
  { label: 'Главная', href: '#' },
  { label: 'Поступление', href: '#' },
  { label: 'Заявки', href: '#' },
  { label: 'Детали заявки' },
]

const settingsItems = [
  { label: 'Главная', href: '#' },
  { label: 'Аккаунт', href: '#' },
  { label: 'Настройки безопасности' },
]

export default function BreadcrumbsPage() {
  return (
    <section className="ds-section ds-section--breadcrumbs">
      <div className="ds-page-intro">
        <h2>"Хлебные крошки"</h2>
        <p>
          Breadcrumbs показывают путь пользователя внутри иерархии интерфейса и
          помогают быстро понять текущий уровень навигации. Компонент особенно
          полезен в разделах с вложенной структурой, где важно сохранить
          ориентацию и быстрый возврат на предыдущие уровни.
        </p>


      </div>

      <div className="ds-section-block">
        <h3>Превью</h3>
        <p>
          Breadcrumbs должны кратко и ясно показывать путь без перегрузки
          интерфейса.
        </p>

        <div className="ds-demo-card">
          <Breadcrumbs items={simpleItems} />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Варианты</h3>
        <p>
          Ниже показаны типичные варианты навигации breadcrumb для разных
          уровней вложенности.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Путь из трёх уровней</h3>
            <Breadcrumbs items={simpleItems} />
          </div>

          <div className="ds-demo-card">
            <h3>Более глубокая иерархия</h3>
            <Breadcrumbs items={nestedItems} />
          </div>

          <div className="ds-demo-card">
            <h3>Пользовательский разделитель</h3>
            <Breadcrumbs items={settingsItems} separator="›" />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Для breadcrumbs важнее не интерактивные состояния в стиле кнопки, а
          ясное различие между ссылками на предыдущие уровни и текущей страницей.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Предыдущие уровни как ссылки</h3>
            <Breadcrumbs
              items={[
                { label: 'Главная', href: '#' },
                { label: 'Программы', href: '#' },
                { label: 'Дизайн' },
              ]}
            />
            <p>
              Предыдущие уровни представлены как ссылки и позволяют быстро
              вернуться назад по иерархии.
            </p>
          </div>

          <div className="ds-demo-card">
            <h3>Текущая страница</h3>
            <Breadcrumbs
              items={[
                { label: 'Главная', href: '#' },
                { label: 'Документы', href: '#' },
                { label: 'Загрузка файлов' },
              ]}
            />
            <p>
              Последний элемент обозначает текущую страницу и не должен выглядеть
              как обычная ссылка.
            </p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура breadcrumb состоит из навигационной обёртки,
          упорядоченного списка, элементов-ссылок, разделителя и текущего
          элемента.
        </p>

        <div className="ds-demo-card">
          <Breadcrumbs
            items={[
              { label: 'Главная', href: '#' },
              { label: 'Студенты', href: '#' },
              { label: 'Профиль', href: '#' },
              { label: 'Редактирование профиля' },
            ]}
          />

          <ul className="ds-guidelines">
            <li>Breadcrumbs должны отражать реальную навигационную иерархию.</li>
            <li>Последний элемент обозначает текущую страницу.</li>
            <li>Предыдущие уровни должны быть короткими и понятными.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>
          Компонент особенно полезен в сложных, вложенных и административных
          интерфейсах.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Сценарий поступления</h3>
            <Breadcrumbs
              items={[
                { label: 'Главная', href: '#' },
                { label: 'Поступление', href: '#' },
                { label: 'Заявки', href: '#' },
                { label: 'Проверка заявки' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Настройки аккаунта</h3>
            <Breadcrumbs
              items={[
                { label: 'Главная', href: '#' },
                { label: 'Аккаунт', href: '#' },
                { label: 'Предпочтения', href: '#' },
                { label: 'Уведомления' },
              ]}
              separator="›"
            />
          </div>

          <div className="ds-demo-card">
            <h3>Иерархия контента</h3>
            <Breadcrumbs
              items={[
                { label: 'Библиотека', href: '#' },
                { label: 'Руководства', href: '#' },
                { label: 'Дизайн-система', href: '#' },
                { label: 'Паттерны навигации' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте breadcrumbs там, где есть реальная иерархия уровней.</li>
          <li>Не применяйте компонент для плоской навигации без вложенности.</li>
          <li>Последний элемент должен обозначать текущую страницу, а не дублировать состояние ссылки.</li>
          <li>Подписи должны быть короткими и понятными.</li>
          <li>Breadcrumbs дополняют заголовок страницы, а не заменяют его.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-card">
              <Breadcrumbs
                items={[
                  { label: 'Главная', href: '#' },
                  { label: 'Программы', href: '#' },
                  { label: 'Магистратура' },
                ]}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Показывайте понятный и последовательный путь.</li>
              <li>Сохраняйте короткие названия разделов.</li>
              <li>Используйте текущий элемент как финальную точку пути.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-card">
              <div className="ds-breadcrumbs-demo ds-breadcrumbs-demo--bad">
                <p>
                  Главная / Очень длинное название раздела, которое ведёт себя как подзаголовок страницы /
                  Ещё один многословный уровень навигации / Заголовок текущей страницы
                </p>
              </div>
            </div>
            <ul className="ds-guidelines">
              <li>Не делайте breadcrumb длинным и шумным.</li>
              <li>Не используйте его вместо локального меню.</li>
              <li>Не превращайте текущий элемент в обычную ссылку.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>items</code> и необязательный параметр <code>separator</code>.
          Каждый элемент может содержать <code>label</code> и <code>href</code>.
          Последний элемент считается текущей страницей и получает{' '}
          <code>aria-current="page"</code>.
        </div>
      </div>
    </section>
  )
}