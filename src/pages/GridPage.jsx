const BREAKPOINTS = [
  {
    label: 'Малый',
    range: 'Мобильные устройства',
    columns: '4 колонки',
    note: 'Компактная сетка для узких экранов и одноколоночных сценариев.',
  },
  {
    label: 'Средний',
    range: 'Планшеты',
    columns: '8 колонок',
    note: 'Промежуточная сетка для более свободной компоновки и размещения блоков рядом.',
  },
  {
    label: 'Большой',
    range: 'Настольные устройства',
    columns: '12 колонок',
    note: 'Основная рабочая сетка для сложных интерфейсов, дашбордов и документации.',
  },
]

export default function GridPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Сетка</h2>
        <p>
          Сетка определяет пространственную структуру интерфейса и помогает
          согласованно размещать контент на разных экранах. Она связывает компоновку,
          отступы и визуальную иерархию в единый системный каркас.
        </p>

      </div>

      <div className="ds-section-block">
        <h3>Анатомия сетки</h3>
        <p>
          Базовая сетка состоит из колонок, промежутков между ними и внешних
          ограничителей контента. Вместе они создают предсказуемую структуру,
          которая помогает выравнивать компоненты и сохранять визуальный ритм.
        </p>

        <div className="ds-demo-card">
          <div className="ds-grid-anatomy">
            <div className="ds-grid-anatomy__margin">Отступ</div>

            <div className="ds-grid-anatomy__columns">
              <div className="ds-grid-anatomy__column">1</div>
              <div className="ds-grid-anatomy__column">2</div>
              <div className="ds-grid-anatomy__column">3</div>
              <div className="ds-grid-anatomy__column">4</div>
              <div className="ds-grid-anatomy__column">5</div>
              <div className="ds-grid-anatomy__column">6</div>
              <div className="ds-grid-anatomy__column">7</div>
              <div className="ds-grid-anatomy__column">8</div>
              <div className="ds-grid-anatomy__column">9</div>
              <div className="ds-grid-anatomy__column">10</div>
              <div className="ds-grid-anatomy__column">11</div>
              <div className="ds-grid-anatomy__column">12</div>
            </div>

            <div className="ds-grid-anatomy__margin">Отступ</div>
          </div>

          <ul className="ds-guidelines">
            <li>Колонки формируют основной каркас компоновки.</li>
            <li>Промежутки между колонками разделяют соседние блоки и улучшают читаемость композиции.</li>
            <li>Поля задают безопасные внешние границы контента.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Адаптивное поведение</h3>
        <p>
          Сетка должна адаптироваться к размеру экрана, а не оставаться
          фиксированной. На мобильных экранах структура проще, а на настольных
          она допускает более сложное распределение контента.
        </p>

        <div className="ds-grid-breakpoint-list">
          {BREAKPOINTS.map((item) => (
            <div key={item.label} className="ds-grid-breakpoint-card">
              <div className="ds-grid-breakpoint-card__top">
                <h4 className="ds-grid-breakpoint-card__title">{item.label}</h4>
                <span className="ds-grid-breakpoint-card__range">{item.range}</span>
              </div>

              <p className="ds-grid-breakpoint-card__columns">{item.columns}</p>
              <p className="ds-grid-breakpoint-card__note">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры компоновки</h3>
        <p>
          Ниже показаны типичные паттерны компоновки, которые строятся на основе
          сетки и токенов отступов.
        </p>

        <div className="ds-grid-example-stack">
          <div className="ds-grid-example-card">
            <span className="ds-grid-example-card__label">Двухколоночная компоновка</span>
            <div className="ds-grid-example ds-grid-example--two">
              <div className="ds-grid-example__block">Основной контент</div>
              <div className="ds-grid-example__block">Вспомогательная панель</div>
            </div>
          </div>

          <div className="ds-grid-example-card">
            <span className="ds-grid-example-card__label">Трёхколоночный контент</span>
            <div className="ds-grid-example ds-grid-example--three">
              <div className="ds-grid-example__block">Карточка</div>
              <div className="ds-grid-example__block">Карточка</div>
              <div className="ds-grid-example__block">Карточка</div>
            </div>
          </div>

          <div className="ds-grid-example-card">
            <span className="ds-grid-example-card__label">Контент с широкой ведущей областью</span>
            <div className="ds-grid-example ds-grid-example--asymmetric">
              <div className="ds-grid-example__block ds-grid-example__block--wide">
                Основная область контента
              </div>
              <div className="ds-grid-example__block">Метаданные</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Отступы и ритм</h3>
        <p>
          Сетка не существует отдельно от системы отступов. Размеры внешних отступов,
          зазоров и внутренних отступов контейнера должны опираться на токены отступов,
          чтобы компоновка оставалась последовательной и масштабируемой.
        </p>

        <div className="ds-demo-card">
          <div className="ds-grid-rhythm">
            <div className="ds-grid-rhythm__item">
              <span className="ds-grid-rhythm__token">--space-2</span>
              <p>Плотные внутренние интервалы внутри небольших UI-блоков.</p>
            </div>

            <div className="ds-grid-rhythm__item">
              <span className="ds-grid-rhythm__token">--space-4</span>
              <p>Стандартный шаг для внутренних отступов карточек, промежутков между полями и небольших групп компоновки.</p>
            </div>

            <div className="ds-grid-rhythm__item">
              <span className="ds-grid-rhythm__token">--space-6 / --space-8</span>
              <p>Более крупный ритм для отступов между секциями и разделения групп контента.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте сетку для выравнивания и структурирования контента, а не только для декоративной симметрии.</li>
          <li>Адаптируйте количество колонок под контрольную точку и плотность интерфейса.</li>
          <li>Используйте токены отступов для промежутков, зазоров и внутренних отступов контейнера.</li>
          <li>Сохраняйте выравнивание между текстом, элементами управления и блоками контента.</li>
          <li>Не перегружайте компоновку слишком большим количеством конкурирующих колонок.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-card">
              <div className="ds-grid-guidance-card">
                <div className="ds-grid-guidance-card__good-layout">
                  <div className="ds-grid-guidance-card__good-main">Выровненный контент</div>
                  <div className="ds-grid-guidance-card__good-side">Боковая панель</div>
                </div>
              </div>
            </div>

            <ul className="ds-guidelines">
              <li>Выстраивайте компоновку вокруг устойчивых колонок и ритма отступов.</li>
              <li>Сохраняйте явную связь между основным и вспомогательным контентом.</li>
              <li>Делайте структуру понятной уже на первом взгляде.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-card">
              <div className="ds-grid-guidance-card">
                <div className="ds-grid-guidance-card__bad-layout">
                  <div className="ds-grid-guidance-card__bad-item ds-grid-guidance-card__bad-item--1" />
                  <div className="ds-grid-guidance-card__bad-item ds-grid-guidance-card__bad-item--2" />
                  <div className="ds-grid-guidance-card__bad-item ds-grid-guidance-card__bad-item--3" />
                  <div className="ds-grid-guidance-card__bad-item ds-grid-guidance-card__bad-item--4" />
                </div>
              </div>
            </div>

            <ul className="ds-guidelines">
              <li>Не размещайте блоки без общей логики выравнивания.</li>
              <li>Не смешивайте случайные зазоры и разные контейнерные отступы.</li>
              <li>Не усложняйте компоновку там, где достаточно простой структуры.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Сетка строится вокруг предсказуемых колоночных раскладок,
          границ контейнера и токенов отступов. Реальные страницы и компоненты
          должны использовать системные решения по сетке и зазорам вместо случайных
          значений компоновки.
        </div>
      </div>
    </section>
  )
}
