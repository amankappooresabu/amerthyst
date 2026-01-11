import DetailsContent from '../../sections/components/Details/detailscontent/detailscontent';
import Section1Slider from '../../sections/components/Details/Slider';
import ExportLogistics from "../../sections/components/Details/exportlogistics/exportlogistics";
import { slides } from './constants/Detal3slider';
import { agroPlantationData } from './constants/productsdata';
import './detailspage3.scss';
import { agroExportCapabilities } from './constants/export';
import CallToAction from '../../sections/components/Details/calltoaction';
import Footer from '../../sections/components/Details/footer';
import { footerData3 } from './constants/footerdata';


export default function Detailspage3() {
  return (
    <div>
        <Section1Slider slides={slides}/>
        <div className="content-container2">
          <DetailsContent productsData={agroPlantationData}/>
          <ExportLogistics exportCapabilities={agroExportCapabilities} />
          <CallToAction mainheading={"Speak with Trade Desk"} buttonGradient="from-yellow-900 via-yellow-800 to-yellow-900"/>
          <Footer sections={footerData3.sections} backgroundGradient={footerData3.backgroundGradient}/>
        </div>
    </div>
  )
}
