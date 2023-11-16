import React from "react";
import { electronicsProducts } from "/src/components/productdata/NewArrivalsData.jsx";
import Test from "../Test";

const NArrivals = () => {
  return (
    <div>
      <div className="flex justify-between px-28 py-10">
        <div className="text-3xl font-semibold">New Arrivals</div>
        <div className="">
          <a className="text-[#0056D1]">View all</a>
        </div>
      </div>

      <div className="flex px-32 gap-2 mt-10 flex-wrap">
        {electronicsProducts.map((prd, index) => (
          <Test
            key={index}
            productImage={prd.productImage}
            isNew={prd.isNew}
            discount={prd.discount}
            title={prd.title}
            price={prd.price}
            discountedPrice={prd.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default NArrivals;
