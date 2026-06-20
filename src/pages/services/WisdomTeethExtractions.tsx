import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }

export default function WisdomTeethExtractions() {
  return (
    <ContentPageLayout bannerImage="shutterstock_1193897125.jpg" bannerAlt="Wisdom Teeth Extractions">
      <h1 style={h1}>Wisdom Teeth Extractions</h1>

      <p style={body}>The wisdom teeth, also known as the third molars, develop during early adulthood, most often between the ages of 15 and 25. Most mouths are too small to support these additional molars, making an extraction procedure necessary. If not removed, the wisdom teeth may cause pain, infection and swelling of the face or gum line, as well as the development of cysts and tumors.</p>

      <h2 style={h2}>The Wisdom Teeth Extraction Procedure</h2>
      <p style={body}>Before the wisdom tooth extraction, the dentist will administer local anesthesia. If several or all of the wisdom teeth will be removed simultaneously, a general anesthetic may be used.</p>
      <p style={body}>After the anesthetic is administered, the gum tissue over the tooth will be opened to remove any bone that covers the tooth. The connecting tissue is then separated so that the entire tooth can be removed. The area is sutured closed and covered with gauze to control bleeding.</p>

      <h2 style={h2}>Recovery from Wisdom Teeth Extraction</h2>
      <p style={body}>After surgery, patients will be prescribed painkillers to speed up the recovery process and reduce pain. Patients should eat only soft foods and liquids for the first few days and gently rinse their mouth with warm salt water to relieve swelling and pain. Stitches, if needed, are removed within a few days.</p>

      <h2 style={h2}>Complications of Wisdom Teeth Extraction</h2>
      <p style={body}>If the post operative instructions received from the dentist are not followed, patients may increase the risk of:</p>
      <ul style={{ fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }}>
        <li>Prolonged pain and swelling</li>
        <li>Dry socket</li>
        <li>Numbness</li>
        <li>Damage to existing dental work</li>
        <li>Pain when opening the jaw</li>
      </ul>
      <p style={body}>These side effects can be serious and may require additional treatment.</p>
      <p style={body}>In general, wisdom teeth extraction is considered safe and beneficial for most patients.</p>

      <h2 style={h2}>Additional Resources</h2>
      <ul style={{ fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }}>
        <li>MedlinePlus</li>
        <li>National Institutes of Health</li>
        <li>Centers for Disease Control and Prevention</li>
        <li>U.S. Department of Health &amp; Human Services</li>
        <li>WebMD</li>
      </ul>
    </ContentPageLayout>
  )
}
