import React from 'react'
import RightImageCard from "../components/card/RightImageCard";
import OurExpertise from "../components/ourExpertise/OurExpertise";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import Causes from '../components/causes/Causes';
import FAQ from '../components/card/FQA';

const HairLoss = () => {
  return (
    <div id='hair-loss'>
      <div className="relative bg-forest-green text-white">
  <div id="hair-loss" className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="heading-h2 font-bold mb-4">Understanding Hair Loss</h1>
    <p className="text-body text-soft-sage max-w-3xl mx-auto">
      Expert solutions for all types of hair loss with proven treatments and personalized care
    </p>
  </div>
</div>
      <RightImageCard/>
      <Causes/>
      <OurExpertise/>
      <FAQ/>
      <WhyChooseUs/>
    </div>
  )
}

export default HairLoss