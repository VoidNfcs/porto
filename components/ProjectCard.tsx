import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface CardProps {
	imgUrl: string;
	title: string;
	description: string;
	gitUrl: string;
	previewUrl: string;
}

const ProjectCard: React.FC<CardProps> = ({
	imgUrl,
	title,
	description,
	gitUrl,
	previewUrl,
}) => {
	return (
		<div className='project-card shadow-xl border border-purple-500 rounded-xl'>
			<div
				className='h-52 md:h-72 rounded-t-xl relative group'
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: 'cover',
				}}
			>
				<div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 rounded-xl transition-all duration-500'>
					<Link
						className='w-14 h-14 relative border-2 mr-2 rounded-full border-[#ADB7BE] hover:border-white group/link'
						href={gitUrl}
					>
						<CodeBracketIcon className='w-10 h-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
					</Link>
					<Link
						className='w-14 h-14 relative border-2 rounded-full border-[#ADB7BE] hover:border-white group/link'
						href={previewUrl}
					>
						<EyeIcon className='w-10 h-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
					</Link>
				</div>
			</div>

			<div className='text-white rounded-b-xl bg-[#181818] py-6 px-4 mt-3'>
				<h5 className='text-xl font-semibold mb-2'>{title}</h5>
				<p className='text-[#ADB7BE]'>{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
