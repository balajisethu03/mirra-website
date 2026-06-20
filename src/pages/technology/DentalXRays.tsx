import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function DentalXRays() {
  return (
    <ContentPageLayout bannerImage="shutterstock_496966087.jpg" bannerAlt="Dental X-Rays">
      <h1 style={h1}>Dental X-rays</h1>

      <p style={body}>Dental X-rays are a vital part of a dental examination. There are two main types of dental X-rays: those taken with the X-ray film inside the mouth (intraoral) and those taken with the X-ray film outside the mouth (extraoral). Intraoral X-rays are the ones most commonly used. They provide detailed evidence of the growth of developing teeth, the health of tooth roots and surrounding bone, including the jaw. They also help the dentist zero in on any cavities. Extraoral X-rays, while they also show the teeth, primarily focus on the jaw and skull. They are therefore more helpful in diagnosing malocclusions, impacted teeth, and possible temporomandibular joint disorders (TMD).</p>

      <h2 style={h2}>Types of Intraoral X-Rays</h2>
      <p style={body}>There are three types of intraoral X-rays. Each type helps the dentist visualize a different aspect of the tooth.</p>

      <h3 style={h3}>Bite-wing X-rays</h3>
      <p style={body}>Bite-wing X-rays, named for the fact that the patient bites down on the film, provide details of both the upper and lower teeth in one section of the mouth. Since each one visualizes an entire tooth, bite-wings are used to evaluate changes in bone density that may result from gum disease and to detect decay.</p>

      <h3 style={h3}>Periapical X-rays</h3>
      <p style={body}>Periapical X-rays focus on fewer teeth, but show each entire tooth, from the crown to the root. They include images of any abnormalities of the root or surrounding jaw bone.</p>

      <h3 style={h3}>Occlusal X-rays</h3>
      <p style={body}>Occlusal X-rays are larger than most other X-rays, and are most often used to track tooth development and location in children. Because these X-rays show the entire arch of the upper or lower teeth in the jaw, they help the dentist to evaluate possible bite problems.</p>

      <h2 style={h2}>Types of Extraoral X-Rays</h2>
      <p style={body}>There are many types of extraoral X-rays. Each has a somewhat different purpose.</p>

      <h3 style={h3}>Panoramic X-rays</h3>
      <p style={body}>These X-rays take images of the whole mouth at once, showing all the teeth in both jaws on a single film. They are used to examine the progress of developing teeth and may detect a range of problems including emerging tumors, jaw disorders, and bone abnormalities.</p>

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
