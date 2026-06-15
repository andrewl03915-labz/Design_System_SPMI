import React from 'react'
import { NavLink } from 'react-router-dom'
import logoSrc from '../../assets/spmi-logo.svg'

const navLinkClass = ({ isActive }) => `ds-link${isActive ? ' active' : ''}`

export default function Sidebar() {
  return (
    <aside className="ds-sidebar">
      <div className="ds-sidebar-brand">
  <img
    src={logoSrc}
    className="ds-logo-svg"
    width={33}
    height={42}
    alt=""
    aria-hidden="true"
  />
  <span className="ds-sidebar-title">
    Mining University<br />Design System
  </span>
</div>

      <div className="ds-sidebar-scroll">
        <nav className="ds-sidebar-nav" aria-label="Main navigation">
          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Overview</div>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Foundations</div>

            <NavLink to="/foundations" className={navLinkClass}>
              Foundations
            </NavLink>
            <NavLink to="/foundations/color" className={navLinkClass}>
              Color
            </NavLink>
            <NavLink to="/foundations/typography" className={navLinkClass}>
              Typography
            </NavLink>
            <NavLink to="/foundations/grid" className={navLinkClass}>
              Grid
            </NavLink>
            <NavLink to="/foundations/tokens" className={navLinkClass}>
              Tokens
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Actions & Forms</div>

            <NavLink to="/components/button" className={navLinkClass}>
              Button
            </NavLink>
            <NavLink to="/components/input" className={navLinkClass}>
              Input
            </NavLink>
            <NavLink to="/components/textarea" className={navLinkClass}>
              Textarea
            </NavLink>
            <NavLink to="/components/select" className={navLinkClass}>
              Select
            </NavLink>
            <NavLink to="/components/checkbox" className={navLinkClass}>
              Checkbox
            </NavLink>
            <NavLink to="/components/radio" className={navLinkClass}>
              Radio
            </NavLink>
            <NavLink to="/components/file-uploader" className={navLinkClass}>
              File Uploader
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Content & Layout</div>

            <NavLink to="/components/badge" className={navLinkClass}>
              Badge
            </NavLink>
            <NavLink to="/components/card" className={navLinkClass}>
              Card
            </NavLink>
            <NavLink to="/components/table" className={navLinkClass}>
              Table
            </NavLink>
            <NavLink to="/components/tabs" className={navLinkClass}>
              Tabs
            </NavLink>
            <NavLink to="/components/accordion" className={navLinkClass}>
              Accordion
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Navigation</div>

            <NavLink to="/components/breadcrumbs" className={navLinkClass}>
              Breadcrumbs
            </NavLink>
            <NavLink to="/components/pagination" className={navLinkClass}>
              Pagination
            </NavLink>
            <NavLink to="/components/search" className={navLinkClass}>
              Search
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Feedback & Overlays</div>

            <NavLink to="/components/notification" className={navLinkClass}>
              Notification
            </NavLink>
            <NavLink to="/components/modal" className={navLinkClass}>
              Modal
            </NavLink>
            <NavLink to="/components/tooltip" className={navLinkClass}>
              Tooltip
            </NavLink>
          </div>

          <div className="ds-sidebar-section">
            <div className="ds-sidebar-section-title">Assets</div>

            <NavLink to="/components/icon" className={navLinkClass}>
              Icon
            </NavLink>
          </div>
        </nav>
      </div>
    </aside>
  )
}