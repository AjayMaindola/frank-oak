import Image from "next/image";
import React from "react";
import imgwomen from "../../../../../public/images/megamenueimg/women.jpeg";
import imgman from "../../../../../public/images/megamenueimg/men.jpeg";
export default function Sale() {
  return (
    <>
      <div className=" grid grid-cols-[15%_15%_35%_auto] gap-6 px-[3%] ">
        <div className="border-r-[1px] border-gray-300   py-2 mt-2">
          <h1 className=" underline underline-offset-8 capitalize">
            Women's Sale
          </h1>
          <ul className="mt-5 text-[12px] md:text-[14px] capitalize">
            <li className="mb-3">Shop All</li>
            <li className="mb-3">Jackets</li>
            <li className="mb-3">Sweters</li>
            <li className="mb-3">Tops</li>
            <li className="mb-3">Bottoms</li>
          </ul>
        </div>
        <div className=" px-[20px]  py-2 mt-2">
          <h1 className=" underline underline-offset-8 capitalize">
            Men's Sale
          </h1>
          <ul className="mt-5 text-[12px] md:text-[14px] capitalize">
            <li className="mb-3">Shop All</li>
            <li className="mb-3">Jackets</li>
            <li className="mb-3">Sweters</li>
            <li className="mb-3">Tops</li>
            <li className="mb-3">Bottoms</li>
          </ul>
        </div>
        <div className=" mt-5 relative">
          <Image
            className="object-cover w-[100%] h-[260px]"
            src={imgwomen}
            alt="sale"
          />
          <h1 className=" absolute bottom-4 left-5 text-white font-Ysabeau text-[22px] capitalize">Women's Sale</h1>
        </div>
        <div className=" mt-5 border relative">
          <Image
            className="object-cover w-[100%] h-[260px]"
            src={imgman}
            alt="sale"
          />
           <h1 className=" absolute bottom-4 left-5 text-white font-Ysabeau text-[22px] capitalize">Men's Sale</h1>
        </div>
      </div>
    </>
  );
}
