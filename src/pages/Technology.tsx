import ContentPageLayout from '../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 0, marginBottom: 16 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 20 }

export default function Technology() {
  return (
    <ContentPageLayout bannerImage="shutterstock_496966087.jpg" bannerAlt="Dental Technology">
      <h1 style={h1}>Technology</h1>

      <h2 style={h2}>Cone Beam CT Scan Imaging</h2>
      <p style={body}>
        Cone Beam CT (CBCT) is a specialized type of x-ray technology used when regular dental or facial x-rays are not sufficient. CBCT is used to produce three dimensional (3D) images of your teeth, soft tissues, nerve pathways, and bone in a single scan. When planning treatment for dental implants, CBCT scans allow for more precise implant placement.
      </p>

      <h2 style={h2}>Dental X-rays</h2>
      <p style={body}>
        Dental x-rays (radiographs) are images of your teeth that your dentist uses to evaluate your oral health. These x-rays are used with low levels of radiation to capture images of the interior of your teeth and gums. This can help your dentist to identify problems, like cavities, tooth decay, and impacted teeth.
      </p>

      <h2 style={h2}>Laser Dentistry</h2>
      <p style={body}>
        Lasers have been used in dentistry since 1990. Lasers can be used as a safe and effective treatment for a wide range of dental procedures and are often used in conjunction with other dental instruments. Laser dentistry offers patients a more comfortable option for a number of dental procedures involving hard or soft tissue compared to drills and other non-laser tools.
      </p>
    </ContentPageLayout>
  )
}
