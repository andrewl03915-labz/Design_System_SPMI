const variantClassMap = {
  neutral: 'ds-badge--neutral',
  primary: 'ds-badge--primary',
  success: 'ds-badge--success',
  warning: 'ds-badge--warning',
}

export default function Badge({ variant = 'neutral', children }) {
  const variantClass = variantClassMap[variant] || variantClassMap.neutral

  return <span className={`ds-badge ${variantClass}`}>{children}</span>
}