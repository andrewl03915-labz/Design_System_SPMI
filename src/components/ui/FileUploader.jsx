import React, { useId, useRef, useState } from 'react'

export default function FileUploader({
  label = 'Upload file',
  helperText = 'Drag and drop a file here, or click to browse.',
  accept,
  error,
  disabled = false,
  onChange,
  className = '',
}) {
  const inputId = useId()
  const inputRef = useRef(null)
  const [fileName, setFileName] = useState('')
  const [isDragActive, setIsDragActive] = useState(false)

  const handleFiles = (files) => {
    const file = files?.[0]
    if (!file) return
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
    error ? 'is-error' : '',
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
          ↑
        </div>

        <div className="ds-file-uploader__content">
          <p className="ds-file-uploader__title">
            {fileName ? 'File selected' : 'Upload a file'}
          </p>

          <p className="ds-file-uploader__description">
            {fileName || helperText}
          </p>
        </div>
      </div>

      {error ? (
        <p className="ds-file-uploader__error">{error}</p>
      ) : (
        helperText && <p className="ds-file-uploader__helper">{helperText}</p>
      )}
    </div>
  )
}
