import { useLocation } from 'react-router-dom'
import Icon from '../ui/Icon'
import { getFigmaLink } from '../../app/figmaLinks'

export default function Header() {
  const { pathname } = useLocation()
  const figmaUrl = getFigmaLink(pathname)

  return (
    <header className="ds-header">
      <div className="ds-header-decor" aria-hidden="true">
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="currentColor" strokeLinecap="round">
            {/* широкие бледные полосы — глубина «камня» */}
            <path
              d="M-80 70 C 220 24 460 116 740 64 S 1240 24 1540 70"
              strokeWidth="26"
              strokeOpacity="0.05"
            />
            <path
              d="M-80 150 C 240 196 480 104 760 156 S 1260 196 1540 150"
              strokeWidth="30"
              strokeOpacity="0.045"
            />

            {/* верхний кластер концентрических волн */}
            <path d="M-80 34 C 220 6 460 70 740 34 S 1240 6 1540 34" strokeWidth="2" strokeOpacity="0.4" />
            <path d="M-80 46 C 220 16 460 84 740 46 S 1240 16 1540 46" strokeWidth="2" strokeOpacity="0.32" />
            <path d="M-80 58 C 220 28 460 96 740 58 S 1240 28 1540 58" strokeWidth="2" strokeOpacity="0.24" />
            <path d="M-80 70 C 220 40 460 108 740 70 S 1240 40 1540 70" strokeWidth="2" strokeOpacity="0.16" />

            {/* нижний кластер, смещённая фаза */}
            <path d="M-80 122 C 240 156 480 86 760 132 S 1260 168 1540 126" strokeWidth="2" strokeOpacity="0.4" />
            <path d="M-80 134 C 240 168 480 98 760 144 S 1260 180 1540 138" strokeWidth="2" strokeOpacity="0.32" />
            <path d="M-80 146 C 240 180 480 110 760 156 S 1260 192 1540 150" strokeWidth="2" strokeOpacity="0.24" />
            <path d="M-80 158 C 240 192 480 122 760 168 S 1260 204 1540 162" strokeWidth="2" strokeOpacity="0.16" />

            {/* золотые прожилки — тёплый акцент в малахите */}
            <path d="M-80 40 C 220 12 460 76 740 40 S 1240 12 1540 40" stroke="#d8b15a" strokeWidth="2.5" strokeOpacity="0.45" />
            <path d="M-80 140 C 240 174 480 104 760 150 S 1260 186 1540 144" stroke="#d8b15a" strokeWidth="2.5" strokeOpacity="0.4" />
          </g>
        </svg>
      </div>

      <div className="ds-header-content">
        <div className="ds-header-text">
          <h1 className="ds-header-title">Документация дизайн-системы</h1>
          <p className="ds-header-subtitle">
            Документация дизайн-системы интернет-ресурсов Санкт-Петербургского горного университета.
          </p>
        </div>

        {figmaUrl && (
          <a
            className="ds-figma-link"
            href={figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="externalLink" size={16} />
            <span>Открыть в Figma</span>
          </a>
        )}
      </div>
    </header>
  )
}
