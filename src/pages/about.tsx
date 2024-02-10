import Link from "next/link";
import Logo from "components/logo";
import Navbar from "components/navbar";
import Footer from "components/footer";


export default function About() {
  return (
    <div className="bg-black">
      <Navbar />
      <Logo sitename="About" />

      <section className="mx-auto h-auto w-3/4 bg-black py-8 md:w-1/2">
        <div className="flex-auto  items-center justify-center ">
          <h1 className=" font-mono text-xl font-semibold text-white sm:text-2xl  md:text-4xl lg:text-6xl">
            How do we boost you beyond the stratosphere?
          </h1>
          <h3 className="my-3 pt-2 font-mono  text-xl  text-white">

            Welcome to Jetspire, where we redefine online visibility with
            cutting-edge AI-based marketing tools. One of our standout offerings
            is Programmatic SEO — a strategic approach that maximizes your reach
            and impact in the digital realm. Let's delve into how it works:
          </h3>

          <h3 className="border-t  border-white pt-2 font-mono text-xl font-semibold text-white">
            1. Strategic Website Setup
          </h3>
          <p className=" pt-2 font-mono text-lg text-white">

            We create a dynamic website acting as a comprehensive directory,
            meticulously optimized for SEO. Leveraging data from US or UK
            Census, we generate SEO-optimized pages for each keyword we target
            and every town or village within our specified area.
          </p>

          <h3 className="rounded-lg p-3 px-24 font-mono text-xl font-semibold text-white">
            2. Population and Demographics Integration
          </h3>
          <p className="rounded-lg p-5 px-24 font-mono text-lg text-white">

            The number of pages directly correlates with the number of keywords
            and towns/villages. For instance, if we target "pest control" with 3
            keywords and 100 towns/villages, we generate 300 pages. Each page is
            tailored to a specific combination, such as "pest control Round Rock
            Texas."
          </p>

          <h3 className="rounded-lg p-3 px-24 font-mono text-xl font-semibold text-white">
            3. Precision Optimization
          </h3>
          <p className="rounded-lg p-5 px-24 font-mono text-lg text-white">
            These pages are more than just content; they are fine-tuned for SEO
            success. We employ meta tags and schema to optimize each page and
            seamlessly link it to the business profile. Ideally, this directory
            resides on a subdomain of your company website, forging a strong
            association with Google.
          </p>

          <h3 className="border-t   border-white pt-2 font-mono text-xl font-semibold text-white">
            4. Analytics Integration
          </h3>
          <p className=" pt-2   font-mono text-lg text-white">

            The directory site is equipped with a separate Google Analytics
            setup and Google Webmaster Tools. We proactively submit a sitemap to
            Google, ensuring swift indexing of pages. Our goal is to secure top
            3 positions in search results for the targeted keywords.
          </p>

          <h3 className="border-t   border-white pt-2 font-mono text-xl font-semibold text-white">
            5. User Engagement Tracking
          </h3>
          <p className=" pt-2  font-mono text-lg text-white">

            When users discover and engage with these pages, their interactions
            are meticulously tracked through Google Analytics. This engagement
            is crucial, especially when visitors are located in the
            corresponding town/village. The content is optimized for both the
            keyword and location, sending strong signals to Google that someone
            actively sought that specific service in that area.
          </p>

          <h3 className="border-t   border-white pt-2 font-mono text-xl font-semibold text-white">
            6. Closing the Loop with Reviews
          </h3>
          <p className=" pt-2   font-mono text-lg text-white">

            A positive loop is completed when engaged visitors, satisfied with
            the information, leave reviews. This feedback significantly enhances
            the impact on the local 3-pack results, establishing your business
            prominently in local searches.
          </p>

          <h3 className="border-t   border-white pt-2 font-mono text-xl font-semibold text-white">
            Why Programmatic SEO Works
          </h3>
          <p className=" pt-2 font-mono text-lg text-white">

            Precision Targeting: By aligning content with specific keywords and
            locations, we optimize your visibility where it matters
            most.User-Centric Engagement: User interactions are actively
            tracked, providing valuable insights into their needs and
            preferences. Google Association: The strategic setup enhances
            Google's association between your business and the targeted
            locations, elevating your online presence.
          </p>

          <p className=" pt-2rounded-lg font-mono text-lg text-white">

            At Jetspire, Programmatic SEO isn't just a service; it's a tailored
            approach to amplify your digital footprint. Let us propel your
            business to the forefront of online visibility and local search
            results. Discover the power of Programmatic SEO with Jetspire today!
          </p>
        </div>
      </section>

      <section className="bg-black pt-24 text-2xl   text-white">
        <div className="mx-4 ">

          <h1 className="text-left font-mono font-semibold">
            Ready for lift-off? Join us on an incredible journey and let's soar
            to the stellar heights of success together!
          </h1>
          <div className="text-center">
            <Link href="/contact">

              <button className="mt-20 rounded-full bg-white px-8 py-2 font-mono font-semibold text-black shadow-md shadow-white hover:bg-slate-300">
                Start your journey
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
