import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function Gingivectomy() {
  return (
    <ContentPageLayout bannerImage="shutterstock_373732834.jpg" bannerAlt="Gingivectomy">
      <h1 style={h1}>Gingivectomy</h1>

      <p style={body}>A gingivectomy is a periodontal surgery performed to treat severe cases of gum disease, also known as periodontitis, that do not respond to antibiotics or root planing alone. This procedure is necessary when the gums have pulled away from the teeth, creating deep pockets.</p>

      <h2 style={h2}>The Gingivectomy Procedure</h2>
      <p style={body}>In preparation for a gingivectomy, a local anesthetic is applied to the gums. Usually a laser is then used to remove loose or diseased gum tissue, although a scalpel may also be used for this purpose. Once the gum tissue has been removed, a periodontal dressing is placed over the gums to protect them as they heal.</p>

      <h2 style={h2}>Risks of a Gingivectomy</h2>
      <p style={body}>The greatest risk of a gingivectomy is getting an infection either in the gums themselves or systemically. For patients who have conditions that put them at increased risk of infection, the doctor may prescribe antibiotics to be taken both before and after surgery. This group includes patients who have heart conditions, damaged immune systems, or who have undergone recent surgeries.</p>

      <h2 style={h2}>Recovery from a Gingivectomy</h2>
      <p style={body}>For a few days after treatment, patients may experience some temporary discomfort and swelling. Patients should rinse their mouth frequently with an antiseptic solution and follow all post-operative instructions carefully.</p>

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
