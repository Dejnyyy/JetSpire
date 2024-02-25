// src/pages/index.tsx
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import Review from 'components/reviewSystem'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Logo />
     
      <section className="h-auto bg-black py-12 px-1 z-50">
        <div className="flex-auto items-center justify-center text-center sm:mx-12 lg:mx-36 xl:mx-80 bg-black">
          <h1 className="font-mono text-2xl md:text-4xl font-semibold text-white">
            Boosting You Beyond The Stratosphere!
          </h1>
          <h2 className="my-3 rounded-lg p-5 text-left font-mono text-lg text-white ">
            Welcome to Jetspire, your indispensable ally for scaling the elusive peaks of online visibility.
            We don't just sprinkle a few SEO keywords and call it a day! Our AI, tailored to your needs,
            crafts ingenious solutions helping you ascend to the zenith of the Google ranks - no ads
            attached.
          </h2>
        </div>
        <Image
				src="/luxuryejo.png"
				alt="Luxury bg"
				className="absolute right-5  w-1/4  opacity-30 z-30"
				width={1200}
				height={1200}
			/>
      </section>
      <section className="mb-12 h-auto bg-black py-12">
        <h2 className="text-center font-mono text-2xl font-semibold text-white md:text-4xl">
          Satisfied Customers
        </h2>
        <div className="text-center">
          <div className="mx-8 mt-12 grid grid-cols-1 gap-6 lg:mx-24 lg:grid-cols-3">
              <Review index={0} />
              <Review index={1} /> 
              <Review index={2} /> 
          </div>
        </div>
      </section>
      <section className="bg-black mb-12">
        <div className="px-6 md:mx-12 lg:mx-24 xl:mx-48">
          <h4 className="font-mono text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
            Ready for lift-off? Join us on an incredible journey and let's soar to the stellar heights of
            success together!
          </h4>
          <div className="aspect-h-9 aspect-w-16 my-5">
            <iframe
              className="rounded-lg"
              title="vimeo-player"
              src="https://player.vimeo.com/video/891487351?h=2b6cd90213"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
