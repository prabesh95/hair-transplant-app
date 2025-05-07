import React from 'react'
import FeatureCard from "../components/card/FeatureCard"
import ProcedureSummary from '../components/procedureSummary/ProcedureSummary'
import TransplantTechniques from '../components/techniqueCard/TransplantTechniques'

const HairTransplant = () => {
  return (
    <div>
      <div id='hair-transplant'>
  <div className="relative bg-forest-green text-white">
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-0 text-center">
      <h1 className="heading-h2 font-bold mb-4">Hair Transplant Solutions</h1>
      <p className="text-body text-soft-sage max-w-3xl mx-auto">
        Advanced hair restoration techniques for natural-looking, permanent results
      </p>
    </div>
  </div>
</div>
    <FeatureCard/>
    <ProcedureSummary/>
    <TransplantTechniques/>
    </div>
  )
}

export default HairTransplant