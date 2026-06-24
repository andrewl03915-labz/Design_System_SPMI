const TYPE_SCALE = [
  {
    token: '--text-xl',
    label: 'Заголовок страницы',
    sample: 'Типографика формирует ясность и иерархию',
    note: 'Используется для главных заголовков страниц и ключевых точек входа.',
    className: 'ds-type-specimen ds-type-specimen--xl',
  },
  {
    token: '--text-lg',
    label: 'Заголовок секции',
    sample: 'Заголовок секции вводит блок контента',
    note: 'Подходит для заголовков секций и вторичного визуального акцента.',
    className: 'ds-type-specimen ds-type-specimen--lg',
  },
  {
    token: '--text-base',
    label: 'Основной текст',
    sample:
      'Основной текст используется для базового чтения. Он должен оставаться нейтральным, разборчивым и комфортным в более длинных интерфейсных описаниях.',
    note: 'Основной текстовый размер для интерфейсов, описаний и пояснений.',
    className: 'ds-type-specimen ds-type-specimen--base',
  },
  {
    token: '--text-sm',
    label: 'Текст интерфейса',
    sample: 'Вспомогательный текст, вторичные описания, элементы управления и поддерживающий контент.',
    note: 'Используется для вспомогательного текста, подписей элементов управления и вторичного контента.',
    className: 'ds-type-specimen ds-type-specimen--sm',
  },
]

export default function TypographyPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Типографика</h2>
        <p>
          Типографика определяет, как текст выглядит, читается и организует
          интерфейс. Этот раздел описывает гарнитуру, scale tokens, текстовую
          иерархию и правила использования текста в дизайн-системе.
        </p>


      </div>

      <div className="ds-section-block">
        <h3>Система гарнитуры</h3>
        <p>
          Типографическая система строится на одном основном шрифтовом наборе NT Somic
          для интерфейса и предсказуемой иерархии размеров. Основная
          задача typography — обеспечивать читаемость, ясную структуру и
          единый визуальный ритм.
        </p>

        <div className="ds-demo-card">
          <div className="ds-type-family-showcase">
            <div className="ds-type-family-showcase__item">
              <span className="ds-type-family-showcase__label">Основной UI-шрифт</span>
              <p className="ds-type-family-showcase__sample ds-type-family-showcase__sample--primary">
                Aa Bb Cc 123
              </p>
              <p className="ds-type-family-showcase__meta">
                Основная гарнитура используется для интерфейсных заголовков,
                основного текста, labels и metadata.
              </p>
            </div>

            <div className="ds-type-family-showcase__item">
              <span className="ds-type-family-showcase__label">Характер</span>
              <p className="ds-type-family-showcase__meta">
                Система стремится к академичной, нейтральной и уверенной подаче
                без декоративности и без чрезмерно технологичного характера.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block" id="font-setup">
        <h3>Как подключить шрифт к своему проекту</h3>
        <p>
          Компоненты, скопированные способом <strong>HTML + CSS</strong>, самодостаточны,
          но фирменный шрифт NT Somic в сниппет не входит (это бинарные файлы). Без него
          текст отрисуется системным шрифтом. Чтобы получить точную типографику, подключите
          шрифт один раз:
        </p>

        <div className="ds-demo-card">
          <ol className="ds-guidelines">
            <li>
              Скопируйте файлы шрифта в свой проект:
              <code> 01_NTSomic-Regular.woff2</code>, <code>02_NTSomic-Medium.woff2</code>,
              <code> 03_NTSomic-Bold.woff2</code>.
            </li>
            <li>
              Добавьте в свой CSS объявления <code>@font-face</code> (поправьте путь
              <code> url(...)</code> под расположение файлов):
            </li>
          </ol>

          <pre className="ds-code">
            <code>{`@font-face {
  font-family: "NT Somic";
  src: url("./fonts/01_NTSomic-Regular.woff2") format("woff2");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "NT Somic";
  src: url("./fonts/02_NTSomic-Medium.woff2") format("woff2");
  font-weight: 500; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "NT Somic";
  src: url("./fonts/03_NTSomic-Bold.woff2") format("woff2");
  font-weight: 700; font-style: normal; font-display: swap;
}`}</code>
          </pre>

          <p className="ds-type-scale-card__note">
            Больше ничего делать не нужно: в скопированных компонентах уже задан
            <code> font-family: var(--font-family-base)</code>, где NT Somic стоит первым.
            Как только <code>@font-face</code> подключён, шрифт применится автоматически.
          </p>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Шкала размеров</h3>
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
        <h3>Иерархия в интерфейсе</h3>
        <p>
          Текстовая иерархия должна помогать пользователю быстро понимать
          структуру страницы: что главное, что вторичное и что поясняет детали.
        </p>

        <div className="ds-demo-card">
          <div className="ds-type-hierarchy-example">
            <p className="ds-type-hierarchy-example__eyebrow">Пример foundations</p>
            <h3 className="ds-type-hierarchy-example__title">
              Документы для поступления и студенческие сервисы
            </h3>
            <p className="ds-type-hierarchy-example__lead">
              Этот уровень текста помогает быстро обозначить тему страницы и
              сформировать понятный вход в контент.
            </p>

            <div className="ds-type-hierarchy-example__section">
              <h4 className="ds-type-hierarchy-example__section-title">
                Требования к документам
              </h4>
              <p className="ds-type-hierarchy-example__body">
                Основной текст используется для описаний, пояснений и сценариев,
                которые нужно читать последовательно. Он должен оставаться
                нейтральным по тону и комфортным для длительного чтения.
              </p>
              <p className="ds-type-hierarchy-example__meta">
                Обновлено 2 дня назад
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте ограниченный набор text tokens вместо произвольных размеров.</li>
          <li>Основной body text должен оставаться читаемым и визуально нейтральным.</li>
          <li>Заголовки должны создавать ясную иерархию, а не просто быть крупнее текста.</li>
          <li>Helper и secondary text не должны конкурировать по акценту с основным содержанием.</li>
          <li>Типографика должна работать вместе с spacing и color foundations.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-card">
              <div className="ds-type-guidance-card">
                <h4 className="ds-type-guidance-card__title">
                  Ясная иерархия со сдержанным акцентом
                </h4>
                <p className="ds-type-guidance-card__body">
                  Используйте понятный контраст между title, body и secondary text.
                  Делайте акцент через роль текста, а не через случайное увеличение размера.
                </p>
                <p className="ds-type-guidance-card__meta">Примечание к разделу</p>
              </div>
            </div>
            <ul className="ds-guidelines">
              <li>Стройте иерархию через роль, размер, вес и цвет текста.</li>
              <li>Сохраняйте body text спокойным и хорошо читаемым.</li>
              <li>Используйте muted text только для вторичных сообщений.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-card">
              <div className="ds-type-guidance-card ds-type-guidance-card--bad">
                <h4 className="ds-type-guidance-card__title ds-type-guidance-card__title--bad">
                  Слишком много размеров и слишком много акцента везде
                </h4>
                <p className="ds-type-guidance-card__body ds-type-guidance-card__body--bad">
                  Когда каждый фрагмент текста пытается выглядеть важным, иерархия
                  исчезает, а страница становится визуально шумной и трудной для чтения.
                </p>
                <p className="ds-type-guidance-card__meta ds-type-guidance-card__meta--bad">
                  Перегруженный текст
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
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Typography foundation опирается на text tokens, ограниченный
          набор размеров и повторяемую hierarchy model. Компоненты и страницы
          должны использовать системные классы и token values вместо локальных
          произвольных font-size решений.
        </div>
      </div>
    </section>
  )
}