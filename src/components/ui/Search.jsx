import Icon from './Icon'

export default function Search({
  value = '',
  onChange,
  placeholder = 'Поиск',
  disabled = false,
  className = '',
}) {
  const hasValue = Boolean(value)

  return (
    <div className={`ds-search ${className}`.trim()}>
      <span className="ds-search__icon" aria-hidden="true">
        <Icon name="search" size={18} />
      </span>

      <input
        type="search"
        className="ds-search__input"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={placeholder}
      />

      {hasValue && !disabled && (
        <button
          type="button"
          className="ds-search__clear"
          onClick={() => onChange?.('')}
          aria-label="Очистить поиск"
        >
          <Icon name="close" size={14} />
        </button>
      )}
    </div>
  )
}
