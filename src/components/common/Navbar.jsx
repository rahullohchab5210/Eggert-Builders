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
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            <div className={`fixed top-0 w-full py-4.25 z-999 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"}`}>
                <div className='max-w-328 mx-auto max-[1350px]:px-4'>
                    <div className='flex items-center justify-between'>

                        {/* Logo */}
                        <Link href="/" className='cursor-pointer z-50'>
                            <Image
                                className='w-[160px] md:w-[219.31px] h-[38px]'
                                src="/assets/images/webp/logo-img.webp"
                                alt="logo-image"
                                width={219.31}
                                height={38}
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <div className='hidden lg:flex items-center gap-8'>
                            {NAVLINKS_DATA.map((item, i) => (
                                <Link key={i} href={item.path} className='font-jost font-medium text-xs text-white leading-150 tracking-20 hover:text-white/60 transition-colors duration-200'>{item.title}</Link>
                            ))}
                        </div>

                        {/* Desktop Right */}
                        <div className='hidden lg:flex items-center gap-4'>
                            <span className='font-jost font-medium text-xs leading-150 tracking-20 text-white'>(219) 365-6931</span>
                            <Button
                                text="Get a Quote"
                                variant="primary"
                            />
                        </div>

                        {/* Hamburger */}
                        <button
                            className='lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 cursor-pointer'
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

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-998 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-500 lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className='flex flex-col items-center gap-10'>
                    {NAVLINKS_DATA.map((item, i) => (
                        <Link
                            key={i}
                            href={item.path}
                            onClick={() => setMenuOpen(false)}
                            className='font-cormorant font-normal text-4xl text-white leading-120 tracking-normal hover:text-white/60 transition-colors duration-200'
                            style={{
                                transitionDelay: menuOpen ? `${i * 80}ms` : '0ms',
                                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                                opacity: menuOpen ? 1 : 0,
                                transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms, color 0.2s`
                            }}
                        >
                            {item.title}
                        </Link>
                    ))}
                    <div
                        className='flex flex-col items-center gap-4 mt-4'
                        style={{
                            transitionDelay: menuOpen ? `${NAVLINKS_DATA.length * 80}ms` : '0ms',
                            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                            opacity: menuOpen ? 1 : 0,
                            transition: `opacity 0.4s ease ${NAVLINKS_DATA.length * 80}ms, transform 0.4s ease ${NAVLINKS_DATA.length * 80}ms`
                        }}
                    >
                        <span className='font-jost font-medium text-sm leading-150 tracking-20 text-white/60'>(219) 365-6931</span>
                        <Button
                            text="Get a Quote"
                            variant="primary"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar















// "use client"
// import { NAVLINKS_DATA } from '@/utils/helper'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'
// import Button from './Button'

// function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);



//     return (
//         <div className={`fixed top-0 w-full py-4.25 z-999   ${isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"}`}>
//             <div className='max-w-328 mx-auto max-[1350px]:px-4'>
//                 <div className='flex items-center justify-between'>
//                     <Link href="/" className='cursor-pointer'>
//                         <Image
//                             className='w-[219.31px] h-[38px]'
//                             src="/assets/images/webp/logo-img.webp"
//                             alt="logo-image"
//                             width={219.31}
//                             height={38}
//                         />
//                     </Link>
//                     <div className='flex items-center gap-8'>
//                         {NAVLINKS_DATA.map((item, i) => (
//                             <Link key={i} href={item.path} className='font-jost font-medium text-xs text-white leading-150 tracking-20'>{item.title}</Link>
//                         ))}
//                     </div>
//                     <div className='flex items-center gap-4'>
//                         <span className='font-jost font-medium text-xs leading-150 tracking-20 text-white'>(219) 365-6931</span>
//                         <Button
//                             text="Get a Quote"
//                             variant="primary"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar