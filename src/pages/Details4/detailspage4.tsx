import CallToAction from '../../sections/components/Details/calltoaction'
import DetailsContent from '../../sections/components/Details/detailscontent/detailscontent'
import ExportLogistics from '../../sections/components/Details/exportlogistics/exportlogistics'
import Footer from '../../sections/components/Details/footer'
import Section1Slider from '../../sections/components/Details/Slider'
import { slides } from './constants/Detail4slider'
import { nutraceuticalExportCapabilities } from './constants/export'
import { footerData4 } from './constants/footerdata'
import { nutraceuticalProductsData } from './constants/productsdara'
import './detailspage4.scss'


export default function Detailspage4() {
  return (
    <div>
        <div className="content-container3">
            <Section1Slider slides={slides}/>
            <DetailsContent productsData={nutraceuticalProductsData}/>
            <ExportLogistics exportCapabilities={nutraceuticalExportCapabilities}/>
            <CallToAction mainheading={"Connect with Formulation Team"} buttonGradient='from-blue-900 via-blue-800 to-blue-900'/>
            <Footer sections={footerData4.sections} backgroundGradient={footerData4.backgroundGradient} />
        </div>
    </div>
  )
}
