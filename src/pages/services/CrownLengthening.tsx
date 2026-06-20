import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function CrownLengthening() {
  return (
    <ContentPageLayout bannerImage="shutterstock_373732834.jpg" bannerAlt="Crown Lengthening">
      <h1 style={h1}>Crown Lengthening</h1>

      <p style={body}>Crown lengthening, also known as crown exposure, is a surgical procedure performed when there is not enough exposed tooth structure to place a restoration on the tooth. This procedure removes gum tissue and/or bone to expose more of the tooth, allowing a crown or filling to be put in place.</p>

      <h2 style={h2}>The Crown Lengthening Procedure</h2>
      <p style={body}>The crown lengthening procedure is performed under local anesthesia and takes about an hour to perform. During the procedure, the periodontist will make incisions in the gums to create a flap, which will allow access to the tooth root and surrounding bone. Gum tissue may then be removed to reveal enough of the tooth structure, although some cases may require bone removal as well.</p>

      <h2 style={h2}>Recovery after Crown Lengthening</h2>
      <p style={body}>After the crown lengthening procedure, the treated area will be sutured and dressed in a protective bandage to promote proper healing. It is recommended that patients apply ice to the region to reduce swelling and minimize discomfort. Patients are required to return to the periodontist's office 1 to 2 weeks after the procedure to have sutures removed.</p>

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
