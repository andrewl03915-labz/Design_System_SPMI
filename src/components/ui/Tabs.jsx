import { useState } from 'react'

export default function Tabs({
  items = [],
  defaultValue,
  className = '',
}) {
  const initialValue = defaultValue || items[0]?.value
  const [activeTab, setActiveTab] = useState(initialValue)

  const activeItem = items.find((item) => item.value === activeTab)

  return (
    <div className={`ds-tabs ${className}`.trim()}>
      <div className="ds-tabs__list" role="tablist" aria-label="Вкладки">
        {items.map((item) => {
          const isActive = item.value === activeTab

          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`ds-tabs__tab ${isActive ? 'ds-tabs__tab--active' : ''}`}
              onClick={() => setActiveTab(item.value)}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <div className="ds-tabs__panel" role="tabpanel">
        {activeItem?.content}
      </div>
    </div>
  )
}