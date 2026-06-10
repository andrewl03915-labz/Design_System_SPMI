import React from 'react'
import Badge from '../components/ui/Badge'

export default function BadgePage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Бейдж</h2>
        <p>
          Badge используется для коротких статусов, категорий и компактных текстовых меток.
          Компонент помогает быстро передавать смысл без перегрузки интерфейса.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Категория: Статус</span>
          <span className="ds-meta-item">Статус: Готово</span>
          <span className="ds-meta-item">Токены: color, radius, spacing, text</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Превью</h3>
        <p>Базовое превью показывает ключевые семантические варианты компонента.</p>

        <div className="ds-demo-card">
          <div className="ds-demo-row">
            <Badge variant="neutral">Бейдж по умолчанию</Badge>
            <Badge variant="primary">Основной бейдж</Badge>
            <Badge variant="success">Успешно</Badge>
            <Badge variant="warning">Предупреждение</Badge>
          </div>

          <p>
            Используйте бейджи для коротких статусных меток и контекстных маркеров.
            Хороший badge быстро считывается и не конкурирует с основным контентом страницы.
          </p>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Варианты</h3>
        <p>Каждый вариант имеет свою роль и должен использоваться по смыслу, а не случайно.</p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <Badge variant="neutral">Нейтральный</Badge>
            <p>Нейтральная метка для общей категоризации и вторичной информации.</p>
          </div>

          <div className="ds-demo-card">
            <Badge variant="primary">Основной</Badge>
            <p>Акцентная метка для выделенного системного ярлыка или важного контекста.</p>
          </div>

          <div className="ds-demo-card">
            <Badge variant="success">Успешно</Badge>
            <p>Позитивный статус, подтверждение результата.</p>
          </div>

          <div className="ds-demo-card">
            <Badge variant="warning">Предупреждение</Badge>
            <p>Акцент внимания или состояние, требующее проверки.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте badge для коротких статусов, а не для длинных пояснений.</li>
          <li>Один семантический вариант должен соответствовать одному типу смысла.</li>
          <li>Badge не должен заменять кнопку, ссылку или полноценный призыв к действию.</li>
          <li>Текст badge должен быть коротким, читаемым и однозначным.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-row">
              <Badge variant="success">В наличии</Badge>
              <Badge variant="primary">Новое</Badge>
              <Badge variant="neutral">Обновлено</Badge>
            </div>
            <ul className="ds-guidelines">
              <li>Используйте badge как компактный статусный маркер.</li>
              <li>Выбирайте variant по смыслу состояния.</li>
              <li>Сохраняйте короткую длину подписи.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-row">
              <Badge variant="warning">Нажмите здесь, чтобы продолжить</Badge>
            </div>
            <ul className="ds-guidelines">
              <li>Не превращайте badge в CTA-элемент.</li>
              <li>Не пишите слишком длинные тексты внутри компактной метки.</li>
              <li>Не используйте warning или success без реального семантического смысла.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент использует свойство <code>variant</code> со значениями{' '}
          <code>neutral</code>, <code>primary</code>, <code>success</code>,{' '}
          <code>warning</code>. Текст badge передаётся через <code>children</code>, а
          визуальный стиль определяется системными токенами цвета, скругления и типографики.
        </div>
      </div>
    </section>
  )
}