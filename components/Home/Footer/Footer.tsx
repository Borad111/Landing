import React from 'react'
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div className='space-y-5'>
            <h1 className='text-2xl  font-bold '>Solution</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>Work Flow</p>
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>By Team</p>
           
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>EnterPrice</p>
        </div>
        <div className='space-y-5'>
            <h1 className='text-2xl  font-bold '>Company</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>About Us</p>
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>News & Press</p>
           
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>Our customer</p>
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>Leader Ship</p>
       
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>Careers</p>

        </div>
        <div className='space-y-5'>
            <h1 className='text-2xl  font-bold '>Resources</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>Block </p>
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>Webinar & Event</p>
           
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>podCast</p>
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>Ebook</p>
       

        </div>
        <div className='space-y-5'>
            <h1 className='text-2xl  font-bold '>Contact us</h1>
            <div className='mt-6'>
                <h1 className='text-gray-700  text-lg'>Mobile Number </h1>
                <h1 className='mt-1 font-bold text-blue-900 text-lg'>+91 41526 58965</h1>
            </div>   
            <div className='mt-6'>
                <h1 className='text-gray-700  text-lg'>Email </h1>
                <h1 className='mt-1 font-bold text-blue-900 text-lg'>Samy@gmail.com</h1>
            </div>       
        </div>
      </div>
      <div className='w-[80%] border-t flex flex-col md:flex-row justify-between items-center text-gray-600 border-gray-600 mx-auto mt-6'>
      
        <p className='text-center mt-5 md:text-left'>CopyRight 2024 WebDev .  All Right reserved </p>
        <div className='flex items-center space-x-4 mt-5 md:mt-0'>
            <span>Social : </span>
            <span className='text-gray-500 hover:text-gray-950'><FaFacebook/> </span>
            <span className='text-gray-500 hover:text-gray-950'><FaTwitter/> </span>
            <span className='text-gray-500 hover:text-gray-950'><FaWhatsapp/> </span>

        </div>
      </div>
    </div>
  )
}

export default Footer
