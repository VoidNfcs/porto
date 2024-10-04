import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
    return (
        <section className='md:mt-36 mt-3 2'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div>
                    <Image
                        src={'/images/about.png'}
                        alt='about'
                        width={500}
                        height={500}
                    />
                </div>
                <div className='palce-self-center'>
                    <h1 className='text-white mb-4 text-4xl sm::text-5xl lg:text-6xl font-extrabold'>
                        About Me
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore laudantium enim quia voluptas temporibus eligendi
                        alias facere! Ut vitae facere harum quo hic doloremque
                        illo. Iusto fugit ex repudiandae facilis.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
