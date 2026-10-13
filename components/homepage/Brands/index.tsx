import React from "react";

const beautyPillars = ["Skincare", "Makeup", "Hair care", "Fragrance", "Body care"];

const Brands = () => (
  <div className="border-y border-[#f0d9e1] bg-[#fff7f7]">
    <div className="mx-auto flex max-w-frame flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 sm:justify-between sm:gap-x-5 md:py-6">
      {beautyPillars.map((item) => <span key={item} className="beauty-display text-lg text-[#8f5269] sm:text-xl">{item}</span>)}
    </div>
  </div>
);

export default Brands;
