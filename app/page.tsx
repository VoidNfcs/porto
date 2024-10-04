import AboutSection from '@/components/AboutSection';
import EmailSection from '@/components/EmailSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import ProjectSection from '@/components/ProjectSection';
import React from 'react';

const Home = () => {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<Navbar />
			<div className='container mt-24 mx-auto py-4 px-12'>
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<EmailSection />
			</div>
			<Footer />
		</main>
	);
};

export default Home;
