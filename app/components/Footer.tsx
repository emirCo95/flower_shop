import React from 'react';
import { IoLogoFacebook } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="w-full h-[25vh] flex justify-between items-start p-5 md:pl-10 md:pr-10 lg:pl-14 lg:pr-14 xl:pl-20 xl:pr-20">
      <div className="h-[60%]">
        <h1 className="underline">Social Media</h1>
        <div className="h-full flex flex-col justify-between items-center pt-5">
          <IoLogoFacebook className="text-2xl cursor-pointer" />
          <AiFillInstagram className="text-2xl cursor-pointer" />
          <FaXTwitter className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="h-[60%]">
        <h1 className="text-center underline">Location</h1>
        <div className="flex flex-col items-center pt-5">
          <h2>123 Example Ave</h2>
          <h2>State, 00000</h2>
        </div>
        <div className="flex flex-col items-center pt-5">
          <h2>+1 123 321 0000</h2>
        </div>
      </div>
      <div className="h-[60%]">
        <h1 className="underline">Operations</h1>
        <div className="flex flex-col items-center pt-5 gap-3">
          <h2 className="cursor-pointer">About</h2>
          <h2 className="cursor-pointer">Collections</h2>
          <h2 className="cursor-pointer">Careers</h2>
          <h2 className="cursor-pointer">Partnerships</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
