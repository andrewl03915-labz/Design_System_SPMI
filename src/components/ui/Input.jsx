export default function Input({
  label,
  helperText,
  error,
  id,
  disabled,
  className = '',
  ...props
}) {
  const generatedId =
    id || `input-${label ? label.toLowerCase().replace(/\s+/g, '-') : 'field'}`

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

      <input
        id={generatedId}
        className={`ds-input ${error ? 'ds-input--error' : ''} ${className}`.trim()}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        {...props}
      />

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