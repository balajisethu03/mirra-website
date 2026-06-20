import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }

export default function PreventiveDentistry() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Preventive Dentistry">
      <h1 style={h1}>Preventive Dentistry</h1>

      <p style={body}>Preventive dentistry helps patients avoid the costly and invasive procedures often needed to treat serious dental conditions. Maintaining dental health helps patients look and feel their best, and can have a positive effect on their overall health.</p>

      <p style={body}>Preventing dental problems requires a lifelong commitment. To begin developing proper dental-hygiene habits, a child should visit a dentist shortly after the first teeth emerge. Parents also play an important role in helping their children develop and maintain good dental-hygiene habits.</p>

      <h2 style={h2}>Regular Cleanings</h2>
      <p style={body}>Comprehensive dental exams and cleanings are recommended once every six months. These exams help identify tooth decay, or early signs of gum disease or oral cancer, through diagnostic X-rays and a physical examination. Early detection of these conditions helps ensure effective treatment and prevent permanent damage.</p>
      <p style={body}>Regular cleanings by a certified dental hygienist help keep teeth clean and healthy. A dental cleaning includes removal of tartar and plaque, which can build up and cause inflammation and disease if left untreated. The teeth are also polished to remove stains that often cannot be removed by at-home toothbrushing.</p>

      <h2 style={h2}>At-Home Dental Hygiene</h2>
      <p style={body}>To maintain healthy teeth and gums, patients should brush their teeth at least twice a day; brushing before going to bed at night is essential. The American Dental Association recommends brushing with toothpaste and a soft-bristled toothbrush for at least two minutes. Every tooth should be gone over thoroughly.</p>
      <p style={body}>Flossing at least once each day to clean the spaces between the teeth and under the gums is also recommended. In addition, using over-the-counter mouthwash can freshen breath and help protect the mouth from disease.</p>
      <p style={body}>Eating balanced meals and fewer sugary snacks can also help improve dental hygiene. Other home dental aids are available to help keep teeth as healthy as possible in-between visits to the dentist.</p>

      <h2 style={h2}>Dental Sealants</h2>
      <p style={body}>Dental sealants are thin, plastic coatings that are applied to the surfaces of teeth to protect the grooves of the teeth from decay and other diseases. Decay often begins in these grooves because they are hard to clean, and susceptible to a buildup of plaque. Sealants create a smooth surface that fills deep grooves and makes teeth easier to clean.</p>
      <p style={body}>Sealants are applied to children's teeth once the six-year molars surface, or anytime between the ages of 6 and 16. Adults may also benefit from sealants, especially when the surfaces of their teeth have deep grooves or depressions that may be difficult to clean.</p>

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
