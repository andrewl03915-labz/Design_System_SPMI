import React from 'react'

export default function Card({
  title,
  description,
  accent = false,
  interactive = false,
  className = '',
  children,
  ...props
}) {
  const classes = [
    'ds-card-ui',
    accent ? 'ds-card-ui--accent' : '',
    interactive ? 'ds-card-ui--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {(title || description) && (
        <div className="ds-card-ui__header">
          {title && <h3 className="ds-card-ui__title">{title}</h3>}
          {description && <p className="ds-card-ui__description">{description}</p>}
        </div>
      )}

      {children && <div className="ds-card-ui__body">{children}</div>}
    </div>
  )
}