import BoxText from '@/components/Helper/BoxText'
import React from 'react'
import { FaRocket, FaShoppingCart } from 'react-icons/fa'
import { FaBridge, FaRoadBarrier } from 'react-icons/fa6'
import { IoColorFillSharp } from 'react-icons/io5'
import { MdOutlineDesignServices } from 'react-icons/md'

function Service() {
  return (
    <div className='pt-16 w-[80%] mx-auto pb-16'>
      <div className='  items-center'>
        <BoxText>Our Serice</BoxText>
        <h1 className='font-bold text-2xl md:text-3xl text-gray-700 mt-3'>Our Service Made For You </h1>  
        <p className='mt-3 leading-relaxed text-gray-700 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Aut ullam veritatis quisquam quasi quibusdam reprehenderit, labore neque ipsa ab minima.</p>  
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-y-12 gap-8 mt-16'>

        {/* 1 st service  */}
        <div className='flex items-center space-x-5' data-aos="fade-right" >
            <div className='w-14 h-12 rounded-md items-center justify-center flex bg-pink-500 bg-opacity-20'>
                <FaRocket className='text-white h-5 w-5'/>
            </div>
            <div className=' '>
                <h1 className='font-extrabold text-gray-700 text-xl items-center'>Start Up</h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id?</p>
            </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="100" className='flex items-center space-x-5'>
            <div className='w-14 h-12 rounded-md items-center justify-center flex bg-pink-500 bg-opacity-20'>
                <FaBridge  className='text-white h-5 w-5'/>
            </div>
            <div className=' '>
                <h1 className='font-extrabold text-gray-700 text-xl items-center'>Business </h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id?</p>
            </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="300" className='flex items-center space-x-5'>
            <div className='w-14 h-12 rounded-md items-center justify-center flex bg-pink-500 bg-opacity-20'>
                <FaShoppingCart className='text-white h-5 w-5'/>
            </div>
            <div className=' '>
                <h1 className='font-extrabold text-gray-700 text-xl items-center'>Ecommerce </h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id?</p>
            </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="400" className='flex items-center space-x-5'>
            <div className='w-14 h-12 rounded-md items-center justify-center flex bg-pink-500 bg-opacity-20'>
                <MdOutlineDesignServices className='text-white h-5 w-5'/>
            </div>
            <div className=' '>
                <h1 className='font-extrabold text-gray-700 text-xl items-center'>Degital Market </h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id?</p>
            </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="500" className='flex items-center space-x-5'>
            <div className='w-14 h-12 rounded-md items-center justify-center flex bg-pink-500 bg-opacity-20'>
                <IoColorFillSharp className='text-white h-5 w-5'/>
            </div>
            <div className=' '>
                <h1 className='font-extrabold text-gray-700 text-xl items-center'>Limited Color </h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id?</p>
            </div>
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default Service
