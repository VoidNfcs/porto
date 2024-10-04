import React from 'react';

const Footer = () => {
	return (
		<footer className='footer z-10 border border-t-[#33353F] border-r-transparent border-l-transparent text-white'>
			<div className='container p-12 flex justify-between text-white '>
				<span className='font-extrabold'>VoidNFC</span>
				<p className='font-extrabold'>
					All rights reserved. &copy; {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
