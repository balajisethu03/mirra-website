import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function Dentures() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Dentures">
      <h1 style={h1}>Dentures</h1>

      <p style={body}>Dentures are prosthetic devices designed to help patients with missing teeth, chew food, improve speaking habits, and improve the patient's facial aesthetics. The absence of teeth can lead to a sunken, collapsed appearance to the mouth-area.</p>

      <p style={body}>Aesthetic dentures are custom crafted to provide a precise comfortable fit, and to enhance overall facial features. The color of the teeth is carefully selected and the natural differences in tooth shape and size are carefully chosen based on each individual's age, gender and unique facial qualities.</p>

      <h2 style={h2}>Types of Dentures</h2>
      <p style={body}>There are three types of dentures:</p>

      <h3 style={h3}>Complete Dentures</h3>
      <p style={body}>Complete or full dentures are only required for people who have lost all or most of the teeth on either of the two arches of the mouth.</p>

      <h3 style={h3}>Fixed Partial Dentures</h3>
      <p style={body}>Most patients missing only a few teeth opt for fixed partial dentures, also known as "crown and bridge." These must be precisely installed, especially when in between healthy teeth.</p>

      <h3 style={h3}>Removable Partial Dentures</h3>
      <p style={body}>Removable partial dentures are different from fixed partial dentures in that they are normally only used by people who have lost too many teeth for fixed dentures, but too few for full dentures.</p>

      <h2 style={h2}>Stability of Dentures</h2>
      <p style={body}>A frequent issue with dentures is their ability to remain in place during usage. Support refers to the denture's tendency to stay secure against the arch, and stability refers to the absence of excessive horizontal movement. Retention refers to the denture's resistance to vertical movement away from the arch.</p>

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
