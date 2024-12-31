import React from "react";
import Image from "next/image";
export default function MadeforGoodLiving() {
  return (
    <>
      <div className="w-full md:px-[30px] md:grid md:grid-cols-[50%_50%] mt-0 md:mt-[40px]  ">
        <div>1</div>
        <div className="px-[15px] md:px-[20px] md:grid md:grid-cols-2  md:gap-4 ">
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
