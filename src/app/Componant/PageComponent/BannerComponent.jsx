import Image from "next/image";
import React from "react";
import img1 from "../../../../public/images/bannerMid/bannerM1.svg";
import img2 from "../../../../public/images/bannerMid/returns1.png";
import img3 from "../../../../public/images/bannerMid/bannerM3.png";
import img4 from "../../../../public/images/bannerMid/bannerM4.svg";
export default function BannerComponent() {
  return (
    <>
      <div className="  bg-[url('/images/mainBanner/mobileVewsBanner.webp')] bg-no-repeat bg-cover bg-center sm:bg-cover lg:bg-[url('/images/mainBanner/bannerTop.webp')] md:bg-no-repeat md:bg-cover md:left md:bg-top lg:bg-cover lg:bg-center  ">
        <div className=" px-[100px] py-[170px]  ">
          <h1 className=" pb-[15px] md:pb-0  text-center text-[18px] md:text-start md:text-[30px]  lg:text-[35px] font-Ysabeau text-white ">
            WINTER SALE
          </h1>
          <h2 className=" pb-[15px] md:pb-0  text-center text-[18px]  md:text-start  md:text-[65px] lg:text-[90px] text-[#daff54]  font-Roboto">
            UP TO 50% OFF
          </h2>
          <h3 className=" pb-[15px] md:pb-0  text-center text-white text-[18px] md:text-start md:text-[32px] lg:text-[45px]">
            + additional 25% off everything*
          </h3>
          <div className=" flex flex-col gap-2 md:block mt-[30px] items-center">
            <button className=" w-[130px]  bg-[#daff54]  py-[8px] md:mr-[20px] font-Poppins text-[20px]">
              Women
            </button>
            <button className="w-[130px] bg-[#daff54] py-[8px] font-Poppins text-[20px]">
              Men
            </button>
          </div>
        </div>
     </div>
      <div className=" w-full bg-black">
        <div className="max-w-[950px] mx-auto flex-wrap  flex items-center justify-between py-2 px-[15px] gap-3 md:gap-0 md:px-[15px] lg:px-0 ">
          <div className="flex items-center justify-center   md:flex md:items-center md:justify-start text-white gap-3">
            <Image src={img1} width="60px" height="30px" alt="img1" />
            <h1 className="text-[11px] md:text-[14px] pt-[5px]">Free Shipping over $99</h1>
          </div>
          <div className="flex items-center justify-center   md:flex md:items-center md:justify-start text-white gap-3 ">
            <Image src={img2} width={25} height="20px" alt="img2" />
            <h1 className="text-[11px] md:text-[14px]">Free Returns</h1>
          </div>
          <div className="flex items-center justify-center   md:flex md:items-center md:justify-start text-white gap-3">
            <Image src={img3} width={20} height="30px" alt="img1" />
            <h1 className="text-[11px] md:text-[14px] ">Earn Points</h1>
          </div>
          <div className="flex items-center justify-center   md:flex md:items-center md:justify-start text-white gap-3">
            <Image src={img4} width={30} height="30px" alt="img1" />
            <h1 className="text-[11px] md:text-[14px] pt-[5px]">Buy Now, Pay Later</h1>
          </div>
        </div>
      </div>
    </>
  );
}
