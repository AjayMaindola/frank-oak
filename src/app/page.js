import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
            <div className="  bg-[url('/images/mainBanner/mobileVewsBanner.webp')] bg-no-repeat bg-cover bg-center sm:bg-cover lg:bg-[url('/images/mainBanner/bannerTop.webp')] md:bg-no-repeat md:bg-cover md:left md:bg-top lg:bg-cover lg:bg-center  ">
              <div className=" px-[100px] py-[170px] border ">
                  <h1 className=" pb-[15px] md:pb-0  text-center text-[18px] md:text-start md:text-[30px]  lg:text-[35px] font-Ysabeau text-white ">WINTER SALE</h1>
                  <h2 className=" pb-[15px] md:pb-0  text-center text-[18px]  md:text-start  md:text-[65px] lg:text-[90px] text-[#daff54]  font-Roboto">UP TO 50% OFF</h2>
                  <h3 className=" pb-[15px] md:pb-0  text-center text-white text-[18px] md:text-start md:text-[32px] lg:text-[45px]">+ additional 25% off everything*</h3>
                  <div className=" flex flex-col gap-2 md:block mt-[30px] items-center">
                    <button className=" w-[130px]  bg-[#daff54]  py-[8px] md:mr-[20px] font-Poppins text-[20px]">Women</button>
                    <button className="w-[130px] bg-[#daff54] py-[8px] font-Poppins text-[20px]">Men</button>
                  </div>
             
             
              </div>
            </div>
      </div>

    </>
  );
}
