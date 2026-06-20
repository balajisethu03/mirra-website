import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const technologyLinks = [
  { label: 'Dental X-rays', path: '/technology/dental-x-rays' },
  { label: 'Cone Beam CT Scan Imaging', path: '/technology/cone-beam-ct-scan-imaging' },
  { label: 'Laser Dentistry', path: '/technology/laser-dentistry' },
]

const serviceGroups = [
  {
    label: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry',
    items: [
      { label: 'Cosmetic Gum Surgery', path: '/services/cosmetic-dentistry/cosmetic-gum-surgery' },
      { label: 'Dental Bonding', path: '/services/cosmetic-dentistry/dental-bonding' },
      { label: 'Dentures', path: '/services/cosmetic-dentistry/dentures' },
      { label: 'In-Office Teeth Whitening', path: '/services/cosmetic-dentistry/in-office-teeth-whitening' },
    ],
  },
  {
    label: 'Dental Implants', path: '/services/dental-implants',
    items: [
      { label: 'Mini Implants', path: '/services/dental-implants/mini-implants' },
    ],
  },
  {
    label: 'Neuromuscular Dentistry', path: '/services/neuromuscular-dentistry',
    items: [
      { label: 'Bruxism', path: '/services/neuromuscular-dentistry/bruxism' },
      { label: 'Mouth Guards', path: '/services/neuromuscular-dentistry/mouth-guards' },
      { label: 'Temporomandibular Joint Disorder', path: '/services/neuromuscular-dentistry/temporomandibular-joint-disorder' },
    ],
  },
  {
    label: 'Oral Surgery', path: '/services/oral-surgery',
    items: [
      { label: 'Ridge Preservation / Bone Grafting', path: '/services/oral-surgery/ridge-preservation-bone-grafting' },
      { label: 'Sinus Lift', path: '/services/oral-surgery/sinus-lift' },
      { label: 'Tooth Extraction', path: '/services/oral-surgery/tooth-extraction' },
      { label: 'Wisdom Teeth Extractions', path: '/services/oral-surgery/wisdom-teeth-extractions' },
    ],
  },
  {
    label: 'Periodontics', path: '/services/periodontics',
    items: [
      { label: 'Crown Lengthening', path: '/services/periodontics/crown-lengthening' },
      { label: 'Gingivectomy', path: '/services/periodontics/gingivectomy' },
      { label: 'Gum Disease', path: '/services/periodontics/gum-disease' },
      { label: 'Gum Grafting', path: '/services/periodontics/gum-grafting' },
      { label: 'Oral Biopsy', path: '/services/periodontics/oral-biopsy' },
      { label: 'Osseous Surgery', path: '/services/periodontics/osseous-surgery' },
      { label: 'Scaling And Root Planing', path: '/services/periodontics/scaling-and-root-planing' },
    ],
  },
  {
    label: 'Preventive Dentistry', path: '/services/preventive-dentistry',
    items: [
      { label: 'Oral Cancer', path: '/services/preventive-dentistry/oral-cancer' },
      { label: 'Oral Hygiene', path: '/services/preventive-dentistry/oral-hygiene' },
      { label: 'Routine Dental Cleaning', path: '/services/preventive-dentistry/routine-dental-cleaning' },
    ],
  },
  {
    label: 'Sedation Dentistry', path: '/services/sedation-dentistry',
    items: [],
  },
]

export default function Header() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [techOpen, setTechOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null)
  const [mobileTechOpen, setMobileTechOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const techRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (techRef.current && !techRef.current.contains(e.target as Node)) setTechOpen(false)
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setTechOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/')

  const navLinkStyle = (path: string): React.CSSProperties => ({
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 600,
    fontSize: '0.9rem',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: isActive(path) ? '#b02855' : '#222',
    padding: '8px 4px',
    borderBottom: isActive(path) ? '2px solid #b02855' : '2px solid transparent',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    transition: 'color 0.2s',
  })

  const dropdownItemStyle: React.CSSProperties = {
    display: 'block',
    padding: '10px 20px',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 500,
    fontSize: '0.875rem',
    color: '#222',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    borderBottom: '1px solid #f0f0f0',
    transition: 'background 0.15s, color 0.15s',
  }

  const btnStyle: React.CSSProperties = {
    background: '#b02855',
    color: '#fff',
    padding: '10px 30px',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 600,
    fontSize: '16px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s',
    whiteSpace: 'nowrap' as const,
  }

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, fontFamily: "'Raleway', sans-serif", background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>

      {/* Single merged header row */}
      <div className="header-inner" style={{ maxWidth: 1390, margin: '0 auto', padding: '0 35px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 110 }}>

        {/* Logo */}
        <Link to="/" className="header-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src={logo} alt="Mirra Periodontal & Implant Center" style={{ width: 348, height: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Right side: utility row + nav row stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }} className="desktop-right">

          {/* Row 1: utility bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Link to="/location/mirra-periodontal-implant-center" style={{ color: '#555', fontSize: '16px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#b02855"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
              Roanoke, TX
            </Link>
            <span style={{ color: '#555', fontSize: '16px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#b02855"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <a href="tel:8177679383" style={{ color: '#555', textDecoration: 'none', fontSize: '16px' }}>817.767.9383</a>
            </span>
            <div style={{ width: 1, height: 20, background: '#ddd' }} />
            <Link
              to="/forms"
              style={btnStyle}
              onMouseEnter={e => (e.currentTarget.style.background = '#3276ab')}
              onMouseLeave={e => (e.currentTarget.style.background = '#b02855')}
            >
              Forms
            </Link>
            <Link
              to="/contact"
              style={btnStyle}
              onMouseEnter={e => (e.currentTarget.style.background = '#3276ab')}
              onMouseLeave={e => (e.currentTarget.style.background = '#b02855')}
            >
              Book an Appointment
            </Link>
          </div>

          {/* Row 2: nav links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="desktop-nav">
            <Link to="/about" style={navLinkStyle('/about')}
              onMouseEnter={e => { if (!isActive('/about')) (e.currentTarget as HTMLElement).style.color = '#b02855' }}
              onMouseLeave={e => { if (!isActive('/about')) (e.currentTarget as HTMLElement).style.color = '#222' }}
            >About Us</Link>

            {/* Technology dropdown */}
            <div ref={techRef} style={{ position: 'relative' }}
              onMouseEnter={() => { setTechOpen(true); setServicesOpen(false) }}
              onMouseLeave={() => setTechOpen(false)}
            >
              <button
                onClick={() => { setTechOpen(o => !o); setServicesOpen(false) }}
                style={{ ...navLinkStyle('/technology'), display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', padding: '8px 4px' }}
              >
                Technology <span style={{ fontSize: '0.65rem' }}>{techOpen ? '▲' : '▼'}</span>
              </button>
              {techOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.12)', minWidth: 220, borderTop: '3px solid #b02855', zIndex: 200 }}>
                  <Link to="/technology" style={dropdownItemStyle}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#fdf0f4'; (e.currentTarget as HTMLElement).style.color = '#b02855' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.color = '#222' }}
                  >Overview</Link>
                  {technologyLinks.map(link => (
                    <Link key={link.label} to={link.path} style={dropdownItemStyle}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#fdf0f4'; (e.currentTarget as HTMLElement).style.color = '#b02855' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.color = '#222' }}
                    >{link.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div ref={servicesRef} style={{ position: 'relative' }}
              onMouseEnter={() => { setServicesOpen(true); setTechOpen(false) }}
              onMouseLeave={() => { setServicesOpen(false); setHoveredGroup(null) }}
            >
              <button
                onClick={() => { setServicesOpen(o => !o); setTechOpen(false) }}
                style={{ ...navLinkStyle('/services'), display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', padding: '8px 4px' }}
              >
                Services <span style={{ fontSize: '0.65rem' }}>{servicesOpen ? '▲' : '▼'}</span>
              </button>
              {servicesOpen && (
                <div style={{ position: 'absolute', top: '100%', right: 0, zIndex: 200 }}>
                  {/* Categories panel — 260px, right-aligned under Services, no shift */}
                  <div style={{ position: 'relative', background: '#fff', width: 260, borderTop: '3px solid #b02855', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
                    <Link to="/services" style={dropdownItemStyle}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#fdf0f4'; (e.currentTarget as HTMLElement).style.color = '#b02855'; setHoveredGroup(null) }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.color = '#222' }}
                    >All Services</Link>
                    {serviceGroups.map(group => (
                      <div key={group.label} style={{ position: 'relative' }} onMouseEnter={() => setHoveredGroup(group.label)}>
                        <Link to={group.path}
                          style={{ ...dropdownItemStyle, fontWeight: 700, borderTop: '1px solid #e8e8e8', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: hoveredGroup === group.label ? '#fdf0f4' : '#fff', color: hoveredGroup === group.label ? '#b02855' : '#222' }}
                        >
                          {group.label}
                          {group.items.length > 0 && <span style={{ fontSize: '0.65rem', marginLeft: 8 }}>▶</span>}
                        </Link>

                        {/* Sub-items flyout — aligned with this specific row */}
                        {hoveredGroup === group.label && group.items.length > 0 && (
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: '100%',
                            background: '#fafafa',
                            width: 260,
                            borderTop: '3px solid #3276ab',
                            boxShadow: '2px 4px 16px rgba(0,0,0,0.10)',
                            zIndex: 1,
                          }}>
                            {group.items.map(item => (
                              <Link key={item.label} to={item.path} className="services-subitem" style={dropdownItemStyle}>{item.label}</Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/gallery" style={navLinkStyle('/gallery')}
              onMouseEnter={e => { if (!isActive('/gallery')) (e.currentTarget as HTMLElement).style.color = '#b02855' }}
              onMouseLeave={e => { if (!isActive('/gallery')) (e.currentTarget as HTMLElement).style.color = '#222' }}
            >Gallery</Link>

            <Link to="/contact" style={navLinkStyle('/contact')}
              onMouseEnter={e => { if (!isActive('/contact')) (e.currentTarget as HTMLElement).style.color = '#b02855' }}
              onMouseLeave={e => { if (!isActive('/contact')) (e.currentTarget as HTMLElement).style.color = '#222' }}
            >Contact</Link>
          </nav>
        </div>{/* end desktop-right */}

        {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5 }}
            className="hamburger-btn"
          >
            <span style={{ display: 'block', width: 26, height: 3, background: mobileOpen ? '#b02855' : '#333', borderRadius: 2, transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
            <span style={{ display: 'block', width: 26, height: 3, background: '#333', borderRadius: 2, opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
            <span style={{ display: 'block', width: 26, height: 3, background: mobileOpen ? '#b02855' : '#333', borderRadius: 2, transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
          </button>
      </div>{/* end merged header row */}

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #eee', padding: '10px 0' }} className="mobile-menu">
          <div className="mobile-menu-inner" style={{ maxWidth: 1390, margin: '0 auto', padding: '0 20px' }}>
            <Link to="/about" style={{ display: 'block', padding: '12px 0', fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '0.95rem', color: isActive('/about') ? '#b02855' : '#222', borderBottom: '1px solid #f0f0f0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              About Us
            </Link>

            <div>
              <button
                onClick={() => setMobileTechOpen(o => !o)}
                style={{ width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '0.95rem', color: '#222', background: 'none', border: 'none', borderBottom: '1px solid #f0f0f0', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
              >
                Technology <span>{mobileTechOpen ? '▲' : '▼'}</span>
              </button>
              {mobileTechOpen && (
                <div style={{ paddingLeft: 16, borderBottom: '1px solid #f0f0f0' }}>
                  <Link to="/technology" style={{ display: 'block', padding: '10px 0', fontFamily: "'Raleway', sans-serif", fontSize: '0.875rem', color: '#444' }}>Overview</Link>
                  {technologyLinks.map(link => (
                    <Link key={link.label} to={link.path} style={{ display: 'block', padding: '10px 0', fontFamily: "'Raleway', sans-serif", fontSize: '0.875rem', color: '#444' }}>{link.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobileServicesOpen(o => !o)}
                style={{ width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '0.95rem', color: '#222', background: 'none', border: 'none', borderBottom: '1px solid #f0f0f0', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
              >
                Services <span>{mobileServicesOpen ? '▲' : '▼'}</span>
              </button>
              {mobileServicesOpen && (
                <div style={{ paddingLeft: 16, borderBottom: '1px solid #f0f0f0' }}>
                  <Link to="/services" style={{ display: 'block', padding: '10px 0', fontFamily: "'Raleway', sans-serif", fontSize: '0.875rem', color: '#444', fontWeight: 600 }}>All Services</Link>
                  {serviceGroups.map(group => (
                    <div key={group.label}>
                      <Link to={group.path} style={{ display: 'block', padding: '8px 0', fontFamily: "'Raleway', sans-serif", fontSize: '0.875rem', color: '#222', fontWeight: 700, borderTop: '1px solid #f8f8f8' }}>{group.label}</Link>
                      {group.items.map(item => (
                        <Link key={item.label} to={item.path} style={{ display: 'block', padding: '6px 0 6px 16px', fontFamily: "'Raleway', sans-serif", fontSize: '0.82rem', color: '#555' }}>{item.label}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gallery" style={{ display: 'block', padding: '12px 0', fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '0.95rem', color: isActive('/gallery') ? '#b02855' : '#222', borderBottom: '1px solid #f0f0f0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Gallery
            </Link>
            <Link to="/contact" style={{ display: 'block', padding: '12px 0', fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '0.95rem', color: isActive('/contact') ? '#b02855' : '#222', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Contact
            </Link>
            <div style={{ marginTop: 16, paddingBottom: 8, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="/forms" style={{ background: '#b02855', color: '#fff', padding: '8px 20px', fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 3 }}>Forms</a>
              <Link to="/contact" style={{ background: '#b02855', color: '#fff', padding: '8px 20px', fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 3 }}>Book Appointment</Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .services-subitem:hover {
          background: #fdf0f4 !important;
          color: #b02855 !important;
        }
        @media (max-width: 900px) {
          .desktop-right { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .header-inner { padding: 0 16px !important; min-height: 72px !important; }
          .header-logo img { width: 210px !important; }
        }
        @media (max-width: 480px) {
          .header-logo img { width: 170px !important; }
          .header-inner { padding: 0 12px !important; min-height: 62px !important; }
        }
      `}</style>
    </header>
  )
}
