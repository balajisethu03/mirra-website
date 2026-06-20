import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function OralBiopsy() {
  return (
    <ContentPageLayout bannerImage="shutterstock_373732834.jpg" bannerAlt="Oral Biopsy">
      <h1 style={h1}>Oral Biopsy</h1>

      <p style={body}>When a growth or sore of questionable nature is detected in the mouth, a biopsy is often required. A biopsy is a diagnostic test involving the removal of a tissue sample for examination under a microscope to ascertain whether a malignancy or other disease process is present.</p>

      <h2 style={h2}>Reasons for Oral Biopsies</h2>
      <p style={body}>An oral biopsy is usually recommended when there is a question concerning the origin of an abnormal lesion. The aim of the oral biopsy is to define a lesion on the basis of the possible pathology of its cells. Oral biopsies may be required when an unexplained pigmented oral lesion has recently appeared or suddenly changed its appearance.</p>

      <h2 style={h2}>Types of Oral Biopsies</h2>

      <h3 style={h3}>Incisional Oral Biopsy</h3>
      <p style={body}>An incisional biopsy is performed to remove part of a larger mass to be sampled and screened. This will be used to determine if the mass is malignant or benign.</p>

      <h3 style={h3}>Excisional Oral Biopsy</h3>
      <p style={body}>An excisional biopsy is performed when the complete removal of a lesion is performed. This is done in cases where the lesion is small enough to remove completely and the sample obtained can still be examined under a microscope.</p>

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
