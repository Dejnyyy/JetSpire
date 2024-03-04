import Link from 'next/link';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="bg-black">
			<Navbar />
			<Logo sitename="Contact" />
			<section>
				<div>
					<div className="mb-5">
						<h1 className="text-center font-mono text-2xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
							Ready for lift off?
						</h1>
					</div>
				
					<form className="mx-auto mb-12 flex w-5/6 flex-col rounded-lg border p-4 font-mono font-semibold md:w-3/4 lg:w-1/2">
						<Image
							src="/logo.webp"
							alt="JetSpire Logo"
							className="mx-auto w-12 mb-1 sm:mb-4 sm:mt-1 "
							width={1200}
							height={1200}
						/>
						<label className="text-lg text-white">Full Name</label>
						<input
							type="text"
							placeholder="Full Name"
							className="my-2 rounded-lg border-2 border-black p-2"
						/>
						<label className="text-lg text-white">Organization</label>
						<input
							type="text"
							placeholder="Organization"
							className="my-2 rounded-lg border-2 border-black p-2"
						/>
						<label className="text-lg text-white">Email*</label>
						<input
							type="text"
							placeholder="Email"
							required
							className="my-2 rounded-lg border-2 border-black p-2"
						/>
						<label className="text-lg text-white">Phone*</label>
						
						<input
							type="text"
							placeholder="Phone"
							required
							className="my-2 rounded-lg border-2 border-black p-2"
						/>
						<label className="text-lg text-white">Web URL</label>
						<input
							type="text"
							placeholder="Web URL goes here"
							className="my-2 rounded-lg border-2 border-black p-2"
						/>
						<label className="text-lg text-white">Address</label>
						<input
							type="text"
							placeholder="Address"
							className="my-2 rounded-lg border-2 border-black p-2"
						/>

						<div className="flex">
							<input type="checkbox" className="mr-2 h-4 w-4" />
							<p className="md:text-md text-white text-sm font-normal">
								I agree to{' '}
								<Link href="/terms&conditions" className="text-blue-500">
									terms & conditions
								</Link>{' '}
								provided by the company. By providing my phone number, I agree to receive text messages
								from the business.
							</p>
							
						</div>
						<input
							type="submit"
							value="Submit"
							className="my-2 cursor-pointer rounded-lg border bg-black p-2 font-extrabold text-white"
						/>
					</form>
					<Image
				src="/luxuryejo.png"
				alt="Luxury bg"
				className="absolute right-5 w-1/2 lg:w-1/4  opacity-30 z-30"
				width={1200}
				height={1200}
			/>
				</div>
				
			</section>
			<Footer />
		</div>
	);
}
