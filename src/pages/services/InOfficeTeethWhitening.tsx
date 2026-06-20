import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }
const ul: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }

export default function InOfficeTeethWhitening() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="In-Office Teeth Whitening">
      <h1 style={h1}>In-Office Teeth Whitening</h1>

      <p style={body}>In-office teeth whitening is a whitening procedure that is performed in a dentist's office. It can make a patient's teeth up to five to seven shades brighter. Dental offices use different methods of bleaching or whitening to achieve the shade preferred by the patient.</p>

      <p style={body}>Whitening products can brighten teeth that may have been stained or darkened by food, tobacco, injury or aging.</p>

      <h2 style={h2}>Advantages of In-Office Teeth Whitening</h2>
      <p style={body}>Over-the-counter tooth-whitening kits are less expensive than in-office treatments. However, there are advantages that in-office teeth-whitening procedures have over take-home whitening products:</p>
      <ul style={ul}>
        <li>Professional supervision</li>
        <li>Faster results</li>
        <li>Longer-lasting results</li>
        <li>Fewer sensitivity issues</li>
      </ul>

      <h2 style={h2}>In-Office Teeth Whitening Procedures</h2>

      <h3 style={h3}>Professionally Applied Tooth Whitening Products</h3>
      <p style={body}>These products are applied at a dentist's office, and have a higher concentration of hydrogen peroxide, a whitening agent.</p>

      <h3 style={h3}>Laser or Light Treatment</h3>
      <p style={body}>Whitening solution is applied to the teeth and used in combination with a special light or laser. Results can usually be seen after one session.</p>

      <h3 style={h3}>Custom Mouth Tray</h3>
      <p style={body}>A custom mouthpiece or tray is created by the dentist, and a peroxide-based whitening solution is given to the patient to use at home with the mouthpiece or tray.</p>

      <p style={body}>Whitening procedures are effective but their results are not permanent. Patients are advised to avoid foods and beverages that stain to maintain results.</p>

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
