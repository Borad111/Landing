import React from 'react'
import ClientCart from './ClientCart'

const ClientReview = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100 '>
      <h1 className='text-center text-2xl sm:text-3xl text-blue-950 font-bold '>What Our Happy Client Says</h1>
      <p className='text-center mt-3 text-gray-700 font-medium'>Lorem, Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing 
        <br/>elit. Numquam, quis.</p>
        <div className='grid grid-cols-1  lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto '>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">
                <ClientCart image="/images/u1.jpg" name="Jasico Dio" rating="4.7"/>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">
                <ClientCart image="/images/u2.jpg" name="Jhon Dao" rating="4.1"/>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-center"> 
                <ClientCart image="/images/u3.jpg" name="Sachiko Dio" rating="4.3"/>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">
                <ClientCart image="/images/u4.jpg" name="machomo orn" rating="4.9"/>
            </div>
        </div>
    </div>
  )
}

export default ClientReview
