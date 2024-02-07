import Link from "next/link";
import Footer from "components/footer";
import Logo from "components/logo";
import Navbar from "components/navbar";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Logo sitename="Contact" />
      <section>
        <div>
          <div className="mb-5">
            <h1 className="text-center font-mono text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-6xl">
              Ready for lift off?
            </h1>
          </div>
          <form className=" mx-auto mb-12 flex  w-3/4 flex-col rounded-lg border p-4 font-mono font-semibold md:w-2/3 lg:w-1/2">
            <label className="text-lg text-white">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="my-2 rounded-lg border-2 border-black p-2"
            ></input>
            <label className="text-lg text-white">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="my-2 rounded-lg border-2 border-black p-2"
            ></input>
            <label className="text-lg text-white">Organization</label>
            <input
              type="text"
              placeholder="Organization"
              className="my-2 rounded-lg border-2 border-black p-2"
            ></input>
            <label className="text-lg text-white">Email*</label>
            <input
              type="text"
              placeholder="Email"
              required
              className="my-2 rounded-lg border-2 border-black p-2"
            ></input>
            <label className="text-lg text-white">Phone*</label>
            <input
              type="text"
              placeholder="Phone"
              required
              className="my-2 rounded-lg border-2 border-black p-2"
            ></input>
            <label className="text-lg text-white">Web URL</label>
            <input
              type="text"
              placeholder="Web URL goes here"
              className="my-2 rounded-lg border-2 border-black p-2"
            ></input>
            <label className="text-lg text-white">Address</label>
            <input
              type="text"
              placeholder="Address"
              className="my-2 rounded-lg border-2 border-black p-2"
            ></input>
            <div className="flex">
              <input type="checkbox" className="mr-2 h-4 w-4"></input>
              <p className="text-md text-white">
                I agree to{" "}
                <Link href="/terms&conditions" className="text-blue-500">
                  terms & conditions
                </Link>{" "}
                provided by the company. By providing my phone number, I agree
                to receive text messages from the business.
              </p>
            </div>
            <input
              type="submit"
              value="Submit"
              className="my-2 cursor-pointer rounded-lg border bg-black p-2 font-extrabold text-white"
            ></input>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
