import DetailsContent from "../../sections/components/Details/detailscontent/detailscontent";
import Section1Slider from "../../sections/components/Details/Slider";
import { slides } from './constants/Detail2slider'
import { botanicalProductsData } from "../Details2/constants/productsdata";
import { botanicalExportCapabilities } from './constants/export'

import './detailspage2.scss'
import ExportLogistics from "../../sections/components/Details/exportlogistics/exportlogistics";
import CallToAction from "../../sections/components/Details/calltoaction";
import Footer from "../../sections/components/Details/footer";
import { footerData2 } from "./constants/footerdata";

export default function DetailsPage2() {
    return (
        <div>
            <Section1Slider slides={slides} />
            <div className="content-container1">
                <DetailsContent productsData={botanicalProductsData}/>
                <ExportLogistics exportCapabilities={botanicalExportCapabilities} />
                <CallToAction mainheading={"Talk to Ingredient Specialist"} buttonGradient="from-green-700 via-green-600 to-green-700"/>
                <Footer sections={footerData2.sections} backgroundGradient={footerData2.backgroundGradient}/>
            </div>
        </div>
    )
}