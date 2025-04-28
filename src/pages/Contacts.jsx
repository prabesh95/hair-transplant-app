import React from 'react'
import ConsultationForm from '../components/ConsultationForm'
import consultaion from "../assets/extras/consultation.jpg"

const Contacts = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
    {/* First child div - will be 100% width on mobile, 50% on md+ */}
    <div className="w-full md:w-1/2">
      <ConsultationForm/>
    </div>
  
    {/* Second child div - will be 100% width on mobile, 50% on md+ */}
    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md" id='second'>
      <img 
        src={consultaion} 
        alt="consultation" 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
  )
}

export default Contacts