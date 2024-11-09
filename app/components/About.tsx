import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen flex flex-col md:flex-row justify-center items-center"
    >
      <div className="w-full h-full bg-about-pattern bg-cover border-r-2 border-black"></div>
      <div className="">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          iste! Magnam natus recusandae nostrum mollitia magni nobis adipisci
          facilis veritatis, eveniet nesciunt cupiditate fugiat iste nisi
          perferendis similique maiores pariatur.
        </p>
      </div>
    </div>
  );
};

export default About;
