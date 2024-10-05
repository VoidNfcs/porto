import { motion } from 'framer-motion';
import React from 'react';

interface tabProps {
	active: boolean;
	selectTab: () => void;
	children: React.ReactNode;
}

const variants = {
	default: { width: 0 },
	active: { width: 'calc(100% - 0.75rem' },
};

const TabButton: React.FC<tabProps> = ({ active, selectTab, children }) => {
	const buttonClasses = active ? 'text-white ' : 'text-[#ADB7BE]';

	return (
		<button onClick={selectTab}>
			<p
				className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
			>
				{children}
			</p>
			<motion.div
				initial='default'
				variants={variants}
				animate={active ? 'active' : 'default'}
				className='h-1 bg-purple-500 mt-2 mr-3'
			></motion.div>
		</button>
	);
};

export default TabButton;
