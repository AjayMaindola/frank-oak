import Image from "next/image";
import React from "react";
import { Label, Radio } from "flowbite-react";
import { CiInstagram } from "react-icons/ci";

export default function Footer() {
  return (
    <>
 <div className="bg-black text-white  mt-5 w-[100%] pb-[60px]   ">
 <div className=" max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 justify-between items-center gap-5 text-white  ">
        <div className="flex flex-col justify-center items-center mt-5">
          <Image
            className="dark:invert"
            src="/images/bannerMid/bannerM1.svg"
            alt="Next.js logo"
            width={50}
            height={38}
            priority
          />
          <h1 className="mt-6 lg:text-[22px] pb-3">Free Shipping</h1>
          <h1 className="text-[13px]">On orders over $99.</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <Image
            className="dark:invert"
            src="/images/bannerMid/bannerM2.svg"
            alt="Next.js logo"
            width={40}
            height={38}
            priority
          />
          <h1 className="mt-6 lg:text-[22px] pb-3">Extended Returns</h1>
          <h1 className="text-[13px]">until January 12th</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <Image
            className="dark:invert"
            src="/images/bannerMid/bannerM3.png"
            alt="Next.js logo"
            width={35}
            height={35}
            priority
          />
          <h1 className="mt-6 lg:text-[22px] pb-3">Frank's Club</h1>
          <h1 className="text-[13px] text-center">Earn points and get rewards.</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <Image
            className="dark:invert"
            src="/images/bannerMid/bannerM4.svg"
            alt="Next.js logo"
            width={38}
            height={38}
            priority
          />
          <h1 className="mt-6 lg:text-[22px] pb-3">Buy Now, Pay Later</h1>
          <h1 className="text-[13px]">On orders over $99.</h1>
        </div>
      </div>
      <div className="  text-white md:grid md:grid-cols-[33%_33%_33%] lg:grid lg:grid-cols-[22%_13%_13%_13%_30%] xl:grid-cols-[15%_15%_15%_15%_30%] max-w-[1320px] mx-auto  mt-[80px]  gap-1 lg:gap-6  mr-0 xl:mr-6 px-6  ">
        <div className=" lg:pl-6  flex flex-col items-center   ">
          <div className=" flex flex-col ">
          <Image
            className="dark:invert"
            src="/images/Footer/LogoW.svg"
            alt="Next.js logo"
            width={80}
            height={38}
            priority
          />
          </div>
      
          <div className="mt-8 flex lg:gap-2 items-center  ">
            <CiInstagram className="text-[30px]" />

           <div className="w-[30px]">
           <Image
              className="dark:invert"
              src="/images/Footer/LogoF.svg"
              alt="Next.js logo"
              width={30}
              height={38}
              priority
            />
           </div>
           <div className="w-[30px]">
           <Image
              className="dark:invert"
              src="/images/Footer/LogoT.svg"
              alt="Next.js logo"
              width={30}
              height={38}
              priority
            />
           </div>
            <Image
              className="dark:invert"
              src="/images/Footer/LogoP.svg"
              alt="Next.js logo"
              width={30}
              height={38}
              priority
            />
            <Image
              className="dark:invert"
              src="/images/Footer/LogoM.svg"
              alt="Next.js logo"
              width={30}
              height={38}
              priority
            />
            <Image
              className="dark:invert"
              src="/images/Footer/LogoI.svg"
              alt="Next.js logo"
              width={20}
              height={20}
              priority
            />
          </div>
          <div className="mt-8 pb-5  ">
            <Image
              className="dark:invert"
              src="/images/Footer/LogoB.svg"
              alt="Next.js logo"
              width={40}
              height={20}
              priority
            />
          </div>
        </div>
        <div className="text-center lg:text-start ">
          <h1 className="text-[20px] pb-5">About Us</h1>
          <ul>
            <li className="pb-3 text-[14px] cursor-pointer">Who we are</li>
            <li className="pb-3 text-[14px] cursor-pointer">
              Sustainable Practices
            </li>
            <li className="pb-3 text-[14px] cursor-pointer">Design Ideology</li>
            <li className="pb-3 text-[14px] cursor-pointer">Fabrics</li>
            <li className="pb-3 text-[14px] cursor-pointer">Circular denim™</li>
            <li className="pb-3 text-[14px] cursor-pointer">
              Partners and factories
            </li>
          </ul>
        </div>
        <div className="text-center lg:text-start">
          <h1 className="text-[20px] pb-5">Discover</h1>
          <ul>
            <li className="pb-3 text-[14px] cursor-pointer">Gift Cards</li>
            <li className="pb-3 text-[14px] cursor-pointer">Frank's Club</li>
            <li className="pb-3 text-[14px] cursor-pointer">
              Give $15, Get $15
            </li>
            <li className="pb-3 text-[14px] cursor-pointer">Affiliate</li>
            <li className="pb-3 text-[14px] cursor-pointer">Blog</li>
            <li className="pb-3 text-[14px] cursor-pointer">Work with us</li>
            <li className="pb-3 text-[14px] cursor-pointer">Our Stores</li>
          </ul>
        </div>
        <div className=" text-center lg:text-start">
          <h1 className="text-[20px] pb-5">Customer Care</h1>
          <ul>
            <li className="pb-3 text-[14px] cursor-pointer">
              Shipping Information
            </li>
            <li className="pb-3 text-[14px] cursor-pointer">
              Returns & Exchanges
            </li>
            <li className="pb-3 text-[14px] cursor-pointer">Coupon Codes</li>
            <li className="pb-3 text-[14px] cursor-pointer">F.A.Q.</li>
            <li className="pb-3 text-[14px] cursor-pointer">
              Terms & Conditions
            </li>
            <li className="pb-3 text-[14px] cursor-pointer">Refund Policy</li>
            <li className="pb-3 text-[14px] cursor-pointer">Privacy policy</li>
            <li className="pb-3 text-[14px] cursor-pointer">
              Accessibility Statement
            </li>
            <li className="pb-3 text-[14px] cursor-pointer">
              Customer Data Requests
            </li>
          </ul>
        </div>
        {/* <div></div> */}
        <div className=" md:px-[15px] text-center lg:text-start ">
          <h1 className="text-[20px] pb-5 md:text-center lg:text-start">Stay in touch</h1>
          <p className="text-[13px] text-justify">
            Join our newsletter and stay in the know about new collections,
            outfit inspiration, sales, and more.
          </p>
          <div className="mt-6 text-white text-center lg:text-start">
            <input className="w-[80%] bg-[#1f2322] text-white" type="email" placeholder="Email" />
            <input className="w-[80%] bg-[#1f2322] text-white  mt-5" type="email" placeholder="First Name" />
          </div>
          <div className="flex mt-3 ">
            <h1 className="mr-1  ">I shop for</h1>
            <div className="flex items-center gap-2 mr-3">
              <Radio id="united-state" name="countries" value="USA" />
              <Label className="text-white" htmlFor="united-state">
                Women
              </Label>
            </div>
            <div className="flex items-center gap-2 mr-3">
              <Radio id="united-state" name="countries" value="USA" />
              <Label className="text-white" htmlFor="united-state">
                Men
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="united-state" name="countries" value="USA" />
              <Label className="text-white" htmlFor="united-state">
                All
              </Label>
            </div>
           
            
          </div>
          <div className="mt-6 border text-center py-3">
           <button>Subscribe</button>
            
          </div>
        </div>
      </div>
  </div>
    
    </>
  );
}
