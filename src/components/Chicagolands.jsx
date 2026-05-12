"use client"
import React, { useEffect } from 'react'
import Button from './common/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Chicagolands() {

    useEffect(() => {
        AOS.init({ duration: 600, })
    }, [])

    return (
        <div className='py-16 md:py-37.5'>
            <div className='max-w-328 mx-auto max-[1350px]:px-4'>
                <div className='flex flex-col gap-6 lg:flex-row lg:justify-between'>

                    <span
                        className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-gray-primary'
                        data-aos="fade-right"
                    >
                        Who We Are
                    </span>

                    <div className='font-jost w-full md:max-w-216.75'>
                        <h2
                            className='font-semibold text-3xl md:text-custom-4xl leading-120 tracking-normal text-dark-secondary'
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Chicagoland's most trusted custom home builder.
                        </h2>
                        <p
                            className='pt-2 pb-4 font-jost font-normal text-base leading-150 tracking-normal text-dark-secondary'
                            data-aos="fade-up"
                            data-aos-delay="250"
                        >
                            For over three decades, Eggert Builders has been the partner Northwest Indiana families trust to build their most important investment. We're carpenters by trade — and that foundation of real craft shapes everything we do.
                        </p>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <Button
                                text={"Learn More About Us"}
                                variant='text'
                                className="text-black!"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chicagolands

