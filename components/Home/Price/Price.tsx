import React from 'react'
import PriceCart from './PriceCart'

function Price() {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
      <h1 className='text-gray-700 text-2xl text-center font-extrabold'>Choose The Plan That's Right For You</h1>
    <p className='text-center text-gray-600  mt-3 font-bold w-[90%] sm:w-[70%] md:w-[50%] mx-auto'>Lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit rem explicabo accusamus maiores modi.<br/>dolor sit amet consectetur adipisicing elit. Pariatur, architecto itaque quaerat porro recusandae sit.</p>
    <div className='w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 items-center'>
       <div data-aos="zoom-in-right">
        <PriceCart time="3 Month" price="19.99" />
        </div>
        

        <div data-aos="zoom-in-right">
        <PriceCart time="9 Month" price="39.36" />
        </div>
        <div data-aos="zoom-in-right">
        <PriceCart time="Life Time" price="95.36" />

        </div>
    </div>

    </div>
  )
}

export default Price
