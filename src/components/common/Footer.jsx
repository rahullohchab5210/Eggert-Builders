"use client"
import { FOOTER_LINKS_DATA } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {

    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])

    return (
        <div className='py-12 md:py-20 bg-dark-secondary'>
            <div className='max-w-328 mx-auto max-[1350px]:px-4'>
                <div className='flex flex-col items-center gap-8 lg:flex-row lg::items-center lg:justify-between'>

                    <div data-aos="fade-right" data-aos-offset="-200">
                        <Link href="/" className='cursor-pointer'>
                            <Image
                                className='w-[180px] md:w-[230.86px] h-10'
                                src="/assets/images/webp/logo-img.webp"
                                alt="logo-image"
                                width={230.86}
                                height={40}
                            />
                        </Link>
                    </div>

                    <div className='flex flex-wrap items-center justify-center gap-6 md:gap-8'>
                        {FOOTER_LINKS_DATA.map((item, i) => (
                            <a key={i} href="#" data-aos="fade-up" data-aos-delay={i * 100} data-aos-offset="-200" className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-white/60'>{item}</a>
                        ))}
                    </div>

                    <p data-aos="fade-left" data-aos-delay="200" data-aos-offset="-200" className='max-w-49.5 text-center lg:text-left font-jost font-normal text-sm md:text-base leading-150 tracking-normal text-white/60'>© 2025 Eggert Builders, Inc. All rights reserved.</p>

                </div>
            </div>
        </div>
    )
}

export default Footer




 