"use client"
import React, { useEffect } from 'react'
import Button from './common/Button'
import { SERVICES_DATA } from '@/utils/helper'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Services() {

    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])

    return (
        <div className='py-16 md:py-37.5'>
            <div className='max-w-328 mx-auto max-[1350px]:px-4'>

                {/* Section Label */}
                <p data-aos="fade-up" className='font-jost font-medium text-xs text-gray-primary leading-150 tracking-20 uppercase'>What We Do</p>

                {/* Heading & Button */}
                <div className='flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-end pt-4'>
                    <h2 data-aos="fade-up" data-aos-delay="150" className='font-cormorant font-normal text-4xl md:text-5xl lg:text-custom-6xl leading-120 tracking-normal text-dark-primary'>Our <span className='italic'>Services</span></h2>
                    <div data-aos="fade-up" data-aos-delay="250">
                        <Button className='text-black! mt-auto' text={"Request a Consultation"} variant='text' />
                    </div>
                </div>

                {/* Services */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12'>
                    {SERVICES_DATA.map((item, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                            className='p-8 border border-gray-light hover:bg-offwhite sm:min-h-73.5 min-h-50 flex justify-between flex-col group transition-all duration-300'
                        >
                            <div>
                                <span className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-gray-primary'>{item.count}</span>
                                <h3 className='pt-4 pb-3 font-cormorant font-normal sm:text-custom-4xl text-3xl leading-120 tracking-normal text-dark-primary'>{item.title}</h3>
                                <p className='font-jost font-normal sm:text-base text-sm leading-150 tracking-normal text-gray-dark'>{item.description}</p>
                            </div>

                            {/* Inquire Button */}
                            <Button className='text-black! text-left hidden group-hover:block' text={"inquire"} variant='text' />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Services