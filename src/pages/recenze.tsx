// src/pages/index.tsx
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import Review from 'components/reviewSystem'

export default function Recenze() {
  return (
    <div className="bg-black">
      <Navbar />
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
      <section>
        <div className="text-center font-mono">
            <form>
              <div></div>
            <input
							type="text"
							placeholder="Motto"
							className="my-2 rounded-lg border-2 border-black p-2"
						/>
           
            <input
							type="text"
							placeholder="Name of customer"
							className="my-2 rounded-lg border-2 border-black p-2"
						/>
            <div>
            <textarea
							placeholder="Text"
							className=" rounded-lg border-2 border-black p-2"
						/>
            </div>
            <div>
            <input
							type="submit"
							value="Submit"
							className="my-2 cursor-pointer rounded-lg border bg-black p-2 font-extrabold text-white"
						/>
              </div>
            </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
