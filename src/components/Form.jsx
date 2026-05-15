"use client"

import React, { useState, useEffect } from 'react'
import Input from './common/Input'
import Button from './common/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Form() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        helpWith: '',
        projectDescription: ''
    });

    const [errors, setErrors] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 700, once: true })
    }, [])

    const submit = () => {
        setErrors(true);

        if (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.phone &&
            formData.helpWith &&
            formData.projectDescription
        ) {
            console.log(formData);
            setSubmitted(true);
            setErrors(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                helpWith: '',
                projectDescription: ''
            });
        }
    };

    return (
        <div id="contact-form" className='border border-gray-light bg-offwhite py-16 md:py-30'>
            <div className='max-w-216.5 mx-auto px-4 md:px-6'>
 
                {/* Success Popup */}
                {submitted && (
                    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/55'>
                        <div className='bg-offwhite max-w-md w-full mx-4 p-12 relative text-center border border-gray-light'>

                            {/* Close Button */}
                            <button
                                onClick={() => setSubmitted(false)}
                                className='absolute top-4 right-4 text-gray-dark hover:text-dark-primary transition-colors duration-300 cursor-pointer'
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>

                            {/* Check Circle */}
                            <div className='w-16 h-16 rounded-full border border-dark-primary flex items-center justify-center mx-auto mb-6'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M6 14L11 20L22 8" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            {/* Label */}
                            <p className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-gray-primary mb-2.5'>
                                Form Submitted Successfully
                            </p>
                            <h3 className='font-cormorant font-normal text-4xl leading-120 text-dark-primary mb-3'>
                                We'll be in touch <span className='italic'>soon.</span>
                            </h3>
                            <div className='w-8 border-t border-gray-light mx-auto my-4' />
                            <p className='font-jost font-normal text-sm leading-150 text-gray-dark mb-7'>
                                Your message has been received. Scott will personally get back to you within <span className='font-medium text-dark-primary'>1–2 business days.</span>
                            </p>

                            {/* Close Button */}
                            <Button
                                text={"Close"}
                                variant='dark'
                                onClick={() => setSubmitted(false)}
                            />
                        </div>
                    </div>
                )}

                {/* Section Heading */}
                <h2
                    data-aos="fade-up"
                    className='pb-10 md:pb-15 font-cormorant font-normal text-4xl md:text-5xl lg:text-custom-6xl leading-120 tracking-normal text-center text-dark-primary'
                >
                    Let's build something <span className='italic'>together.</span>
                </h2>

                <div className='flex flex-col gap-6 w-full'>

                    {/* First Name & Last Name */}
                    <div data-aos="fade-up" data-aos-delay="150" className='flex flex-col lg:flex-row lg:gap-4 gap-6 w-full'>
                        <div className='border-b border-b-gray-light flex flex-col gap-3 pb-3 w-full'>
                            <label className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-dark-primary'>First Name</label>
                            <Input
                                type="text"
                                value={formData.firstName}
                                placeholder='Enter your first name'
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                className='placeholder:font-montserrat placeholder:font-normal placeholder:text-sm placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none text-gray-dark'
                            />
                            {errors && formData.firstName === '' && <p className='text-red-500 text-sm'>First Name is required</p>}
                        </div>

                        <div className='border-b border-b-gray-light flex flex-col gap-3 pb-3 w-full'>
                            <label className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-dark-primary'>Last Name</label>
                            <Input
                                type="text"
                                value={formData.lastName}
                                placeholder='Enter your last name'
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                className='placeholder:font-montserrat placeholder:font-normal placeholder:text-sm placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none text-gray-dark'
                            />
                            {errors && formData.lastName === '' && <p className='text-red-500 text-sm'>Last Name is required</p>}
                        </div>
                    </div>

                    {/* Email Address */}
                    <div data-aos="fade-up" data-aos-delay="250" className='border-b border-b-gray-light flex flex-col gap-3 pb-3'>
                        <label className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-dark-primary'>Email Address</label>
                        <Input
                            type="text"
                            value={formData.email}
                            placeholder='Enter your email address'
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className='placeholder:font-montserrat placeholder:font-normal placeholder:text-sm placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none text-gray-dark'
                        />
                        {errors && formData.email === '' && <p className='text-red-500 text-sm'>Email Address is required</p>}
                        {errors && formData.email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && <p className='text-red-500 text-sm'>Enter a valid email address</p>}
                    </div>

                    {/* Phone Number */}
                    <div data-aos="fade-up" data-aos-delay="350" className='border-b border-b-gray-light flex flex-col gap-3 pb-3'>
                        <label className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-dark-primary'>Phone Number</label>
                        <Input
                            type="text"
                            value={formData.phone}
                            placeholder='Enter your phone number'
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className='placeholder:font-montserrat placeholder:font-normal placeholder:text-sm placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none text-gray-dark'
                        />
                        {errors && formData.phone === '' && <p className='text-red-500 text-sm'>Phone Number is required</p>}
                        {errors && formData.phone !== '' && formData.phone.length < 10 && <p className='text-red-500 text-sm'>Phone Number must be at least 10 characters</p>}
                    </div>

                    {/* What Can We Help With */}
                    <div data-aos="fade-up" data-aos-delay="450" className='border-b border-b-gray-light flex flex-col gap-3 pb-3'>
                        <label className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-dark-primary'>What can we help with</label>
                        <Input
                            type="text"
                            value={formData.helpWith}
                            placeholder='Tell us what you need help with'
                            onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
                            className='placeholder:font-montserrat placeholder:font-normal placeholder:text-sm placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none text-gray-dark'
                        />
                        {errors && formData.helpWith === '' && <p className='text-red-500 text-sm'>This field is required</p>}
                    </div>

                    {/* Project Description */}
                    <div data-aos="fade-up" data-aos-delay="550" className='border-b border-b-gray-light flex flex-col gap-3 pb-3'>
                        <label className='font-jost font-medium text-xs leading-150 tracking-20 uppercase text-dark-primary'>Tell Us About Your Project</label>
                        <Input
                            type="text"
                            value={formData.projectDescription}
                            placeholder='Briefly describe your project'
                            onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                            className='placeholder:font-montserrat placeholder:font-normal placeholder:text-sm placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none text-gray-dark'
                        />
                        {errors && formData.projectDescription === '' && <p className='text-red-500 text-sm'>Project description is required</p>}
                    </div>

                </div>

                {/* Submit Button */}
                <div data-aos="fade-up" data-aos-delay="650" className='flex items-center justify-center'>
                    <Button
                        className='mt-10 md:mt-15 py-3.25 px-5.5 bg-dark-primary'
                        text={"send message"}
                        onClick={submit}
                    />
                </div>

            </div>
        </div>
    )
}

export default Form











 