import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function GumDisease() {
  return (
    <ContentPageLayout bannerImage="shutterstock_373732834.jpg" bannerAlt="Gum Disease">
      <h1 style={h1}>Gum Disease</h1>

      <p style={body}>Gum disease, also known as periodontal disease, is caused by a build-up of plaque and bacteria between the teeth and gums. When left untreated, the gums become infected and if gum disease progresses, it becomes increasingly difficult and painful to treat.</p>

      <h2 style={h2}>Symptoms of Gum Disease</h2>
      <ul style={ul}>
        <li>Swollen and sore gums</li>
        <li>Red or inflamed gums</li>
        <li>Gums that bleed easily</li>
        <li>Gums that recede from the teeth</li>
        <li>Loose teeth</li>
        <li>Chronic bad breath</li>
        <li>Pain when chewing</li>
      </ul>

      <h2 style={h2}>Causes and Stages of Gum Disease</h2>

      <h3 style={h3}>Gingivitis</h3>
      <p style={body}>Gingivitis is the first stage of gum disease. At this stage the gums may be swollen, red and inflamed and may bleed easily. Gingivitis can usually be easily treated by a thorough cleaning by a dentist to remove plaque.</p>

      <h3 style={h3}>Periodontitis</h3>
      <p style={body}>If left untreated, gingivitis transitions into periodontitis which is a more serious stage of gum disease. At this stage, the gums are extremely inflamed and start to pull away from the teeth. Teeth may begin to loosen due to bones and ligaments breaking down.</p>

      <h2 style={h2}>Treatment of Gum Disease</h2>

      <h3 style={h3}>Scaling and Root Planing</h3>
      <p style={body}>A deep-cleaning method that removes bacteria from below the gum line and the tooth root. The roots of the teeth are smoothed and cleaned.</p>

      <h3 style={h3}>Surgical Treatment</h3>
      <p style={body}>For more advanced cases, surgical treatment such as flap surgery, bone grafts, or tissue grafts may be required.</p>

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
