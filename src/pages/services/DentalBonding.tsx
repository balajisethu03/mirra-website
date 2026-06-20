import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function DentalBonding() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Dental Bonding">
      <h1 style={h1}>Dental Bonding</h1>

      <p style={body}>Dental bonding is a special procedure used to restore, reshape and rejuvenate teeth, improving both their function and appearance. Dentists apply a thin layer of tooth-colored plastic to the front of the tooth and sculpt it to perfect the patient's appearance. Dental bonding is used to repair chipped, cracked, broken, misshapen teeth or stained teeth or to fill in the spaces between teeth.</p>

      <h2 style={h2}>Dental Bonding Material</h2>
      <p style={body}>The dental bonding material is made of a composite resin, or plastic, that hardens and fuses to the tooth when the dentist shines a special light on it. Once in place, the bonding material is shaped to correct the specific defect, colored to match the patient's natural tooth and polished until it is smooth.</p>

      <h2 style={h2}>The Dental Bonding Process</h2>
      <p style={body}>Applying bonding to a patient's teeth requires a three-step process.</p>

      <h3 style={h3}>Step One</h3>
      <p style={body}>An etching solution is applied to the tooth or teeth to prepare them to receive the bonding material. This solution gently roughens the surface of the tooth for a stronger bond between the tooth and the plastic.</p>

      <h3 style={h3}>Step Two</h3>
      <p style={body}>A thin layer of the bonding resin is placed on the surface of the tooth and is sealed in place using a special light. Several layers of resin may be added and hardened in turn. Each layer takes only a few minutes to harden.</p>

      <h3 style={h3}>Step Three</h3>
      <p style={body}>The bonding material is sculpted to the desired shape and colored to match the shade of the natural teeth. Finally, the bonding material is polished until it is entirely smooth.</p>

      <p style={body}>The dental bonding procedure takes 1 to 2 hours, and its results may last for up to 10 years before any restoration is necessary.</p>

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
