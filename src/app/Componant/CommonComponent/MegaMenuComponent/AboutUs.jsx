import Image from "next/image";
import React from "react";
import About1 from "../../../../../public/images/megamenueimg/About1.jpeg";
import About2 from "../../../../../public/images/megamenueimg/About2.jpeg";
import About3 from "../../../../../public/images/megamenueimg/About3.jpeg";
import About4 from "../../../../../public/images/megamenueimg/About4.jpeg";
import About5 from "../../../../../public/images/megamenueimg/About5.jpeg";
import About6 from "../../../../../public/images/megamenueimg/About6.jpeg";
export default function AboutUs() {
  return (
    <>
      <div className=" grid grid-cols-[16%_16%_16%_16%_16%_16%] gap-3 px-[3%] ">
        <div className=" mt-5 relative">
          <Image
            className="object-cover w-[100%] h-[260px]"
            src={About1}
            alt="sale"
          />
          <h1 className=" absolute bottom-4 left-5 text-white font-Ysabeau text-[22px] capitalize">
            Winter Accessories
          </h1>
        </div>
        <div className=" mt-5 relative">
          <Image
            className="object-cover w-[100%] h-[260px]"
            src={About2}
            alt="sale"
          />
          <h1 className=" absolute bottom-4 left-5 text-white font-Ysabeau text-[22px] capitalize">
            Winter Accessories
          </h1>
        </div>
        <div className=" mt-5 relative">
          <Image
            className="object-cover w-[100%] h-[260px]"
            src={About3}
            alt="sale"
          />
          <h1 className=" absolute bottom-4 left-5 text-white font-Ysabeau text-[22px] capitalize">
            Winter Accessories
          </h1>
        </div>
        <div className=" mt-5 relative">
          <Image
            className="object-cover w-[100%] h-[260px]"
            src={About4}
            alt="sale"
          />
          <h1 className=" absolute bottom-4 left-5 text-white font-Ysabeau text-[22px] capitalize">
            Winter Accessories
          </h1>
        </div>
        <div className=" mt-5 relative">
          <Image
            className="object-cover w-[100%] h-[260px]"
            src={About5}
            alt="sale"
          />
          <h1 className=" absolute bottom-4 left-5 text-white font-Ysabeau text-[22px] capitalize">
            Winter Accessories
          </h1>
        </div>
        <div className=" mt-5 relative">
          <Image
            className="object-cover w-[100%] h-[260px]"
            src={About6}
            alt="sale"
          />
          <h1 className=" absolute bottom-4 left-5 text-white font-Ysabeau text-[22px] capitalize">
            Winter Accessories
          </h1>
        </div>
      </div>
    </>
  );
}
