import Tooltip from '../components/ui/Tooltip'
import Button from '../components/ui/Button'

export default function TooltipPage() {
  return (
    <section className="ds-section ds-section--tooltip">
      <div className="ds-page-intro">
        <h2>Подсказка</h2>
        <p>
          Tooltip используется для кратких пояснений, helper hints и
          дополнительного контекста рядом с существующим элементом интерфейса.
          Компонент помогает уточнить значение или действие без перегрузки
          основного layout.
        </p>

      </div>

      <div className="ds-section-block">
        <h3>Предпросмотр</h3>
        <p>
          Tooltip показывает короткое пояснение по hover или keyboard focus и
          работает как supporting layer рядом с trigger element.
        </p>

        <div className="ds-demo-card">
          <Tooltip content="Это действие сохраняет текущие изменения.">
            <Button variant="secondary">Сохранить черновик</Button>
          </Tooltip>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Варианты</h3>
        <p>Ниже показаны типичные варианты использования tooltip в интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Размещение сверху</h3>
            <Tooltip content="Дополнительный контекст отображается над триггером.">
              <span className="ds-tooltip-demo-trigger">Инфо</span>
            </Tooltip>
          </div>

          <div className="ds-demo-card">
            <h3>Размещение снизу</h3>
            <Tooltip content="Дополнительный контекст отображается под триггером." placement="bottom">
              <span className="ds-tooltip-demo-trigger">Помощь</span>
            </Tooltip>
          </div>

          <div className="ds-demo-card">
            <h3>Текстовый триггер</h3>
            <Tooltip content="Этот термин обозначает этап проверки после отправки.">
              <span className="ds-tooltip-demo-text">Этап проверки</span>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Для tooltip особенно важны default, visible, focus-triggered и
          disabled states, потому что компонент должен быть деликатным, но
          предсказуемым.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <Tooltip content="Эта подсказка появляется при взаимодействии.">
              <span className="ds-tooltip-demo-trigger">По умолчанию</span>
            </Tooltip>
          </div>

          <div className="ds-demo-card">
            <h3>Показ по фокусу</h3>
            <p>
              Нажмите клавишу <kbd>Tab</kbd>, чтобы перевести фокус на кнопку и
              увидеть подсказку. Каждое следующее нажатие <kbd>Tab</kbd> показывает
              подсказку следующей кнопки.
            </p>
            <div className="ds-demo-row">
              <Tooltip content="Пользователи клавиатуры должны получать те же пояснения.">
                <button type="button" className="ds-tooltip-demo-trigger">
                  Фокус 1
                </button>
              </Tooltip>
              <Tooltip content="Подсказка появляется при фокусе с клавиатуры." placement="bottom">
                <button type="button" className="ds-tooltip-demo-trigger">
                  Фокус 2
                </button>
              </Tooltip>
              <Tooltip content="Каждая кнопка показывает свою подсказку по фокусу.">
                <button type="button" className="ds-tooltip-demo-trigger">
                  Фокус 3
                </button>
              </Tooltip>
            </div>
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <Tooltip content="Эта подсказка отключена." disabled>
              <span className="ds-tooltip-demo-trigger">Недоступно</span>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура tooltip включает trigger, tooltip bubble, content и
          directional arrow.
        </p>

        <div className="ds-demo-card">
          <Tooltip content="Загрузите PDF-документ размером не более 10 МБ.">
            <span className="ds-tooltip-demo-trigger">?</span>
          </Tooltip>

          <ul className="ds-guidelines">
            <li>Tooltip должен содержать короткое и полезное пояснение.</li>
            <li>Trigger должен оставаться понятным и доступным сам по себе.</li>
            <li>Tooltip не должен заменять постоянный важный текст интерфейса.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>Компонент особенно полезен в таблицах, формах, dense layouts и settings panels.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>В формах</h3>
            <Tooltip content="Используйте юридическое имя точно так, как оно указано в официальных документах.">
              <span className="ds-tooltip-demo-trigger">Подсказка к имени</span>
            </Tooltip>
          </div>

          <div className="ds-demo-card">
            <h3>В настройках</h3>
            <Tooltip content="Уведомления отправляются только при критических изменениях аккаунта.">
              <span className="ds-tooltip-demo-trigger">Информация о политике</span>
            </Tooltip>
          </div>

          <div className="ds-demo-card">
            <h3>В компактных интерфейсах</h3>
            <Tooltip content="Архивация скрывает элемент из активного списка без удаления.">
              <span className="ds-tooltip-demo-trigger">Архивировать</span>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте tooltip для кратких пояснений и secondary context.</li>
          <li>Не помещайте в tooltip критически важную информацию.</li>
          <li>Tooltip должен дополнять trigger, а не объяснять полностью непонятный интерфейс.</li>
          <li>Формулируйте текст коротко, чтобы он быстро считывался.</li>
          <li>Поддерживайте hover и keyboard focus, а не только pointer interaction.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-card">
              <Tooltip content="Ваш профиль виден только администраторам.">
                <span className="ds-tooltip-demo-trigger">Видимость</span>
              </Tooltip>
            </div>
            <ul className="ds-guidelines">
              <li>Пишите короткий и конкретный helper text.</li>
              <li>Используйте tooltip для secondary explanation.</li>
              <li>Привязывайте его к понятному trigger element.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-card">
              <p>
                Подсказка с длинным абзацем, которая пытается заменить основную
                инструкцию, сообщение валидации или онбординг-пояснение.
              </p>
            </div>
            <ul className="ds-guidelines">
              <li>Не используйте tooltip для длинных инструкций.</li>
              <li>Не прячьте в нём обязательную или критичную информацию.</li>
              <li>Не делайте tooltip единственным способом понять интерфейс.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>content</code>, <code>children</code>,{' '}
          <code>placement</code> и <code>disabled</code>. В MVP tooltip
          реализован как lightweight helper overlay с поддержкой hover и
          keyboard focus.
        </div>
      </div>
    </section>
  )
}