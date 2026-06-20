import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Dental Implants', path: '/services/dental-implants', bg: '#b02855', hover: '#58586c' },
  { label: 'Sedation', path: '/services/sedation-dentistry', bg: '#3276ab', hover: '#8e969c' },
  { label: 'Wisdom Teeth', path: '/services/oral-surgery/wisdom-teeth-extractions', bg: '#b02855', hover: '#58586c' },
  { label: 'Periodontics', path: '/services/periodontics', bg: '#3276ab', hover: '#8e969c' },
]

const btnPink: React.CSSProperties = {
  display: 'inline-block',
  background: '#b02855',
  color: '#fff',
  padding: '15px 40px',
  fontFamily: "'Raleway', sans-serif",
  fontWeight: 700,
  fontSize: '13px',
  letterSpacing: '1.3px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.2s',
}

const gradientBg = 'linear-gradient(301deg, #B02855 0%, #3276AB 100%)'

export default function Home() {
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif", overflowX: 'hidden' }}>

      {/* 1. Hero */}
      <section
        className="hero-section"
        style={{
          minHeight: 650,
          display: 'flex',
          alignItems: 'center',
          background: 'url(/images/hero-bg.jpg) 60% 0%/cover no-repeat',
          backgroundColor: '#fff',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: 1390, margin: '0 auto', padding: '80px 35px', width: '100%' }}>
          <div className="hero-text-panel" style={{ maxWidth: '45%' }}>
            <h1 style={{ fontFamily: "'Alice', serif", fontWeight: 400, fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', color: '#3276ab', margin: '0 0 16px', lineHeight: 1.05 }}>
              Healthy Gums<br />Start Here
            </h1>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.05rem', color: '#444', marginBottom: 32 }}>
              Mirra Periodontal &amp; Implant Center is here for you.
            </p>
            <Link
              to="/contact"
              style={btnPink}
              onMouseEnter={e => (e.currentTarget.style.background = '#3276ab')}
              onMouseLeave={e => (e.currentTarget.style.background = '#b02855')}
            >
              Request an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Quick links — overlaps hero by 80px, max-width 1350px centered (fl-row-fixed-width) */}
      <section style={{ marginTop: -80, position: 'relative', zIndex: 1, background: 'transparent' }}>
        <div style={{ maxWidth: 1350, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 21 }} className="quick-links-grid">
          {quickLinks.map(link => (
            <Link
              key={link.label}
              to={link.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 277,
                padding: '24px 16px',
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
              }}
              onMouseEnter={e => (e.currentTarget.style.background = link.hover)}
              onMouseLeave={e => (e.currentTarget.style.background = link.bg)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* 3. Periodontist in Roanoke, TX — max-width 930px, 55px top / 100px bottom */}
      <section style={{ background: '#fff', paddingTop: 55, paddingBottom: 100 }}>
        <div style={{ maxWidth: 930, margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '36px', lineHeight: '46px', color: '#b02855', marginBottom: 24, marginTop: 0 }}>
            Periodontist in Roanoke, TX
          </h2>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', color: '#000', lineHeight: '34px', marginBottom: 32, marginLeft: 40, marginRight: 40 }}>
            Welcome to Mirra Periodontal and Implant Center, where your gum health comes first. MPIC is the place where patient comfort and convenience are prioritized. Dr. Archana Venkataraman brings years of experience to Mirra Periodontal and Implant Center and will continue to have happy and satisfied patients in Roanoke, TX and the surrounding areas.
          </p>
          <Link
            to="/contact"
            style={btnPink}
            onMouseEnter={e => (e.currentTarget.style.background = '#3276ab')}
            onMouseLeave={e => (e.currentTarget.style.background = '#b02855')}
          >
            Request an Appointment
          </Link>
        </div>
      </section>

      {/* 4. Mission Statement — content max-width 1350px centered, gradient left 45%, photo right 55% */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1350, margin: '0 auto', display: 'grid', gridTemplateColumns: '45% 1fr', minHeight: 560, overflow: 'hidden' }} className="mission-grid">
          {/* Gradient panel — 45% */}
          <div
            style={{ background: gradientBg, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 48px', minHeight: 497, lineHeight: 1.5 }}
            className="mission-panel"
          >
            <h2 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '28px', lineHeight: '38px', color: '#fff', letterSpacing: '5.6px', textTransform: 'uppercase', textAlign: 'center', marginTop: 13, marginBottom: 0 }}>
              Mission Statement
            </h2>
            <p style={{ fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '24px', lineHeight: '40px', color: '#fff', textAlign: 'center', marginTop: 20, marginRight: 50, marginBottom: 0, marginLeft: 50 }}>
              Our mission is to provide topnotch periodontal and dental implant services to our patients. We embrace a shared vision of Education, Motivation and Compassion while delivering services utilizing the most advanced dental technology. As a team, we strive to provide the highest quality of service to each individual where "Patient satisfaction is Our Priority."
            </p>
          </div>
          {/* Photo right — 55% */}
          <div
            style={{ background: 'url(/images/mission-img.jpg) center center/cover no-repeat', minHeight: 560 }}
            className="mission-img"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* 5. Doctor Bio — 107px top / 82px bottom, text left 76.66%, image right 23.34% */}
      <section className="doctor-section" style={{ background: '#fff', paddingTop: 107, paddingBottom: 82 }}>
        <div style={{ maxWidth: 1390, margin: '0 auto', padding: '0 35px', display: 'flex', alignItems: 'flex-start' }} className="doctor-row">
          {/* Text left — 76.66% */}
          <div style={{ flex: '0 0 76.66%', marginRight: 44, boxSizing: 'border-box' }} className="doctor-text">
            <h2 style={{ fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', lineHeight: '46px', color: '#b02855', marginTop: 0, marginBottom: 16 }}>
              Dr. Archana Venkataraman, DDS, MSD
            </h2>
            <div style={{ width: '100%', height: 1, background: '#BBBBC7', marginBottom: 24 }} />
            <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', color: '#000', lineHeight: '34px', marginBottom: 14 }}>
              Dr. Archana Venkataraman (Dr. A) is a board-certified Periodontist and a Diplomate of the American Board of Periodontology. Dr. A specializes in periodontology, dental implants and Oral Surgery in Dallas Fort Worth Metroplex, Texas.
            </p>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', color: '#000', lineHeight: '34px', marginBottom: 14 }}>
              Dr. Venkataraman earned her Doctor of Dental Surgery degree in 2005 with honors. She served as a Clinical instructor and practiced general dentistry for a few years prior to pursuing her interest in Periodontal surgery. She received her specialty certificate in Periodontics and her Master of Science in Dentistry (MSD) from the Indiana University School of Dentistry. She also received her Fellowship in Periodontics from the University of Connecticut School of Dental Medicine.
            </p>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', color: '#000', lineHeight: '34px', marginBottom: 32 }}>
              She is certified in sedation dentistry and provides oral, Nitrous and IV sedation to help patients stay comfortable and relaxed during their procedures.
            </p>
            <Link
              to="/about"
              style={btnPink}
              onMouseEnter={e => (e.currentTarget.style.background = '#3276ab')}
              onMouseLeave={e => (e.currentTarget.style.background = '#b02855')}
            >
              Learn More About Dr. A
            </Link>
          </div>
          {/* Image panel right — 23.34% */}
          <div style={{ flex: '0 0 23.34%', minWidth: 160, boxSizing: 'border-box' }} className="doctor-img-panel">
            <Link to="/about" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                <div className="doctor-photo-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src="/images/dr-archana-p17.jpg"
                    alt="Dr. Archana Venkataraman"
                    className="doctor-photo-img"
                    style={{ width: '100%', display: 'block', objectFit: 'cover', transition: 'transform 0.35s ease' }}
                  />
                  {/* Award badges — bottom-right of photo */}
                  <div style={{ position: 'absolute', bottom: 8, right: 8, display: 'flex', gap: 6 }}>
                    <img src="/images/d2024.jpg" alt="D2024 Award" style={{ width: 60, height: 60, objectFit: 'contain', borderRadius: 4, boxShadow: '0 2px 6px rgba(0,0,0,0.25)', background: '#fff' }} />
                    <img src="/images/d2025.jpg" alt="D2025 Award" style={{ width: 60, height: 60, objectFit: 'contain', borderRadius: 4, boxShadow: '0 2px 6px rgba(0,0,0,0.25)', background: '#fff' }} />
                  </div>
                </div>
                <div style={{ background: '#fff', padding: '12px 8px', textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '24px', lineHeight: '30px', color: '#8D1B50', letterSpacing: '2.4px', margin: 0, textTransform: 'uppercase' }}>
                    Dr. Archana<br />Venkataraman
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Patient Testimonials — 100px top, photo left 52%, gradient right 48% */}
      <section style={{ paddingTop: 100, background: '#fff', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1350, margin: '0 auto', display: 'grid', gridTemplateColumns: '52% 1fr', minHeight: 560 }} className="testimonials-grid">
          {/* Photo left — 52% */}
          <div
            style={{ background: 'url(/images/testimonials-img.jpg) center center/cover no-repeat', minHeight: 560 }}
            className="testimonials-img"
            aria-hidden="true"
          />
          {/* Gradient panel — 48% right */}
          <div
            style={{ background: gradientBg, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '60px 48px', textAlign: 'center', minHeight: 500, lineHeight: 1.5 }}
            className="testimonials-panel"
          >
            <h2 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '28px', lineHeight: '38px', color: '#fff', letterSpacing: '5.6px', textTransform: 'uppercase', marginTop: 0, marginBottom: 20 }}>
              Patient Testimonials
            </h2>
            <p style={{ fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '24px', lineHeight: '40px', color: '#fff', marginTop: 20, marginRight: 50, marginBottom: 0, marginLeft: 50, fontStyle: 'italic' }}>
              "Thankful to have Dr. A as my Periodontist"
            </p>
            <Link
              to="/testimonials"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '15px', color: 'rgba(255,255,255,0.9)', textDecoration: 'underline', marginTop: 20, marginBottom: 28, display: 'block', letterSpacing: '1.5px', textTransform: 'uppercase' }}
            >
              Continue Reading
            </Link>
            <Link
              to="/testimonials"
              style={{ ...btnPink, background: 'transparent', border: '2px solid #fff' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#b02855' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff' }}
            >
              See More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Patient Specials — 115px top / 186px bottom, gradient left 44%, photo right 56% */}
      <section style={{ paddingTop: 115, paddingBottom: 186, background: '#fff', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1350, margin: '0 auto', display: 'grid', gridTemplateColumns: '44% 1fr', minHeight: 560 }} className="specials-grid">
          {/* Gradient panel — 44% left */}
          <div
            style={{ background: gradientBg, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '60px 48px', textAlign: 'center', minHeight: 415, lineHeight: 1.5 }}
            className="specials-panel"
          >
            <h2 style={{ fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', lineHeight: '46px', color: '#fff', textAlign: 'center', marginTop: 0, marginBottom: 0 }}>
              Patient Specials
            </h2>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '25px', lineHeight: '30px', color: '#fff', textAlign: 'center', marginTop: 37, marginBottom: 0 }}>
              Please call for details
            </p>
            <Link
              to="/contact"
              style={{ ...btnPink, marginTop: 32 }}
              onMouseEnter={e => (e.currentTarget.style.background = '#3276ab')}
              onMouseLeave={e => (e.currentTarget.style.background = '#b02855')}
            >
              Get the Details
            </Link>
          </div>
          {/* Photo right — 56% */}
          <div
            style={{ background: 'url(/images/specials-img.jpg) center center/cover no-repeat', minHeight: 560 }}
            className="specials-img"
            aria-hidden="true"
          />
        </div>
      </section>

      <style>{`
        .doctor-photo-wrap:hover .doctor-photo-img {
          transform: scale(1.05);
        }
        @media (max-width: 1025px) {
          .quick-links-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .hero-section { min-height: 420px !important; }
          .doctor-row { flex-direction: column !important; }
          .doctor-text { flex: 1 1 100% !important; margin-right: 0 !important; }
          .doctor-img-panel { flex: 1 1 auto !important; width: 100% !important; max-width: 280px; margin: 24px auto 0; }
          .doctor-section { padding-top: 48px !important; padding-bottom: 40px !important; }
          .mission-grid, .testimonials-grid, .specials-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
          .mission-img, .testimonials-img, .specials-img { display: none !important; }
          .mission-panel, .testimonials-panel, .specials-panel { min-height: auto !important; padding: 40px 28px !important; }
          .mission-panel p, .testimonials-panel p { margin-left: 0 !important; margin-right: 0 !important; }
        }
        @media (max-width: 640px) {
          .hero-section { min-height: 340px !important; }
          .hero-text-panel {
            max-width: 100% !important;
            background: rgba(255,255,255,0.88);
            padding: 24px 16px !important;
            border-radius: 4px;
          }
          .quick-links-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .quick-links-grid a { min-height: 160px !important; font-size: 18px !important; }
        }
        @media (max-width: 480px) {
          .hero-section { min-height: 280px !important; }
          .doctor-row { padding: 0 14px !important; }
        }
      `}</style>
    </div>
  )
}
