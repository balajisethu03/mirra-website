import ContentPageLayout from '../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 20 }

export default function Testimonials() {
  return (
    <ContentPageLayout bannerImage="shutterstock_448888804.jpg" bannerAlt="Patient Testimonials">
      <h1 style={h1}>Testimonials</h1>
      <p style={body}>Coming Soon!</p>
    </ContentPageLayout>
  )
}
