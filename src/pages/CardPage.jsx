import React from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

export default function CardPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Card</h2>
        <p>
          Card используется как базовый контейнер для группировки связанных данных,
          описаний, actions и preview-блоков. Компонент помогает выстраивать
          поверхность интерфейса и поддерживает единый ритм spacing, radius и border.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Surface</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: surface, spacing, radius, border, shadow, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Preview</h3>
        <p>
          Preview показывает card в типичном сценарии: заголовок, supporting text
          и содержимое внутри единого surface-container.
        </p>

        <div className="ds-demo-card">
          <Card
            title="Foundations"
            description="Базовые правила системы: цвет, типографика, spacing, radius и shadows."
          >
            <Badge variant="primary">Core layer</Badge>
            <p>
              Card помогает собрать связанный контент в один понятный блок и
              использовать единый visual rhythm на странице.
            </p>
          </Card>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Variants</h3>
        <p>В MVP card поддерживает базовый, accent и interactive сценарии.</p>

        <div className="ds-split-grid">
          <Card
            title="Default card"
            description="Нейтральный контейнер для обычного контента."
          >
            <p>Используется для карточек обзора, описаний и documentation blocks.</p>
          </Card>

          <Card
            title="Accent card"
            description="Лёгкое акцентное выделение важного блока."
            accent
          >
            <p>Подходит для выделения primary section, callout или важной системной заметки.</p>
          </Card>

          <Card
            title="Interactive card"
            description="Карточка, которая может вести к следующему действию."
            interactive
          >
            <p>Такой вариант уместен для overview navigation и selectable blocks.</p>
          </Card>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Composition</h3>
        <p>
          Card особенно хорошо работает как контейнер для mixed content:
          текста, badge, actions и вспомогательных элементов.
        </p>

        <div className="ds-demo-card">
          <Card
            title="Component overview"
            description="Карточка как контейнер для смешанного контента"
          >
            <div className="ds-demo-row">
              <Badge>Ready</Badge>
              <Badge variant="success">Stable</Badge>
            </div>

            <p>
              Используйте card, когда несколько связанных элементов должны считываться
              как единый смысловой и визуальный блок.
            </p>

            <div className="ds-demo-row">
              <Button variant="primary">Open details</Button>
              <Button variant="ghost">Secondary action</Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте card для смысловой группировки связанных данных и действий.</li>
          <li>Не превращайте каждую секцию страницы в card без необходимости.</li>
          <li>Accent-card применяйте только для реально важного или выделенного контента.</li>
          <li>Interactive-card должна ясно считываться как кликабельный элемент.</li>
          <li>Внутренний spacing card должен оставаться системным и предсказуемым.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-column">
              <Card
                title="Structured content"
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
            <h3>Don&apos;t</h3>
            <div className="ds-demo-column">
              <Card accent interactive title="Too much emphasis">
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
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент принимает <code>title</code>, <code>description</code>,{' '}
          <code>accent</code>, <code>interactive</code> и <code>children</code>.
          Визуальная структура строится на системных tokens поверхности, границы,
          скругления, тени, текста и spacing.
        </div>
      </div>
    </section>
  )
}