import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen flex flex-col md:flex-row justify-center items-center border-b-2 border-black"
    >
      <div className="w-full h-full bg-about-pattern bg-cover border-b-2 md:border-r-2 border-black"></div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl p-5">SMELL THE BEAUTY</h1>
        <p className="w-[70%] text-center p-5">
          Borcelle Boutique is a charming oasis where nature&apos;s artistry
          meets creative design. Each bouquet is crafted with care, bringing
          together vibrant colors, unique textures, and delicate scents to
          create a work of art for any occasion. From romantic roses and elegant
          lilies to wildflowers and exotic orchids, the boutique offers a
          curated selection that celebrates the beauty and versatility of
          flowers. Knowledgeable florists provide personalized service, helping
          customers select blooms that convey just the right message, whether
          it&apos;s love, sympathy, or joy. The boutique itself is often styled
          with lush greenery and elegant décor, making it a serene escape for
          anyone who steps inside.
        </p>
      </div>
    </div>
  );
};

export default About;
