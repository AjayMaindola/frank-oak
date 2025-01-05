"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiMagnifyingGlass, HiOutlineUserCircle } from "react-icons/hi2";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuMenu } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import phmenueimg from "../../../../public/images/megamenueimg/PHmenue/fleg.svg";
import cad from "../../../../public/images/megamenueimg/PHmenue/cad.svg";
import LoginModal from "@/app/Modal/LoginModal";
import { IoIosClose } from "react-icons/io";
import LogoImg from "../../../../public/images/logo.png";
import FAQ, { FaqItem } from "../FAQ";
// export start function header------------------>
export default function Header() {
  let [usdStatu, setUsdstatus] = useState(false);
  let [megaMenuShow, setMegaMenuShow] = useState(-1);
  let [faqShowHide, setFaqShowHide] = useState(false);
  const [openOffcanvas, setOpenOffcancas] = useState(false);
  let [loginModal, setLoginModal] = useState(false);
  return (
    <>
      {loginModal && (
        <LoginModal setLoginModal={setLoginModal} loginModal={loginModal} />
      )}
      <header className="w-[100%] bg-white items-center sticky top-0 md:shadow-xl gap-2 md:gap-0  grid grid-cols-[55%_auto] md:grid md:grid-cols-[70%_auto] px-[15px] lg:px-[30px] py-[15] md:py-0  ">
        <div className=" sm:grid sm:grid-cols-[50%_auto] md:grid md:grid-cols-[20%_auto] items-center justify-start   ">
          <div className=" flex items-center  ">
            <div className="">
              <LuMenu
                onClick={() => setOpenOffcancas(!openOffcanvas)}
                className="text-[25px] md:hidden"
              />
              <div
                onClick={() => setOpenOffcancas(false)}
                className={`w-[100%] bg-black opacity-50 h-[100%] overflow-y-auto    fixed top-0 left-0 ${
                  openOffcanvas ? "block" : "hidden"
                } `}
              >
                {" "}
              </div>
              <div
                className={`w-[70%] h-[100%] overflow-y-auto transition-all duration-500 bg-white fixed top-0 ${
                  openOffcanvas ? "left-0" : "left-[-80%]"
                }`}
              >
                <div className="border   bg-[#daff54] pb-[40px] ">
                  <div className="px-[15px] py-[5px] flex items-center justify-between bg-white">
                    <CiSearch className=" text-[20px] " />
                    <IoIosClose
                      onClick={() => setOpenOffcancas(false)}
                      className="text-[30px]"
                    />
                  </div>
                  <div className="w-[100%]">
                    <div className="bg-[#e7e5e5]  px-[15px]">
                      <ul className=" flex  justify-between text-[14px]  items-center  w-[100%] ">
                        <li className=" py-[5px] cursor-pointer uppercase ">
                          {" "}
                          Winter Sale
                        </li>
                        <li className="px-[2px] py-[5px] cursor-pointer">
                          Women
                        </li>
                        <li className="px-[2px] py-[5px] cursor-pointer">
                          Men
                        </li>
                        <li className="px-[2px] py-[5px] cursor-pointer">
                          About Us
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-3">
                    <FAQ>
                      <FaqItem title="Womens Collection">
                        <ul className="px-[8px]">
                          <li>Shop All</li>
                          <li>Jackets</li>
                          <li>Sweters</li>
                          <li>Tops</li>
                          <li>Bottoms</li>
                        </ul>
                      </FaqItem>
                      <FaqItem title="Womens Collection">
                        <ul className="px-[8px]">
                          <li>Shop All</li>
                          <li>Jackets</li>
                          <li>Sweters</li>
                          <li>Tops</li>
                          <li>Bottoms</li>
                        </ul>
                      </FaqItem>
                    </FAQ>
                  </div>
                  <div className=" max-w-[95%] mx-auto  h-[120px] object-contain mt-4 bg-[url('/images/megamenueimg/PHmenue/Menu_tile.jpg')] bg-center bg-cover">
                    <h1 className="text-white text-[17px] px-[30px] pt-[80px]">
                      Women's Witer Sale
                    </h1>
                  </div>
                  <div className=" max-w-[95%] mx-auto  h-[120px] object-contain mt-4 bg-[url('/images/megamenueimg/PHmenue/Menu-male.jpg')] bg-center bg-cover">
                    <h1 className="text-white text-[17px] px-[30px] pt-[80px]">
                      Men's Witer Sale
                    </h1>
                  </div>
                </div>
                <div
                  onClick={() => setUsdstatus(!usdStatu)}
                  className="w-[100%]  bg-slate-200 py-1 px-[15px]"
                >
                  <div className="flex items-center">
                    <Image
                      className="mr-[5px]"
                      src={phmenueimg}
                      width="60px"
                      height="30px"
                      alt="img1"
                    />
                    <h1 className="mr-[5px]">$USD</h1>

                    <IoChevronDownOutline />
                  </div>
                </div>
                <div
                  className={` bg-slate-200 ${
                    usdStatu == true ? "hidden" : "block"
                  }`}
                >
                  <div className="px-[25px] pt-[15px] flex item ">
                    <Image
                      className="mr-[5px]"
                      src={cad}
                      width="60px"
                      height="30px"
                      alt="img1"
                    />
                    <h1 className="mr-[5px]">$CAD</h1>
                  </div>
                  <div className="px-[25px] mt-[18px] pb-[15px] flex item ">
                    <Image
                      className="mr-[5px]"
                      src={phmenueimg}
                      width="60px"
                      height="30px"
                      alt="img1"
                    />
                    <h1 className="mr-[5px]">$USD</h1>
                  </div>
                </div>
                  <FAQ>
                  <FaqItem title="About-Us">
                        <ul className="px-[8px]">
                          <li>Who We Are</li>
                          <li>Jackets</li>
                          <li>Sweters</li>
                          <li>Tops</li>
                          <li>Bottoms</li>
                        </ul>
                      </FaqItem>
                      <FaqItem title="About-Us">
                        <ul className="px-[8px]">
                          <li>Who We Are</li>
                          <li>Jackets</li>
                          <li>Sweters</li>
                          <li>Tops</li>
                          <li>Bottoms</li>
                        </ul>
                      </FaqItem>
                      <FaqItem title="About-Us">
                        <ul className="px-[8px]">
                          <li>Who We Are</li>
                          <li>Jackets</li>
                          <li>Sweters</li>
                          <li>Tops</li>
                          <li>Bottoms</li>
                        </ul>
                      </FaqItem>
                  </FAQ>

              </div>
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
          <LiaShoppingBagSolid />
        </div>
      </header>
    </>
  );
}
