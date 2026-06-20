import { Link } from 'react-router-dom'

const sidebarLinks = [
  { label: 'Dental Implants', path: '/services/dental-implants', bg: '#b02855', hover: '#58586c' },
  { label: 'Sedation', path: '/services/sedation-dentistry', bg: '#3276ab', hover: '#8e969c' },
  { label: 'Wisdom Teeth', path: '/services/oral-surgery/wisdom-teeth-extractions', bg: '#b02855', hover: '#58586c' },
  { label: 'Periodontics', path: '/services/periodontics', bg: '#3276ab', hover: '#8e969c' },
]

const affiliations = [
  'American Academy of Periodontology',
  'American Board of Periodontology',
  'Indiana University School of Dentistry',
  'Texas Dental Association',
  'University of Connecticut School of Dentistry',
]

const services = [
  'IV Sedation / Nitrous / Oral sedation',
  'Surgical tooth extractions and bone grafting',
  'Osseous surgery with bone grafting',
  'Guided bone regeneration procedures',
  'Dental Implants',
  'Gingival grafting procedures',
  'Functional and esthetic crown lengthening procedures',
  'Periodontal abcess management',
  'Wisdom tooth extractions',
]

const affiliationImages = [
  { src: '/images/affil-abp.webp', alt: 'American Board of Periodontology' },
  { src: '/images/affil-aap.png', alt: 'American Academy of Periodontology' },
  { src: '/images/affil-tda.png', alt: 'Texas Dental Association' },
  { src: '/images/affil-metroport.jpg', alt: 'Metroport Chamber Member 2023' },
  { src: '/images/d2024.jpg', alt: 'D2024 Award' },
  { src: '/images/d2025.jpg', alt: 'D2025 Award' },
]

export default function About() {
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }}>

      {/* Hero Banner — 12% padding top/bottom on 1440px ≈ ~300px tall */}
      <div
        style={{
          width: '100%',
          paddingTop: '9%',
          paddingBottom: '9%',
          background: "url(/images/about-bg.jpg) center center / cover no-repeat",
        }}
        role="img"
        aria-label="About Dr. Archana Venkataraman"
      />

      {/* Page Content — right sidebar layout */}
      <div style={{ maxWidth: 1390, margin: '0 auto', padding: '40px 35px 60px', display: 'flex', gap: 60, alignItems: 'flex-start' }} className="about-layout">

        {/* ── Main Content ── */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Page title */}
          <h1 style={{ fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }}>
            About
          </h1>

          {/* ── Row 1: Doctor name + two-column photo/text ── */}
          <div style={{ marginBottom: 20 }}>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 0, marginBottom: 5 }}>
              Dr. Archana Venkataraman, DDS, MSD
            </h2>

            {/* Two-column: 41% photo | 58% text */}
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 20 }} className="about-doctor-row">
              {/* Photo — 41% */}
              <div style={{ flex: '0 0 41%', minWidth: 220, position: 'relative' }} className="about-photo-col">
                <img
                  src="/images/dr-archana-about.jpg"
                  alt="Dr. Archana Venkataraman"
                  style={{ width: '100%', display: 'block' }}
                />
                {/* Award badges — bottom-right of photo */}
                <div style={{ position: 'absolute', bottom: 8, right: 8, display: 'flex', gap: 6 }}>
                  <img src="/images/d2024.jpg" alt="D2024 Award" style={{ width: 72, height: 72, objectFit: 'contain', borderRadius: 4, boxShadow: '0 2px 6px rgba(0,0,0,0.25)', background: '#fff' }} />
                  <img src="/images/d2025.jpg" alt="D2025 Award" style={{ width: 72, height: 72, objectFit: 'contain', borderRadius: 4, boxShadow: '0 2px 6px rgba(0,0,0,0.25)', background: '#fff' }} />
                </div>
              </div>
              {/* Text — 58% */}
              <div style={{ flex: '1 1 200px', marginTop: 5 }}>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }}>
                  Dr. Archana Venkataraman (Dr. A) is a board-certified Periodontist and a Diplomate of the American Board of Periodontology. Dr.A specializes in periodontology, dental implants and Oral Surgery in Dallas Fort Worth Metroplex,Texas.
                </p>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 0 }}>
                  Dr. Venkataraman earned her Doctor of Dental Surgery degree in 2005 with honors. She served as a Clinical instructor and practiced general dentistry few years prior to pursuing her interest in Periodontal surgery. She received her specialty certificate in Periodontics and her Master of Science in Dentistry (MSD) from the Indiana University School of Dentistry. She also received her Fellowship in Periodontics from the University of Connecticut School of Dental Medicine.
                </p>
              </div>
            </div>
          </div>

          {/* ── Row 2: Continuation paragraphs (full width) ── */}
          <div style={{ marginBottom: 30 }}>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 5, marginBottom: 16 }}>
              She is certified in sedation dentistry and provides oral, Nitrous and IV sedation to help patients stay comfortable and relaxed during their procedures.
            </p>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 0 }}>
              Dr. Venkataraman keeps up on professional development and educational courses to stay current in her knowledge and techniques. Dr. A's passion is to provide Excellent quality of care and services through Mirra Periodontal and Implant Center.
            </p>
          </div>

          {/* ── Row 3: affiliation images ── */}
          <div className="affil-grid" style={{ display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
            {affiliationImages.map(img => (
              <div key={img.alt} style={{ textAlign: 'center' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="affil-img"
                  style={{ width: 150, height: 150, objectFit: 'contain', display: 'block' }}
                />
              </div>
            ))}
          </div>

          {/* ── Row 4: Affiliations & Services text ── */}
          <div>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 0, marginBottom: 12 }}>
              Affiliation and Training:
            </h2>
            <ul style={{ fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 28 }}>
              {affiliations.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 0, marginBottom: 12 }}>
              Services Provided:
            </h2>
            <ul style={{ fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 0 }}>
              {services.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Sidebar — 4 service buttons ── */}
        <div style={{ width: 345, flexShrink: 0, paddingLeft: 0 }} className="about-sidebar">
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
          .about-layout { flex-direction: column !important; padding-left: 20px !important; padding-right: 20px !important; }
          .about-sidebar { width: 100% !important; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .about-sidebar a { margin-bottom: 0 !important; }
          .affil-img { width: 120px !important; height: 120px !important; }
          .affil-grid { gap: 14px !important; }
        }
        @media (max-width: 640px) {
          .about-doctor-row { flex-direction: column !important; }
          .about-photo-col { flex: 1 1 auto !important; min-width: unset !important; }
          .affil-img { width: 100px !important; height: 100px !important; }
        }
        @media (max-width: 480px) {
          .about-layout { padding-left: 14px !important; padding-right: 14px !important; }
          .affil-img { width: 80px !important; height: 80px !important; }
          .affil-grid { gap: 10px !important; }
          .about-sidebar a { font-size: 18px !important; min-height: 80px !important; }
        }
      `}</style>
    </div>
  )
}
