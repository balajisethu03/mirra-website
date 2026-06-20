import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }

export default function GeneralDentistry() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="General Dentistry">
      <h1 style={h1}>General Dentistry</h1>

      <p style={body}>Teeth are strong, durable structures that endure massive amounts of pressure each day. It is important to protect the teeth and keep them strong through daily brushing and flossing as well as regular professional care from a licensed and experienced general dentist.</p>

      <p style={body}>General dentistry involves the diagnosis, treatment and prevention of a wide range of dental conditions, as well as the maintenance of overall oral health for patients of all ages. This comprehensive care from a general dentist is usually the only source of care patients require for their dental needs. There are several different dental specialties, but general dentistry encompasses the basics of these specialties.</p>

      <h2 style={h2}>General Dentistry Specialties</h2>

      <h3 style={h3}>Restorative Dentistry</h3>
      <p style={body}>Many dental conditions damage the tooth causing aesthetic and functional changes that require special treatment. Restorative treatments can repair or replace teeth depending on the extent of their damage. Restorative procedures include:</p>
      <ul style={{ fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }}>
        <li>Fillings</li>
        <li>Dental crowns and bridges</li>
        <li>Dental implants</li>
        <li>Dental bonding</li>
        <li>Dentures</li>
        <li>Root canals</li>
      </ul>

      <h3 style={h3}>Cosmetic Dentistry</h3>
      <p style={body}>Many people seek cosmetic dental care after certain dental conditions or because of dissatisfaction with the appearance of their teeth. These procedures can improve the color, shape and size of the teeth and enhance the overall smile. Some of the most popular cosmetic dental treatments may include:</p>
      <ul style={{ fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }}>
        <li>Teeth whitening</li>
        <li>Porcelain veneers</li>
        <li>Bonding</li>
        <li>Full mouth reconstruction</li>
      </ul>

      <h3 style={h3}>Gum Disease Treatment</h3>
      <p style={body}>Periodontal disease, or gum disease, is a common dental condition that plagues many patients. Gum disease can be managed through treatments such as scaling and root planing, which can be performed by a general dentist. Surgery and other advanced treatments may be performed for later stages of the disease.</p>

      <p style={body}>While there are specialists for many of these dental treatments, a general dentist is able to perform most of these procedures. Regular visits to the dentist are recommended at least once every six months in order to maintain proper oral hygiene and screen for any potential problems. These dental treatments restore health and beauty to the smile.</p>

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
