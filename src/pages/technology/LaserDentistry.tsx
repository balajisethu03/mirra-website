import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function LaserDentistry() {
  return (
    <ContentPageLayout bannerImage="shutterstock_496966087.jpg" bannerAlt="Laser Dentistry">
      <h1 style={h1}>Laser Dentistry</h1>

      <p style={body}>In laser dentistry, dental procedures are performed using lasers. The use of lasers allows many dental procedures to be performed with great precision, few complications and very little pain. Lasers are versatile tools that can be used in the following dental procedures:</p>
      <ul style={ul}>
        <li>Cavity detection</li>
        <li>Tartar removal</li>
        <li>Dental fillings</li>
        <li>Gum surgery</li>
        <li>Dental implants</li>
        <li>Teeth whitening</li>
        <li>Removal of benign tumors</li>
      </ul>

      <h2 style={h2}>Benefits of Laser Dentistry</h2>
      <p style={body}>Benefits of laser dentistry over traditional dentistry may include:</p>
      <ul style={ul}>
        <li>Minimal or no need for anesthetic</li>
        <li>Little or no bleeding</li>
        <li>Faster treatment time</li>
        <li>Reduction in bacterial infections</li>
        <li>Less post-operative pain and swelling</li>
        <li>Less damage to surrounding tissue</li>
        <li>Reduced need for medications or antibiotics after treatment</li>
      </ul>

      <h2 style={h2}>Types of Lasers Used in Laser Dentistry</h2>
      <p style={body}>Different types of lasers are used for different dental treatments. The two most common types of lasers used by dentists are:</p>

      <h3 style={h3}>Hard-tissue lasers</h3>
      <p style={body}>Hard-tissue lasers are used to cut into teeth and bone with great accuracy. They are often used to shape teeth for composite bonding, remove small amounts of tooth material, and repair dental fillings.</p>

      <h3 style={h3}>Soft-tissue lasers</h3>
      <p style={body}>Soft-tissue lasers are able to kill bacteria and activate the regrowth of tissues. They are commonly used by periodontists in procedures for treatment of the gums.</p>

      <p style={body}>Many patients find that laser dentistry is preferable to traditional dentistry. Pain and swelling are greatly reduced; the laser beam's accuracy means that damage to surrounding tissue is minimized; and several procedures can be performed during a single appointment, resulting in fewer dental visits.</p>

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
