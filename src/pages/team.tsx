import Image from "next/image";
import Logo from "components/logo";
import Navbar from "components/navbar";
import Footer from "components/footer";

export default function Team() {
  return (
    <div className="bg-black">
      <Navbar />
      <Logo sitename="Team" />

      <section className="h-auto bg-black py-8">
        <div className="text-center sm:mx-1 md:mx-12 lg:mx-24 xl:mx-12">
          <h1 className="px-8 font-mono text-2xl font-semibold text-white sm:text-4xl  md:text-4xl lg:text-6xl">
            Team
          </h1>
          <div className="mx-12 mt-12 grid grid-cols-1 gap-6 text-justify font-mono text-white lg:grid-cols-3 lg:text-center">
            <div className="">
              <Image
                src="/bastian.webp"
                alt="bastian"
                className="mb-5"
                width={1200}
                height={800}
              />
              <h1 className=" font-semibold md:text-xl lg:text-2xl xl:text-xl">
                Say hello to Bastiaan,
              </h1>
              <p className="pt-3">
                our decisive team captain. With a clear vision and a "less is
                more" mentality, he navigates our course with sharp decisions,
                pointing the way without unnecessary push.
              </p>
            </div>
            <div className="">
              <Image
                src="/frank.webp"
                alt="frank"
                className="mb-5"
                width={1065}
                height={1123}
              />
              <h1 className="font-semibold md:text-xl lg:text-2xl xl:text-xl">
                Meet Frank,
              </h1>
              <p className="pt-3">
                our technical wizard and creative maestro. Turning ideas into
                reality is his forte. No challenge is too big, no concept too
                daring. Frank makes the impossible possible.
              </p>
            </div>
            <div className="">
              <Image
                src="/oliver.webp"
                alt="oliver"
                className="mb-5"
                width={1200}
                height={800}
              />
              <h1 className="font-semibold md:text-xl lg:text-2xl xl:text-xl">
                Introducing Olivier,
              </h1>
              <p className="pt-3">
                the powerhouse behind our communication and the mastermind
                steering the team. His professionalism is unmatched, and his
                smile makes working with him a true delight.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
