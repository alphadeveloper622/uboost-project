import Link from "next/link";
import Image from "next/image";
import { IconButton, Typography } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div className="relative w-full h-[40rem]">
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10  place-content-center text-center">
          <h1 className="mb-4 text-6xl font-bold leading-snug text-white sm:text-6xl sm:leading-snug lg:text-7xl lg:leading-[1.2]">
            Hope and love in your hands....
          </h1>
          <h1 className="mb-64 text-2xl font-bold leading-snug text-white sm:text-3xl sm:leading-snug lg:text-4xl lg:leading-[1.2]">
            
          </h1>
        </div>
      </div>
      <div className="absolute bg-dark inset-0  w-full bg-cover bg-no-repeat overflow-visible">
        <img src="/images/hero/hero-image.jpg" alt="video image" className="w-full h-full object-fill opacity-60" />
      </div>
      <img src="/images/hero/hero-bottom.png" alt="video image" className="absoulte left-0 -bottom-1 z-15 w-full h-16 absolute object-fill" />
    </div>
  );
};

export default Hero;
