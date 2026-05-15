"use client"
import { HOW_WORKS_DATA } from '@/utils/helper'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function HowWorks() {

    useEffect(() => {
        AOS.init({ duration: 700, once: true })
    }, [])

    return (
        <div className='py-16 md:py-30 bg-dark-secondary overflow-hidden'>
            <div className='max-w-328 mx-auto max-[1350px]:px-4'>

                {/* Section Label */}
                <p data-aos="fade-up" className='font-jost font-medium text-xs text-gray-primary leading-150 tracking-20 uppercase'>How It Works</p>

                {/* Heading & Description */}
                <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mt-4'>
                    <h2 data-aos="fade-right" data-aos-delay="150" className='font-cormorant font-normal text-4xl md:text-5xl lg:text-custom-6xl leading-120 tracking-normal text-white md:max-w-133.25'>A process built on <span className='italic'>trust</span> and transparency.</h2>
                    <p data-aos="fade-left" data-aos-delay="150" className='md:mt-auto md:max-w-133.25 font-jost font-normal text-base leading-150 tracking-normal text-white/60'>We've refined our approach over three decades to make the custom home building process as clear and stress-free as possible — from first conversation to move-in day.</p>
                </div>

                {/* Steps */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-15'>
                    {HOW_WORKS_DATA.map((item, i) => (
                        <div key={i} data-aos="zoom-in" data-aos-delay={i * 150}>
                            <div
                                className={`p-8 border border-white/12 bg-black-soft hover:bg-black-soft/50 transition-all duration-300 h-full
  ${i !== 0 ? 'sm:border-l-0 lg:border-l-0' : ''}`}
                            >
                                <span className='font-cormorant font-normal text-custom-6xl leading-120 tracking-normal text-white/12'>{item.count}</span>
                                <h3 className='py-3 font-cormorant font-normal text-custom-4xl leading-120 tracking-normal text-white'>{item.title}</h3>
                                <p className={`font-jost font-normal text-base leading-150 ${i === 3 ? 'tracking-[-0.01em]' : 'tracking-normal'} text-white/60`}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default HowWorks

