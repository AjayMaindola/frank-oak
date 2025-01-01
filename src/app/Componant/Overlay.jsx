"use client";
import React from 'react'

export default function Overlay({setLoginModal}) {
  return (
    <div  onClick={()=>setLoginModal(false)} className='bg-black opacity-70  hidden md:block md:fixed md:top-0 md:left-0 w-full h-screen'>
      
    </div>
  )
}
