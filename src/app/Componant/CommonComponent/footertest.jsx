import { CiInstagram } from "react-icons/ci";
import imgF1 from"../../../../public/images/bannerMid/bannerM1.svg"
import imgF2 from"../../../../public/images/bannerMid/bannerM2.svg"
import imgF3 from"../../../../public/images/bannerMid/bannerM3.png"
import imgF4 from"../../../../public/images/bannerMid/bannerM4.svg"
import imgF5 from"../../../../public/images/Footer/LogoW.svg"
import imgF6 from"../../../../public/images/Footer/LogoF.svg"
import imgF7 from"../../../../public/images/Footer/LogoT.svg"
import imgF8 from"../../../../public/images/Footer/LogoP.svg"
import imgF9 from"../../../../public/images/Footer/LogoM.svg"
import imgF10 from"../../../../public/images/Footer/LogoI.svg"
import imgF11 from"../../../../public/images/Footer/LogoB.svg"


<div className="bg-black text-white px-[2.8%] md:px-[3%] lg:px-[5%] pt-[30px] mt-4  ">
<div className="  md:mt-[20px] w-[100%] grid md:grid-cols-4 grid-cols-2 items-center justify-between gap-3 md:gap-0  ">
  <div className="flex flex-col items-center ">
   <Image src={imgF1} width={30} height={30} alt="img1" />
    <h1 className="text-[15px] md:text-[18px] lg:text-[22px] text-center mt-3 md:mt-6">Free Shipping</h1>
    <h1 className="text-[14px] md:text-[12px]  lg:text-[15px] mt-3">On orders over $99.</h1>
  </div>
  <div className="flex flex-col items-center ">
  <Image src={imgF2} width={25} height={25}  alt="img2" />
    <h1 className="text-[15px] md:text-[18px] lg:text-[22px] text-center mt-3 md:mt-6">Free Returns</h1>
    <h1 className="text-[14px] md:text-[12px]  lg:text-[15px] mt-3">On all orders.</h1>
  </div>
  <div className="flex flex-col items-center ">
  <Image src={imgF3} width={25} height={25}  alt="img3"/>
    <h1 className="text-[15px] md:text-[18px] lg:text-[22px] text-center mt-3 md:mt-6">Frank's Club</h1>
    <h1 className="text-center text-[14px] md:text-[12px]  lg:text-[15px] mt-3">Earn points and get rewards.</h1>
  </div>
  <div className="flex flex-col items-center  ">
  <Image src={imgF4} width={25} height={25}  alt="img4" />
    <h1 className="text-[15px] md:text-[18px] lg:text-[22px] text-center mt-3 md:mt-6">Buy Now, Pay Later</h1>
    <h1 className="text-center text-[14px] md:text-[12px]  lg:text-[15px] mt-3">Select Klarna at checkout.</h1>
  </div>
</div>
<div className=" w-[100%] mt-[100PX] grid grid-cols-[50%_auto]  md:grid-cols-[20%_15%_15%_15%_auto] ">
    <div className="">
    <Image src={imgF5} width={70} height={75} alt="imgF5" />
    <div className="flex items-center md:gap-1 lg:gap-2  mt-8">
    <CiInstagram className="text-[28px] text-white" />
    <Image src={imgF6} width={23}  height={75} alt="imgF6"/>
    <Image src={imgF7} width={23} height={75}  alt="imgF7" />
    <Image src={imgF8} width={23} height={75}  alt="imgF8" />
    <Image src={imgF9} width={23} height={75}  alt="imgF9"/>
    <Image src={imgF10} width={23} height={75} />
    </div>
    <Image className="mt-10" src={imgF11} width={40} height={75}  alt="imgF10" />
    </div>
    <div className="pl-[8px]">
    <h1 className="text-[20px] md:text-[22px] lg:text-[25px] pb-[20px] ">About us</h1>
        <ul>
        <li className="pb-[20px] text-[14px]">Who We Are</li>
        <li className="pb-[20px] text-[14px]">Sustainable Practices</li>
        <li className="pb-[20px] text-[14px]">Design Ideology</li>
        <li className="pb-[20px] text-[14px]">Fabrics</li>
        <li className="pb-[20px] text-[14px]">Circular denim™</li>
        <li className="pb-[20px] text-[14px]">Partners and factories</li>
        </ul>
   
    </div>
</div>
</div>