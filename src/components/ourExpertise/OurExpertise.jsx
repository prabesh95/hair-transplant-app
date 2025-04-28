import React from 'react'
import male_hair from "../../assets/services/male_hair_transplant.jpg";
import female_hair from '../../assets/services/female_hair_transplant.jpg';
import eyebrow from '../../assets/services/eyebrow_transplant.jpg';
import over_scar from '../../assets/services/hair_transplant_overscar.jpg';
import beard_moustache from '../../assets/services/beard_and_moustache_hair_transplant.jpeg';
import repair from '../../assets/services/Repair_of_Failed_Hair_Transplant.jpg';
import body_hair from '../../assets/services/body_hair_transplant.jpg';
import reconstruction from '../../assets/services/Hairline_Reconstruction.jpg';
import scalp from '../../assets/services/Scalp_Micropigmentation.jpg'
import { HashLink } from 'react-router-hash-link';
const expertiseList=[
  {
    id:'1a',
    title:"Male Hair Transplant",
    image: male_hair,
    path: 'male-transplant'
  },
  {
    id:'2b',
    title:"female Hair Transplant",
    image: female_hair,
    path: 'female-transplant'
  },
  {
    id:'3c',
    title:"Eyebrow Transplant",
    image: eyebrow,
    path: 'eyebrow-transplant'
  },
  {
    id:'4d',
    title:"Hair Transplant Over Scar",
    image: over_scar,
    path:"scar-transplant"
  },
  {
    id:'5e',
    title:"Beard and Moustache Hair Transplant",
    image: beard_moustache,
    path:'beard-transplant'
  },
  {
    id:'6f',
    title:"Repair of Failed Hair Transplant",
    image: repair,
    path:'repair-transplant'
  },
  {
    id:'7g',
    title:"Body Hair Transplant",
    image: body_hair,
    path:'body-hair-transplant'
  },
  {
    id:'8h',
    title:"Hairline Reconstruction",
    image: reconstruction,
    path: 'hairline-reconstruction'
  },
  {
    id:'9i',
    title:"Scalp Micropigmentation",
    image: scalp,
    path: 'scalp-micropigmentation'
  }
]

const OurExpertise = () => {
  return (
    <div className='mt-14 mb-12 px-4 mx-auto max-w-7xl'>
    {/* header Section */}
    <div className='text-center mb-10 max-w-[600px] mx-auto my-8 p-4'>
      <h2 className='text-2xl md:text-3xl font-bold text-forest-green mt-8 p-4'>Our Expertise</h2>
      <p>Your Ultimate Destination for Hair Regrowth</p>
      <div className="w-20 h-1 bg-olive-gold mx-auto mt-4"></div>
    </div>
    
    {/* body section */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
      {expertiseList.map((list) => (       
        <HashLink to={`/services/#${list.path}`} key={list.id}>
          <div 
            data-aos='fade-up'
            data-aos-delay={list.aosDelay}
            className='space-y-3'
          >
            <img 
              src={list.image} 
              alt={list.title} 
              className='h-[320px] w-[250px] object-cover rounded-md'
            />
            <h2 className='font-semibold'>{list.title}</h2>
          </div>
        </HashLink>
      ))}
    </div>
  </div>
  )
}

export default OurExpertise