import ContentPageLayout from '../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 20 }

export default function Forms() {
  return (
    <ContentPageLayout bannerImage="shutterstock_448888804.jpg" bannerAlt="Patient Forms">
      <h1 style={h1}>Forms</h1>
      <p style={body}>
        <a
          href="/forms/patient-referral-form.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#3276ab', textDecoration: 'underline', fontWeight: 600 }}
        >
          Patient Referral Form
        </a>
      </p>
    </ContentPageLayout>
  )
}
