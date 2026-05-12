"use client"
import React, { useEffect } from 'react'
import Button from './common/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Projects() {

    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])

    return (
        <div className='md:py-30 py-16 border border-gray-light bg-offwhite'>
            <div className='max-w-328 mx-auto max-[1350px]:px-4'>

                {/* Section Label */}
                <p data-aos="fade-up" className='font-jost font-medium text-xs text-gray-primary leading-150 tracking-20 uppercase'>Selected Projects</p>

                {/* Heading & CTA Button */}
                <div className='flex sm:flex-row flex-col justify-between pt-4'>
                    <h2 data-aos="fade-up" data-aos-delay="150" className='font-cormorant font-normal text-custom-6xl md:text-5xl text-4xl leading-120 tracking-normal text-dark-primary'>Our <span className='italic'>Work</span></h2>
                    <div data-aos="fade-up" data-aos-delay="250 mt-auto">
                        <Button className='text-black! mt-auto' text={"Discuss Your Project"} variant='text' />
                    </div>
                </div>

                {/* Projects */}
                <div className='mt-12 flex min-[680px]:flex-row flex-col'>

                    {/* Left - Large Image */}
                    <div data-aos="fade-right" data-aos-delay="100" className='overflow-hidden border-4 border-offwhite'>
                        <img
                            src="/assets/images/webp/project-img-one.webp"
                            alt="image"
                            className='w-full h-full max-w-167 max-h-167.75 transition-transform duration-500 ease-in-out hover:scale-110'
                        />
                    </div>

                    {/* Right - 4 Small Images */}
                    <div className='flex flex-col'>

                        {/* Top Row */}
                        <div className='flex items-center'>
                            <div data-aos="fade-down" data-aos-delay="200" className='overflow-hidden border-4 border-offwhite'>
                                <img
                                    src="/assets/images/webp/project-img-two.webp"
                                    alt="image"
                                    className='w-full h-full max-w-80.5 max-h-107.25 transition-transform duration-500 ease-in-out hover:scale-110'
                                />
                            </div>
                            <div data-aos="fade-down" data-aos-delay="350" className='overflow-hidden border-4 border-offwhite'>
                                <img
                                    src="/assets/images/webp/project-img-three.webp"
                                    alt="image"
                                    className='w-full h-full max-w-80.5 max-h-107.25 transition-transform duration-500 ease-in-out hover:scale-110'
                                />
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className='flex items-center'>
                            <div data-aos="fade-up" data-aos-delay="500" className='overflow-hidden border-4 border-offwhite'>
                                <img
                                    src="/assets/images/webp/project-img-four.webp"
                                    alt="image"
                                    className='w-full h-full max-w-80.5 max-h-60.5 transition-transform duration-500 ease-in-out hover:scale-110'
                                />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="650" className='overflow-hidden border-4 border-offwhite'>
                                <img
                                    src="/assets/images/webp/project-img-five.webp"
                                    alt="image"
                                    className='w-full h-full max-w-80.5 max-h-60.5 transition-transform duration-500 ease-in-out hover:scale-110'
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects

