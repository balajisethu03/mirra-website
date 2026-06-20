import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const h4: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '18px', color: '#b02855', marginTop: 16, marginBottom: 6 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }

export default function Periodontics() {
  return (
    <ContentPageLayout bannerImage="shutterstock_373732834.jpg" bannerAlt="Periodontics">
      <h1 style={h1}>Periodontics</h1>

      <p style={body}>Periodontics is a branch of dentistry that treats conditions and diseases of the teeth's supporting structures, especially the gums. Periodontists commonly treat severe cases of oral inflammation, including gum disease.</p>

      <h2 style={h2}>Periodontic Specialties</h2>
      <p style={body}>Periodontics typically focuses on the diagnosis and treatment of periodontal disease, commonly known as gum disease. Gum disease is a broad term that encompasses several different conditions. Periodontists treat different phases of gum disease, including:</p>

      <h3 style={h3}>Gingivitis</h3>
      <p style={body}>Gingivitis is a mild form of periodontal disease that causes the gums to swell, redden, and bleed easily due to inflammation. Gingivitis often results from a buildup of plaque and bacteria on the teeth caused by poor hygiene. It may also be a side effect of certain drugs or infections, or poor nutrition. Patients do not usually experience pain or discomfort, but should seek prompt treatment when symptoms arise because of potential complications.</p>

      <h3 style={h3}>Periodontitis</h3>
      <p style={body}>Periodontitis often develops as a result of untreated gingivitis. If plaque spreads below the gum line, it can create toxins that may chronically inflame the gums and bone, eventually destroying them. Periodontitis can lead to the formation of pockets that are susceptible to frequent infections. There are several types of periodontitis:</p>

      <h4 style={h4}>Aggressive periodontitis</h4>
      <p style={body}>This condition occurs most often in healthy patients who have a sudden onset of the disease, and experience rapid bone destruction and pocket formation.</p>

      <h4 style={h4}>Chronic periodontitis</h4>
      <p style={body}>Chronic periodontitis is the most common form of the disease. It results in progressive detachment and bone loss, gradually causing pocket formation and gum recession.</p>

      <h4 style={h4}>Periodontitis from systemic diseases</h4>
      <p style={body}>Periodontitis sometimes develops as a side effect of other conditions such as heart disease, respiratory disease and diabetes. These cases usually begin at a young age.</p>

      <h4 style={h4}>Necrotizing periodontal disease</h4>
      <p style={body}>This condition is an infection caused by necrosis of the supporting structures within the teeth, and commonly affects people with other systemic conditions.</p>

      <h2 style={h2}>Periodontic Treatment</h2>
      <p style={body}>Periodontists perform different procedures and, at times, surgery, to treat different conditions within the mouth and gums. Procedures that a periodontist may perform include:</p>

      <h3 style={h3}>Scaling and Root Planing</h3>
      <p style={body}>This is a deep-cleaning method that removes bacteria from below the gum line and the tooth root. A local anesthetic may be used to numb the gums and the roots of the teeth.</p>

      <h3 style={h3}>Root Surface Debridement</h3>
      <p style={body}>This is a procedure to remove damaged tissue. Debridement may be performed using ultrasonic instruments or hand tools.</p>

      <h3 style={h3}>Flap Surgery</h3>
      <p style={body}>This is a procedure that lifts away gum tissue so that it can be cleaned underneath. It is often performed when gum disease cannot be cured by antibiotics or by root planing and scaling alone.</p>

      <h3 style={h3}>Bone and Tissue Grafts</h3>
      <p style={body}>These procedures help regenerate bone or gum tissue that has been destroyed by periodontal disease. The goal is to encourage your own body to regrow bone and tissue.</p>
    </ContentPageLayout>
  )
}
