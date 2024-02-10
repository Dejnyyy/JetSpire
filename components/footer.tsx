
import Link from "next/link";
import { navigation } from "./navigation";

const Footer = () => {
  return (
    <footer>
      <div className="h-auto border-t border-white bg-black pb-5 pt-8">
        <div className="justify-center text-center sm:mx-12 lg:mx-48 xl:mx-96">
          <strong className="font-mono text-4xl font-semibold text-white">
            JETSPIRE
          </strong>
          <h3 className="my-5 rounded-lg p-5 px-24 font-mono  text-xl font-semibold text-white">
            We're here to help you reach the stars.
          </h3>
        </div>
        <div className="flex justify-center text-center">

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
