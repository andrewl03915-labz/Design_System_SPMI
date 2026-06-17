export default function RadioGroup({
  label,
  name,
  options = [],
  value,
  onChange,
  helperText,
  error,
  disabled = false,
  direction = 'vertical',
  className = '',
}) {
  const groupClassName = [
    'ds-radio-group',
    direction === 'horizontal' ? 'ds-radio-group--horizontal' : '',
    error ? 'is-error' : '',
    disabled ? 'is-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <fieldset className={groupClassName} disabled={disabled}>
      {label && <legend className="ds-radio-group__legend">{label}</legend>}

      <div className="ds-radio-group__options">
        {options.map((option) => {
          const checked = value === option.value

          return (
            <label key={option.value} className="ds-radio">
              <input
                className="ds-radio__input"
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                disabled={disabled || option.disabled}
                onChange={() => onChange?.(option.value)}
              />

              <span className="ds-radio__control" aria-hidden="true">
                <span className="ds-radio__dot" />
              </span>

              <span className="ds-radio__content">
                <span className="ds-radio__label">{option.label}</span>
                {option.description && (
                  <span className="ds-radio__description">
                    {option.description}
                  </span>
                )}
              </span>
            </label>
          )
        })}
      </div>

      {error ? (
        <p className="ds-radio-group__error">{error}</p>
      ) : (
        helperText && <p className="ds-radio-group__helper">{helperText}</p>
      )}
    </fieldset>
  )
}