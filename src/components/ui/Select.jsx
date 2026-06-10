import React from 'react'

export default function Select({
  label,
  helperText,
  error,
  id,
  disabled,
  placeholder,
  options = [],
  className = '',
  ...props
}) {
  const generatedId =
    id || `select-${label ? label.toLowerCase().replace(/\s+/g, '-') : 'field'}`

  const helperId = helperText ? `${generatedId}-helper` : undefined
  const errorId = error ? `${generatedId}-error` : undefined
  const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className="ds-field">
      {label && (
        <label className="ds-field-label" htmlFor={generatedId}>
          {label}
        </label>
      )}

      <div className="ds-select-wrap">
        <select
          id={generatedId}
          className={`ds-select ${error ? 'ds-select--error' : ''} ${className}`.trim()}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => {
            if (typeof option === 'string') {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            }

            return (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            )
          })}
        </select>

        <span className="ds-select-icon" aria-hidden="true">
          ▾
        </span>
      </div>

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
