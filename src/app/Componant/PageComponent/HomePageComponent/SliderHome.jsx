"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { CiHeart } from "react-icons/ci";
export default function SliderHome() {
  let [toggle, setToggle] = useState(1);
  function UpdateToogle(id) {
    setToggle(id);
  }
  let settings = {
    dots: true,
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
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: false,
          arrows: false,
          autoplay: true,

          autoplaySpeed: 1500,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <>
      <div className="  max-w-[1320px] mx-auto mt-[20px] mb-18   md:mt-10 pb-[470px] md:pb-[440px] lg:pb-[430px] xl:pb-[495px]">
        {/* main div ki hight badhaney ke liye pb badhani hai */}
        <div className="flex items-center justify-between px-[12px] md:py-6 relative">
          <div className="">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-Ysabeau">
              This Just In
            </h1>
          </div>
          <div className="flex items-center  gap-5 md:gap-10  ">
            <h1
              onClick={() => UpdateToogle(1)}
              className={`text-lg md:text-xl lg:text-3xl cursor-pointer   ${
                toggle === 1 ? "underline underline-offset-8" : ""
              } `}
            >
              Women's
            </h1>
            {/* women-Div */}

            <div
              id="mySlider"
              className={`w-[100%]   bg-slate-180 absolute left-0 top-[200%] md:top-[120%] px-3 md:px-[6%]  `}
            >
              <Slider {...settings} className="bg-white px-[10px] ">
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
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
              className={`w-[100%]   bg-slate-180 absolute left-0 top-[200%] md:top-[120%] px-3 md:px-[6%]  ${
                toggle === 2 ? "" : "hidden"
              } `}
            >
              <Slider {...settings} className="bg-white px-[10px] ">
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProductItems() {
  return (
    <>
      <div className=" relative pb-40 "> 
        {/* pb deny se image hight badhi */}
        <div className="pr-[12px] w-[100%]">
          <Image
            src="/images/FeaturedCategories/FC4.webp"
            width={252}
            height={10}
            alt="gg"
          />
          <div className=" absolute top-[70%] md:top-[66%] lg:top-[60%] xl:top-[66%]  left-0   ">
            <div className=" flex items-center justify-between mb-2">
              <h1 className=" text-white text-[13px] bg-black px-4 ">New</h1>
              <CiHeart className="mr-4 text-xl" />
            </div>

            <p className="text-[14px] px-2 md:px-1">
              The Frances Recycled Wool Topcoat in Light Greige
            </p>
            <p className="text-[14px] mt-1 px-1">
              <span className="line-through">$449.00</span>{" "}
              <samp className="text-red-600"> $134.97</samp>{" "}
            </p>
            <p className="px-1 text-slate-500 text-[14px] font-bold">2 Color</p>
           
          </div>
        </div>
      </div>
    </>
  );
}
