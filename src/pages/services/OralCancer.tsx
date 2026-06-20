import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function OralCancer() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Oral Cancer">
      <h1 style={h1}>Oral Cancer</h1>

      <p style={body}>More than 40,000 Americans are diagnosed with oral or pharyngeal (throat) cancer annually, resulting in almost 8,000 deaths. Awareness of the risk factors and early symptoms of oral cancer help to ensure patient health.</p>

      <h2 style={h2}>Risk Factors for Oral Cancer</h2>
      <p style={body}>Research shows strong links between tobacco use and oral cancer. At least 75 percent of those diagnosed with oral cancer have either smoked or chewed tobacco. Excessive alcohol usage is also a risk factor. Other risk factors include:</p>
      <ul style={ul}>
        <li>Prolonged exposure to sunlight</li>
        <li>Certain strains of human papilloma virus (HPV)</li>
        <li>Eating a diet deficient in fruits and vegetables</li>
        <li>Poor oral hygiene</li>
        <li>Ill-fitting dentures</li>
      </ul>

      <h2 style={h2}>Symptoms of Oral Cancer</h2>
      <ul style={ul}>
        <li>White or red patches of tissue in the mouth</li>
        <li>Small ulcers that may look like canker sores</li>
        <li>Lumps or masses inside the mouth or neck</li>
        <li>Hoarseness that lasts for a significant period</li>
        <li>Sores that do not heal within 14 days</li>
        <li>Pain or difficulty swallowing, speaking or chewing</li>
      </ul>

      <h2 style={h2}>Examinations for Oral Cancer</h2>
      <p style={body}>Part of a comprehensive dental examination is an examination of the lips, tongue, inner cheeks and upper and lower palates. The dentist looks for any abnormalities that may be symptomatic of oral cancer. Early detection is crucial for effective treatment.</p>

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
