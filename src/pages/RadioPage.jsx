import React, { useState } from 'react'
import RadioGroup from '../components/ui/RadioGroup'

export default function RadioPage() {
  const [programType, setProgramType] = useState('bachelor')
  const [deliveryMode, setDeliveryMode] = useState('online')

  return (
    <section className="ds-section ds-section--radio">
      <div className="ds-page-intro">
        <h2>Radio</h2>
        <p>
          Radio используется для выбора одного варианта из нескольких
          взаимоисключающих опций. Компонент помогает представить single-choice
          selection в понятной и структурированной форме.
        </p>

        <div className="ds-meta-row">
          <span className="ds-meta-item">Category: Form</span>
          <span className="ds-meta-item">Status: Ready</span>
          <span className="ds-meta-item">Tokens: color, spacing, radius, border, text, shadow</span>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Preview</h3>
        <p>
          Radio group помогает выбрать один вариант из набора опций с ясным
          указанием текущего selected state.
        </p>

        <div className="ds-demo-card">
          <RadioGroup
            label="Program type"
            name="program-type-preview"
            value={programType}
            onChange={setProgramType}
            helperText="Choose one option."
            options={[
              {
                value: 'bachelor',
                label: 'Bachelor program',
                description: 'Undergraduate degree for first-cycle higher education.',
              },
              {
                value: 'master',
                label: 'Master program',
                description: 'Graduate degree for advanced academic specialisation.',
              },
              {
                value: 'phd',
                label: 'PhD track',
                description: 'Research-focused doctoral study path.',
              },
            ]}
          />
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Variants</h3>
        <p>Ниже показаны типичные варианты использования radio group в интерфейсе.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Vertical group</h3>
            <RadioGroup
              label="Study format"
              name="study-format"
              value={deliveryMode}
              onChange={setDeliveryMode}
              helperText="Select one delivery mode."
              options={[
                {
                  value: 'online',
                  label: 'Online',
                  description: 'Remote participation with digital materials and video sessions.',
                },
                {
                  value: 'hybrid',
                  label: 'Hybrid',
                  description: 'Combination of online learning and in-person workshops.',
                },
                {
                  value: 'campus',
                  label: 'On campus',
                  description: 'Full in-person participation at the university.',
                },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Horizontal group</h3>
            <RadioGroup
              label="Language"
              name="language"
              value="en"
              onChange={() => {}}
              direction="horizontal"
              options={[
                { value: 'en', label: 'English' },
                { value: 'de', label: 'German' },
                { value: 'fr', label: 'French' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Disabled group</h3>
            <RadioGroup
              label="Application status"
              name="application-status"
              value="submitted"
              onChange={() => {}}
              helperText="Selection is locked after submission."
              disabled
              options={[
                { value: 'draft', label: 'Draft' },
                { value: 'submitted', label: 'Submitted' },
                { value: 'review', label: 'Under review' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>States</h3>
        <p>
          Для radio особенно важны default, selected, focus, disabled и error
          states, потому что выбор должен быть очевидным и легко проверяемым.
        </p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Selected</h3>
            <RadioGroup
              label="Selected state"
              name="selected-state"
              value="option-2"
              onChange={() => {}}
              options={[
                { value: 'option-1', label: 'Option one' },
                { value: 'option-2', label: 'Option two' },
                { value: 'option-3', label: 'Option three' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Error</h3>
            <RadioGroup
              label="Payment method"
              name="payment-method"
              value=""
              onChange={() => {}}
              error="Please select one payment method before continuing."
              options={[
                { value: 'card', label: 'Card' },
                { value: 'invoice', label: 'Invoice' },
                { value: 'grant', label: 'Grant funding' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Disabled</h3>
            <RadioGroup
              label="Archived mode"
              name="archived-mode"
              value="manual"
              onChange={() => {}}
              disabled
              options={[
                { value: 'manual', label: 'Manual review' },
                { value: 'automatic', label: 'Automatic review' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Structure</h3>
        <p>
          Базовая структура radio group включает fieldset, legend, set of radio
          options, control indicator, option label, optional description и
          helper or error text.
        </p>

        <div className="ds-demo-card">
          <RadioGroup
            label="Accommodation type"
            name="accommodation-type"
            value="shared"
            onChange={() => {}}
            helperText="Choose one option for your application."
            options={[
              {
                value: 'shared',
                label: 'Shared room',
                description: 'Lower cost option with shared occupancy.',
              },
              {
                value: 'private',
                label: 'Private room',
                description: 'Single occupancy room with increased privacy.',
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
        <h3>Examples</h3>
        <p>Компонент особенно полезен в формах, настройках, фильтрах и шагах онбординга.</p>

        <div className="ds-demo-column">
          <div className="ds-demo-card">
            <h3>Application form</h3>
            <RadioGroup
              label="Enrollment type"
              name="enrollment-type"
              value="full-time"
              onChange={() => {}}
              options={[
                { value: 'full-time', label: 'Full-time' },
                { value: 'part-time', label: 'Part-time' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Settings</h3>
            <RadioGroup
              label="Theme preference"
              name="theme-preference"
              value="system"
              onChange={() => {}}
              options={[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'system', label: 'System default' },
              ]}
            />
          </div>

          <div className="ds-demo-card">
            <h3>Filter group</h3>
            <RadioGroup
              label="Sort order"
              name="sort-order"
              value="latest"
              onChange={() => {}}
              direction="horizontal"
              options={[
                { value: 'latest', label: 'Latest' },
                { value: 'oldest', label: 'Oldest' },
                { value: 'popular', label: 'Popular' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="ds-section-block">
        <h3>Usage rules</h3>
        <ul className="ds-guidelines">
          <li>Используйте radio, когда пользователь должен выбрать только один вариант.</li>
          <li>Не используйте radio для множественного выбора — для этого подходит checkbox.</li>
          <li>Формулируйте label и options так, чтобы выбор был очевидным без дополнительной догадки.</li>
          <li>Описание добавляйте только там, где оно реально помогает различать варианты.</li>
          <li>Старайтесь не перегружать одну группу слишком большим количеством опций.</li>
        </ul>
      </div>

      <div className="ds-section-block">
        <h3>Do / Don&apos;t</h3>

        <div className="ds-split-grid">
          <div className="ds-do">
            <h3>Do</h3>
            <div className="ds-demo-card">
              <RadioGroup
                label="Attendance mode"
                name="attendance-mode"
                value="in-person"
                onChange={() => {}}
                options={[
                  { value: 'in-person', label: 'In person' },
                  { value: 'remote', label: 'Remote' },
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
            <h3>Don&apos;t</h3>
            <div className="ds-demo-card">
              <p>
                Option A / Option B / Option C without a clear group question or
                explanation of what changes after selection.
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
        <h3>Implementation note</h3>
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