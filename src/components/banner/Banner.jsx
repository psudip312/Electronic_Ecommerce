import React from "react";
import img from "../../assets/laptop 1.png";
const Banner = () => {
  return (
    <div className="px-5 lg:px-28 ">
      <div className="bg-[#F3F6FF] relative py-40 mt-16">
        <div className="p-8 w-2/5">
          <div className="text-xl">Don’t miss it</div>
          <div className="font-semibold text-5xl">
            Get your exclusive Dell Laptops
          </div>
        </div>

        <div className="absolute right-10 -top-10">
          <img src={img} />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Banner;
