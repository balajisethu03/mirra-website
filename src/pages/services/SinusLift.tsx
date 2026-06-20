import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function SinusLift() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Sinus Lift">
      <h1 style={h1}>Sinus Lift</h1>

      <p style={body}>A sinus lift is a surgical procedure that adds bone to the upper jaw to make room for dental implants. The bone is added between the jaw and the maxillary sinuses, which are located on both sides of the nose. A sinus lift is most often performed on patients who have lost teeth in the upper jaw, or who have lost bone from gum disease or tooth loss.</p>

      <h2 style={h2}>The Sinus Lift Procedure</h2>
      <p style={body}>During the sinus lift procedure, the sinus membrane is lifted to make room for the bone, which is taken from another part of the patient's body or from a cadaver. The surgeon first cuts the gum tissue to expose the bone, and then opens up an area through the bone to separate the sinus membrane from the jaw. The bone graft is then placed into the space where the sinus was, and the area is stitched shut. Dental implants are placed four to nine months later, which gives the bone graft time to mesh with the bone.</p>

      <h2 style={h2}>Recovery from a Sinus Lift</h2>
      <p style={body}>After the sinus lift procedure, patients may experience swelling and bleeding, and should avoid forceful sneezing or nose-blowing. Stitches are removed after seven to ten days, and several follow-up visits are required to make sure the area is healing properly.</p>

      <h2 style={h2}>Risks of a Sinus Lift</h2>
      <p style={body}>Although a sinus lift is considered safe for most patients, there are certain risks associated with any kind of procedure. Some of these risks may include puncturing or tearing of the sinus membrane, infection, or failure of the bone graft to integrate with the patient's bone.</p>

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
