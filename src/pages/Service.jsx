import React from 'react'
import FAQ from '../components/card/FQA'
import AlternatingCard from '../components/card/AlternatingCard'

const Service = () => {
  return (

    <div id='services'>
      <div className="relative bg-forest-green text-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-h2 font-bold mb-4">Our Hair Restoration Services</h1>
          <p className="text-body text-soft-sage max-w-3xl mx-auto">
            Comprehensive solutions tailored to your unique hair restoration needs
          </p>
        </div>
      </div>

      <AlternatingCard />
      <FAQ />
    </div>
  )
}

export default Service