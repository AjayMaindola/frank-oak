"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiMagnifyingGlass, HiOutlineUserCircle } from "react-icons/hi2";
import { Drawer } from "flowbite-react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuMenu } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import LoginModal from "@/app/Modal/LoginModal";
import LogoImg from "../../../../public/images/logo.png";
export default function Header() {


  let [megaMenuShow, setMegaMenuShow] = useState(-1);
  const [openphMenu, setopenphMenu] = useState(-1);
  const handleClose = () => setIsOpen(false);

  let [loginModal, setLoginModal] = useState(false);
  return (
    <>
      {loginModal && (
        <LoginModal setLoginModal={setLoginModal} loginModal={loginModal} />
      )}

      <header className="w-[100%] bg-white items-center sticky top-0 md:shadow-xl gap-2 md:gap-0  grid grid-cols-[55%_auto] md:grid md:grid-cols-[70%_auto] px-[15px] lg:px-[30px] py-[15] md:py-0  ">
        <div className=" sm:grid sm:grid-cols-[50%_auto] md:grid md:grid-cols-[20%_auto] items-center justify-start   ">
          <div className=" flex items-center  ">
            <div>
              <LuMenu
                onClick={()=>setopenphMenu(1)}
                
                className="text-[25px] md:hidden"
              />
              {openphMenu ==1 &&(
                  <div className={`w-[75%] bg-red-500 h-[300px] fixed transition-all duration-500  ${openphMenu ? "left-0" : "left-[-75%]"}
                  
                  top-0`}>
                    <h1  onClick={()=>setopenphMenu(-1)} className=" absolute top-[20px] right-5 text-[40px]">x</h1>
                  </div>
                  
              )}
             
            </div>
            <div>
              <Image src={LogoImg} width="60px" height="30px" alt="img1" />
            </div>
          </div>
          <div className=" mr-[10px] lg:mr-[40px] ml-[10px]  lg:ml-[40px] hidden md:block">
            <nav>
              <ul className="flex items-center gap-1  lg:text-[16px] text-[12px] ">
                <li
                  onMouseEnter={() => setMegaMenuShow(1)}
                  onMouseLeave={() => setMegaMenuShow(-1)}
                  className="px-[10px] py-[20px]  uppercase cursor-pointer"
                >
                  Winter Sale
                  {megaMenuShow == 1 && (
                    <div className="w-full bg-red-500 h-[300px] absolute left-0 top-[100%]"></div>
                  )}
                </li>
                <li
                  onMouseEnter={() => setMegaMenuShow(2)}
                  onMouseLeave={() => setMegaMenuShow(-1)}
                  className="px-[10px]  py-[20px] cursor-pointer"
                >
                  Women
                  {megaMenuShow == 2 && (
                    <div className="w-full bg-green-500 h-[300px] absolute left-0 top-[100%]"></div>
                  )}
                </li>
                <li
                  onMouseEnter={() => setMegaMenuShow(3)}
                  onMouseLeave={() => setMegaMenuShow(-1)}
                  className="px-[10px] py-[20px] cursor-pointer"
                >
                  Men
                  {megaMenuShow == 3 && (
                    <div className="w-full bg-pink-500 h-[300px] absolute left-0 top-[100%]"></div>
                  )}
                </li>
                <li
                  onMouseEnter={() => setMegaMenuShow(4)}
                  onMouseLeave={() => setMegaMenuShow(-1)}
                  className="px-[10px] py-[20px] cursor-pointer"
                >
                  About Us
                  {megaMenuShow == 4 && (
                    <div className="w-full bg-neutral-500 h-[300px] absolute left-0 top-[100%]"></div>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* icons part */}
        <div className="flex items-center justify-end pr-2 lg:pr-8 text-[20px] lg:text-[25px] gap-3 md:gap-3 lg:gap-6 ">
          <HiMagnifyingGlass />
          <HiOutlineUserCircle onClick={() => setLoginModal(true)} />
          <IoIosHeartEmpty />
          <LiaShoppingBagSolid onClick={() => setIsOpen(1)} />
          {/* <Drawer open={isOpen} onClose={handleClose} position="right">
            <Drawer.Header title="Drawer" />
            <Drawer.Items>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                Supercharge your hiring by taking advantage of our&nbsp;
                <a
                  href="#"
                  className="text-cyan-600 underline hover:no-underline dark:text-cyan-500"
                >
                  limited-time sale
                </a>
                &nbsp;for Flowbite Docs + Job Board. Unlimited access to over
                190K top-ranked candidates and the #1 design job board.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <a
                  href="#"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Learn more
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Get access&nbsp;
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </Drawer.Items>
          </Drawer> */}
        </div>
      </header>
    </>
  );
}
