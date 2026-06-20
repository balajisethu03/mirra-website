import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function RoutineDentalCleaning() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Routine Dental Cleaning">
      <h1 style={h1}>Routine Dental Cleaning</h1>

      <p style={body}>Seeing a dentist for a professional cleaning on a regular basis is essential to maintaining good dental health. A dentist can remove plaque and other substances that have built up on the teeth over time, and can recommend other preventive techniques to help maintain good oral health.</p>

      <p style={body}>Regular professional cleanings, combined with daily at-home brushing and flossing, are essential for preventing tooth decay and gum disease. Most patients benefit from having their teeth professionally cleaned every six months.</p>

      <h2 style={h2}>What to Expect During a Dental Cleaning</h2>
      <p style={body}>A routine dental cleaning includes a thorough examination of the teeth and gums, removal of tartar (hardened plaque) using special dental tools, polishing of the teeth to remove surface stains, and flossing between the teeth. The dental hygienist may also apply fluoride to strengthen the teeth and prevent cavities.</p>

      <h2 style={h2}>Additional Resources</h2>
      <ul style={ul}>
        <li>MedlinePlus</li>
        <li>National Institutes of Health</li>
        <li>Centers for Disease Control and Prevention</li>
        <li>U.S. Department of Health &amp; Human Services</li>
        <li>WebMD</li>
      </ul>
    </ContentPageLayout>
  )
}
