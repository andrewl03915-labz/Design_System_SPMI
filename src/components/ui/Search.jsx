import React from 'react'

export default function Search({
  value = '',
  onChange,
  placeholder = 'Search',
  disabled = false,
  className = '',
}) {
  const hasValue = Boolean(value)

  return (
    <div className={`ds-search ${className}`.trim()}>
      <span className="ds-search__icon" aria-hidden="true">
        ⌕
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
    aria-label="Clear search"
  >
    <svg
      viewBox="0 0 16 16"
      width="12"
      height="12"
      aria-hidden="true"
    >
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  </button>
)}
    </div>
  )
}