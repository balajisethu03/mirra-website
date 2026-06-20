import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function Bruxism() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Bruxism">
      <h1 style={h1}>Bruxism</h1>

      <p style={body}>Bruxism is a disorder in which the patient grinds, gnashes or clenches their teeth. Although some individuals may experience bruxism during the day, it most frequently occurs during sleep. Occasional teeth grinding is not harmful but when bruxism occurs often, the teeth can be damaged and other oral complications may occur.</p>

      <h2 style={h2}>Risk Factors for Bruxism</h2>
      <p style={body}>There is no specific known cause for bruxism. Individuals are more at risk for the disorder if they:</p>
      <ul style={ul}>
        <li>Have certain abnormalities of the jaw</li>
        <li>Are stressed or anxious</li>
        <li>Have other sleep disorders</li>
        <li>Have missing, crooked, or misaligned teeth</li>
        <li>Drink alcohol to excess</li>
        <li>Smoke or drink caffeinated beverages</li>
      </ul>

      <h2 style={h2}>Symptoms of Bruxism</h2>
      <p style={body}>Over time bruxism can wear down enamel, chip, and even fracture or loosen teeth. Apart from a sleep partner reporting the sound of teeth grinding or clenching, the patient may become aware of the condition because they experience:</p>
      <ul style={ul}>
        <li>Facial or jaw pain</li>
        <li>Tight or fatigued jaw muscles</li>
        <li>Ear pain</li>
        <li>Headache</li>
        <li>Worn tooth surfaces</li>
      </ul>

      <h2 style={h2}>Treatment of Bruxism</h2>
      <p style={body}>Treatment of bruxism focuses on preventing further damage. A dentist may recommend a custom-fitted mouth guard worn during sleep to protect the teeth from grinding. Relaxation techniques, stress management, and behavioral therapy may also be helpful. In some cases, medication may be prescribed to relax the jaw muscles.</p>

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
