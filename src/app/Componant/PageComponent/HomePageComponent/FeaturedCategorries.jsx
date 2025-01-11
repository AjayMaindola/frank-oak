import React from 'react'
import Image from 'next/image'
export default function FeaturedCategorries() {
  return (
    <>
    <div className='w-full'>
    <div className='max-w-[1320px] mx-auto '>
    <h1 className=" pt-[10px] px-[20px] text-center md:text-start text-[25px] lg:text-[32px]">Featured Categories</h1>
    </div>
       
        <div className="max-w-[1320px] mx-auto grid-cols-2 grid lg:grid-cols-4 mt-5 justify-between gap-3 px-[12px] lg:gap-5">
          <div className='' >
          <Image
                      className="dark:invert"
                      src="/images/FeaturedCategories/FC1.webp"
                      alt="Next.js logo"
                      width={494}
                      height={38}
                      priority
                    />
                    <h1 className='mt-2 px-[2px]'>Womens Winter Jackets</h1>
          </div>
          <div>
          <Image
                      className="dark:invert"
                      src="/images/FeaturedCategories/FC2.webp"
                      alt="Next.js logo"
                      width={494}
                      height={38}
                      priority
                    />
                    <h1 className='mt-2'>Womens Sweaters</h1>
          </div>
          <div>
          <Image
                      className="dark:invert"
                      src="/images/FeaturedCategories/FC3.webp"
                      alt="Next.js logo"
                      width={494}
                      height={38}
                      priority
                    />
                    <h1 className='mt-2'>Mens Winter Jackets</h1>
          </div>
          <div>
          <Image
                      className="dark:invert"
                      src="/images/FeaturedCategories/FC4.webp"
                      alt="Next.js logo"
                      width={494}
                      height={38}
                      priority
                    />
                    <h1 className='mt-2'>Mens Sweaters</h1>
          </div>
       
        </div>
    </div>
      
    </>
  )
}
