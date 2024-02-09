import Footer from '../../components/footer';
import Logo from '../../components/logo';
import Navbar from '../../components/navbar';

export default function Home() {
	return (
		<div className="bg-black">
			<Navbar />
			<Logo sitename="Home" />

			<section className="h-auto bg-black py-12">
				<div className="flex-auto items-center justify-center text-center sm:mx-12 md:mx-24 lg:mx-48 xl:mx-96">
					<strong className="font-mono text-2xl font-semibold text-white">
						Boosting You Beyond The Stratosphere!
					</strong>
					<h3 className="my-3 rounded-lg p-5 text-left font-mono  text-lg  text-white">
						Welcome to Jetspire, your indispensable ally for scaling the elusive peaks of online visibility.
						We don't just sprinkle a few SEO keywords and call it a day! Our AI, tailored to your needs,
						crafts ingenious solutions helping you ascend to the zenith of the Google ranks - no ads
						attached.
					</h3>
				</div>
			</section>
			<section className="mb-12 h-auto bg-black py-12">
				<h2 className="font-mono text-2xl md:text-4xl text-center font-semibold text-white">
					Satisfied Customers
				</h2>
				<div className=" text-center">
					<div className="mx-8 lg:mx-24 mt-12  grid grid-cols-1 gap-6 lg:grid-cols-3">
						<div className="m-1 rounded-lg border py-2">
							<h1 className="p-1 mt-3 font-mono font-semibold text-white md:text-xl  xl:text-xl">
								"Discoverability Boost"
							</h1>
							<p className="xl:text-md mt-3 px-2 font-mono text-sm text-white md:text-lg">
								Since partnering with this SEO-savvy team, our business is now more visible on Google.
								It's not just numbers—it's real clicks and connections that are driving our success.
							</p>
							<h1 className="mt-3 font-mono font-semibold text-white md:text-xl lg:text-2xl xl:text-lg">
								- Propellr software
							</h1>
						</div>
						<div className="m-1 rounded-lg border py-2">
							<h1 className="p-1 font-mono font-semibold text-white md:text-xl lg:text-2xl xl:text-xl">
								"Right fit for our brand"
							</h1>
							<p className="xl:text-md font mt-3 px-2 font-mono text-sm text-white md:text-lg">
								Thanks to this service, our website now shines higher on Google. It's more than
								numbers—it means more people finding us and choosing our offerings. Great tool for
								boosting online visibility!
							</p>
							<h1 className="mt-3 font-mono font-semibold text-white md:text-xl lg:text-2xl xl:text-lg">
								- KoelR
							</h1>
						</div>
						<div className="m-1 rounded-lg border py-2">
							<h1 className="p-1 font-mono font-semibold text-white md:text-xl lg:text-2xl xl:text-xl">
								"From click to connection"
							</h1>
							<p className="xl:text-md font mt-3 px-2 font-mono text-sm text-white md:text-lg">
								We've seen a positive shift in our online experience, all thanks to the improved Google
								ranking of our go-to brand. It's like they've become even more attuned to what we're
								looking for, making every click count.
							</p>
							<h1 className="mt-3 font-mono font-semibold text-white md:text-xl lg:text-2xl xl:text-lg">
								- FAI marketing
							</h1>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-black pt-12">
				<div className="px-12 md:mx-12 xl:mx-48">
					<h3 className="font-mono text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
						Ready for lift-off? Join us on an incredible journey and let's soar to the stellar heights of
						success together!
					</h3>
					<iframe
						className="w-full justify-center text-center sm:w-full md:w-full lg:w-full"
						title="vimeo-player"
						src="https://player.vimeo.com/video/891487351?h=2b6cd90213"
						width="1280"
						height="720"
						allowFullScreen
					/>
				</div>
			</section>

			<Footer />
		</div>
	);
}
