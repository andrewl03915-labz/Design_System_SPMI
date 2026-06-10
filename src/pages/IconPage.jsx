import React from 'react'
import Icon from '../components/ui/Icon'
import { ICON_CATEGORIES, ICON_REGISTRY } from '../components/ui/iconRegistry'

function IconCategorySection({ categoryKey, category }) {
  return (
    <div className="ds-section-block">
      <h3>{category.title}</h3>
      <p>{category.description}</p>

      <div className="ds-icon-grid">
        {category.icons.map((iconName) => {
          const icon = ICON_REGISTRY[iconName]

          return (
            <div className="ds-icon-card" key={iconName}>
              <div className="ds-icon-preview">
                <Icon name={iconName} size={20} className="ds-icon" />
              </div>

              <div>
                <p className="ds-icon-name">{icon.title}</p>
                <p className="ds-icon-meta">{icon.note}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function IconsPage() {
  const totalIcons = Object.keys(ICON_REGISTRY).length

  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Иконки</h2>
        <p>
          Icons — это системная библиотека визуальных символов для
          образовательного, административного и сервисного интерфейса
          Горного университета. Библиотека построена на Lucide и оформлена как
          curated icon registry с профессиональной категоризацией для
          разработчиков и дизайнеров.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Категория: Foundations</span>
          <span className="ds-meta-item">Статус: Готово</span>
          <span className="ds-meta-item">Библиотека: Lucide</span>
          <span className="ds-meta-item">Размер набора: {totalIcons} иконок</span>
          <span className="ds-meta-item">
            Категории: {Object.keys(ICON_CATEGORIES).length}
          </span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Библиотека разделена на тематические категории, чтобы ускорить выбор
          иконок и сделать использование системы более предсказуемым. Такой
          подход снижает визуальный шум и помогает поддерживать единый
          символический словарь интерфейса.
        </p>

        <ul className="ds-guidelines">
          <li>Core — базовые сущности и общие интерфейсные сценарии.</li>
          <li>Navigation — переходы, раскрытия и пространственная навигация.</li>
          <li>Actions — действия пользователя и system controls.</li>
          <li>Files &amp; Data — документы, таблицы, списки и файловые сценарии.</li>
          <li>Academics — обучение, расписание, материалы и research context.</li>
          <li>Campus &amp; Services — кампус, инфраструктура, сервисы и контакты.</li>
          <li>Status &amp; Feedback — статусы, помощь, предупреждения и безопасность.</li>
        </ul>
      </div>

      {Object.entries(ICON_CATEGORIES).map(([categoryKey, category]) => (
        <IconCategorySection
          key={categoryKey}
          categoryKey={categoryKey}
          category={category}
        />
      ))}

      <div className="ds-section-block">
        <h3>Размеры</h3>
        <p>
          Для системного использования достаточно трёх основных размеров. Это
          сохраняет визуальную согласованность и не превращает иконки в
          произвольный декоративный слой.
        </p>

        <div className="ds-demo-card">
          <div className="ds-icon-size-row">
            <div className="ds-icon-size-demo">
              <Icon name="academic" size={16} className="ds-icon" />
              <span>16 / компактный интерфейс</span>
            </div>

            <div className="ds-icon-size-demo">
              <Icon name="academic" size={20} className="ds-icon" />
              <span>20 / интерфейс по умолчанию</span>
            </div>

            <div className="ds-icon-size-demo">
              <Icon name="academic" size={24} className="ds-icon" />
              <span>24 / акцент в секции</span>
            </div>
          </div>

          <p className="ds-icon-section-note">
            Рекомендуемая толщина штриха для системного использования: 1.75.
          </p>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте только утверждённый registry, а не весь каталог Lucide.</li>
          <li>Сохраняйте единый stroke width и ограниченный набор размеров.</li>
          <li>Иконка должна поддерживать текст, а не заменять понятный label.</li>
          <li>Для декоративных иконок используйте aria-hidden, для смысловых — label.</li>
          <li>Не используйте несколько похожих иконок для одного и того же смысла.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>
          Ниже показаны типичные сценарии использования иконок внутри
          университетского интерфейса.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <div className="ds-icon-inline-demo">
              <Icon name="search" size={18} className="ds-icon" />
              <span>Поиск документов и сервисов</span>
            </div>
          </div>

          <div className="ds-demo-card">
            <div className="ds-icon-inline-demo">
              <Icon name="upload" size={18} className="ds-icon" />
              <span>Загрузка документов для поступления</span>
            </div>
          </div>

          <div className="ds-demo-card">
            <div className="ds-icon-inline-demo ds-icon-inline-demo--muted">
              <Icon name="calendarCheck" size={18} className="ds-icon" />
              <span>Подтверждённое учебное событие</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>

            <div className="ds-demo-card ds-do-dont-demo">
              <div className="ds-icon-inline-demo">
                <Icon name="fileText" size={18} className="ds-icon" />
                <span>Ваши документы</span>
              </div>
            </div>

            <ul className="ds-guidelines">
              <li>Используйте иконки как опору для текста и навигации.</li>
              <li>Закрепите ограниченный и узнаваемый системный словарь символов.</li>
              <li>Поддерживайте единый размер и визуальный стиль.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>

            <div className="ds-demo-card ds-do-dont-demo">
              <div className="ds-icon-inline-demo ds-icon-inline-demo--muted">
                <Icon name="info" size={18} className="ds-icon" />
                <span>Иконка без ясного семантического значения</span>
              </div>
            </div>

            <ul className="ds-guidelines">
              <li>Не смешивайте разные библиотеки иконок.</li>
              <li>Не используйте иконки как единственный носитель смысла.</li>
              <li>Не добавляйте похожие символы без явной semantic necessity.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент <code>Icon</code> работает как системная обёртка над Lucide и
          использует единый <code>iconRegistry</code>. Каждая иконка описана через
          имя, категорию, title, note и React component, что делает библиотеку
          удобной для масштабирования, документирования и повторного
          использования.
        </div>
      </div>
    </section>
  )
}