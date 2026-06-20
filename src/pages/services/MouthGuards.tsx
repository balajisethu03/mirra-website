import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function MouthGuards() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Mouth Guards">
      <h1 style={h1}>Mouth Guards</h1>

      <p style={body}>Mouth guards are customized devices worn over the teeth to protect them from injury. Unlike dental splints, which are orthodontic devices used to treat conditions such as teeth-grinding (bruxism), mouth guards are used primarily to protect the teeth and braces during athletic or recreational activities. Effective mouth guards should be comfortable, durable, easy to clean, and allow the wearer to breathe and speak normally.</p>

      <h2 style={h2}>Reasons for Mouth Guards</h2>
      <p style={body}>Any individual, child or adult, who engages in contact sports, such as football, hockey, boxing or lacrosse, or participates in any activity in which the mouth is vulnerable to injury, such as bicycling or skateboarding, is advised to wear a mouth guard.</p>

      <p style={body}>The reason for wearing a mouth guard during such activities is to diminish the risk to the teeth, tongue, jaw, gums, and nerves of the area. Without a mouth guard, anyone who is physically active runs increased risk of chipping, breaking or losing a tooth.</p>

      <h2 style={h2}>Benefits of Custom-Made Mouth Guards</h2>
      <p style={body}>While over-the-counter mouth guards are available, they are no substitute for individually designed, custom-made mouth guards manufactured in a dental office or professional laboratory. Personalized mouth guards, produced to protect the patient's particular bite, are well worth the extra cost. Because they fit the patient precisely, they leave less room for damage to teeth and gum tissue.</p>

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
