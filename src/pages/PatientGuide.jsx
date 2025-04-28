import React from 'react'
import BeforeProcedure from '../components/BeforeProcedure/BeforeProcedure'
import DuringProcedure from '../components/duringProcedure/DuringProcedure'
import AfterProcedure from '../components/afterProcedure/AfterProcedure'

const PatientGuide = () => {
  return (
    <div>
      <BeforeProcedure/>
      <DuringProcedure/>
      <AfterProcedure/>
      </div>
  )
}

export default PatientGuide