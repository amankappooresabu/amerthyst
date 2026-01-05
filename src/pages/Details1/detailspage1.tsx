import {slides} from '../../constants/Detail1slider'
import Section1Slider from '../../sections/components/Details/Slider'
import CallToAction from './components/calltoaction'
import Details1Content from './components/detailscontent'
import ExportLogistics from './components/exportlogistics'
import Footer from './components/footer'
import './detailspage1.scss'

export default function Detailspage1 (){
  return (
    <div>
      <Section1Slider slides={slides}/>
      <div className="content-container">
        <Details1Content/>
        <ExportLogistics/>
        <CallToAction/>
      </div>
      <Footer/>
    </div>
  )
}
