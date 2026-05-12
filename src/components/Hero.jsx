import React from 'react'
import Button from './common/Button';

function Hero() {
    return (
        <div className="bg-[url('/assets/images/webp/hero-bg.webp')] bg-cover bg-center bg-no-repeat h-full md:pb-[158px] pb-[70px] md:pt-[180px] pt-[130px]">
            <div className='max-w-328 mx-auto max-[1350px]:px-4'>
                <div className='max-w-157'>
                    <p className='font-jost font-medium text-xs text-white leading-150 tracking-20 uppercase animate-delay-1'>
                        Northwest Indiana · Custom Home Builder · Saint John, IN
                    </p>
                    <h1 className='pt-4 pb-8 font-cormorant font-normal lg:text-custom-9xl md:text-7xl sm:text-6xl text-5xl leading-120 tracking-normal text-white animate-delay-2'>
                        Homes Built <br />As If They Were <span className='italic'>Our Own.</span>
                    </h1>
                    <div className='flex min-[500px]:flex-row flex-col min-[500px]:items-center max-[500px]:float-left gap-8 animate-delay-3'>
                        <Button
                            text={"Start a Conversation"}
                            variant='secondary'
                        />
                        <Button
                            text={"View our work"}
                            variant='text'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;



  