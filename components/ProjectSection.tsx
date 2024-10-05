'use client';
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

interface ProjectInterface {
    id: number;
    title: string;
    description: string;
    image: string;
    gitUrl: string;
    previewUrl: string;
}

const ProjectData: ProjectInterface[] = [
    {
        id: 1,
        title: 'Next JS Portofolio',
        description: 'This is my portofolio website',
        image: '/section/porto.png',
        gitUrl: 'https://github.com/VoidNFCs/porto',
        previewUrl: 'https://voidnfc.xyz',
    },
    {
        id: 2,
        title: 'URL Shortener',
        description: 'This is my URL Shortener',
        image: '/images/about.png',
        gitUrl: 'https://github.com/VoidNFCs/porto',
        previewUrl: 'https://voidnfc.xyz',
    },
];

const ProjectSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const cardVarian = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section
            className='text-white mt-36 md:mt-24'
            id='projects'
        >
            <h2 className='text-center text-4xl font-bold mb-8'>My Projects</h2>
            <ul
                ref={ref}
                className='grid md:grid-cols-2 gap-8 md:gap-16'
            >
                {ProjectData.map((project, index) => (
                    <motion.li
                        variants={cardVarian}
                        initial='initial'
                        animate={isInView ? 'animate' : 'initial'}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                        exit={{ opacity: 0, y: -50 }}
                        key={project.id}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectSection;
