import { useEffect, useId, useRef, useState } from 'react'
import Icon from './Icon'

function normalizeOptions(options) {
  return options.map((option) =>
    typeof option === 'string'
      ? { value: option, label: option }
      : { value: option.value, label: option.label, disabled: option.disabled }
  )
}

export default function Select({
  label,
  helperText,
  error,
  id,
  disabled = false,
  placeholder,
  options = [],
  value,
  defaultValue,
  onChange,
  className = '',
}) {
  const reactId = useId()
  const generatedId = id || `select-${reactId}`
  const labelId = `${generatedId}-label`
  const listId = `${generatedId}-list`
  const helperId = helperText ? `${generatedId}-helper` : undefined
  const errorId = error ? `${generatedId}-error` : undefined
  const describedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined

  const items = normalizeOptions(options)

  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const currentValue = isControlled ? value : internalValue
  const selectedItem = items.find((item) => item.value === currentValue)

  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const listRef = useRef(null)

  const firstEnabledIndex = () => items.findIndex((item) => !item.disabled)
  const lastEnabledIndex = () => {
    for (let i = items.length - 1; i >= 0; i--) if (!items[i].disabled) return i
    return -1
  }

  const openList = () => {
    if (disabled) return
    const selectedIndex = items.findIndex((item) => item.value === currentValue)
    setActiveIndex(
      selectedIndex >= 0 && !items[selectedIndex].disabled ? selectedIndex : firstEnabledIndex()
    )
    setOpen(true)
  }

  const closeList = ({ focusTrigger = true } = {}) => {
    setOpen(false)
    if (focusTrigger) triggerRef.current?.focus()
  }

  const commit = (item) => {
    if (!item || item.disabled) return
    if (!isControlled) setInternalValue(item.value)
    onChange?.(item.value)
    closeList()
  }

  const moveActive = (direction) => {
    setActiveIndex((prev) => {
      let next = prev
      for (let i = 0; i < items.length; i++) {
        next = (next + direction + items.length) % items.length
        if (!items[next].disabled) return next
      }
      return prev
    })
  }

  // закрытие по клику вне компонента
  useEffect(() => {
    if (!open) return
    const handlePointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [open])

  // прокрутка активного пункта в зону видимости
  useEffect(() => {
    if (!open || activeIndex < 0 || !listRef.current) return
    listRef.current.children[activeIndex]?.scrollIntoView({ block: 'nearest' })
  }, [open, activeIndex])

  const handleKeyDown = (event) => {
    if (disabled) return
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
        event.preventDefault()
        openList()
      }
      return
    }
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        moveActive(1)
        break
      case 'ArrowUp':
        event.preventDefault()
        moveActive(-1)
        break
      case 'Home':
        event.preventDefault()
        setActiveIndex(firstEnabledIndex())
        break
      case 'End':
        event.preventDefault()
        setActiveIndex(lastEnabledIndex())
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (activeIndex >= 0) commit(items[activeIndex])
        break
      case 'Escape':
        event.preventDefault()
        closeList()
        break
      case 'Tab':
        setOpen(false)
        break
      default:
        break
    }
  }

  const triggerClassName = [
    'ds-select',
    error ? 'ds-select--error' : '',
    selectedItem ? '' : 'ds-select--placeholder',
    open ? 'is-open' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="ds-field" ref={rootRef}>
      {label && (
        <label className="ds-field-label" id={labelId} htmlFor={generatedId}>
          {label}
        </label>
      )}

      <div className="ds-select-wrap">
        <button
          type="button"
          ref={triggerRef}
          id={generatedId}
          className={triggerClassName}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          aria-activedescendant={
            open && activeIndex >= 0 ? `${listId}-opt-${activeIndex}` : undefined
          }
          onClick={() => (open ? setOpen(false) : openList())}
          onKeyDown={handleKeyDown}
        >
          <span className="ds-select__value">
            {selectedItem ? selectedItem.label : placeholder}
          </span>
        </button>

        <span className="ds-select-icon" aria-hidden="true">
          <Icon name="chevronDown" size={18} />
        </span>

        {open && (
          <ul
            className="ds-select__list"
            id={listId}
            role="listbox"
            aria-labelledby={label ? labelId : undefined}
            ref={listRef}
          >
            {items.map((item, index) => (
              <li
                key={item.value}
                id={`${listId}-opt-${index}`}
                role="option"
                aria-selected={item.value === currentValue}
                aria-disabled={item.disabled || undefined}
                className={[
                  'ds-select__option',
                  item.value === currentValue ? 'is-selected' : '',
                  index === activeIndex ? 'is-active' : '',
                  item.disabled ? 'is-disabled' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onMouseEnter={() => !item.disabled && setActiveIndex(index)}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => commit(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {!error && helperText && (
        <p id={helperId} className="ds-field-helper">
          {helperText}
        </p>
      )}

      {error && (
        <p id={errorId} className="ds-field-error">
          {error}
        </p>
      )}
    </div>
  )
}
