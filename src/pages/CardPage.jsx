import React from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

export default function CardPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Карточка</h2>
        <p>
          Card используется как базовый контейнер для группировки связанных данных,
          описаний, действий и preview-блоков. Компонент помогает выстраивать
          поверхность интерфейса и поддерживает единый ритм spacing, radius и border.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Категория: Поверхность</span>
          <span className="ds-meta-item">Статус: Готово</span>
          <span className="ds-meta-item">Токены: surface, spacing, radius, border, shadow, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Превью</h3>
        <p>
          Превью показывает card в типичном сценарии: заголовок, вспомогательный текст
          и содержимое внутри единого контейнера поверхности.
        </p>

        <div className="ds-demo-card">
          <Card
            title="Основы"
            description="Базовые правила системы: цвет, типографика, spacing, radius и shadows."
          >
            <Badge variant="primary">Базовый слой</Badge>
            <p>
              Card помогает собрать связанный контент в один понятный блок и
              использовать единый visual rhythm на странице.
            </p>
          </Card>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Варианты</h3>
        <p>Card поддерживает базовый, акцентный и интерактивный сценарии.</p>

        <div className="ds-split-grid">
          <Card
            title="Базовая карточка"
            description="Нейтральный контейнер для обычного контента."
          >
            <p>Используется для карточек обзора, описаний и блоков документации.</p>
          </Card>

          <Card
            title="Акцентная карточка"
            description="Лёгкое акцентное выделение важного блока."
            accent
          >
            <p>Подходит для выделения primary section, callout или важной системной заметки.</p>
          </Card>

          <Card
            title="Интерактивная карточка"
            description="Карточка, которая может вести к следующему действию."
            interactive
          >
            <p>Такой вариант уместен для обзорной навигации и выбираемых блоков.</p>
          </Card>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Композиция</h3>
        <p>
          Card особенно хорошо работает как контейнер для разнородного содержимого:
          текста, badge, действий и вспомогательных элементов.
        </p>

        <div className="ds-demo-card">
          <Card
            title="Обзор компонента"
            description="Карточка как контейнер для смешанного контента"
          >
            <div className="ds-demo-row">
              <Badge>Готово</Badge>
              <Badge variant="success">Стабильно</Badge>
            </div>

            <p>
              Используйте card, когда несколько связанных элементов должны считываться
              как единый смысловой и визуальный блок.
            </p>

            <div className="ds-demo-row">
              <Button variant="primary">Открыть подробности</Button>
              <Button variant="ghost">Вторичное действие</Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте card для смысловой группировки связанных данных и действий.</li>
          <li>Не превращайте каждую секцию страницы в card без необходимости.</li>
          <li>Accent-card применяйте только для реально важного или выделенного контента.</li>
          <li>Interactive-card должна ясно считываться как кликабельный элемент.</li>
          <li>Внутренний spacing card должен оставаться системным и предсказуемым.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-column">
              <Card
                title="Структурированный контент"
                description="Заголовок, supporting text и content-area работают как единое целое."
              >
                <p>Контент внутри card остаётся связанным и хорошо читается как единый блок.</p>
              </Card>
            </div>
            <ul className="ds-guidelines">
              <li>Сохраняйте внутреннюю иерархию заголовка, описания и содержимого.</li>
              <li>Используйте card там, где контенту нужна общая поверхность.</li>
              <li>Держите ритм spacing и visual hierarchy последовательными.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-column">
              <Card accent interactive title="Перебор с акцентированием">
                <p>Слишком много акцента и интерактивности одновременно делает card шумной.</p>
              </Card>
            </div>
            <ul className="ds-guidelines">
              <li>Не комбинируйте все способы акцента сразу без необходимости.</li>
              <li>Не используйте card просто как декоративную рамку.</li>
              <li>Не перегружайте card длинным и плохо структурированным контентом.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>title</code>, <code>description</code>,{' '}
          <code>accent</code>, <code>interactive</code> и <code>children</code>.
          Визуальная структура строится на системных токенах поверхности, границы,
          скругления, тени, текста и spacing.
        </div>
      </div>
    </section>
  )
}