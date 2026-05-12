"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Experience() {

    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])

    return (
        <div className='md:py-37.5 py-16'>
            <div className='max-w-328 mx-auto max-[1350px]:px-4'>
                <div className='flex lg:flex-row flex-col max-lg:gap-4 justify-between'>
                    <span data-aos="fade-right" className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-gray-primary'>Client Experience</span>
                    <div className='flex flex-col gap-10 max-w-216.75'>
                        <h2 data-aos="fade-up" data-aos-delay="200" className='font-cormorant font-normal lg:text-[40px] md:text-4xl text-3xl leading-120 tracking-normal text-dark-primary italic'>"Eggert Builders walked us through every single decision with patience and real expertise. They built our home as if it were their own — and it shows in every last detail."</h2>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <span className='font-jost font-semibold sm:text-base text-sm leading-150 tracking-normal text-dark-primary'>The Kowalski Family</span>
                            <p className='pt-0.5 font-jost font-normal sm:text-base text-sm leading-150 tracking-normal text-gray-primary'>Saint John, IN · Custom Home</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience




 