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

    useEffect(() => {
        AOS.init({ duration: 700 })
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
        }
    };

    return (
        <div className='border border-gray-light bg-offwhite py-16 md:py-30'>
            <div className='max-w-216.5 mx-auto px-4 md:px-6'>

                {/* Section Heading */}
                <h2
                    data-aos="fade-up"
                    className='pb-10 md:pb-15 font-cormorant font-normal text-4xl md:text-5xl text-custom-6xl leading-120 tracking-normal text-center text-dark-primary'
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