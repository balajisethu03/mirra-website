import { Link } from 'react-router-dom'

const sidebarLinks = [
  { label: 'Dental Implants', path: '/services/dental-implants', bg: '#b02855', hover: '#58586c' },
  { label: 'Sedation', path: '/services/sedation-dentistry', bg: '#3276ab', hover: '#8e969c' },
  { label: 'Wisdom Teeth', path: '/services/oral-surgery/wisdom-teeth-extractions', bg: '#b02855', hover: '#58586c' },
  { label: 'Periodontics', path: '/services/periodontics', bg: '#3276ab', hover: '#8e969c' },
]

interface ContentPageLayoutProps {
  bannerImage: string
  bannerAlt?: string
  children: React.ReactNode
  showSidebar?: boolean
}

export default function ContentPageLayout({ bannerImage, bannerAlt = '', children, showSidebar = true }: ContentPageLayoutProps) {
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }}>
      {/* Hero Banner */}
      <div
        style={{
          width: '100%',
          paddingTop: '9%',
          paddingBottom: '9%',
          background: `url(/images/${bannerImage}) center center / cover no-repeat`,
        }}
        role="img"
        aria-label={bannerAlt}
      />

      {/* Page Content */}
      <div
        style={{
          maxWidth: 1390,
          margin: '0 auto',
          padding: '40px 35px 60px',
          display: showSidebar ? 'flex' : 'block',
          gap: showSidebar ? 60 : 0,
          alignItems: 'flex-start',
        }}
        className="content-page-layout"
      >
        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {children}
        </div>

        {/* Sidebar */}
        {showSidebar && (
          <div style={{ width: 345, flexShrink: 0 }} className="content-sidebar">
            {sidebarLinks.map((link, i) => (
              <Link
                key={link.label}
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 100,
                  padding: '16px',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                  fontSize: '22px',
                  lineHeight: '31px',
                  letterSpacing: '2.2px',
                  textTransform: 'uppercase',
                  color: '#fff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  background: link.bg,
                  transition: 'background 0.2s',
                  marginBottom: i < 3 ? 26 : 0,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = link.hover)}
                onMouseLeave={e => (e.currentTarget.style.background = link.bg)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .content-page-layout { flex-direction: column !important; padding-left: 20px !important; padding-right: 20px !important; }
          .content-sidebar { width: 100% !important; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .content-sidebar a { margin-bottom: 0 !important; }
        }
        @media (max-width: 480px) {
          .content-page-layout { padding-left: 14px !important; padding-right: 14px !important; padding-top: 28px !important; }
          .content-sidebar { grid-template-columns: 1fr 1fr; }
          .content-sidebar a { font-size: 18px !important; min-height: 80px !important; }
        }
      `}</style>
    </div>
  )
}
