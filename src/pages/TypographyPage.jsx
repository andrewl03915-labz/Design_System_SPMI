import React from 'react'

const TYPE_SCALE = [
  {
    token: '--text-xl',
    label: 'Page title',
    sample: 'Typography builds clarity and hierarchy',
    note: 'Используется для главных заголовков страниц и ключевых entry points.',
    className: 'ds-type-specimen ds-type-specimen--xl',
  },
  {
    token: '--text-lg',
    label: 'Section heading',
    sample: 'Section heading introduces a content block',
    note: 'Подходит для заголовков секций и вторичного визуального акцента.',
    className: 'ds-type-specimen ds-type-specimen--lg',
  },
  {
    token: '--text-base',
    label: 'Body text',
    sample:
      'Body text is used for the main reading experience. It should remain neutral, readable and comfortable in longer interface descriptions.',
    note: 'Основной текстовый размер для интерфейсов, описаний и пояснений.',
    className: 'ds-type-specimen ds-type-specimen--base',
  },
  {
    token: '--text-sm',
    label: 'UI text',
    sample: 'Helper text, secondary descriptions, controls and support content.',
    note: 'Используется для вспомогательного текста, control labels и secondary content.',
    className: 'ds-type-specimen ds-type-specimen--sm',
  },
]

export default function TypographyPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Typography</h2>
        <p>
          Типографика определяет, как текст выглядит, читается и организует
          интерфейс. Этот раздел описывает гарнитуру, scale tokens, текстовую
          иерархию и правила использования текста в дизайн-системе.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Foundations</span>
          <span className="ds-meta-item">Status: In progress</span>
          <span className="ds-meta-item">Scope: Scale, hierarchy, readability</span>
          <span className="ds-meta-item">Tokens: text, line-height, weight</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Typeface system</h3>
        <p>
          Типографическая система строится на одном основном шрифтовом наборе
          для интерфейса и предсказуемой иерархии размеров. В MVP основная
          задача typography — обеспечивать читаемость, ясную структуру и
          единый визуальный ритм.
        </p>

        <div className="ds-demo-card">
          <div className="ds-type-family-showcase">
            <div className="ds-type-family-showcase__item">
              <span className="ds-type-family-showcase__label">Primary UI font</span>
              <p className="ds-type-family-showcase__sample ds-type-family-showcase__sample--primary">
                Aa Bb Cc 123
              </p>
              <p className="ds-type-family-showcase__meta">
                Основная гарнитура используется для интерфейсных заголовков,
                основного текста, labels и metadata.
              </p>
            </div>

            <div className="ds-type-family-showcase__item">
              <span className="ds-type-family-showcase__label">Tone</span>
              <p className="ds-type-family-showcase__meta">
                Система стремится к академичной, нейтральной и уверенной подаче
                без декоративности и без чрезмерно технологичного характера.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Type scale</h3>
        <p>
          Type scale задаёт ограниченный набор текстовых размеров, который
          используется во всей системе. Это помогает поддерживать консистентность
          и уменьшает визуальный шум.
        </p>

        <div className="ds-type-scale-list">
          {TYPE_SCALE.map((item) => (
            <div key={item.token} className="ds-type-scale-card">
              <div className="ds-type-scale-card__meta">
                <span className="ds-type-scale-card__token">{item.token}</span>
                <span className="ds-type-scale-card__label">{item.label}</span>
              </div>

              <p className={item.className}>{item.sample}</p>
              <p className="ds-type-scale-card__note">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Hierarchy in use</h3>
        <p>
          Текстовая иерархия должна помогать пользователю быстро понимать
          структуру страницы: что главное, что вторичное и что поясняет детали.
        </p>

        <div className="ds-demo-card">
          <div className="ds-type-hierarchy-example">
            <p className="ds-type-hierarchy-example__eyebrow">Foundation example</p>
            <h3 className="ds-type-hierarchy-example__title">
              Admissions documentation and student services
            </h3>
            <p className="ds-type-hierarchy-example__lead">
              Этот уровень текста помогает быстро обозначить тему страницы и
              сформировать понятный вход в контент.
            </p>

            <div className="ds-type-hierarchy-example__section">
              <h4 className="ds-type-hierarchy-example__section-title">
                Document requirements
              </h4>
              <p className="ds-type-hierarchy-example__body">
                Основной текст используется для описаний, пояснений и сценариев,
                которые нужно читать последовательно. Он должен оставаться
                нейтральным по тону и комфортным для длительного чтения.
              </p>
              <p className="ds-type-hierarchy-example__meta">
                Updated 2 days ago
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте ограниченный набор text tokens вместо произвольных размеров.</li>
          <li>Основной body text должен оставаться читаемым и визуально нейтральным.</li>
          <li>Заголовки должны создавать ясную иерархию, а не просто быть крупнее текста.</li>
          <li>Helper и secondary text не должны конкурировать по акценту с основным содержанием.</li>
          <li>Типографика должна работать вместе с spacing и color foundations.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-card">
              <div className="ds-type-guidance-card">
                <h4 className="ds-type-guidance-card__title">
                  Clear hierarchy with restrained emphasis
                </h4>
                <p className="ds-type-guidance-card__body">
                  Используйте понятный контраст между title, body и secondary text.
                  Делайте акцент через роль текста, а не через случайное увеличение размера.
                </p>
                <p className="ds-type-guidance-card__meta">Section note</p>
              </div>
            </div>
            <ul className="ds-guidelines">
              <li>Стройте иерархию через роль, размер, вес и цвет текста.</li>
              <li>Сохраняйте body text спокойным и хорошо читаемым.</li>
              <li>Используйте muted text только для вторичных сообщений.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Don&apos;t</h3>
            <div className="ds-demo-card">
              <div className="ds-type-guidance-card ds-type-guidance-card--bad">
                <h4 className="ds-type-guidance-card__title ds-type-guidance-card__title--bad">
                  Too many font sizes and too much emphasis everywhere
                </h4>
                <p className="ds-type-guidance-card__body ds-type-guidance-card__body--bad">
                  Когда каждый фрагмент текста пытается выглядеть важным, иерархия
                  исчезает, а страница становится визуально шумной и трудной для чтения.
                </p>
                <p className="ds-type-guidance-card__meta ds-type-guidance-card__meta--bad">
                  Overstyled text
                </p>
              </div>
            </div>
            <ul className="ds-guidelines">
              <li>Не используйте слишком много размеров в одной странице.</li>
              <li>Не делайте secondary text слишком контрастным или крупным.</li>
              <li>Не заменяйте иерархию случайным жирным начертанием.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Implementation note</h3>
        <div className="ds-note">
          Typography foundation в MVP опирается на text tokens, ограниченный
          набор размеров и повторяемую hierarchy model. Компоненты и страницы
          должны использовать системные классы и token values вместо локальных
          произвольных font-size решений.
        </div>
      </div>
    </section>
  )
}