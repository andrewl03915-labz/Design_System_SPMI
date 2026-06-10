import React from 'react'
import { getIconComponent } from './iconRegistry'

export default function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  decorative = true,
  label,
  className = '',
  ...props
}) {
  const LucideIcon = getIconComponent(name)

  if (!LucideIcon) {
    return null
  }

  const accessibilityProps = decorative
    ? { 'aria-hidden': 'true' }
    : { role: 'img', 'aria-label': label || name }

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      className={className}
      {...accessibilityProps}
      {...props}
    />
  )
}