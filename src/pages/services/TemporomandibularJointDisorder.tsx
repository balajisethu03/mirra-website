import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function TemporomandibularJointDisorder() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Temporomandibular Joint Disorder">
      <h1 style={h1}>Temporomandibular Joint Disorder</h1>

      <p style={body}>Temporomandibular joint disorder (TMD) refers to a group of related disorders that result from problems with the jaw or jaw joint, or the facial muscles involved in jaw movement. The temporomandibular joint (TMJ) is the small joint located in front of the ear where the skull and lower jaw meet; it enables the jaw to move and function normally.</p>

      <h2 style={h2}>Types of Temporomandibular Joint Disorder</h2>
      <p style={body}>TMDs are usually categorized in one of three ways.</p>

      <h3 style={h3}>Muscle Disorders</h3>
      <p style={body}>Muscle disorders cause pain and discomfort (myofacial pain) in the muscles surrounding the jaw joint, and in the muscles of the shoulder and neck. This is the most common type of TMD.</p>

      <h3 style={h3}>Joint-Derangement Disorders</h3>
      <p style={body}>Joint-derangement disorders are structural, as opposed to muscular, conditions. They can be caused by injury to the lower jaw; wear on the joint, such as from bruxism; severe malocclusion; or the dislocation or displacement of the articular disc.</p>

      <h3 style={h3}>Degenerative/Inflammatory Joint Disorders</h3>
      <p style={body}>The overuse or aging of the joint can cause degeneration and/or inflammation. This may be a result of osteoarthritis, rheumatoid arthritis or a perforated TMJ disc.</p>

      <h2 style={h2}>Causes of TMD</h2>
      <p style={body}>What causes TMD is not clear, but symptoms are believed to develop from problems with the jaw muscles or with the joint itself. TMD may be the result of many factors, including:</p>
      <ul style={ul}>
        <li>Trauma to the head or neck</li>
        <li>Clenching or grinding of the teeth</li>
        <li>Bad "bite" or missing teeth</li>
        <li>Arthritis in the joint</li>
      </ul>

      <h2 style={h2}>Treatment</h2>
      <p style={body}>Treatments for TMD include self-care practices, bite guards, physical therapy, and in severe cases, surgery. A neuromuscular dentist will devise a customized treatment plan after a full examination.</p>

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
