'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface DataEmail {
	email: string;
	subject: string;
	message: string;
}

const EmailSection: React.FC = () => {
	const [statusMessage, setStatusMessage] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data: DataEmail = {
			email: form.email.value,
			subject: form.subject.value,
			message: form.message.value,
		};
		const JSONdata = JSON.stringify(data);
		const endPoint = '/api/send';

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		};

		try {
			const response = await fetch(endPoint, options);
			const resData = await response.json();

			if (response.ok) {
				setStatusMessage('Message sent successfully!');
				form.reset(); // Clear the form fields
			} else {
				setStatusMessage(resData.error || 'Something went wrong.');
			}
		} catch (error) {
			console.error(error);
			setStatusMessage('An unexpected error occurred.');
		}
	};

	return (
		<section
			className='grid md:grid-cols-2 my-12 py-24 gap-4 relative'
			id='contact'
		>
			<div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2'></div>
			<div className='z-10'>
				<h5 className='text-xl font-bold text-white my-2'>{`Let's Connect`}</h5>
				<p className='text-[#ADB7BE] mb-4 max-w-md'>
					{`I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try
                    my best to get back to you!`}
				</p>
				<div className='socials flex flex-row gap-4'>
					<Link href={'https://instagram.com/voidnfc'}>
						<Image
							src='/images/instagram.png'
							alt='Instagram'
							width={50}
							height={50}
						/>
					</Link>
					<Link href={'https://github.com/voidnfc'}>
						<Image
							src='/images/github.png'
							alt='GitHub'
							width={50}
							height={50}
						/>
					</Link>
				</div>
			</div>
			<div>
				<form onSubmit={handleSubmit} className='flex flex-col'>
					<div className='mb-6'>
						<label
							htmlFor='email'
							className='text-white block mb-2 text-sm font-medium'
						>
							Your Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							required
							placeholder='jhondoe@gmail.com'
							className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
						/>
					</div>

					<div className='mb-6'>
						<label
							htmlFor='subject'
							className='text-white block mb-2 text-sm font-medium'
						>
							Subject
						</label>
						<input
							type='text'
							id='subject'
							name='subject'
							required
							placeholder='Hallo Zaky how was your day...'
							className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
						/>
					</div>

					<div className='mb-6'>
						<label
							htmlFor='message'
							className='text-white mb-2 block text-sm font-medium'
						>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							required
							className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
							placeholder='Lets talk about ....'
						/>
					</div>
					<button
						className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
						type='submit'
						disabled
					>
						Disabled for a while
					</button>
					{statusMessage && (
						<p className='mt-4 text-white'>{statusMessage}</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
