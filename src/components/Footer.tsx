import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import ContactForm from './ContactForm'

const footerNav = [
  { label: 'About', path: '/about' },
  { label: 'Technology', path: '/technology' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ fontFamily: "'Raleway', sans-serif" }}>

      {/* ── Contact Us Today + Office Info ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>

        {/* Left — blue, Contact form */}
        <div style={{
          flex: '1 1 50%',
          minWidth: 300,
          background: '#3276ab',
          padding: '78px 80px 66px',
          boxSizing: 'border-box',
        }} className="contact-col">
          <h2 style={{
            fontFamily: "'Alice', serif",
            fontWeight: 400,
            fontSize: '2.25rem',
            color: '#fff',
            marginTop: 0,
            marginBottom: 20,
          }}>
            Contact Us Today
          </h2>
          <ContactForm dark />
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.7)',
            marginTop: 16,
            marginBottom: 0,
            lineHeight: 1.6,
          }}>
            * All indicated fields must be completed. Please include non-medical questions and correspondence only.
          </p>
        </div>

        {/* Right — pink, Office Info */}
        <div style={{
          flex: '1 1 50%',
          minWidth: 300,
          background: '#b02855',
          padding: '78px 48px 48px',
          boxSizing: 'border-box',
          color: '#fff',
        }} className="office-col">
          <h2 style={{
            fontFamily: "'Alice', serif",
            fontWeight: 400,
            fontSize: '2.25rem',
            color: '#fff',
            marginTop: 0,
            marginBottom: 28,
          }}>
            Office Info
          </h2>

          {/* Phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" style={{ flexShrink: 0 }}>
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <a href="tel:8177679383" style={{ color: '#fff', textDecoration: 'none', fontFamily: "'Raleway', sans-serif", fontSize: '1rem', fontWeight: 500 }}>
              817.767.9383
            </a>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href="mailto:info@mymirraimplants.com" style={{ color: '#fff', textDecoration: 'none', fontFamily: "'Raleway', sans-serif", fontSize: '1rem', fontWeight: 500 }}>
              info@mymirraimplants.com
            </a>
          </div>

          {/* Address */}
          <div style={{ marginBottom: 24 }}>
            <a href="/contact" style={{ color: '#fff', textDecoration: 'none', fontFamily: "'Raleway', sans-serif", fontSize: '0.95rem', lineHeight: 1.7 }}>
              720 US-377<br />Suite 120<br />Roanoke, TX 76262
            </a>
          </div>

          {/* Hours */}
          <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.9rem', color: '#fff', lineHeight: 1.9, marginBottom: 24 }}>
            <p style={{ margin: 0 }}><strong>Monday:</strong> 8:00a.m. – 5:00p.m.</p>
            <p style={{ margin: 0 }}><strong>Tuesday:</strong> 8:00a.m. – 5:00p.m.</p>
            <p style={{ margin: 0 }}><strong>Wednesday:</strong> 8:00a.m. – 5:00p.m.</p>
            <p style={{ margin: 0 }}><strong>Thursday:</strong> 8:00a.m. – 5:00p.m.</p>
            <p style={{ margin: 0 }}><strong>Friday:</strong> 8:00a.m. – 5:00p.m.</p>
            <p style={{ margin: 0 }}><strong>Saturday &amp; Sunday</strong><br />By Appointment Only</p>
          </div>

          {/* Map */}
          <a href="/contact" style={{ display: 'block' }}>
            <img
              src="/images/office-map.jpg"
              alt="Location Map: 720 US-377 Roanoke, TX 76262"
              style={{ width: '100%', display: 'block', borderRadius: 2 }}
            />
          </a>
        </div>
      </div>

      {/* ── Footer bar — white bg, logo left, nav + copyright right ── */}
      <div style={{ background: '#fff', borderTop: '1px solid #e8e8e8' }}>
        <div className="footer-bar-inner" style={{ maxWidth: 1390, margin: '0 auto', padding: '28px 35px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>

          {/* Logo */}
          <Link to="/" className="footer-logo" style={{ flexShrink: 0 }}>
            <img src={logo} alt="Mirra Periodontal & Implant Center" style={{ width: 348, height: 'auto', display: 'block' }} />
          </Link>

          {/* Nav + copyright */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }} className="footer-right">
            {/* Horizontal nav */}
            <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'flex-end' }}>
              {footerNav.map((item, i) => (
                <Link
                  key={item.label}
                  to={item.path}
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: '0.9rem',
                    color: '#58586c',
                    textDecoration: 'none',
                    paddingLeft: i === 0 ? 0 : '0.9em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#b02855')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#58586c')}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.82rem', color: '#58586c', margin: 0, textAlign: 'right' }}>
              &copy; Copyright 2026 Mirra Periodontal &amp; Implant Center
            </p>

            {/* Footer links */}
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.82rem', color: '#58586c', margin: 0, textAlign: 'right' }}>
              <Link to="/terms-of-use" style={{ color: '#58586c', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#b02855')}
                onMouseLeave={e => (e.currentTarget.style.color = '#58586c')}
              >Terms of Use</Link>
              {' | '}
              <a href="/sitemap" style={{ color: '#58586c', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#b02855')}
                onMouseLeave={e => (e.currentTarget.style.color = '#58586c')}
              >Sitemap</a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-col, .office-col { padding: 48px 24px !important; }
          .footer-right { align-items: center !important; }
          .footer-right nav { justify-content: center !important; }
          .footer-right p { text-align: center !important; }
          .footer-logo img { width: 220px !important; }
          .footer-bar-inner { flex-direction: column !important; align-items: center !important; padding: 24px 20px !important; }
        }
        @media (max-width: 480px) {
          .contact-col, .office-col { padding: 36px 16px !important; }
          .footer-logo img { width: 180px !important; }
        }
      `}</style>
    </footer>
  )
}
