import React, { useState } from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";

import { ImFacebook } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
import img1 from "../../../public/images/Modal/modal1.svg";
import img2 from "../../../public/images/Modal/modal2.svg";
import img3 from "../../../public/images/Modal/modal3.svg";
import Image from "next/image";

export default function LoginTopPat({setLoginModal}) {
   
  return (
    <>
    <div className="overflow-y-scroll rounded-t-xl md:rounded-none  mt-0 w-[100%] left-0  md:w-[600px] h-screen  bg-[#f9f9f9] fixed pb-5 md:left-[50%] top-0 md:top-[48%]   md:translate-x-[-50%] md:translate-y-[-50%] shadow-2xl z-50">
        <div className="bg-[#f9f9f9]">
          <IoCloseSharp
            onClick={() => setLoginModal(false)}
            className=" absolute top-3 right-4 text-[30px]"
          />
          <div className="text-center  mt-8">
            <h1 className=" text-[22px] md:text-[26px] font-Sedan font-semibold">
              Welcome Back!
            </h1>
            <p className="text-[15px] mt-2">Log in to enjoy your perks</p>
          </div>
          <div className="grid grid-cols-3 items-center justify-center mt-12 px-[4%]">
            <div className="flex justify-center items-center flex-col">
              <Image
                className=" mb-4"
                src={img1}
                width={22}
                height={50}
                alt="Google"
              />
              <h1 className="text-[12px] font-bold md:font-normal md:text-[13px]">
                Frank's Club
              </h1>
              <p className="text-[14px] text-center md:text-start md:text-[15px]">
                Earn points, get rewards
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <Image
                className=" mb-4"
                src={img2}
                width={25}
                height={50}
                alt="Google"
              />
              <h1 className="text-[12px] font-bold md:font-normal md:text-[13px]">
                Wishlist
              </h1>
              <p className="text-[14px] text-center md:text-start md:text-[15px]">
                Save your favourites
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <Image
                className=" mb-4"
                src={img3}
                width={25}
                height={50}
                alt="Google"
              />
              <h1 className="text-[12px] font-bold md:font-normal md:text-[13px]">
                Early access
              </h1>
              <p className="text-[14px] text-center md:text-start md:text-[15px]">
                Exclusive sale perks
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white px-[6%] py-8 mt-6 ">
          <form>
            <input
              className="w-full h-[50px]"
              type="text"
              placeholder="Email Address"
            ></input>
            <div className="relative">
              <input
                className="w-full h-[50px] mt-4 relative"
                type="password"
                placeholder="Password"
              ></input>
              <h1 className=" absolute top-[33px] right-4 underline text-[13px] font-bold hover:text-blue-600 hover:no-underline cursor-pointer">
                Show
              </h1>
            </div>
            <h1 className="mt-4 text-[16px]  underline font-serif">
              Forgot Password?
            </h1>
            <button className="bg-black text-white w-full mt-4 py-4 text-xl">
              Log In
            </button>
            <div className="grid grid-cols-[36%_28%_36%] md:grid-cols-[40%_20%_40%] items-center justify-center mt-4">
              <div className=" border-b-2"></div>
              <div className="text-center text-[14px]"> Social Link</div>
              <div className=" border-b-2"></div>
            </div>
          </form>
          {/* <div className="grid grid-cols-2 items-center justify-between mt-4 bg-[#f9f9f9]">
              <div>
              <ImFacebook />
              <h1>Sign In With FaceBook</h1>
              </div>
          </div> */}
          {/* <form className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <button className="bg-black text-white w-full mt-4 py-4 text-xl">Log In</button>
            <div className="grid grid-cols-[40%_20%_40%] items-center justify-center mt-4">
              <div className=" border-b-2"></div>
              <div className="text-center"> Social Link</div>
              <div className=" border-b-2"></div>
            </div>
          </form> */}
        </div>
        <div className="md:grid md:grid-cols-[48%_48%] items-center justify-between  bg-[#f9f9f9] px-[6%]">
              <div className="border-2 border-black  flex items-center gap-6 py-3 px-[15px] mb-3 md:mb-0">
              <ImFacebook className="text-[18px]" />
              <h1 className="text-[14px]">Sign In With FaceBook</h1>
              </div>
              <div className="border-2 border-black  flex items-center gap-6 py-3 px-[15px]">
              <AiOutlineGoogle className="text-[18px]" />
              <h1 className="text-[14px]">Sign In With FaceBook</h1>
              </div>
          </div>
          <div className="grid grid-cols-[37.5%_25%_37.5%] items-center justify-center mt-6 md:mt-10 px-[6%] mb-2">
              <div className=" border-b-2"></div>
              <div className="text-center text-[14px]">Create an Acount</div>
              <div className=" border-b-2"></div>
            </div>
            <div className=" flex justify-center py-5 gap-1 mb-[60px] md:mb-[40px]">
            <h1 className=" flex items-center gap-2">Don't Have an Account? <span  className="flex items-center gap-1 underline">Sign up <IoIosArrowRoundForward className="text-[25px] underline" />  </span></h1>
            </div>
            
      </div>
    </>
  )
}