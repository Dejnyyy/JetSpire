import Image from 'next/image';
import React from 'react';

const Logo = (props: { sitename?: string }) => {
	return (
		<div className="flex items-center justify-center">
			<div className="z-40">
				<h1 className=" font-mono text-lg font-semibold text-white"> {props.sitename}</h1>
				<h1 className="lg:text-10xl cursor-pointer text-center font-mono text-4xl font-semibold text-white sm:text-7xl md:text-8xl">
					JETSPIRE
				</h1>
				<h1 className="text-lg text-center font-mono font-semibold text-white sm:text-xl md:text-2xl lg:text-4xl">
					AI - Marketing
				</h1>
			</div>
			<Image
				src="/logo.webp"
				alt="JetSpire Logo"
				className="my-32 w-32 z-40 sm:w-48 md:w-64 lg:w-96 xl:w-96 xl:my-48"
				width={1200}
				height={1200}
			/>
		</div>
	);
};

export default Logo;
