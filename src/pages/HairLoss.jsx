import React from 'react'
import RightImageCard from "../components/card/RightImageCard";
import OurExpertise from "../components/ourExpertise/OurExpertise";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import Causes from '../components/causes/Causes';
import FAQ from '../components/card/FQA';

const HairLoss = () => {
  return (
    <div>
      <RightImageCard/>
      <Causes/>
      <OurExpertise/>
      <FAQ/>
      <WhyChooseUs/>
    </div>
  )
}

export default HairLoss