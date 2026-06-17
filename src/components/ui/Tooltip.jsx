import { useState } from 'react'

export default function Tooltip({
  content,
  children,
  placement = 'top',
  className = '',
  disabled = false,
}) {
  const [isVisible, setIsVisible] = useState(false)

  const rootClassName = [
    'ds-tooltip',
    `ds-tooltip--${placement}`,
    isVisible ? 'is-visible' : '',
    disabled ? 'is-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const showTooltip = () => {
    if (!disabled) setIsVisible(true)
  }

  const hideTooltip = () => {
    setIsVisible(false)
  }

  return (
    <span
      className={rootClassName}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      <span className="ds-tooltip__trigger">
        {children}
      </span>

      {!disabled && content && (
        <span className="ds-tooltip__bubble" role="tooltip">
          <span className="ds-tooltip__arrow" aria-hidden="true" />
          <span className="ds-tooltip__content">{content}</span>
        </span>
      )}
    </span>
  )
}