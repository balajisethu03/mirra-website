import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function OsseousSurgery() {
  return (
    <ContentPageLayout bannerImage="shutterstock_373732834.jpg" bannerAlt="Osseous Surgery">
      <h1 style={h1}>Osseous Surgery</h1>

      <p style={body}>Osseous surgery is a dental procedure that repairs damaged bone in patients with periodontal (gum) disease. Patients with gum disease often develop holes in the bone around the teeth. These holes can cause teeth to loosen and, eventually, fall out.</p>

      <p style={body}>This procedure reshapes the damaged bone in order to hold the teeth in place and prevent them from falling out. During osseous surgery, a periodontist numbs the target area with a local anesthetic, and then cuts into the gum to access the underlying bone. The bone is then reshaped using a drill and other surgical tools. Some bone may be removed, or added from a graft. The gum tissue is then placed back onto the bone and sutured.</p>

      <p style={body}>After osseous surgery, patients may experience mild swelling and pain, which can be managed by applying ice and taking pain medication as needed. A follow-up visit will be necessary after seven to ten days.</p>

      <p style={body}>To prevent future damage and keep the mouth healthy, practicing proper dental hygiene is essential.</p>

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
