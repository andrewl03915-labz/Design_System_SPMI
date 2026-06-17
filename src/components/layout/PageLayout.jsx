import Sidebar from './Sidebar'
import Header from './Header'

export default function PageLayout({ children }) {
  return (
    <div className="ds-shell">
      <Sidebar />

      <div className="ds-shell-main">
        <Header />

        <main className="ds-main" id="main-content">
          <div className="ds-main-inner">{children}</div>
        </main>
      </div>
    </div>
  )
}