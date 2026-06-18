import Checkbox from '../components/ui/Checkbox'

export default function CheckboxPage() {
  return (
    <section className="ds-section">
      <div className="ds-page-intro">
        <h2>Флажок</h2>
        <p>
          Checkbox используется для подтверждения согласия, выбора независимых
          опций и управления множественным выбором. Компонент подходит для форм,
          настроек, фильтров и сценариев, где пользователь может отметить один
          или несколько пунктов.
        </p>


      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура checkbox состоит из области управления, подписи и
          вспомогательного текста или текста ошибки.
        </p>

        <div className="ds-demo-card">
          <div className="ds-demo-column">
            <Checkbox
              label="Я согласен с правилами подачи заявки"
              helperText="Подтверждение требуется перед переходом к следующему шагу"
            />
          </div>

          <ul className="ds-guidelines">
            <li>Checkbox подходит для независимых опций и подтверждений.</li>
            <li>Label должен ясно описывать, что именно выбирает или подтверждает пользователь.</li>
            <li>Вспомогательный текст полезен, когда нужно уточнить последствие выбора.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>Ниже показаны базовые сценарии использования checkbox.</p>

        <div className="ds-split-grid">
          <div className="ds-demo-card">
            <h3>Не отмечено</h3>
            <Checkbox label="Получать обновления о новых программах" />
          </div>

          <div className="ds-demo-card">
            <h3>Отмечено</h3>
            <Checkbox label="Подписка на обновления активна" defaultChecked />
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <Checkbox label="Опция временно недоступна" disabled />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Состояния checkbox помогают показать активный выбор, фокус клавиатурной
          навигации, ошибку и недоступность.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>По умолчанию</h3>
            <Checkbox label="Выбрать этот параметр" />
          </div>

          <div className="ds-demo-card">
            <h3>Отмечено</h3>
            <Checkbox label="Параметр уже выбран" defaultChecked />
            <p>Состояние checked показывает активный и подтверждённый выбор.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Ошибка</h3>
            <Checkbox
              label="Я подтверждаю согласие на обработку данных"
              error="Необходимо подтвердить согласие, чтобы продолжить"
            />
            <p>Состояние error должно объяснять, какое действие требуется выполнить.</p>
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <Checkbox
              label="Опция будет доступна после выбора программы"
              helperText="Сначала завершите предыдущий шаг"
              disabled
            />
            <p>Состояние disabled показывает, что элемент существует в сценарии, но пока недоступен.</p>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте checkbox для независимых выборов и согласий.</li>
          <li>Если нужно выбрать только один вариант из группы, лучше использовать radio.</li>
          <li>Label должен быть однозначным и не требовать дополнительной интерпретации.</li>
          <li>Checkbox должен наследовать системные tokens spacing, radius, border и типографики.</li>
          <li>Не прячьте смысл выбора только во вспомогательном тексте.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-column">
              <Checkbox
                label="Я согласен получать уведомления о статусе заявки"
                helperText="Настройку можно изменить позже"
              />
            </div>
            <ul className="ds-guidelines">
              <li>Пишите label как ясное утверждение или понятную независимую опцию.</li>
              <li>Добавляйте helper text только тогда, когда он реально помогает понять выбор.</li>
              <li>Сохраняйте визуальную иерархию и spacing такими же, как у других form-controls.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-column">
              <Checkbox label="ОК" />
            </div>
            <ul className="ds-guidelines">
              <li>Не используйте короткие и неинформативные label.</li>
              <li>Не применяйте checkbox там, где требуется выбор только одного варианта.</li>
              <li>Не делайте смысл выбора двусмысленным или слишком общим.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>label</code>, <code>helperText</code>,{' '}
          <code>error</code>, <code>disabled</code> и поддерживает нативные props
          элемента <code>input type="checkbox"</code>. Helper text и error text
          связываются с компонентом через <code>aria-describedby</code>, а
          состояние ошибки передаётся через <code>aria-invalid</code>.
        </div>
      </div>
    </section>
  )
}