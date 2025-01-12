"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
export default function SliderHome() {
  let [toggle, setToggle] = useState(1);
  function UpdateToogle(id) {
    setToggle(id);
  }
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    autoplay: true,
   
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            dots: false,
            arrows:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  };

  return (
    <>
      <div className="max-w-[1320px] mx-auto mt-[20px]  md:mt-10 pb-[200px] md:pb-[300px] lg:pb-[280px] xl:pb-[350px] ">
        <div className="flex items-center justify-between px-[12px] md:py-6 relative">
          <div className="">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-Ysabeau">
              This Just In
            </h1>
          </div>
          <div className="flex items-center  gap-5 md:gap-10  " >
            <h1
              onClick={() => UpdateToogle(1)}
              className={`text-lg md:text-xl lg:text-3xl cursor-pointer   ${
                toggle === 1 ? "underline underline-offset-8" : ""
              } `}
            >
              Women's
            </h1>
            {/* women-Div */}

            <div id="mySlider"
              className={`w-[100%]   bg-slate-180  absolute left-0 top-[200%] md:top-[120%] px-3 md:px-[6%]  `} 
             
            >
                 <Slider {...settings} className="bg-white px-[10px]"  >
                <div className="h-[180px]  " >
                    <div className="pr-[12px] w-[100%]"> <Image  src="/images/FeaturedCategories/FC4.webp" width={252} height={10} alt="gg"/></div>
                   
                </div>
                <div className=" " >
                    <div className="pr-[12px] w-[100%]"> <Image  src="/images/FeaturedCategories/FC4.webp" width={252} height={10} alt="gg"/></div>
                   
                </div>
                <div className="" >
                    <div className="pr-[12px] w-[100%]"> <Image  src="/images/FeaturedCategories/FC4.webp" width={252} height={10} alt="gg"/></div>
                   
                </div>
                <div className=" " >
                    <div className="pr-[12px] w-[100%]"> <Image  src="/images/FeaturedCategories/FC4.webp" width={252} height={10} alt="gg"/></div>
                   
                </div>
                <div className="" >
                    <div className="pr-[12px] w-[100%]"> <Image  src="/images/FeaturedCategories/FC4.webp" width={252} height={10} alt="gg"/></div>
                   
                </div>
              
             
              </Slider>
            </div>

            {/* Men-work */}
            <h1
              onClick={() => UpdateToogle(2)}
              className={`text-lg md:text-xl lg:text-3xl cursor-pointer md:mr-3   ${
                toggle === 2 ? " underline underline-offset-8" : ""
              } `}
            >
              Men's
            </h1>

            <div
              className={`w-[100%]   bg-slate-180  absolute left-0 top-[200%] md:top-[120%] px-3 md:px-[6%]  ${
                toggle === 2 ? "" : "hidden"
              } `}
            >
                <Slider {...settings} className="bg-white px-[10px]"  >
                <div className="h-[180px]  " >
                    <div className="pr-[12px] w-[100%]"> <Image  src="/images/FeaturedCategories/FC4.webp" width={252} height={10} alt="gg"/></div>
                   
                </div>
                <div className=" " >
                    <div className="pr-[12px] w-[100%]"> <Image  src="/images/FeaturedCategories/FC4.webp" width={252} height={10} alt="gg"/></div>
                   
                </div>
                <div className="" >
                    <div className="pr-[12px] w-[100%]"> <Image  src="/images/FeaturedCategories/FC4.webp" width={252} height={10} alt="gg"/></div>
                   
                </div>
                <div className=" " >
                    <div className="pr-[12px] w-[100%]"> <Image  src="/images/FeaturedCategories/FC4.webp" width={252} height={10} alt="gg"/></div>
                   
                </div>
                <div className="" >
                    <div className="pr-[12px] w-[100%]"> <Image  src="/images/FeaturedCategories/FC4.webp" width={252} height={10} alt="gg"/></div>
                   
                </div>
              
             
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
