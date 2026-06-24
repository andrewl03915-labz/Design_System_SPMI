import { useState } from 'react'
import RadioGroup from '../components/ui/RadioGroup'
import CopyControl from '../components/ui/CopyControl'

export default function RadioPage() {
  const [programType, setProgramType] = useState('bachelor')
  const [deliveryMode, setDeliveryMode] = useState('online')
  const [language, setLanguage] = useState('en')
  const [selectedState, setSelectedState] = useState('option-2')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [accommodation, setAccommodation] = useState('shared')
  const [enrollment, setEnrollment] = useState('full-time')
  const [theme, setTheme] = useState('system')
  const [sortOrder, setSortOrder] = useState('latest')
  const [attendance, setAttendance] = useState('in-person')

  return (
    <section className="ds-section ds-section--radio">
      <div className="ds-page-intro">
        <h2>Радиокнопки</h2>
        <p>
          Radio используется для выбора одного варианта из нескольких
          взаимоисключающих опций. Компонент помогает представить single-choice
          selection в понятной и структурированной форме.
        </p>

      </div>

      <div className="ds-section-block">
        <h3>Предпросмотр</h3>
        <p>
          Radio group помогает выбрать один вариант из набора опций с ясным
          указанием текущего selected state.
        </p>

        <div className="ds-demo-card">
          <RadioGroup
            label="Тип программы"
            name="program-type-preview"
            value={programType}
            onChange={setProgramType}
            helperText="Выберите один вариант."
            options={[
              {
                value: 'bachelor',
                label: 'Программа бакалавриата',
                description: 'Базовая ступень высшего образования первого цикла.',
              },
              {
                value: 'master',
                label: 'Программа магистратуры',
                description: 'Следующая ступень высшего образования для углублённой специализации.',
              },
              {
                value: 'phd',
                label: 'Траектория PhD',
                description: 'Исследовательская траектория докторской подготовки.',
              },
            ]}
          />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Варианты</h3>
        <p>Ниже показаны типичные варианты использования radio group в интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Вертикальная группа</h3>
            <CopyControl
              jsx={`<RadioGroup
  label="Формат обучения"
  name="study-format"
  value={value}
  onChange={setValue}
  helperText="Выберите один формат."
  options={[
    { value: 'online', label: 'Онлайн', description: 'Дистанционное участие с цифровыми материалами и видеозанятиями.' },
    { value: 'hybrid', label: 'Гибридный формат', description: 'Сочетание онлайн-обучения и очных занятий.' },
    { value: 'campus', label: 'Очно', description: 'Полноценное очное участие в университете.' },
  ]}
/>`}
            >
              <RadioGroup
                label="Формат обучения"
                name="study-format"
                value={deliveryMode}
                onChange={setDeliveryMode}
                helperText="Выберите один формат."
                options={[
                  {
                    value: 'online',
                    label: 'Онлайн',
                    description: 'Дистанционное участие с цифровыми материалами и видеозанятиями.',
                  },
                  {
                    value: 'hybrid',
                    label: 'Гибридный формат',
                    description: 'Сочетание онлайн-обучения и очных занятий.',
                  },
                  {
                    value: 'campus',
                    label: 'Очно',
                    description: 'Полноценное очное участие в университете.',
                  },
                ]}
              />
            </CopyControl>
          </div>

          <div className="ds-demo-card">
            <h3>Горизонтальная группа</h3>
            <CopyControl
              jsx={`<RadioGroup
  label="Язык"
  name="language"
  value={value}
  onChange={setValue}
  direction="horizontal"
  options={[
    { value: 'en', label: 'Английский' },
    { value: 'de', label: 'Немецкий' },
    { value: 'fr', label: 'Французский' },
  ]}
/>`}
            >
              <RadioGroup
                label="Язык"
                name="language"
                value={language}
                onChange={setLanguage}
                direction="horizontal"
                options={[
                  { value: 'en', label: 'Английский' },
                  { value: 'de', label: 'Немецкий' },
                  { value: 'fr', label: 'Французский' },
                ]}
              />
            </CopyControl>
          </div>

          <div className="ds-demo-card">
            <h3>Недоступная группа</h3>
            <CopyControl
              jsx={`<RadioGroup
  label="Статус заявки"
  name="application-status"
  value="submitted"
  onChange={() => {}}
  helperText="После отправки выбор блокируется."
  disabled
  options={[
    { value: 'draft', label: 'Черновик' },
    { value: 'submitted', label: 'Отправлено' },
    { value: 'review', label: 'На рассмотрении' },
  ]}
/>`}
            >
              <RadioGroup
                label="Статус заявки"
                name="application-status"
                value="submitted"
                onChange={() => {}}
                helperText="После отправки выбор блокируется."
                disabled
                options={[
                  { value: 'draft', label: 'Черновик' },
                  { value: 'submitted', label: 'Отправлено' },
                  { value: 'review', label: 'На рассмотрении' },
                ]}
              />
            </CopyControl>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Состояния</h3>
        <p>
          Для radio особенно важны default, selected, disabled и error
          states, потому что выбор должен быть очевидным и легко проверяемым.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Выбрано</h3>
            <RadioGroup
              label="Состояние выбора"
              name="selected-state"
              value={selectedState}
              onChange={setSelectedState}
              options={[
                { value: 'option-1', label: 'Вариант один' },
                { value: 'option-2', label: 'Вариант два' },
                { value: 'option-3', label: 'Вариант три' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Ошибка</h3>
            <RadioGroup
              label="Способ оплаты"
              name="payment-method"
              value={paymentMethod}
              onChange={setPaymentMethod}
              error={paymentMethod ? undefined : 'Перед продолжением выберите один способ оплаты.'}
              options={[
                { value: 'card', label: 'Карта' },
                { value: 'invoice', label: 'Счёт' },
                { value: 'grant', label: 'Грантовое финансирование' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Недоступно</h3>
            <RadioGroup
              label="Архивный режим"
              name="archived-mode"
              value="manual"
              onChange={() => {}}
              disabled
              options={[
                { value: 'manual', label: 'Ручная проверка' },
                { value: 'automatic', label: 'Автоматическая проверка' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Структура</h3>
        <p>
          Базовая структура radio group включает fieldset, legend, набор radio
          options, индикатор выбора, label варианта, необязательное описание и
          helper text или текст ошибки.
        </p>

        <div className="ds-demo-card">
          <RadioGroup
            label="Тип размещения"
            name="accommodation-type"
            value={accommodation}
            onChange={setAccommodation}
            helperText="Выберите один вариант для заявки."
            options={[
              {
                value: 'shared',
                label: 'Общая комната',
                description: 'Более доступный вариант с совместным проживанием.',
              },
              {
                value: 'private',
                label: 'Отдельная комната',
                description: 'Одноместное размещение с повышенной приватностью.',
              },
            ]}
          />

          <ul className="ds-guidelines">
            <li>Используйте radio только для взаимоисключающих вариантов.</li>
            <li>Group label должен объяснять вопрос или категорию выбора.</li>
            <li>Описание опции полезно, когда label сам по себе недостаточен.</li>
          </ul>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примеры</h3>
        <p>Компонент особенно полезен в формах, настройках, фильтрах и шагах онбординга.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Форма заявки</h3>
            <RadioGroup
              label="Форма обучения"
              name="enrollment-type"
              value={enrollment}
              onChange={setEnrollment}
              options={[
                { value: 'full-time', label: 'Очная' },
                { value: 'part-time', label: 'Заочная' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Настройки</h3>
            <RadioGroup
              label="Тема оформления"
              name="theme-preference"
              value={theme}
              onChange={setTheme}
              options={[
                { value: 'light', label: 'Светлая' },
                { value: 'dark', label: 'Тёмная' },
                { value: 'system', label: 'Системная по умолчанию' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Группа фильтров</h3>
            <RadioGroup
              label="Порядок сортировки"
              name="sort-order"
              value={sortOrder}
              onChange={setSortOrder}
              direction="horizontal"
              options={[
                { value: 'latest', label: 'Сначала новые' },
                { value: 'oldest', label: 'Сначала старые' },
                { value: 'popular', label: 'Популярные' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Правила использования</h3>
        <ul className="ds-guidelines">
          <li>Используйте radio, когда пользователь должен выбрать только один вариант.</li>
          <li>Не используйте radio для множественного выбора — для этого подходит checkbox.</li>
          <li>Формулируйте label и options так, чтобы выбор был очевидным без дополнительной догадки.</li>
          <li>Описание добавляйте только там, где оно реально помогает различать варианты.</li>
          <li>Старайтесь не перегружать одну группу слишком большим количеством опций.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Рекомендуется / Не рекомендуется</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Рекомендуется</h3>
            <div className="ds-demo-card">
              <RadioGroup
                label="Формат участия"
                name="attendance-mode"
                value={attendance}
                onChange={setAttendance}
                options={[
                  { value: 'in-person', label: 'Очно' },
                  { value: 'remote', label: 'Дистанционно' },
                ]}
              />
            </div>
            <ul className="ds-guidelines">
              <li>Формулируйте варианты коротко и однозначно.</li>
              <li>Показывайте selected state максимально ясно.</li>
              <li>Группируйте варианты под общим вопросом.</li>
            </ul>
          </div>

          <div className="ds-dont">
            <h3>Не рекомендуется</h3>
            <div className="ds-demo-card">
              <p>
                Вариант A / Вариант B / Вариант C без понятного вопроса группы и
                без объяснения того, что изменится после выбора.
              </p>
            </div>
            <ul className="ds-guidelines">
              <li>Не используйте radio без понятного group label.</li>
              <li>Не делайте формулировки вариантов абстрактными и неинформативными.</li>
              <li>Не применяйте radio там, где нужен множественный выбор.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Примечание по реализации</h3>
        <div className="ds-note">
          Компонент принимает <code>label</code>, <code>name</code>,{' '}
          <code>options</code>, <code>value</code>, <code>onChange</code>,{' '}
          <code>helperText</code>, <code>error</code>, <code>disabled</code> и{' '}
          <code>direction</code>. В MVP radio реализован как grouped single-choice
          pattern с поддержкой helper text, error и disabled states.
        </div>
      </div>
    </section>
  )
}