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
        <Section1Slider slides={slides}/>
        <div className="content-container4">
            <DetailsContent productsData={wellnessAyurvedaData} />
            <ExportLogistics exportCapabilities={wellnessExportCapabilities}/>
            <CallToAction mainheading={'Talk to Ayurveda Specialist'} buttonGradient='from-orange-200 via-amber-200 to-orange-200'/>
        </div>
        <Footer sections={footerData5.sections} backgroundGradient={footerData5.backgroundGradient} /> 
    </div>
  )
}
