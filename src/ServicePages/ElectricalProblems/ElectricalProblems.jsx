import ElectricalHeader from '../../ServicePagesComponent/ElectricalProblems/ElectricalHeader'
import Testimonials from '../../Components/Reviews/Testimonials';
import CarLogos from '../../Components/CarLogos/CarLogos';
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox ';
import ElectricalHouse from '../../ServicePagesComponent/ElectricalProblems/ElectricalHouse';
import ElectricalBoxWithHeading from '../../ServicePagesComponent/ElectricalProblems/ElectricalBoxWithHeading';
import ElectricalHeroSection from '../../ServicePagesComponent/ElectricalProblems/ElectricalHeroSection';


const ElectricalProblems = () => {

  return (
    <>
    <ElectricalHeader/>
    <ElectricalHeroSection/>
    <ElectricalBoxWithHeading/>
    <ElectricalHouse/>
    <Testimonials/>
    <AboutUsSubscriptionBox/>
    <CarLogos/>
    </>

  )
}

export default ElectricalProblems