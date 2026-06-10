import React from 'react'

export default function Modal({
  open = false,
  title,
  children,
  onClose,
  footer,
  className = '',
}) {
  if (!open) return null

  return (
    <div className="ds-modal-layer" role="presentation">
      <div className="ds-modal-backdrop" onClick={onClose} />

      <div
        className={`ds-modal ${className}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'ds-modal-title' : undefined}
      >
        <div className="ds-modal__header">
          {title && (
            <h3 id="ds-modal-title" className="ds-modal__title">
              {title}
            </h3>
          )}

          <button
            type="button"
            className="ds-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="ds-modal__body">{children}</div>

        {footer && <div className="ds-modal__footer">{footer}</div>}
      </div>
    </div>
  )
}
