import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }

export default function SedationDentistry() {
  return (
    <ContentPageLayout bannerImage="shutterstock_1252293703.jpg" bannerAlt="Sedation Dentistry">
      <h1 style={h1}>Sedation Dentistry</h1>

      <p style={body}>A great many people experience anxiety in relation to undergoing dental work or to visiting the dentist at all, a fear known as dental phobia. Unfortunately, such fear keeps too many individuals from getting regular dental care, compromising not only their dental health and appearance, but often their overall health as well. In almost every case of dental phobia, sedation dentistry, in which the patient's anxiety is totally relieved by the use of medication, is the solution.</p>

      <h2 style={h2}>Reasons for Sedation Dentistry</h2>
      <p style={body}>In addition to being very helpful to patients who experience dental phobia, sedation dentistry is useful for patients who:</p>
      <ul style={{ fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }}>
        <li>Gag easily</li>
        <li>Have difficulty sitting still</li>
        <li>Have sensitive teeth or gums</li>
        <li>Require a large amount of dental work</li>
        <li>Have a low threshold for pain</li>
      </ul>

      <h2 style={h2}>Levels of Sedation</h2>
      <p style={body}>The point of sedation dentistry is to provide peace of mind to the patient undergoing treatment. In most cases, it does not involve anesthesia, but simply puts the patient into a very relaxed state. Because in most cases the patient is still awake to a degree, a local anesthetic must still be employed to deaden any anticipated pain.</p>

      <p style={body}>Sedation for dental patients may be administered in a number of ways, depending on the procedure being performed and on the physical and emotional needs of the patient.</p>

      <h3 style={h3}>Inhaled Minimal Sedation</h3>
      <p style={body}>One way of administering sedation is by having the patient breathe in nitrous oxide ("laughing gas") through a mask placed over the nose. Although the nitrous oxide will definitely put the patient into a relaxed state, the gas wears off quickly. For this reason, adult patients who have been treated with nitrous oxide are able to drive themselves home from the procedure.</p>

      <h3 style={h3}>Oral Sedation</h3>
      <p style={body}>Oral sedation is the most common type used in sedation dentistry. It ranges from minimal to moderate and is administered in pill form. When only minimal sedation is required, the patient is usually given a Halcion tablet, a medication similar to Valium, which takes full effect in approximately one hour. Once the pill takes effect, the patient becomes drowsy, but is still awake.</p>

      <h3 style={h3}>IV Sedation</h3>
      <p style={body}>IV moderate sedation works more quickly than the other methods. The sedative drug is delivered through a vein, and the dentist has the ability to continually adjust the level of sedation. IV sedation is typically used for longer procedures or for patients with severe dental anxiety.</p>

      <h3 style={h3}>Deep Sedation and General Anesthesia</h3>
      <p style={body}>With deep sedation, the patient will be on the edge of consciousness but can still be awakened. When under general anesthesia, the patient is completely unconscious. General anesthesia is used for longer surgical procedures and patients with extensive treatment needs.</p>
    </ContentPageLayout>
  )
}
