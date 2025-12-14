import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/frontend_assets/assets'
import NewLetterbox from '../components/NewLetterbox'

const Contact = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className="text-center text-2xl pt-2 border-t">
        <Tittle text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]' />
        <div className="flex flex-col justify-center items-start gap-6">
              <p className="font-semibold text-xl text-gray-600">Our Store</p>
              <p className="text-gray-500">54378 Willms Station <br /> Suite 350, Washingtin,USA</p>
              <p className="text-gray-500">Tel: (425) 555-0234 <br /> Email: admin@forever.com</p>
              <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
              <p className="text-gray-500">Learn more about our team and job opening</p>
              <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewLetterbox/>
    </div>
  )
}

export default Contact