import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }

export default function OralSurgery() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Oral Surgery">
      <h1 style={h1}>Oral Surgery</h1>

      <p style={body}>Oral and maxillofacial surgery is the treatment of problems affecting the mouth, teeth, gums, jaws and related facial structures. Procedures are often performed on patients with skeletal and dental irregularities that occur as a result of congenital defects, injury, disease or other factors. Maxillofacial surgery is also performed to treat patients with oral cancer or jaw cysts.</p>

      <p style={body}>Patients with these conditions may have an abnormal or unbalanced facial appearance, and may have difficulty chewing, swallowing or speaking due to their jaw irregularities. The goal of oral and maxillofacial surgery is to treat the problem and achieve the most aesthetically pleasing result possible.</p>

      <p style={body}>Oral and maxillofacial surgery procedures include the following:</p>
      <ul style={{ fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }}>
        <li>Wisdom tooth removal</li>
        <li>Tooth extractions</li>
        <li>Placement of dental implants</li>
        <li>Reconstructive jaw surgery</li>
        <li>Bone grafting</li>
        <li>Surgical correction of oral and facial deformities</li>
        <li>Treatment of temporomandibular joint disorders (TMJ)</li>
        <li>Surgical repair of traumatic injury</li>
        <li>Surgical repair of damage caused by cancers and oral diseases</li>
      </ul>

      <p style={body}>Depending on the condition and surgical repair necessary, oral maxillofacial surgeons may work together with plastic surgeons to achieve the best results for each patient.</p>

      <h2 style={h2}>Additional Resources</h2>
      <ul style={{ fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }}>
        <li>MedlinePlus</li>
        <li>National Institutes of Health</li>
        <li>Centers for Disease Control and Prevention</li>
        <li>U.S. Department of Health &amp; Human Services</li>
        <li>WebMD</li>
      </ul>
    </ContentPageLayout>
  )
}
