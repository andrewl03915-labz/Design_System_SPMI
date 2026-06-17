import { useId, useRef, useState } from 'react'
import Icon from './Icon'

// Проверка соответствия файла списку accept (".pdf,.jpg" или "image/*").
function isFileAccepted(file, accept) {
  if (!accept) return true
  const tokens = accept
    .split(',')
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean)
  if (!tokens.length) return true

  const name = file.name.toLowerCase()
  const type = (file.type || '').toLowerCase()

  return tokens.some((token) => {
    if (token.startsWith('.')) return name.endsWith(token)
    if (token.endsWith('/*')) return type.startsWith(token.slice(0, -1))
    return type === token
  })
}

function formatLimit(bytes) {
  const mb = bytes / (1024 * 1024)
  const value = Number.isInteger(mb) ? mb : mb.toFixed(1)
  return `${value} МБ`
}

export default function FileUploader({
  label = 'Загрузить файл',
  helperText = 'Перетащите файл сюда или нажмите для выбора.',
  accept,
  maxSize,
  error,
  disabled = false,
  onChange,
  className = '',
}) {
  const inputId = useId()
  const inputRef = useRef(null)
  const [fileName, setFileName] = useState('')
  const [isDragActive, setIsDragActive] = useState(false)
  const [validationError, setValidationError] = useState('')

  // Внешний error имеет приоритет над автоматической валидацией.
  const effectiveError = error || validationError

  const handleFiles = (files) => {
    const file = files?.[0]
    if (!file) return

    if (!isFileAccepted(file, accept)) {
      setFileName('')
      setValidationError(
        'Этот тип файла не поддерживается. Проверьте допустимые форматы.'
      )
      return
    }

    if (maxSize && file.size > maxSize) {
      setFileName('')
      setValidationError(
        `Файл превышает допустимый размер (${formatLimit(maxSize)}).`
      )
      return
    }

    setValidationError('')
    setFileName(file.name)
    onChange?.(file)
  }

  const handleInputChange = (event) => {
    handleFiles(event.target.files)
  }

  const handleDragOver = (event) => {
    event.preventDefault()
    if (!disabled) setIsDragActive(true)
  }

  const handleDragLeave = () => {
    setIsDragActive(false)
  }

  const handleDrop = (event) => {
    event.preventDefault()
    if (disabled) return
    setIsDragActive(false)
    handleFiles(event.dataTransfer.files)
  }

  const handleKeyDown = (event) => {
    if (disabled) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      inputRef.current?.click()
    }
  }

  const rootClassName = [
    'ds-file-uploader',
    isDragActive ? 'is-drag-active' : '',
    effectiveError ? 'is-error' : '',
    disabled ? 'is-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClassName}>
      {label && (
        <label className="ds-file-uploader__label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <div
        className="ds-file-uploader__dropzone"
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={handleKeyDown}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          id={inputId}
          className="ds-file-uploader__input"
          type="file"
          accept={accept}
          disabled={disabled}
          onChange={handleInputChange}
        />

        <div className="ds-file-uploader__icon" aria-hidden="true">
          <Icon name="upload" size={24} />
        </div>

        <div className="ds-file-uploader__content">
          <p className="ds-file-uploader__title">
            {fileName ? 'Файл выбран' : 'Загрузите файл'}
          </p>

          <p className="ds-file-uploader__description">
            {fileName || helperText}
          </p>
        </div>
      </div>

      {effectiveError ? (
        <p className="ds-file-uploader__error">{effectiveError}</p>
      ) : (
        helperText && <p className="ds-file-uploader__helper">{helperText}</p>
      )}
    </div>
  )
}
