import Icon from './Icon'

const variantIconMap = {
  success: 'circleCheck',
  warning: 'triangleAlert',
  error: 'circleX',
  info: 'info',
}

export default function Notification({
  title,
  children,
  variant = 'info',
  className = '',
}) {
  const iconName = variantIconMap[variant] || variantIconMap.info

  return (
    <div
      className={`ds-notification ds-notification--${variant} ${className}`.trim()}
      role={variant === 'error' || variant === 'warning' ? 'alert' : 'status'}
    >
      <div className="ds-notification__icon" aria-hidden="true">
        <Icon name={iconName} size={16} />
      </div>

      <div className="ds-notification__content">
        {title && <h3 className="ds-notification__title">{title}</h3>}
        {children && <div className="ds-notification__text">{children}</div>}
      </div>
    </div>
  )
}