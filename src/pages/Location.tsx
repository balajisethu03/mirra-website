import { Link } from 'react-router-dom'

const sidebarLinks = [
  { label: 'Dental Implants', path: '/services/dental-implants', bg: '#b02855', hover: '#58586c' },
  { label: 'Sedation', path: '/services/sedation-dentistry', bg: '#3276ab', hover: '#8e969c' },
  { label: 'Wisdom Teeth', path: '/services/oral-surgery/wisdom-teeth-extractions', bg: '#b02855', hover: '#58586c' },
  { label: 'Periodontics', path: '/services/periodontics', bg: '#3276ab', hover: '#8e969c' },
]

export default function Location() {
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }}>

      {/* Hero Banner */}
      <div
        style={{
          width: '100%',
          height: 300,
          background: "url(/images/location-map-wide.jpg) center center / cover no-repeat",
        }}
        role="img"
        aria-label="Mirra Periodontal & Implant Center location map"
      />

      {/* Page Content */}
      <div style={{ maxWidth: 1390, margin: '0 auto', padding: '40px 35px 60px', display: 'flex', gap: 40, alignItems: 'flex-start' }} className="location-layout">

        {/* Main Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{ fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }}>
            Mirra Periodontal &amp; Implant Center
          </h1>

          {/* Map + Info two-column */}
          <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap' }} className="location-row">

            {/* Square map */}
            <div style={{ flex: '1 1 300px', maxWidth: 400 }}>
              <img
                src="/images/location-map-square.jpg"
                alt="Location map"
                style={{ width: '100%', display: 'block' }}
              />
            </div>

            {/* Address & Hours */}
            <div style={{ flex: '2 1 280px', fontFamily: "'Raleway', sans-serif", fontSize: '16px', lineHeight: '28px', color: '#333' }}>
              <h3 style={{ fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '22px', color: '#b02855', marginTop: 0, marginBottom: 12 }}>
                Mirra Periodontal &amp; Implant Center
              </h3>

              <p style={{ margin: '0 0 16px' }}>
                720 US-377<br />
                Suite 120<br />
                Roanoke, TX 76262
              </p>

              <p style={{ margin: '0 0 4px' }}>
                <strong>Phone:</strong>
              </p>
              <h4 style={{ margin: '0 0 16px', fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '18px' }}>
                <a href="tel:8177679383" style={{ color: '#3276ab', textDecoration: 'none' }}>817.767.9383</a>
              </h4>

              <p style={{ margin: '0 0 4px' }}><strong>Monday:</strong> 8:00a.m. – 5:00p.m.</p>
              <p style={{ margin: '0 0 4px' }}><strong>Tuesday:</strong> 8:00a.m. – 5:00p.m.</p>
              <p style={{ margin: '0 0 4px' }}><strong>Wednesday:</strong> 8:00a.m. – 5:00p.m.</p>
              <p style={{ margin: '0 0 4px' }}><strong>Thursday:</strong> 8:00a.m. – 5:00p.m.</p>
              <p style={{ margin: '0 0 4px' }}><strong>Friday:</strong> 8:00a.m. – 5:00p.m.</p>
              <p style={{ margin: '0 0 4px' }}><strong>Saturday &amp; Sunday</strong><br />By Appointment Only</p>
            </div>
          </div>
        </div>

        {/* Sidebar — 4 service buttons */}
        <div style={{ width: 345, flexShrink: 0 }} className="location-sidebar">
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
      </div>

      <style>{`
        @media (max-width: 900px) {
          .location-layout { flex-direction: column !important; padding-left: 20px !important; padding-right: 20px !important; }
          .location-sidebar { width: 100% !important; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .location-sidebar a { margin-bottom: 0 !important; }
        }
        @media (max-width: 600px) {
          .location-sidebar { grid-template-columns: 1fr 1fr; }
          .location-row { flex-direction: column !important; }
        }
        @media (max-width: 480px) {
          .location-layout { padding-left: 14px !important; padding-right: 14px !important; }
          .location-sidebar a { font-size: 18px !important; min-height: 80px !important; }
        }
      `}</style>
    </div>
  )
}
