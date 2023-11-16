import React from "react";
import image1 from "../../assets/Frame.png";
import image2 from "../../assets/Frame (1).png";
import image3 from "../../assets/Frame (2).png";
import image4 from "../../assets/Frame (3).png";

const Information = () => {
  return (
    <div className="px-10 py-5 lg:px-28 lg:py-20 ">
      <div className="flex flex-col justify-around lg:flex lg:flex-row gap-6">
        <div className="flex gap-3 items-center justify-center ">
          <div>
            <img src={image1} />
          </div>
          <div>
            <div className="text-xl font-semibold">Fast & Secure Delivery</div>
            <div className="text-base font-normal text-[#999999]">
              Tell about your service
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-center ">
          <div>
            <img src={image2} />
          </div>
          <div>
            <div className="text-xl font-semibold">Money Back Guarantee</div>
            <div className="text-base font-normal text-[#999999]">
              Within 10 days
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-3 items-center justify-center">
          <div>
            <img src={image3} />
          </div>
          <div>
            <div className="text-xl font-semibold">24 Hour Return Policy </div>
            <div className="text-base font-normal text-[#999999]">
              No question ask.
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-3 items-center justify-center">
          <div>
            <img src={image4} />
          </div>
          <div>
            <div className="text-xl font-semibold ">Pro Quality Support </div>
            <div className="text-base font-normal text-[#999999]">
              24/7 Live support.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
