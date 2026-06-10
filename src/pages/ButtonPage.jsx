import React from 'react'
import Button from '../components/ui/Button'

export default function ButtonPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Кнопка</h2>
        <p>
          Button — базовый компонент действия. В системе представлены варианты primary,
          secondary и ghost, а также ключевые состояния, которые помогают выстраивать
          понятную иерархию действий в интерфейсе.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Категория: Действие</span>
          <span className="ds-meta-item">Статус: Готово</span>
          <span className="ds-meta-item">Токены: color, spacing, radius, shadow, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Превью</h3>
        <p>
          Превью показывает кнопку в простом контексте, где видно различие между
          primary и secondary actions.
        </p>

        <div className="ds-demo-card">
          <p>
            Используйте кнопки для явных действий пользователя. В одной зоне действий должна
            быть понятна главная кнопка и вторичные альтернативы.
          </p>

          <div className="ds-demo-row">
            <Button variant="primary">Сохранить изменения</Button>
            <Button variant="secondary">Отмена</Button>
            <Button variant="ghost">Подробнее</Button>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Варианты</h3>
        <p>Варианты кнопки различаются по роли и визуальному приоритету.</p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <Button variant="primary">Основная</Button>
            <p>Главное действие в текущем блоке или сценарии.</p>
          </div>

          <div className="ds-demo-card">
            <Button variant="secondary">Вторичная</Button>
            <p>Вторичное действие, которое поддерживает основной сценарий.</p>
          </div>

          <div className="ds-demo-card">
            <Button variant="ghost">Ghost</Button>
            <p>Низкоприоритетное действие для вспомогательных сценариев и менее заметных команд.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Состояния помогают показать доступность действия, интерактивность и контекст
          взаимодействия.
        </p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <div className="ds-demo-row">
              <Button variant="primary">Основная</Button>
            </div>
            <p>Базовое состояние активной кнопки в рабочем интерфейсе.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Наведение</h3>
            <div className="ds-demo-row">
              <Button variant="secondary" className="is-hover-demo">
                Вторичная
              </Button>
            </div>
            <p>Hover подчёркивает интерактивность и помогает быстрее считывать доступное действие.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Фокус</h3>
            <div className="ds-demo-row">
              <Button variant="ghost" className="is-focus-demo">
                Ghost
              </Button>
            </div>
            <p>Состояние фокуса важно для клавиатурной навигации, доступности и ясного положения курсора.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Отключено</h3>
            <div className="ds-demo-row">
              <Button variant="primary" disabled>
                Недоступно
              </Button>
            </div>
            <p>Disabled показывает, что действие временно недоступно, но по-прежнему существует в сценарии.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Иерархия использования</h3>
        <p>
          Иерархия кнопок помогает странице оставаться понятной и не создавать конкуренцию
          между действиями.
        </p>

        <ul className="ds-guidelines">
          <li>В одной зоне действий должна быть только одна primary button.</li>
          <li>Primary используйте для главного завершающего или подтверждающего действия.</li>
          <li>Secondary подходит для безопасной альтернативы: отмены, возврата, промежуточного шага.</li>
          <li>Ghost используйте для низкоприоритетных, вспомогательных или справочных действий.</li>
          <li>Disabled-state должен объяснять временную недоступность, а не скрывать важную логику интерфейса.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-row">
              <Button variant="primary">Опубликовать</Button>
              <Button variant="secondary">Сохранить черновик</Button>
            </div>
            <ul className="ds-guidelines">
              <li>Используйте primary для главного действия.</li>
              <li>Формулируйте label как ясный глагол действия.</li>
              <li>Разводите primary и secondary по смысловому приоритету.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-row">
              <Button variant="primary">Сохранить</Button>
              <Button variant="primary">Продолжить</Button>
              <Button variant="ghost">Нажмите здесь</Button>
            </div>
            <ul className="ds-guidelines">
              <li>Не ставьте две primary buttons рядом в одной зоне действий.</li>
              <li>Не используйте ghost как основной CTA.</li>
              <li>Не делайте label расплывчатым: “Нажмите здесь”, “Отправить”, “Продолжить” без контекста.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент использует свойство <code>variant</code> со значениями{' '}
          <code>primary</code>, <code>secondary</code> и <code>ghost</code>. Состояние{' '}
          <code>disabled</code> передаётся стандартным HTML-атрибутом, текст кнопки —
          через <code>children</code>, а тип кнопки по умолчанию задан как{' '}
          <code>button</code> для предсказуемого поведения внутри форм.
        </div>
      </div>
    </section>
  )
}