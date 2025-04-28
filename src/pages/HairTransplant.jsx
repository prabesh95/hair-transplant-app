import React from 'react'
import FeatureCard from "../components/card/FeatureCard"
import ProcedureSummary from '../components/procedureSummary/ProcedureSummary'
import TransplantTechniques from '../components/techniqueCard/TransplantTechniques'

const HairTransplant = () => {
  return (
    <div>
    <FeatureCard/>
    <ProcedureSummary/>
    <TransplantTechniques/>
    </div>
  )
}

export default HairTransplant