import React from 'react'

const variantClassMap = {
  primary: 'ds-button--primary',
  secondary: 'ds-button--secondary',
  ghost: 'ds-button--ghost',
}

export default function Button({
  variant = 'primary',
  type = 'button',
  children,
  className = '',
  ...props
}) {
  const variantClass = variantClassMap[variant] || variantClassMap.primary
  const classes = ['ds-button', variantClass, className].filter(Boolean).join(' ')

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}