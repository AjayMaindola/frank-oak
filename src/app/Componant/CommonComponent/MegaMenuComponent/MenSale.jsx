import Image from 'next/image'
import React from 'react'
import menCaps from "../../../../../public/images/megamenueimg/menCaps.png";
import MenJacets from "../../../../../public/images/megamenueimg/MenJacets.png";
export default function MenSale() {
  return (
    <>
      <div className=" grid grid-cols-[14%_14%_14%_26%_26%] gap-5 px-[3%] ">
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
                  src={MenJacets}
                  alt="sale"
                />
                <h1 className=" absolute bottom-4 left-5 text-white font-Ysabeau text-[22px] capitalize">
                  Jackets
                </h1>
              </div>
              <div className=" mt-5 relative">
                <Image
                  className="object-cover w-[100%] h-[260px]"
                  src={menCaps}
                  alt="sale"
                />
                <h1 className=" absolute bottom-4 left-5 text-white font-Ysabeau text-[22px] capitalize">
                 Winter Accessories
                </h1>
              </div>
           </div>
    </>
  )
}
