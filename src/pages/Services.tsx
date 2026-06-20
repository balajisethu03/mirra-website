import { Link } from 'react-router-dom'
import ContentPageLayout from '../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '28px', color: '#b02855', marginTop: 0, marginBottom: 12 }
const linkStyle: React.CSSProperties = { display: 'block', fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '2', color: '#3276ab', textDecoration: 'none' }

const serviceCategories = [
  {
    title: 'Cosmetic Dentistry',
    path: '/services/cosmetic-dentistry',
    items: [
      { label: 'Cosmetic Gum Surgery', path: '/services/cosmetic-dentistry/cosmetic-gum-surgery' },
      { label: 'Dental Bonding', path: '/services/cosmetic-dentistry/dental-bonding' },
      { label: 'Dentures', path: '/services/cosmetic-dentistry/dentures' },
      { label: 'In-Office Teeth Whitening', path: '/services/cosmetic-dentistry/in-office-teeth-whitening' },
    ],
  },
  {
    title: 'Dental Implants',
    path: '/services/dental-implants',
    items: [
      { label: 'Mini Implants', path: '/services/dental-implants/mini-implants' },
    ],
  },
  {
    title: 'Neuromuscular Dentistry',
    path: '/services/neuromuscular-dentistry',
    items: [
      { label: 'Bruxism', path: '/services/neuromuscular-dentistry/bruxism' },
      { label: 'Mouth Guards', path: '/services/neuromuscular-dentistry/mouth-guards' },
      { label: 'Temporomandibular Joint Disorder', path: '/services/neuromuscular-dentistry/temporomandibular-joint-disorder' },
    ],
  },
  {
    title: 'Oral Surgery',
    path: '/services/oral-surgery',
    items: [
      { label: 'Ridge Preservation / Bone Grafting', path: '/services/oral-surgery/ridge-preservation-bone-grafting' },
      { label: 'Sinus Lift', path: '/services/oral-surgery/sinus-lift' },
      { label: 'Tooth Extraction', path: '/services/oral-surgery/tooth-extraction' },
      { label: 'Wisdom Teeth Extractions', path: '/services/oral-surgery/wisdom-teeth-extractions' },
    ],
  },
  {
    title: 'Periodontics',
    path: '/services/periodontics',
    items: [
      { label: 'Crown Lengthening', path: '/services/periodontics/crown-lengthening' },
      { label: 'Gingivectomy', path: '/services/periodontics/gingivectomy' },
      { label: 'Gum Disease', path: '/services/periodontics/gum-disease' },
      { label: 'Gum Grafting', path: '/services/periodontics/gum-grafting' },
      { label: 'Oral Biopsy', path: '/services/periodontics/oral-biopsy' },
      { label: 'Osseous Surgery', path: '/services/periodontics/osseous-surgery' },
      { label: 'Scaling And Root Planing', path: '/services/periodontics/scaling-and-root-planing' },
    ],
  },
  {
    title: 'Preventive Dentistry',
    path: '/services/preventive-dentistry',
    items: [
      { label: 'Oral Cancer', path: '/services/preventive-dentistry/oral-cancer' },
      { label: 'Oral Hygiene', path: '/services/preventive-dentistry/oral-hygiene' },
      { label: 'Routine Dental Cleaning', path: '/services/preventive-dentistry/routine-dental-cleaning' },
    ],
  },
  {
    title: 'Sedation Dentistry',
    path: '/services/sedation-dentistry',
    items: [],
  },
]

export default function Services() {
  return (
    <ContentPageLayout bannerImage="shutterstock_535834711.jpg" bannerAlt="Our Services">
      <h1 style={h1}>Services</h1>
      {serviceCategories.map(cat => (
        <div key={cat.title} style={{ marginBottom: 28 }}>
          <h2 style={h2}>
            <Link to={cat.path} style={{ color: '#b02855', textDecoration: 'none' }}>{cat.title}</Link>
          </h2>
          {cat.items.map(item => (
            <Link key={item.label} to={item.path} style={linkStyle}>{item.label}</Link>
          ))}
        </div>
      ))}
    </ContentPageLayout>
  )
}
