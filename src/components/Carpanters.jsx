"use client"
import { CARPANTERS_DATA } from '@/utils/helper'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Button from './common/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Carpanters() {

    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])

    return (
        <div className='bg-offwhite border border-gray-light xl:pr-16 overflow-hidden'>
            <div className='max-w-360 mx-auto'>
                <div className='flex xl:flex-row flex-col xl:items-center xl:gap-16'>

                    {/* Left Side - Carpenter Image */}
                    <Image
                        data-aos="fade-right"
                        data-aos-duration="900"
                        className='w-full h-full xl:max-w-177 max-w-full lg:max-h-238.25 sm:max-h-[500px] max-h-[350px]'
                        src="/assets/images/webp/carpanters-img.webp"
                        alt="logo-image"
                        width={708}
                        height={953}
                    />

                    {/* Right Side - Content */}
                    <div className='xl:max-w-[604px] max-w-full max-xl:pb-16 max-xl:pt-10 max-xl:px-4'>
                        <p data-aos="fade-up" data-aos-delay="100" className='font-jost font-medium text-xs text-gray-primary leading-150 tracking-20 uppercase'>About Eggert Builders</p>
                        <h2 data-aos="fade-up" data-aos-delay="200" className='pt-4 pb-3 xl:max-w-[457px] max-w-full font-cormorant font-normal lg:text-custom-6xl md:text-5xl text-4xl leading-120 tracking-normal text-dark-primary'>
                            We are carpenters by trade. <span className='italic'>Craftsmen</span> at heart.
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="300" className='font-jost font-normal sm:text-base text-xs leading-150 tracking-normal text-gray-dark'>Eggert Builders is a family-owned custom home and light commercial builder based in Saint John, Indiana. For decades, we've served Northwest Indiana families with the same guiding belief: every home we build should be as thoughtfully crafted as if we were building it for ourselves.</p>
                        <p data-aos="fade-up" data-aos-delay="400" className='pt-3 font-jost font-normal sm:text-base text-xs leading-150 tracking-normal text-gray-dark'>From helping you choose the right lot to handing over the keys, we are your partner from start to finish — with complete transparency at every step.</p>

                        {/* Features List */}
                        <div className='flex flex-col gap-2 py-10'>
                            {CARPANTERS_DATA.map((item, i) => (
                                <div key={i} data-aos="fade-left" data-aos-delay={500 + i * 100} className='flex items-center gap-5'>
                                    <div className='border max-w-6 border-gray-dark w-full'></div>
                                    <span className='font-jost font-normal text-base leading-150 tracking-normal text-gray-dark'>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <div data-aos="fade-up" data-aos-delay="800">
                            <Button text={"work with us"} variant='dark' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Carpanters