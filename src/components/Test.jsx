import React from "react";
import { BiPlus } from "react-icons/bi";

const Test = (props) => {
  const {
    productImage,
    isNew,
    discount,
    title,
    image,
    price,
    discountedPrice,
  } = props;

  return (
    <div className="w-[308px] rounded-lg shadow-2xl">
      <div className="flex relative items-center justify-center py-10">
        <img
          src={productImage}
          className="h-[169.86px] w-[210.42px] object-contain"
        />
        {isNew && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-[#F64D4D] px-4 py-1 text-center text-sm font-medium text-white">
            New
          </span>
        )}
        {discount && (
          <span className="absolute top-0 right-0 m-2 rounded-full bg-[#0056D1] px-2 py-1 text-center text-sm font-medium text-white">
            {discount}% OFF
          </span>
        )}
      </div>
      <div className="px-6 py-5">
        <div>
          <h1 className="font-sans font-semibold text-lg leading-6 text-left mb-2">
            {title}
          </h1>
        </div>
        <div className="flex justify-between mb-3">
          <img src={image} alt="Product" />
        </div>
        <div className="flex justify-between ">
          <p>
            <span className="text-xl font-bold mr-4 text-slate-900">
              $ {price}
            </span>
            {discountedPrice && (
              <span className="text-xl text-gray-400 line-through">
                $ {discountedPrice}
              </span>
            )}
          </p>
          <div className="border rounded-md border-blue-500 p-1 hover:bg-blue-900 transition-all duration-300">
            <BiPlus size={20} className="text-blue-600 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
