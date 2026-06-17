import Icon from './Icon'

export default function Checkbox({
  label,
  helperText,
  error,
  id,
  disabled,
  className = '',
  ...props
}) {
  const generatedId =
    id || `checkbox-${label ? label.toLowerCase().replace(/\s+/g, '-') : 'field'}`

  const helperId = helperText ? `${generatedId}-helper` : undefined
  const errorId = error ? `${generatedId}-error` : undefined
  const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={`ds-checkbox-field ${className}`.trim()}>
      <label className="ds-checkbox" htmlFor={generatedId}>
        <input
          id={generatedId}
          type="checkbox"
          className="ds-checkbox__input"
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          {...props}
        />

        <span className={`ds-checkbox__control ${error ? 'ds-checkbox__control--error' : ''}`}>
          <span className="ds-checkbox__mark" aria-hidden="true">
            <Icon name="check" size={12} strokeWidth={3} />
          </span>
        </span>

        {label && <span className="ds-checkbox__label">{label}</span>}
      </label>

      {!error && helperText && (
        <p id={helperId} className="ds-field-helper">
          {helperText}
        </p>
      )}

      {error && (
        <p id={errorId} className="ds-field-error">
          {error}
        </p>
      )}
    </div>
  )
}

