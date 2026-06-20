import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function GumGrafting() {
  return (
    <ContentPageLayout bannerImage="shutterstock_373732834.jpg" bannerAlt="Gum Grafting">
      <h1 style={h1}>Gum Grafting</h1>

      <p style={body}>Gum grafting is a surgical procedure that helps protect the tooth roots and improve the appearance of the smile for patients who are self-conscious about receded gums caused by gingivitis. The gums help protect the mouth from bacteria and trauma while also covering the ends of the teeth for a pleasing smile.</p>

      <h2 style={h2}>The Gum Grafting Procedure</h2>
      <p style={body}>During the gum grafting procedure, tissue is usually taken from the roof of the mouth, to be placed in the receded area of the gum, and cover the exposed root. In some cases, the graft may be taken from a donor source if the patient does not have sufficient available tissue. The tissue graft is then attached to the natural gum and carefully sutured into place.</p>

      <h2 style={h2}>Results of Gum Grafting</h2>
      <p style={body}>A gum graft can reduce further recession and bone loss. It can also cover exposed roots to protect them from decay. This procedure can be performed on one or more teeth to help even out the gum line and reduce sensitivity of exposed roots to hot or cold foods.</p>

      <p style={body}>Most patients are very satisfied with the results of the procedure and enjoy a healthy and beautiful smile after treatment.</p>

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
