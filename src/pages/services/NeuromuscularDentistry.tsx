import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }

export default function NeuromuscularDentistry() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Neuromuscular Dentistry">
      <h1 style={h1}>Neuromuscular Dentistry</h1>

      <p style={body}>Neuromuscular dentistry is an area of dentistry that focuses not only on the teeth as they relate to the jaw, but on the nerves, muscles and joints as they relate to the jaw. By combining the principles of anatomy and physiology, neuromuscular dentistry works to achieve an optimal bite (occlusion) and jaw alignment. Neuromuscular dentists examine how all parts of the mouth and jaw work together.</p>

      <p style={body}>The objective of a neuromuscular dentist is to relax the jaw muscles in order to identify the true resting position of the jaw. They focus on determining the optimal position of the jaw in order to correct misalignment and jaw disorders.</p>

      <p style={body}>Evaluating the status of muscles and joints provides neuromuscular dentists with additional factors to consider before determining treatment. The goal of neuromuscular dentistry is to look at the whole picture by assessing the teeth, muscles and temporomandibular joints, and how they function together.</p>

      <h2 style={h2}>Neuromuscular Dentistry Treatments</h2>

      <h3 style={h3}>Bite Abnormalities</h3>
      <p style={body}>To correct bite abnormalities, neuromuscular dentists design long-term treatment plans that are focused on allowing the jaws to be optimally positioned. Some methods of treatment include custom dental splints, orthodontic devices or dental restorations.</p>

      <h3 style={h3}>Temporomandibular Joint Dysfunction</h3>
      <p style={body}>Neuromuscular dentistry is particularly effective in treating temporomandibular joint dysfunction (TMD), which can cause symptoms such as facial or jaw pain, headaches, earaches, clicking sounds in the jaw joint, and dizziness. Some neuromuscular dentists use ultralow-frequency transcutaneous electrical neural stimulation (ULF-TENS) to treat muscle pain and spasms associated with TMD. This treatment involves the use of mild electrical stimulation to contract and relax jaw muscles.</p>

      <p style={body}>A neuromuscular dentist will devise a customized treatment plan for the patient after a full examination of the teeth, bite and jaw.</p>

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
