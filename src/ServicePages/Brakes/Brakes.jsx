import React from 'react'
import BrakesHeader from '../../ServicePagesComponent/Brakes/brakesHeader';
import Testimonials from '../../Components/Reviews/Testimonials'
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox .jsx'
import CarLogos from '../../Components/CarLogos/CarLogos';
import BrakesHeroSection from '../../ServicePagesComponent/Brakes/BrakesHeroSection.jsx';
import BrakesAutoHouseComponent from '../../ServicePagesComponent/Brakes/BrakesAutoHouseComponent.jsx';
import BrakesBoxWithHeading from '../../ServicePagesComponent/Brakes/BrakesBoxWithHeading.jsx';

const Brakes = () => {
  return (
  <>
  <BrakesHeader/>
  <BrakesHeroSection/>
  <BrakesBoxWithHeading/>
  <BrakesAutoHouseComponent/>
  <Testimonials/>
  <AboutUsSubscriptionBox/>
  <CarLogos/>
  </>
  )
}

export default Brakes