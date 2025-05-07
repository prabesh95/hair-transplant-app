import React from 'react'
import BeforeProcedure from '../components/BeforeProcedure/BeforeProcedure'
import DuringProcedure from '../components/duringProcedure/DuringProcedure'
import AfterProcedure from '../components/afterProcedure/AfterProcedure'

const PatientGuide = () => {
  return (
    <div>
      <div id='patient-guide'>
  <div className="relative bg-forest-green text-white">
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="heading-h2 font-bold mb-4">Your Hair Restoration Journey</h1>
      <p className="text-body text-soft-sage max-w-3xl mx-auto">
        Essential guidance for every stage of your treatment process
      </p>
    </div>
  </div>
</div>
      <BeforeProcedure/>
      <DuringProcedure/>
      <AfterProcedure/>
      </div>
  )
}

export default PatientGuide