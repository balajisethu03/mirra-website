import ContentPageLayout from '../../components/ContentPageLayout'

const h1: React.CSSProperties = { fontFamily: "'Alice', serif", fontWeight: 400, fontSize: '36px', color: '#b02855', marginTop: 0, marginBottom: 24 }
const h2: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '31px', color: '#b02855', marginTop: 32, marginBottom: 12 }
const h3: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '20px', color: '#58586c', marginTop: 20, marginBottom: 8 }
const body: React.CSSProperties = { fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '34px', color: '#323248', marginTop: 0, marginBottom: 16 }

export default function DentalImplants() {
  return (
    <ContentPageLayout bannerImage="shutterstock_1525010522.jpg" bannerAlt="Dental Implants">
      <h1 style={h1}>Dental Implants</h1>

      <p style={body}>Dental implants are an option to replace missing teeth and provide a fixed solution to removable dentures. Dental implants are natural-looking replacement teeth that are fixed in the jaw. Implant treatment provides an option to correct the most troublesome cases associated with missing teeth and ill-fitting dentures.</p>

      <p style={body}>An artificial tooth root made of titanium, an implant is surgically placed into the jawbone to support tooth-replacement structures such as crowns, bridges and dentures. While the implant mimics the root of the tooth, the replacement structure looks and feels just like a natural tooth, providing patients with a permanent solution that replicates the fit and feel of natural teeth.</p>

      <h2 style={h2}>Benefits of Dental Implants</h2>
      <p style={body}>Dental implants have many benefits over other tooth-replacement methods.</p>

      <h3 style={h3}>Enhanced Esthetics</h3>
      <p style={body}>Implants are placed within the gums. The crowns that are attached to them emerge in a manner similar to a natural tooth. This offers a more realistic and natural look compared to other alternatives.</p>

      <h3 style={h3}>Reduction of Bone Loss</h3>
      <p style={body}>When a tooth is lost, the supporting bone structure gradually recedes over time. Dental implants integrate with the jawbone and stimulate its preservation, allowing the bone to stay healthy and intact while maintaining natural facial contours and appearance.</p>

      <h3 style={h3}>Preservation of Adjacent Teeth</h3>
      <p style={body}>Other methods like fixed bridges must be anchored to adjacent teeth, unnecessarily sacrificing their quality and health. Dental implants are independent and do not rely on the support of other teeth, thus providing the ability to preserve the good teeth.</p>

      <h3 style={h3}>Easier Eating</h3>
      <p style={body}>As the jawbone shrinks, chewing efficiency is reduced, making it difficult to eat certain foods. Dental implants can restore chewing efficiency comparable to that of natural teeth, allowing patients to eat their favorite foods with confidence and without discomfort.</p>

      <h2 style={h2}>The Dental Implant Procedure</h2>
      <p style={body}>All treatment begins with a thorough exam and consultation. Typically, the process can take from 3 to 6 months. In some cases, the process may take longer because additional treatments, such as bone grafting, may be required to build up the bone so it can support an implant. The procedure and time frame depends on several factors:</p>
      <ul style={{ fontFamily: "'Raleway', sans-serif", fontSize: '18px', lineHeight: '2', color: '#323248', paddingLeft: 24, marginTop: 0, marginBottom: 16 }}>
        <li>Dental health</li>
        <li>Condition and quality of the jawbone</li>
        <li>Number of teeth involved</li>
      </ul>

      <p style={body}>Dental implant restorations usually take place over a few appointments and involve several steps:</p>

      <h3 style={h3}>The First Step</h3>
      <p style={body}>A dentist or oral surgeon will cut into the gum to expose the bone. One or more implants are precisely placed into the jawbone to mirror the location of the root of the missing natural tooth.</p>

      <h3 style={h3}>The Second Step</h3>
      <p style={body}>After appropriate healing has taken place to allow for the implant to fuse within the bone, impressions of the teeth and bite are taken to custom-fabricate a connector post or abutment, and crown.</p>

      <h3 style={h3}>The Final Step</h3>
      <p style={body}>At the final appointment, the oral surgeon or dentist attaches the abutment and crown to the implant. The result is a natural-looking and feeling replacement tooth that is firmly anchored in place.</p>
    </ContentPageLayout>
  )
}
