import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function ConeBeamCT() {
  return (
    <ContentPageLayout bannerImage="shutterstock_496966087.jpg" bannerAlt="Cone Beam CT Scan Imaging">
      <h1 style={h1}>Cone Beam CT Scan Imaging</h1>

      <p style={body}>Radiology is an important tool in diagnosing and assessing dental abnormalities in patients. It is especially helpful in treating patients with problems in the dentomaxillofacial region. Cone Beam CT Scan Imaging, also known as CBCT, is considered an important innovation in dental X-ray diagnostics, particularly for dentomaxillofacial surgery. Unlike regular X-rays, CBCT scans can differentiate among many types of tissue including bone, teeth and nerves.</p>

      <h2 style={h2}>Benefits of CBCT</h2>
      <p style={body}>CBCT has several advantages over traditional scanning which include the following:</p>
      <p style={body}>High Resolution and 3-D imaging – This enables subtle structures like root canals or the periodontal ligament to be clearly displayed. Lower Radiation Exposure – CBCT uses significantly lower radiation than traditional CT scans. Duplicate Imaging – CBCT provides images of both bone and soft tissue at the same time.</p>

      <h2 style={h2}>CBCT Applications</h2>
      <p style={body}>Cone Beam CT Scanning is commonly used in surgical planning for displaced or impacted teeth and for pre- and post-operative imaging for surgery. CBCT is also effective in diagnosing or assisting in the treatment of the following:</p>
      <ul style={ul}>
        <li>Dental implant placement</li>
        <li>Cleft-palate malformations</li>
        <li>Bone and tooth fractures</li>
        <li>Maxillary sinus examination</li>
        <li>Diagnosis of jaw conditions such as temporomandibular joint disorder, or TMJ</li>
        <li>Detection, measurement and treatment of jaw tumors</li>
        <li>Location of the origin of pain</li>
      </ul>
      <p style={body}>CBCT is an effective tool in assisting dentists with various diagnosis and treatments. Depending on a patient's particular condition, a dentist will decide whether the use of a CBCT is appropriate.</p>

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
