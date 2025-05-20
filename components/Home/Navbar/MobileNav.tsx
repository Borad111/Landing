import { navLink } from '@/constant /constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav:boolean,
    closeNav:()=>void;
}

const MobileNav = ({closeNav,showNav }:Props) => {
    const navopen=showNav ? "translate-x-0" : "translate-x-[-100%] ";
  return (
    <div>
        {/* over lay */}
    <div className={`fixed inset-0 ${navopen} transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}>
    </div>

    {/* nav link */}
    <div className={`text-white fixed ${navopen} justify-center flex flex-col h-full transform transition-all w-[80%] duration-300 delay-300 bg-blue-800 space-y-6 z-[1050]`}>
        {navLink.map((link)=>{
           return <Link key={link.id} href={link.url}>
                <p className='text-white  w-fit text-[20px] ml-12 border-b boder-b-[1.5px] pb-1 border-b-white'>{link.label}</p>
            </Link>
        })}

    
    {/* Close icon  */}

    <CgClose onClick={closeNav} className='absolute top-[1.4rem] right-[1.4rem] text-2xl '/>
    </div>
    </div>
  )
}

export default MobileNav