import CallToAction from '../../sections/components/Details/calltoaction';
import DetailsContent from '../../sections/components/Details/detailscontent/detailscontent';
import ExportLogistics from '../../sections/components/Details/exportlogistics/exportlogistics';
import Footer from '../../sections/components/Details/footer';
import Section1Slider from '../../sections/components/Details/Slider';
import { slides } from './constants/Detail8slider';
import { ecoExportCapabilities } from './constants/export';
import { footerData8 } from './constants/footerdata';
import { ecoSustainableData } from './constants/productsdata';
import './detailspage8.scss';

export default function Detailspage8() {
  return (
    <div>
        <Section1Slider slides={slides}/>
        <div className="content-container7">
             <DetailsContent productsData={ecoSustainableData}/>
             <ExportLogistics exportCapabilities={ecoExportCapabilities}/>
             <CallToAction mainheading='Discuss Custom Eco Requirements' buttonGradient="from-[#81C784] via-[#A5D6A7] to-[#81C784]"/>
        </div>
        <Footer sections={footerData8.sections} backgroundGradient={footerData8.backgroundGradient} />    
    </div>
  )
}
