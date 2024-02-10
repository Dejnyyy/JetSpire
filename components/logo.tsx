import Image from "next/image";

const Logo = (props: { sitename?: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className=" font-mono text-lg font-semibold text-white">
          {props.sitename}
        </h1>
        <h1 className="cursor-pointer text-center font-mono text-4xl font-semibold text-white sm:text-7xl md:text-8xl lg:text-10xl">
            JETSPIRE
        </h1>
        <h1 className="text-md text-center font-mono font-semibold text-white sm:text-xl md:text-2xl lg:text-4xl">
             AI - Marketing
        </h1>
      </div>
      <div className="">
        <Image
        src="/logo.webp"
        alt="JetSpire Logo"
        className="my-48 w-24 sm:w-36 md:w-48 lg:w-96 xl:w-96"
        width={1200}
        height={1200}
      /></div>
    </div>
    
  );
};

export default Logo;
