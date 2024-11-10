import React from 'react';

const Collections = () => {
  return (
    <div
      id="collections"
      className="w-full h-screen flex flex-col md:flex-row justify-center items-center border-b-2 border-black"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl p-5">PICK THE VARIETY</h1>
        <p className="w-[70%] text-center p-5">
          Borcelle Boutique specializes in diverse flower varieties that offers
          a delightful array of blooms that cater to every taste and occasion.
          With an impressive selection that spans classic roses, cheerful
          sunflowers, and exotic orchids to seasonal wildflowers and rare
          tropical plants, the boutique ensures there’s something for everyone.
          Each variety is carefully sourced for freshness and quality, allowing
          for endless creative possibilities in arrangements. Customers can
          choose single-variety bouquets for a bold, elegant statement or enjoy
          mixed arrangements that highlight contrasting textures and colors.
        </p>
      </div>
      <div className="w-full h-full bg-collections-pattern bg-cover border-t-2 md:border-l-2 border-black"></div>
    </div>
  );
};

export default Collections;
