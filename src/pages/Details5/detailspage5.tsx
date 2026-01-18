import CallToAction from '../../sections/components/Details/calltoaction'
import DetailsContent from '../../sections/components/Details/detailscontent/detailscontent'
import ExportLogistics from '../../sections/components/Details/exportlogistics/exportlogistics'
import Footer from '../../sections/components/Details/footer'
import Section1Slider from '../../sections/components/Details/Slider'
import { slides } from './constants/Detail5slider'
import { wellnessExportCapabilities } from './constants/export'
import { footerData5 } from './constants/footerdata'
import { wellnessAyurvedaData } from './constants/productsdata'
import './detailspage5.scss'

export default function Detailspage5() {
  return (
    <div>
        <div className="content-container4">
            <Section1Slider slides={slides}/>
            <DetailsContent productsData={wellnessAyurvedaData} />
            <ExportLogistics exportCapabilities={wellnessExportCapabilities}/>
            <CallToAction mainheading={'Talk to Ayurveda Specialist'} buttonGradient='from-[#C19A6B] via-[#D2B48C] to-[#C19A6B]'/>
        </div>
        <Footer sections={footerData5.sections} backgroundGradient={footerData5.backgroundGradient} /> 
    </div>
  )
}
