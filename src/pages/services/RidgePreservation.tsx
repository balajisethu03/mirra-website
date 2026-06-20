import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function RidgePreservation() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Ridge Preservation / Bone Grafting">
      <h1 style={h1}>Ridge Preservation / Bone Grafting</h1>

      <p style={body}>Ridge preservation, also known as socket preservation, is a type of bone grafting. Designed to stimulate bone growth in an empty tooth socket following a tooth extraction, ridge preservation is a type of periodontal surgery. The purpose of ridge preservation is to prevent the area from collapsing by establishing enough bone growth to support the implants.</p>

      <h2 style={h2}>Benefits of Ridge Preservation</h2>
      <p style={body}>Ridge preservation helps to restore tooth function and stability during and after dental implantation. It also helps to give the dental patient natural-looking teeth and appropriate facial contours. Ridge preservation dramatically delays a process called bone resorption during which tooth tissue is broken down and reabsorbed into the body.</p>

      <h2 style={h2}>The Ridge Preservation Procedure</h2>
      <p style={body}>Once the tooth has been extracted, an empty socket is exposed in the alveolar ridge. Incisions are made in the gum line to create flaps. The sockets are filled with regenerative bone grafting material. This grafting material may be composed of the patient's own tissue, freeze dried human bone from a donor bank, processed bone elements from animals, or a synthetic bone substitute. A protective dressing is then applied, the gum flap is replaced over the tooth socket, and the wound is sutured.</p>

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
