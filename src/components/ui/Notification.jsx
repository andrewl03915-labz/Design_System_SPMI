import React from 'react'

export default function Notification({
  title,
  children,
  variant = 'info',
  className = '',
}) {
  return (
    <div
      className={`ds-notification ds-notification--${variant} ${className}`.trim()}
      role={variant === 'error' || variant === 'warning' ? 'alert' : 'status'}
    >
      <div className="ds-notification__icon" aria-hidden="true">
        {variant === 'success' && '✓'}
        {variant === 'warning' && '!'}
        {variant === 'error' && '×'}
        {variant === 'info' && 'i'}
      </div>

      <div className="ds-notification__content">
        {title && <h3 className="ds-notification__title">{title}</h3>}
        {children && <div className="ds-notification__text">{children}</div>}
      </div>
    </div>
  )
}