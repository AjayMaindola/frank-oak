import React from "react";
import Image from "next/image";
export default function MadeforGoodLiving() {
  return (
    <>
      <div className="w-full md:px-[10px] md:grid md:grid-cols-[50%_50%] mt-0 md:mt-[40px]  ">
        <div className="mt-[20px]  md:mt-[70px]">

          <div className="mt-[30px] md:pt-[0px] lg:pt-[20px]">
            <h1 className=" text-[30px] font-semibold md:mt-[80px] lg:mt-[50px] md:text-[30px] lg:text-[40px] font-Poppins text-center">Made for Good Living.</h1>
            <p className=" mt-[30px] text-[18px] px-[30px] md:pt-[30px] md:text-[18px] md:text-justify md:px-[40px]  lg:pt-[50px]  tracking-wide text-justify lg:text-[22px] font-thin lg:px-[100px] md:leading-[35px] lg:leading-[45px]">
            Born and raised in Montreal, Frank And Oak is dedicated to creating conscious collections that seamlessly fit into your everyday life.
            </p>
            <h1 className="text-[20px] px-[30px] mt-[25px] mb-[30px] md:mb-0 lg:pt-[20px] md:pt-[35px]  lg:px-[100px] md:px-[35px] lg:text-[30px] md:text-[25px] font-bold font-Roboto underline underline-offset-4">Lern More</h1>
          </div>



        </div>












        <div className="px-[15px] md:px-[10px] md:grid md:grid-cols-2  md:gap-4 ">
          <div className=" mb-[20px] md:mb-0  h-[375px] bg-[url('/images/MadeforGoodLiving/MadeforGood1.jpg')] bg-no-repeat bg-bottom bg-cover  ">
            <div className="pt-[300px] md:pt-0 mt-0 md:mt-[300px] text-center text-white font-Ysabeau text-[25px] font-bold">
              <h1 className="">Sustainable Practices</h1>
            </div>
          </div>
          <div className="mb-[20px] md:mb-0 h-[375px] bg-[url('/images/MadeforGoodLiving/MadeforGood2.jpg')] bg-no-repeat bg-cover  ">
            <div className="pt-[300px] md:pt-0 mt-0 md:mt-[300px] text-center text-white font-Ysabeau text-[25px] font-bold">
              <h1>Design Philosophy</h1>
            </div>
          </div>
          <div className="mb-[20px] md:mb-0 h-[375px] bg-[url('/images/MadeforGoodLiving/MadeforGood3.jpg')] bg-no-repeat bg-cover  ">
            <div className="pt-[300px] md:pt-0 mt-0 md:mt-[300px] text-center text-white font-Ysabeau text-[25px] font-bold">
              <h1>Fabrics Innovation</h1>
            </div>
          </div>
          <div className="mb-[20px] md:mb-0 h-[375px] bg-[url('/images/MadeforGoodLiving/MadeforGood4.webp')] bg-no-repeat bg-cover  ">
            <div className="pt-[300px] md:pt-0 mt-0 md:mt-[300px] text-center text-white font-Ysabeau text-[25px] font-bold">
              <h1>Partners and Factories</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
