import CallToAction from '../../sections/components/Details/calltoaction'
import DetailsContent from '../../sections/components/Details/detailscontent/detailscontent'
import ExportLogistics from '../../sections/components/Details/exportlogistics/exportlogistics'
import Footer from '../../sections/components/Details/footer'
import Section1Slider from '../../sections/components/Details/Slider'
import { slides } from './constants/Detail6slider'
import { marineExportCapabilities } from './constants/export'
import { footerData6 } from './constants/footerdata'
import { marineProteinData } from './constants/productsdata'
import './detailspage6.scss'


export default function Detailspage6() {
  return (
    <div>
        <div className="content-container5">
            <Section1Slider slides={slides}/>
            <DetailsContent productsData={marineProteinData}/>
            <ExportLogistics exportCapabilities={marineExportCapabilities}/>
            <CallToAction mainheading={"Contact Cold-Chain Team"} buttonGradient='from-blue-950 via-blue-900 to-blue-950'/>
        </div>
         <Footer sections={footerData6.sections} backgroundGradient={footerData6.backgroundGradient} />
        
    </div>
  )
}
