import React from 'react'

export default function Grid({
  columns = 2,
  gap = 'md',
  className = '',
  children,
  ...props
}) {
  const columnClassMap = {
    2: 'ds-grid-layout--2',
    3: 'ds-grid-layout--3',
    4: 'ds-grid-layout--4',
  }

  const gapClassMap = {
    sm: 'ds-grid-layout--gap-sm',
    md: 'ds-grid-layout--gap-md',
    lg: 'ds-grid-layout--gap-lg',
  }

  const columnClass = columnClassMap[columns] || columnClassMap[2]
  const gapClass = gapClassMap[gap] || gapClassMap.md

  const classes = ['ds-grid-layout', columnClass, gapClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}