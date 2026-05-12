"use client"
import { STATUS_DATA } from '@/utils/helper'
import React, { useEffect } from 'react'
import Icons from './common/Icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Status() {

    useEffect(() => {
        AOS.init({ duration: 600 })
    }, [])

    return (
        <div className='bg-dark-secondary md:py-16 py-10'>
            <div className='max-w-328 mx-auto max-[1312px]:px-4'>

                {/* Stats Grid */}
                <div className='min-[500px]:flex min-[500px]:flex-wrap min-[500px]:justify-between max-sm:gap-4 max-[500px]:grid max-[500px]:grid-cols-2 max-[500px]:gap-8'>
                    {STATUS_DATA.map((item, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                            className='flex flex-col items-center gap-3'
                        >
                            {/* Count & Star Icon */}
                            <div className='flex gap-1'>
                                <span className='font-cormorant font-normal sm:text-5xl text-3xl leading-100 tracking-normal text-white'>
                                    {item.count}
                                </span>
                                {item.count === "5" && (
                                    <Icons icon={"STAR"} className={"mt-auto"} />
                                )}
                            </div>

                            {/* Stats Label */}
                            <p className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-white/40'>
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Status

 