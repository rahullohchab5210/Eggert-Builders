"use client"
import { ADDRESS_DATA } from '@/utils/helper'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Address() {

    useEffect(() => {
        AOS.init({ duration: 700 })
    }, [])

    return (
        <div className='bg-dark-secondary overflow-hidden lg:max-h-[721px]'>
            <div className='max-w-360 mx-auto'>
                <div className='flex flex-col lg:flex-row'>

                    {/* Left Side - Contact Info */}
                    <div className='py-16 lg:py-30 px-4 md:pl-16 pr-17.5 lg:max-h-[721px]'>
                        <span
                            data-aos="fade-up"
                            className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-white/40'
                        >
                            Get In Touch
                        </span>
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className='pt-4 font-cormorant font-normal sm:text-4xl text-3xl md:text-custom-6xl leading-120 tracking-normal text-white'
                        >
                            Contact us
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="250"
                            className='lg:max-w-105.25 max-w-full pt-3 pb-8 font-jost font-normal sm:text-base text-sm leading-150 tracking-normal text-white/60'
                        >
                            Ready to get started or just have questions? Reach out — Scott will respond to you personally.
                        </p>

                        {/* Divider */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="350"
                            className='w-full border border-white/12'
                        />

                        {/* Address Items List */}
                        <div className='flex flex-col gap-6 pt-8'>
                            {ADDRESS_DATA.map((item, i) => (
                                <div key={i}
                                    data-aos="fade-up"
                                    data-aos-delay={400 + i * 100}
                                >
                                    <span className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-white/40'>
                                        {item.label}
                                    </span>
                                    <p className='pt-1 font-jost font-normal sm:text-base text-sm leading-150 tracking-normal text-white'>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Google Map Embed */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className='w-full lg:h-180.25 sm:h-125 h-100 lg:max-w-221.25'
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.840938795428!2d-87.50763272411838!3d41.443030871292855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811e2e49f80d20b%3A0xfc18d18232555ea6!2s9695%20Julia%20Dr%2C%20St%20John%2C%20IN%2046373%2C%20USA!5e1!3m2!1sen!2sin!4v1778563949947!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Address



