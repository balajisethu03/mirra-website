import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function CosmeticGumSurgery() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Cosmetic Gum Surgery">
      <h1 style={h1}>Cosmetic Gum Surgery</h1>

      <p style={body}>As cosmetic surgery has become more mainstream, patients are seeking surgical options that will help them achieve their physical and aesthetic goals. Many people who are unhappy with their gums and the way their gums affect their smile, may choose to have cosmetic gum surgery to improve their appearance.</p>

      <h2 style={h2}>Benefits of Cosmetic Gum Surgery</h2>
      <p style={body}>Cosmetic gum surgery may be performed for some of the following reasons:</p>
      <ul style={ul}>
        <li>To cover unsightly gums or exposed root surfaces</li>
        <li>To improve the appearance of teeth that look too long</li>
        <li>To improve gum health</li>
        <li>To reduce the risk of root decay</li>
      </ul>

      <h2 style={h2}>Types of Gum Surgery</h2>
      <p style={body}>There are several different cosmetic gum surgeries available to help patients achieve the smile they desire.</p>

      <h3 style={h3}>Gingival Lift</h3>
      <p style={body}>A gingival lift, also known as a gum lift or gum contouring, is a cosmetic dental procedure designed to reduce and reshape highly visible gums. For patients who have always been bothered by having a gummy smile, this treatment can correct the problem and offer an aesthetic improvement.</p>
      <p style={body}>Lasers are the safest, most effective way to perform a gingival lift. Laser precision allows the dentist to reshape the gums to create better symmetry in the smile while cutting back on excess gum tissue.</p>

      <h3 style={h3}>Gum Grafting</h3>
      <p style={body}>Gum grafting is a surgical procedure that helps protect the tooth roots and improve the appearance of the smile for patients who are self-conscious about receded gums caused by gingivitis.</p>

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
