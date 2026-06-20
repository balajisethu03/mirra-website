import ContentPageLayout from '../components/ContentPageLayout'
import ContactForm from '../components/ContactForm'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '28px', color: '#b02855', marginTop: 0, marginBottom: 16 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 8 }

export default function Contact() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Contact Us">
      <h1 style={h1}>Contact Us</h1>

      <h2 style={h2}>Our Office</h2>
      <p style={body}>
        <strong>Mirra Periodontal &amp; Implant Center</strong><br />
        720 US-377, Suite 120<br />
        Roanoke, TX 76262
      </p>
      <p style={body}>
        <strong>Phone:</strong>{' '}
        <a href="tel:8177679383" style={{ color: '#3276ab', textDecoration: 'none' }}>817.767.9383</a>
      </p>
      <p style={body}>
        <strong>Email:</strong>{' '}
        <a href="mailto:info@mymirraimplants.com" style={{ color: '#3276ab', textDecoration: 'none' }}>info@mymirraimplants.com</a>
      </p>
      <a
        href="https://www.google.com/maps?saddr&daddr=720+US-377+Roanoke,+TX+76262+&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', marginTop: 8, marginBottom: 16, background: '#b02855', color: '#fff', fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '15px', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', padding: '10px 28px', transition: 'background 0.2s' }}
        onMouseEnter={e => (e.currentTarget.style.background = '#3276ab')}
        onMouseLeave={e => (e.currentTarget.style.background = '#b02855')}
      >
        Get Directions
      </a>

      <h2 style={{ ...h2, marginTop: 24 }}>Office Hours</h2>
      <p style={body}><strong>Monday:</strong> 8:00 a.m. – 5:00 p.m.</p>
      <p style={body}><strong>Tuesday:</strong> 8:00 a.m. – 5:00 p.m.</p>
      <p style={body}><strong>Wednesday:</strong> 8:00 a.m. – 5:00 p.m.</p>
      <p style={body}><strong>Thursday:</strong> 8:00 a.m. – 5:00 p.m.</p>
      <p style={body}><strong>Friday:</strong> 8:00 a.m. – 5:00 p.m.</p>
      <p style={body}><strong>Saturday &amp; Sunday:</strong> By Appointment Only</p>

      <h2 style={{ ...h2, marginTop: 32 }}>Request An Appointment</h2>
      <p style={{ ...body, marginBottom: 24 }}>
        We would love to discuss your options with you! Fill out the form below and a member from our team will be in touch with you shortly.
      </p>
      <ContactForm />
    </ContentPageLayout>
  )
}
