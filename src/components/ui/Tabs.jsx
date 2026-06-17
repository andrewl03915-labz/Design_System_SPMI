import { useState } from 'react'

export default function Tabs({
  items = [],
  defaultValue,
  className = '',
  // когда false — вкладки не попадают в Tab-навигацию с клавиатуры
  // (используется в документации, чтобы не уводить фокус по всей странице)
  keyboardFocusable = true,
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
              tabIndex={keyboardFocusable ? undefined : -1}
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