import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import DentalXRays from './pages/technology/DentalXRays'
import ConeBeamCT from './pages/technology/ConeBeamCT'
import LaserDentistry from './pages/technology/LaserDentistry'
import Services from './pages/Services'
import DentalImplants from './pages/services/DentalImplants'
import MiniImplants from './pages/services/MiniImplants'
import Periodontics from './pages/services/Periodontics'
import CrownLengthening from './pages/services/CrownLengthening'
import Gingivectomy from './pages/services/Gingivectomy'
import GumDisease from './pages/services/GumDisease'
import GumGrafting from './pages/services/GumGrafting'
import OralBiopsy from './pages/services/OralBiopsy'
import OsseousSurgery from './pages/services/OsseousSurgery'
import ScalingRootPlaning from './pages/services/ScalingRootPlaning'
import OralSurgery from './pages/services/OralSurgery'
import RidgePreservation from './pages/services/RidgePreservation'
import SinusLift from './pages/services/SinusLift'
import ToothExtraction from './pages/services/ToothExtraction'
import WisdomTeethExtractions from './pages/services/WisdomTeethExtractions'
import CosmeticDentistry from './pages/services/CosmeticDentistry'
import CosmeticGumSurgery from './pages/services/CosmeticGumSurgery'
import DentalBonding from './pages/services/DentalBonding'
import Dentures from './pages/services/Dentures'
import InOfficeTeethWhitening from './pages/services/InOfficeTeethWhitening'
import SedationDentistry from './pages/services/SedationDentistry'
import PreventiveDentistry from './pages/services/PreventiveDentistry'
import OralCancer from './pages/services/OralCancer'
import OralHygiene from './pages/services/OralHygiene'
import RoutineDentalCleaning from './pages/services/RoutineDentalCleaning'
import NeuromuscularDentistry from './pages/services/NeuromuscularDentistry'
import Bruxism from './pages/services/Bruxism'
import MouthGuards from './pages/services/MouthGuards'
import TemporomandibularJointDisorder from './pages/services/TemporomandibularJointDisorder'
import GeneralDentistry from './pages/services/GeneralDentistry'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import ThankYou from './pages/ThankYou'
import Forms from './pages/Forms'
import Location from './pages/Location'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Technology */}
          <Route path="technology" element={<Technology />} />
          <Route path="technology/dental-x-rays" element={<DentalXRays />} />
          <Route path="technology/cone-beam-ct-scan-imaging" element={<ConeBeamCT />} />
          <Route path="technology/laser-dentistry" element={<LaserDentistry />} />

          {/* Services overview */}
          <Route path="services" element={<Services />} />

          {/* Dental Implants */}
          <Route path="services/dental-implants" element={<DentalImplants />} />
          <Route path="services/dental-implants/mini-implants" element={<MiniImplants />} />

          {/* Periodontics */}
          <Route path="services/periodontics" element={<Periodontics />} />
          <Route path="services/periodontics/crown-lengthening" element={<CrownLengthening />} />
          <Route path="services/periodontics/gingivectomy" element={<Gingivectomy />} />
          <Route path="services/periodontics/gum-disease" element={<GumDisease />} />
          <Route path="services/periodontics/gum-grafting" element={<GumGrafting />} />
          <Route path="services/periodontics/oral-biopsy" element={<OralBiopsy />} />
          <Route path="services/periodontics/osseous-surgery" element={<OsseousSurgery />} />
          <Route path="services/periodontics/scaling-and-root-planing" element={<ScalingRootPlaning />} />

          {/* Oral Surgery */}
          <Route path="services/oral-surgery" element={<OralSurgery />} />
          <Route path="services/oral-surgery/ridge-preservation-bone-grafting" element={<RidgePreservation />} />
          <Route path="services/oral-surgery/sinus-lift" element={<SinusLift />} />
          <Route path="services/oral-surgery/tooth-extraction" element={<ToothExtraction />} />
          <Route path="services/oral-surgery/wisdom-teeth-extractions" element={<WisdomTeethExtractions />} />

          {/* Cosmetic Dentistry */}
          <Route path="services/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="services/cosmetic-dentistry/cosmetic-gum-surgery" element={<CosmeticGumSurgery />} />
          <Route path="services/cosmetic-dentistry/dental-bonding" element={<DentalBonding />} />
          <Route path="services/cosmetic-dentistry/dentures" element={<Dentures />} />
          <Route path="services/cosmetic-dentistry/in-office-teeth-whitening" element={<InOfficeTeethWhitening />} />

          {/* Sedation Dentistry */}
          <Route path="services/sedation-dentistry" element={<SedationDentistry />} />

          {/* Preventive Dentistry */}
          <Route path="services/preventive-dentistry" element={<PreventiveDentistry />} />
          <Route path="services/preventive-dentistry/oral-cancer" element={<OralCancer />} />
          <Route path="services/preventive-dentistry/oral-hygiene" element={<OralHygiene />} />
          <Route path="services/preventive-dentistry/routine-dental-cleaning" element={<RoutineDentalCleaning />} />

          {/* Neuromuscular Dentistry */}
          <Route path="services/neuromuscular-dentistry" element={<NeuromuscularDentistry />} />
          <Route path="services/neuromuscular-dentistry/bruxism" element={<Bruxism />} />
          <Route path="services/neuromuscular-dentistry/mouth-guards" element={<MouthGuards />} />
          <Route path="services/neuromuscular-dentistry/temporomandibular-joint-disorder" element={<TemporomandibularJointDisorder />} />

          {/* General Dentistry */}
          <Route path="services/general-dentistry" element={<GeneralDentistry />} />

          <Route path="gallery" element={<Gallery />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="forms" element={<Forms />} />
          <Route path="location/mirra-periodontal-implant-center" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
