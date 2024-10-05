'use client';
import Image from 'next/image';
import React, { useTransition, useState } from 'react';
import TabButton from '@/components/TabButton';
import { motion } from 'framer-motion';

interface TabData {
    title: string;
    id: string;
    content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
            </ul>
        ),
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>SDN PELAMAMPANG 05 PAGI JAKARTA SELATAN</li>
                <li>SDN PADURENAN 01 KOTA BEKASI</li>
                <li>SMPN 10 KOTA BEKASI</li>
                <li>SMK KARYA BAHANA MANDIRI 1 KOTA BEKASI</li>
            </ul>
        ),
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>
                    Currently an intern while pursuing my degree in web
                    development, focusing on front-end technologies and user
                    experience design.
                </li>
            </ul>
        ),
    },
];

const AboutSection: React.FC = () => {
    const [tab, setTab] = useState<string>('skills');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section
            className='text-white mt-36 md:mt-24'
            id='about'
        >
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src='/images/about.png'
                        alt='About'
                        width={500}
                        height={500}
                    />
                </motion.div>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl text-white font-bold mb-4'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-lg'>
                        I am a student intern pursuing my degree in web
                        development. I have a solid foundation in technologies
                        such as JavaScript, React, Node.js, Express, PostgreSQL,
                        Prisma, HTML, CSS, and Git. I am eager to apply my
                        skills in real-world projects and collaborate with
                        others to create impactful solutions.
                    </p>
                    <div className='flex justify-start flex-row mt-8'>
                        {TAB_DATA.map((tabItem) => (
                            <TabButton
                                key={tabItem.id}
                                selectTab={() => handleTabChange(tabItem.id)}
                                active={tab === tabItem.id}
                            >
                                {tabItem.title}
                            </TabButton>
                        ))}
                    </div>
                    <motion.div
                        key={tab} // Important to trigger animation on tab change
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='mt-8'
                    >
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
