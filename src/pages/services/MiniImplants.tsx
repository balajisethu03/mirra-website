import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function MiniImplants() {
  return (
    <ContentPageLayout bannerImage="shutterstock_1525010522.jpg" bannerAlt="Mini Implants">
      <h1 style={h1}>Mini Implants</h1>

      <p style={body}>A dental implant is an artificial tooth that is attached to a titanium rod implanted in the jawbone. A mini implant is essentially the rod without the tooth attached. It can serve as a long-term anchor for a crown, bridge or denture. A patient who would have needed a bone graft to be a candidate for a traditional implant may be able to receive a mini implant without the graft.</p>

      <h2 style={h2}>Benefits of Mini Implants</h2>
      <ul style={ul}>
        <li>Implantation procedure is much less invasive</li>
        <li>Less expensive than standard-sized dental implants</li>
        <li>Provide a good implant option for senior citizens</li>
      </ul>
      <p style={body}>Many patients use mini implants to replace small teeth and incisors, or teeth in narrow areas of the mouth. Mini implants work best as anchors for lower dentures, and are about half the price of regular implants.</p>

      <h2 style={h2}>The Mini Implant Procedure</h2>
      <p style={body}>Mini implants are titanium cylinders that act as a tooth root for a crown, bridge or denture. Regular implants require three to six months of osseointegration, the process in which the implant fuses with the bone. However, mini implants can be placed directly into the underlying bone, in one sitting, in a simple procedure that takes less than two hours. The procedure is performed under local anesthesia or light sedation.</p>

      <p style={body}>Most patients experience immediate results from mini implants and can often eat within a few hours. There are no sutures used during this procedure.</p>

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
