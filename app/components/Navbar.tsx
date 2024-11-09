import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute w-full h-[10vh] flex justify-center items-center">
      <ul className="w-[80%] md:w-[50%] flex justify-evenly items-center p-10 mt-0 z-10 shadow-md shadow-white rounded-md bg-borcelle">
        <li>
          <Link className="hover:italic" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:italic" href="#about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:italic" href="#collections">
            Collections
          </Link>
        </li>
        <li>
          <Link className="hover:italic" href="#contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
