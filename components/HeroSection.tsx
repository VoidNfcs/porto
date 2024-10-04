'use client';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center mt-4 text-center sm:text-left sm:col-start-1 sm:col-end-8 order-2 sm:order-1'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                            {"Hello, I'am"}{' '}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Zaky',
                                1000,
                                'Web Developer',
                                1000,
                                'Full Stack Developer',
                                1000,
                                'Backend Developer',
                                1000,
                                'Frontend Developer',
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore laudantium enim quia voluptas temporibus eligendi
                        alias facere! Ut vitae facere harum quo hic doloremque
                        illo. Iusto fugit ex repudiandae facilis.
                    </p>
                    <div>
                        <button className='w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                            Hire Me
                        </button>
                        <button className='w-full sm:w-fit px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center lg:mt-0 sm:col-start-8 sm:col-end-13 order-1 sm:order-2'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[180px] h-[180px] lg:w-[300px] lg:h-[300px]'
                            src={'/images/hero.png'}
                            width={150}
                            height={150}
                            alt='zaky'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
