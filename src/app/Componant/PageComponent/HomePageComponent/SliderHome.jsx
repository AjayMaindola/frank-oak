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
    dots: false,
    infinite: true,
    speed: 500,
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
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  };

  return (
    <>
      <div className="max-w-[1320px] mx-auto h-[300px] md:h-[400px] mt-10  mb-[15px] md:mb-[75px]">
        <div className="flex items-center justify-between px-[12px] py-6 relative">
          <div className="">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-Ysabeau">
              This Just In
            </h1>
          </div>
          <div className="flex items-center gap-[20px] lg:gap-[70px] " >
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
              className={`w-full  bg-slate-180 h-[200px] md:h-[305px] absolute left-0 top-[85px] px-[15px]  `} 
             
            >
              <Slider {...settings}  >
                <div className="h-[180px] md:h-[300px] " >
                    <div className="mr-[10px]"> <Image  src="/images/FeaturedCategories/FC2.webp" width={250} height={250} alt="gg"/></div>
                   
                </div>
                <div className="h-[300px] " >
                    <div className="mr-[10px]"> <Image  src="/images/FeaturedCategories/FC2.webp" width={250} height={250} alt="gg"/></div>
                   
                </div>
                <div className="h-[300px] " >
                    <div className="mr-[10px]"> <Image  src="/images/FeaturedCategories/FC2.webp" width={250} height={250} alt="gg"/></div>
                   
                </div>
                <div className="h-[300px] " >
                    <div className="mr-[10px]"> <Image  src="/images/FeaturedCategories/FC2.webp" width={250} height={250} alt="gg"/></div>
                   
                </div>
                <div className="h-[300px] " >
                    <div className="mr-[10px]"> <Image  src="/images/FeaturedCategories/FC2.webp" width={250} height={250} alt="gg"/></div>
                   
                </div>
              
             
              </Slider>
            </div>

            {/* Men-work */}
            <h1
              onClick={() => UpdateToogle(2)}
              className={`text-lg md:text-xl lg:text-3xl cursor-pointer  ${
                toggle === 2 ? " underline underline-offset-8" : ""
              } `}
            >
              Men's
            </h1>

            <div
              className={`w-full  bg-green-500 h-[305px] absolute left-0 top-[85px] ${
                toggle === 2 ? "" : "hidden"
              } `}
            >
              <h1 className={`text-5xl  text-center mt-12`}>hello men</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
