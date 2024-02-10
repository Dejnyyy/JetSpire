import { navigation } from "./navigation";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="h-auto border-t border-white bg-black pb-5 pt-8">
        <div className="justify-center text-center sm:mx-12 lg:mx-48 xl:mx-96">
          <h1 className="font-mono text-7xl font-semibold text-white">
            JETSPIRE
          </h1>
          <h3 className="my-5 rounded-lg p-5 px-4 font-mono  text-xl font-semibold text-white">
            We're here to help you reach the stars.
          </h3>
        </div>
        <div className="flex  flex-col justify-center text-center sm:flex-row">
          {navigation.map((item) => (
            <Link href={item.href} key={item.name}>
              <p className="ml-2 rounded-lg px-3 py-1 font-mono text-lg font-semibold text-white hover:bg-gray-700 hover:text-white">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
        <div>
          <p className="mt-5 text-center font-mono text-lg  font-semibold text-white">
            &copy;{new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
