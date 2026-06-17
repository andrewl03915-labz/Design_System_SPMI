import { createElement } from 'react'
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
  const iconComponent = getIconComponent(name)

  if (!iconComponent) {
    return null
  }

  const accessibilityProps = decorative
    ? { 'aria-hidden': 'true' }
    : { role: 'img', 'aria-label': label || name }

  // The icon is a stable reference from the module-level registry; render it
  // via createElement so a dynamically-selected component stays readable.
  return createElement(iconComponent, {
    size,
    strokeWidth,
    color,
    className,
    ...accessibilityProps,
    ...props,
  })
}
