import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }

export default function CosmeticDentistry() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Cosmetic Dentistry">
      <h1 style={h1}>Cosmetic Dentistry</h1>

      <p style={body}>Cosmetic dentistry encompasses not only the health of the teeth, but also their aesthetic value. Various products and procedures exist within cosmetic dentistry with the goal of improving both the well-being and visual beauty of the teeth, giving the individual a higher level of self-confidence.</p>

      <p style={body}>Services provided by a cosmetic dentist include the following:</p>
      <ul style={{ fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }}>
        <li>Tooth bleaching</li>
        <li>Porcelain veneers</li>
        <li>Tooth-colored fillings</li>
        <li>Dental implants</li>
        <li>Dentures</li>
      </ul>

      <h2 style={h2}>Tooth Whitening</h2>
      <p style={body}>Tooth bleaching, also known as tooth whitening, has become so advanced and widespread that certain dental companies have marketed their own form of at-home tooth whitening products. While there is some merit to these home bleaching kits, there is nothing that compares to having a professional, nationally board-certified dentist perform this procedure on your teeth. When performed by a professional, the entire whitening process is abbreviated and can be completed in only a few short visits, compared to weeks of at-home treatment.</p>

      <h2 style={h2}>Veneers</h2>
      <p style={body}>Porcelain and composite veneers are effective aesthetic cover-ups for damaged or stained teeth. Although some veneers are designed to be removable, most are permanent and are bonded very tightly to the teeth they are protecting. Advancements in technology have improved the bonding agents to the extent that it is quite common for veneers to remain functional for 10 years or more.</p>

      <h2 style={h2}>Fillings</h2>
      <p style={body}>Cavities are painful and unsightly holes in the teeth that must be filled with inert material. Contemporary fillings, called dental composite resin, are much closer in hue to the natural color of teeth. This allows the tooth to be protected but still look untouched.</p>

      <h2 style={h2}>Dental Implants</h2>
      <p style={body}>A dental implant is an artificial tooth replacement designed to fill the void created by a missing tooth. There are many types of dental implants, ranging from individual crowns to large scale dentures. A cosmetic dentist can ensure that not only will the most comfortable replacement be found, but it will be implanted in the most accurate and aesthetic manner possible.</p>

      <p style={body}>There are numerous options available to improve the overall health and appearance of the teeth and smile. Patients should consult with their dentists to decide which option best suits their specific needs and will most effectively meet their expectations.</p>

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
