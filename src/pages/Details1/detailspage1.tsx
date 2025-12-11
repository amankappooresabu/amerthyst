import {slides} from '../../constants/Detail1slider'
import Section1Slider from '../../sections/components/Details/Slider'
import Details1Content from './components/detailscontent'

export default function Detailspage1 (){
  return (
    <div>
      <Section1Slider slides={slides}/>
      <Details1Content/>
    </div>
  )
}
