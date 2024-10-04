import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import React from 'react';

const Home = () => {
    return (
        <main className='flex min-h-screen flex-col bg-[#121212]'>
            <Navbar />
            <div className='container mt-24 mx-auto py-4 px-12'>
                <HeroSection />
            </div>
        </main>
    );
};

export default Home;
