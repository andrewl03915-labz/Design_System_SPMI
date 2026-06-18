import { useId, useState } from 'react'
import Icon from './Icon'

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  const buttonId = `accordion-button-${id}`
  const panelId = `accordion-panel-${id}`

  return (
    <div className={`ds-accordion__item ${open ? 'is-open' : ''}`.trim()}>
      <h3 className="ds-accordion__heading">
        <button
          id={buttonId}
          type="button"
          className="ds-accordion__trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="ds-accordion__title">{title}</span>
          <span className="ds-accordion__icon" aria-hidden="true">
            <Icon name={open ? 'minus' : 'plus'} size={18} />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        className="ds-accordion__panel"
        role="region"
        aria-labelledby={buttonId}
        inert={!open}
      >
        <div className="ds-accordion__content">
          <div className="ds-accordion__content-inner">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function Accordion({ items = [], className = '' }) {
  if (!items.length) return null

  return (
    <div className={`ds-accordion ${className}`.trim()}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.title || index}
          title={item.title}
          defaultOpen={item.defaultOpen}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}