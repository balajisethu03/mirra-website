import { Link } from 'react-router-dom'
import ContentPageLayout from '../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 20 }

export default function ThankYou() {
  return (
    <ContentPageLayout bannerImage="shutterstock_448888804.jpg" bannerAlt="Thank You" showSidebar={false}>
      <h1 style={h1}>Thank You!</h1>
      <p style={body}>
        Thank you for contacting Mirra Periodontal &amp; Implant Center. A member of our team will be in touch with you shortly.
      </p>
      <p style={body}>
        <Link to="/" style={{ color: '#3276ab', textDecoration: 'underline' }}>Return to Home</Link>
      </p>
    </ContentPageLayout>
  )
}
