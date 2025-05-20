"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {

    const [visible,SetVisible]=useState(false);

    useEffect(()=>{

        const TroggleVisibility=()=>{
             if(window.scrollY > 300) SetVisible(true);
             else SetVisible(false);
             
        }

        window.addEventListener("scroll",TroggleVisibility);

        return ()=> window.removeEventListener("scroll",TroggleVisibility)
    },[]);

    const scollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      {
        visible && (
            <button onClick={scollToTop} className='bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center'>
            <FaArrowUp/>
            </button>
        )
      }
    </div>
  )
}

export default ScrollTop
