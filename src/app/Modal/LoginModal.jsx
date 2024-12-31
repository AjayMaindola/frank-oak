"use client";
import React from 'react'
import Overlay from '../Componant/Overlay';
import { IoCloseSharp } from "react-icons/io5";
export default function LoginModal({setLoginModal,}) {
  return (
    <>
    <Overlay setLoginModal={setLoginModal} className=" cursor-pointer  hidden "/>
    <div className='bg-red-300 rounded-t-2xl md:rounded-none mt-[60px] md:mt-0 w-[95%] left-[2.5%]  md:w-[600px] h-screen  md:bg-white fixed  md:left-[50%] top-0 md:top-[50%]   md:translate-x-[-50%] md:translate-y-[-50%] shadow-2xl z-50'>
    <IoCloseSharp  onClick={()=>setLoginModal(false)} className=' absolute top-3 right-4 text-[30px]'/>
    </div>
    </>
  )
}
