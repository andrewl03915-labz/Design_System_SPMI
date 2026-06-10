import React from 'react'
import Badge from '../components/ui/Badge'

export default function BadgePage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Badge</h2>
        <p>
          Badge используется для коротких статусов, категорий и компактных текстовых меток.
          Компонент помогает быстро передавать смысл без перегрузки интерфейса.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Status</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, radius, spacing, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Preview</h3>
        <p>Базовый preview показывает ключевые semantic variants компонента.</p>

        <div className="ds-demo-card">
          <div className="ds-demo-row">
            <Badge variant="neutral">Default badge</Badge>
            <Badge variant="primary">Primary badge</Badge>
            <Badge variant="success">Success badge</Badge>
            <Badge variant="warning">Warning badge</Badge>
          </div>

          <p>
            Use badges for short status labels and contextual markers. Хороший badge быстро
            считывается и не конкурирует с основным контентом страницы.
          </p>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Variants</h3>
        <p>Каждый вариант имеет свою роль и должен использоваться по смыслу, а не случайно.</p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <Badge variant="neutral">Neutral</Badge>
            <p>Нейтральная метка для общей категоризации и вторичной информации.</p>
          </div>

          <div className="ds-demo-card">
            <Badge variant="primary">Primary</Badge>
            <p>Акцентная метка для выделенного системного ярлыка или важного контекста.</p>
          </div>

          <div className="ds-demo-card">
            <Badge variant="success">Success</Badge>
            <p>Позитивный статус, подтверждение результата или успешное состояние.</p>
          </div>

          <div className="ds-demo-card">
            <Badge variant="warning">Warning</Badge>
            <p>Предупреждение, внимание или состояние, требующее проверки.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте badge для коротких статусов, а не для длинных пояснений.</li>
          <li>Один semantic variant должен соответствовать одному типу смысла.</li>
          <li>Badge не должен заменять кнопку, ссылку или полноценный call to action.</li>
          <li>Текст badge должен быть коротким, читаемым и однозначным.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-row">
              <Badge variant="success">In stock</Badge>
              <Badge variant="primary">New</Badge>
              <Badge variant="neutral">Updated</Badge>
            </div>
            <ul className="ds-guidelines">
              <li>Используйте badge как компактный статусный маркер.</li>
              <li>Выбирайте variant по смыслу состояния.</li>
              <li>Сохраняйте короткую длину подписи.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-row">
              <Badge variant="warning">Click here to continue</Badge>
            </div>
            <ul className="ds-guidelines">
              <li>Не превращайте badge в CTA-элемент.</li>
              <li>Не пишите слишком длинные тексты внутри компактной метки.</li>
              <li>Не используйте warning или success без реального semantic смысла.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Компонент использует свойство <code>variant</code> со значениями{' '}
          <code>neutral</code>, <code>primary</code>, <code>success</code>,{' '}
          <code>warning</code>. Текст badge передаётся через <code>children</code>, а
          визуальный стиль определяется системными tokens цвета, скругления и типографики.
        </div>
      </div>
    </section>
  )
}