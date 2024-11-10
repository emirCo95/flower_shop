import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-hero-pattern bg-no-repeat bg-cover border-b-2 border-black">
      <div className="w-full h-full backdrop-blur-sm flex flex-col justify-center items-center ">
        <div className="w-full h-[40%] flex justify-center items-center">
          <Image src="/logo.png" alt="logo" width={500} height={500} />
        </div>
        <div className="">
          <button className="bg-borcelle border-2 border-black hover:bg-black hover:text-borcelle hover:border-borcelle p-5 m-5 rounded-md">
            <Link href="#about">About Us</Link>
          </button>
          <button className="bg-black text-white border-2 border-white hover:bg-white hover:text-black hover:border-black p-5 m-5 rounded-md">
            <Link href="#collections">Our Collections</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
