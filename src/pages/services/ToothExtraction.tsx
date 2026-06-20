import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function ToothExtraction() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Tooth Extraction">
      <h1 style={h1}>Tooth Extraction</h1>

      <p style={body}>A tooth extraction, also known as exodontia, is one of the most common procedures performed at a dentist's office. The procedure involves removing or pulling a tooth. An extraction may be necessary if there is disease, trauma or overcrowding.</p>

      <h2 style={h2}>Causes for Tooth Extraction</h2>
      <ul style={ul}>
        <li>Wisdom teeth</li>
        <li>Decayed teeth</li>
        <li>Broken teeth</li>
        <li>Overcrowding</li>
        <li>Loose teeth</li>
        <li>In preparation for braces</li>
      </ul>

      <h2 style={h2}>Tooth Extraction Procedure</h2>
      <p style={body}>After the dentist has decided that a tooth extraction is necessary, an X-ray will be used to further evaluate the tooth. The extraction procedure may be performed under local anesthesia to minimize discomfort, or general anesthesia if more than one tooth is removed. There are two types of dental extractions:</p>

      <h3 style={h3}>Simple Extraction</h3>
      <p style={body}>This is an extraction of a tooth that can be seen in the mouth. In a simple extraction, forceps are used to remove the tooth.</p>

      <h3 style={h3}>Surgical Extraction</h3>
      <p style={body}>A surgical extraction is performed on teeth that have broken at the gum line or have not descended into the mouth. It is a more complex extraction procedure that may be performed by an oral surgeon.</p>

      <h2 style={h2}>Recovery from a Tooth Extraction</h2>
      <p style={body}>After the extraction, patients may experience a certain amount of pain. The pain may be relieved by applying ice to the external area if swelling occurs, rinsing with warm salt water, and taking anti-inflammatory medication.</p>

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
