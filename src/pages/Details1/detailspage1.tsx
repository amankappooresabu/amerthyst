import {slides} from './constants/Detail1slider'
import Section1Slider from '../../sections/components/Details/Slider'
import CallToAction from '../../sections/components/Details/calltoaction'
import Details1Content from '../../sections/components/Details/detailscontent/detailscontent'
import ExportLogistics from '../../sections/components/Details/exportlogistics/exportlogistics'
import Footer from '../../sections/components/Details/footer'
import { productsData } from './constants/productsdata'
import { exportCapabilities } from './constants/export'
import { footerData1 } from './constants/footerdata'
import './detailspage1.scss'

export default function Detailspage1 (){
  return (
    <div>
      <div className="content-container">
        <Section1Slider slides={slides}/>
        <Details1Content productsData={productsData} />
        <ExportLogistics exportCapabilities={exportCapabilities} />
        <CallToAction mainheading={"Talk to Export Specialist"}/>
        <Footer sections={footerData1.sections} backgroundGradient={footerData1.backgroundGradient} />
      </div>
    </div>
  )
}
