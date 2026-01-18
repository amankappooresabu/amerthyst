import CallToAction from '../../sections/components/Details/calltoaction';
import DetailsContent from '../../sections/components/Details/detailscontent/detailscontent';
import ExportLogistics from '../../sections/components/Details/exportlogistics/exportlogistics';
import Footer from '../../sections/components/Details/footer';
import Section1Slider from '../../sections/components/Details/Slider';
import { slides } from './constants/Detail7slider';
import { beautyExportCapabilities } from './constants/export';
import { footerData7 } from './constants/footerdata';
import { beautyPersonalCareData } from './constants/productsdata';
import './detailspage7.scss';

export default function Detailspage7() {
  return (
    <div>
        <div className="content-container6">
            <Section1Slider slides={slides}/>
            <DetailsContent productsData={beautyPersonalCareData}/>
            <ExportLogistics exportCapabilities={beautyExportCapabilities}/>
            <CallToAction mainheading={"Speak with Beauty Supply Team"} buttonGradient="from-[#E85D8A] via-[#F482A8] to-[#E85D8A]"/>
        </div>
       <Footer sections={footerData7.sections} backgroundGradient={footerData7.backgroundGradient} />
    </div>
  )
}
