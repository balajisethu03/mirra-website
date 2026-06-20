import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function OralHygiene() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Oral Hygiene">
      <h1 style={h1}>Oral Hygiene</h1>

      <p style={body}>Proper oral hygiene is essential for healthy teeth and gums. People older than 35 lose more teeth from gum disease than from cavities. The best way to prevent periodontal disease, as well as cavities, is through a regimen of thorough daily brushing and flossing.</p>

      <p style={body}>Most cases of periodontal disease develop because of bacterial plaque that builds up on the teeth. When plaque hardens, it causes tartar to form, which gradually destroys the tissues and bone that support the teeth.</p>

      <h2 style={h2}>Brushing Teeth Correctly</h2>
      <p style={body}>The outer surfaces of the teeth should be brushed using small, circular strokes that cover two to three teeth at a time. The toothbrush, which should have soft bristles, should be positioned at a 45-degree angle to the gum line.</p>

      <p style={body}>To effectively clean the front teeth, the brush should be placed in a vertical position and short strokes should be used. When brushing is complete, the mouth should be rinsed well to remove any food particles or plaque.</p>

      <h2 style={h2}>Flossing Teeth Correctly</h2>
      <p style={body}>Flossing is important for removing food particles and plaque from areas between the teeth and under the gum line that a toothbrush cannot reach. At least 18 inches of floss should be used so that a clean section is used between each pair of teeth.</p>

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
