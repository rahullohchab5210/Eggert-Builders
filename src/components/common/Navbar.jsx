"use client"
import { NAVLINKS_DATA } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from './Button'

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
 
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            {/* Fixed Navbar */}
            <div className={`fixed top-0 w-full py-4.25 z-999 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"}`}>
                <div className='max-w-328 mx-auto max-[1350px]:px-4'>
                    <div className='flex items-center justify-between'>

                        <Link href="/" onClick={() => setMenuOpen(false)} className='cursor-pointer z-999'>
                            <Image
                                className='w-[160px] md:w-[219.31px] h-[38px]'
                                src="/assets/images/webp/logo-img.webp"
                                alt="logo-image"
                                width={219.31}
                                height={38}
                            />
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className='hidden lg:flex items-center gap-8'>
                            {NAVLINKS_DATA.map((item, i) => (
                                <Link key={i} href={item.path} className='font-jost font-medium text-xs text-white leading-150 tracking-20 hover:text-white/60 transition-colors duration-200 inline-block group relative'>
                                    {item.title}
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full rounded" />
                                </Link>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className='hidden lg:flex items-center gap-4'>
                            <span className='font-jost font-medium text-xs leading-150 tracking-20 text-white'>(219) 365-6931</span>
                            <Button text="Get a Quote" variant="primary" />
                        </div>

                        {/* Hamburger Button */}
                        <button
                            className='lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-[999] cursor-pointer'
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>

                    </div>
                </div>
            </div>

          {/* Mobile Screen */}
            <div
                className={`fixed inset-0 z-[997] bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-[300px] z-[998] bg-dark-secondary flex flex-col justify-between py-10 px-8 transition-transform duration-500 ease-in-out lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col gap-6 mt-14'>
                    {NAVLINKS_DATA.map((item, i) => (
                        <Link
                            key={i}
                            href={item.path}
                            onClick={() => setMenuOpen(false)}
                            className='font-cormorant font-normal text-2xl text-white leading-120 tracking-normal hover:text-white/50 transition-all duration-200'
                            style={{
                                transform: menuOpen ? 'translateX(0)' : 'translateX(30px)',
                                opacity: menuOpen ? 1 : 0,
                                transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms, color 0.2s`
                            }}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Bottom buttons */}
                <div
                    className='flex flex-col gap-4'
                    style={{
                        transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                        opacity: menuOpen ? 1 : 0,
                        transition: `opacity 0.4s ease ${NAVLINKS_DATA.length * 80}ms, transform 0.4s ease ${NAVLINKS_DATA.length * 80}ms`
                    }}
                >
                    <div className='w-full border-t border-white/10 mb-4'></div>
                    <span className='font-jost font-medium text-sm leading-150 tracking-20 text-white/40'>(219) 365-6931</span>
                    <Button text="Get a Quote" variant="primary" />
                </div>

            </div>
        </>
    )
}

export default Navbar




 