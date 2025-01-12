import React from "react";
import Image from "next/image";
export default function MadeforGoodLiving() {
  return (
    <>
      <div className="w-full px-[10px] md:px-[10px] md:grid md:grid-cols-[50%_50%] md:mt-8 ">
        <div className=" max-w-[1320px] mx-auto   ">
          <h1 className="font-bold text-[20px] text-center py-4 mt-8  md:py-10 lg:py-14 mb-2 md:mb-5  lg:text-start lg:px-6 lg:text-[25px] xl:px-14">
            Made for Good Living.
          </h1>
          <p className=" md:py-5 lg:py-8 text-justify px-6 text-[16px] md:text-[18px] lg:text-[22px] xl:px-14 ">
            Born and raised in Montreal, Frank And Oak is dedicated to creating
            conscious collections that seamlessly fit into your everyday life.
          </p>
          <h1 className=" py-10 px-6 pb-8 text-[20px] font-bold lg:text-[22px] lg:mt-8 cursor-pointer underline xl:px-14">
            Lern More
          </h1>
        </div>
        {/* Image section */}
        <div className="  grid grid-cols-2  gap-3 lg:gap-5  ">
          <div className=" z-20 relative h-[269px] bg-[url('/images/MadeforGoodLiving/MadeforGood1.jpg')] bg-no-repeat bg-bottom bg-cover">
          <h1 className="md:text-[16px] lg:text-[20px] text-white absolute  bottom-3 left-1 md:left-3 lg:left-3"> Sustainable Practices</h1>
          </div>
          <div className= " relative h-[269px] bg-[url('/images/MadeforGoodLiving/MadeforGood2.jpg')] bg-no-repeat bg-cover ">
          <h1 className="md:text-[16px] lg:text-[20px] text-white absolute  bottom-3 left-1 md:left-3 lg:left-3"> Design Philosophy</h1>
          </div>
          <div className=" relative h-[269px] bg-[url('/images/MadeforGoodLiving/MadeforGood3.jpg')] bg-no-repeat bg-cover ">
          <h1 className="md:text-[16px] lg:text-[20px] text-white absolute  bottom-3 left-1 md:left-3 lg:left-3"> Fabrics Innovation</h1>
          </div>
          <div className=" relative h-[269px] bg-[url('/images/MadeforGoodLiving/MadeforGood4.webp')] bg-no-repeat bg-cover ">
          <h1 className="md:text-[16px] lg:text-[20px] text-white absolute  bottom-3 left-1 md:left-3 lg:left-3"> Partners and Factories </h1>
          </div>
        </div>
      </div>
    </>
  );
}
