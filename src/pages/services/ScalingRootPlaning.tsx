import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function ScalingRootPlaning() {
  return (
    <ContentPageLayout bannerImage="shutterstock_373732834.jpg" bannerAlt="Scaling And Root Planing">
      <h1 style={h1}>Scaling And Root Planing</h1>

      <p style={body}>Scaling and root planing is a treatment usually performed during the early stages of periodontal disease to help remove plaque and tartar that has built up beneath the gum line. This procedure is considered a deep cleaning, and may be performed to prevent the disease from progressing to a more advanced stage, or to improve the quality of a patient's tissue before surgery.</p>

      <h2 style={h2}>The Scaling and Root Planing Procedure</h2>
      <p style={body}>During the scaling part of the procedure, an instrument called a scaler is used to scrape away any plaque or tartar that has built up beneath the gums. Plaque often develops in pockets that form between the teeth and gums. As the disease progresses, these pockets grow, which may cause teeth to loosen and eventually fall out.</p>

      <p style={body}>After the scaler has removed the plaque and tartar, the treated area is rough and uneven. Root planing smooths the root of the tooth so that the gums can heal and reattach to the tooth properly. Anesthesia or sedation may be used during this procedure.</p>

      <p style={body}>There is little-or-no pain associated with this procedure, and patients can resume their regular activities immediately afterward.</p>

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
