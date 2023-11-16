import React from "react";
import headphone from "./../assets/poster-03 1.png";
import joystick from "./../assets/product-08.png";

const ExploreCard = () => {
  return (
    <>
      <div className="px-2 lg:px-28 flex flex-col lg:flex lg:flex-row gap-8">
        <div className="bg-[#0056D1] rounded-xl flex flex-col justify-center items-center">
          <div className="flex gap-8 px-6 ">
            <div className="flex flex-col justify-center ml-3">
              <img src={headphone} />
            </div>
            <div>
              <div className="text-4xl font-semibold leading-[44px] text-[#FFFFFF] p-4 mb-2">
                Get Bass Sound with BOSS
              </div>
              <div className="text-base font-normal leading-5 text-[#FFFFFF] p-4">
                Check it out
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#054376] rounded-xl">
          <div className="flex gap-8 p-10">
            <div className="flex flex-col justify-center bg-[#6D85BF] p-10 rounded-full">
              <img src={joystick} />
            </div>
            <div>
              <div className="text-base font-normal leading-5 text-[#FFFFFF] p-4">
                Get 15% offer in Winter
              </div>
              <div className="text-4xl font-semibold leading-[44px] text-[#FFFFFF] p-4 mb-2">
                Explore our Products
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;
