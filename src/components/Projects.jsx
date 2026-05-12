"use client"
import React, { useEffect } from 'react'
import Button from './common/Button'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Projects() {

    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])

    return (
        <div className='md:py-30 py-16 border border-gray-light bg-offwhite'>
            <div className='max-w-328 mx-auto max-[1350px]:px-4'>
                <p data-aos="fade-up" className='font-jost font-medium text-xs text-gray-primary leading-150 tracking-20 uppercase'>Selected Projects</p>
                <div className='flex sm:flex-row flex-col justify-between pt-4'>
                    <h2 data-aos="fade-up" data-aos-delay="150" className='font-cormorant font-normal text-custom-6xl md:text-5xl text-4xl leading-120 tracking-normal text-dark-primary'>Our <span className='italic'>Work</span></h2>
                    <div data-aos="fade-up" data-aos-delay="250 mt-auto">
                        <Button
                            className='text-black! mt-auto'
                            text={"Discuss Your Project"}
                            variant='text'
                        />
                    </div>
                </div>
                <div className='flex xl:flex-row flex-col items-center mt-12'>
                    <div data-aos="fade-right" data-aos-delay="100" className="relative overflow-hidden group xl:max-w-167 max-w-full w-full  border-4 border-offwhite">
                        <Image
                            className="object-cover  xl:max-w-167 max-w-full w-full xl:h-167.75 sm:h-[550px] h-[400px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                            src="/assets/images/webp/project-img-one.webp"
                            alt="image"
                            width={668}
                            height={671}
                        />
                    </div>
                    <div className='flex flex-col items-center max-xl:w-full'>
                        <div className='flex items-center max-xl:w-full'>
                            <div data-aos="fade-down" data-aos-delay="200" className="relative overflow-hidden group xl:max-w-80.5 max-w-full w-full border-4 border-offwhite">
                                <Image
                                    className='object-cover xl:max-w-80.5 max-w-full xl:h-107.25 sm:h-[400px] h-[200px]  w-full xl:h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
                                    src="/assets/images/webp/project-img-two.webp"
                                    alt="image"
                                    width={322}
                                    height={429}
                                />
                            </div>
                            <div data-aos="fade-down" data-aos-delay="350" className="relative overflow-hidden group xl:max-w-80.5 max-w-full w-full border-4 border-offwhite">
                                <Image
                                    className='object-cover xl:max-w-80.5 max-w-full w-full xl:h-107.25 sm:h-[400px] h-[20px] xl:h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
                                    src="/assets/images/webp/project-img-three.webp"
                                    alt="image"
                                    width={322}
                                    height={429}
                                />
                            </div>
                        </div>
                        <div className='flex items-center max-xl:w-full'>
                            <div data-aos="fade-up" data-aos-delay="500" className="relative overflow-hidden group xl:max-w-80.5 max-w-full w-full border-4 border-offwhite">
                                <Image
                                    className='object-cover xl:max-w-80.5 max-w-full max-h-60.5 w-full transition-transform duration-500 ease-in-out group-hover:scale-110'
                                    src="/assets/images/webp/project-img-four.webp"
                                    alt="image"
                                    width={322}
                                    height={242}
                                />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="650" className="relative overflow-hidden group xl:max-w-80.5 max-w-full w-full border-4 border-offwhite">
                                <Image
                                    className='object-cover xl:max-w-80.5 max-w-full w-full max-h-60.5 transition-transform duration-500 ease-in-out group-hover:scale-110'
                                    src="/assets/images/webp/project-img-five.webp"
                                    alt="image"
                                    width={322}
                                    height={242}
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








 