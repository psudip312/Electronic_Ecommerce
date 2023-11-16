import React, { useState } from "react";
import Test from "./Test";
import Btn from "./Btn";
const Exploree = () => {
  const products = [
    {
      productImage: "https://source.unsplash.com/featured/?speaker",
      isNew: true,
      discount: 39,
      title: "3 in 1 Speaker",
      price: 855,
      discountedPrice: 254,
    },
    {
      productImage: "https://source.unsplash.com/featured/?headphones",
      isNew: false,
      discount: 15,
      title: "Wireless Headphones",
      price: 120,
      discountedPrice: 102,
    },
    {
      productImage: "https://source.unsplash.com/featured/?smartwatch",
      isNew: true,
      discount: 20,
      title: "Smartwatch",
      price: 299,
      discountedPrice: 239,
    },
    {
      productImage: "https://source.unsplash.com/featured/?earbuds",
      isNew: false,
      discount: 10,
      title: "Bluetooth Earbuds",
      price: 79,
      discountedPrice: 71,
    },
    {
      productImage: "https://source.unsplash.com/featured/?gaming-mouse",
      isNew: true,
      discount: 25,
      title: "Gaming Mouse",
      price: 49,
      discountedPrice: 37,
    },
    {
      productImage: "https://source.unsplash.com/featured/?cooling-pad",
      isNew: false,
      discount: 30,
      title: "Laptop Cooling Pad",
      price: 35,
      discountedPrice: 24.5,
    },
    {
      productImage: "https://source.unsplash.com/featured/?power-bank",
      isNew: true,
      discount: 18,
      title: "Power Bank",
      price: 45,
      discountedPrice: 36.9,
    },
    {
      productImage: "https://source.unsplash.com/featured/?fitness-tracker",
      isNew: false,
      discount: 12,
      title: "Fitness Tracker",
      price: 89,
      discountedPrice: 78.32,
    },
    {
      productImage: "https://source.unsplash.com/featured/?bluetooth-speaker",
      isNew: true,
      discount: 22,
      title: "Portable Bluetooth Speaker",
      price: 65,
      discountedPrice: 50.7,
    },
    {
      productImage: "https://source.unsplash.com/featured/?usb-c-hub",
      isNew: false,
      discount: 5,
      title: "USB-C Hub",
      price: 29,
      discountedPrice: 27.55,
    },
    {
      productImage: "https://source.unsplash.com/featured/?camera",
      isNew: true,
      discount: 15,
      title: "Mirrorless Camera",
      price: 899,
      discountedPrice: 764.15,
    },
    {
      productImage: "https://source.unsplash.com/featured/?keyboard",
      isNew: false,
      discount: 8,
      title: "Mechanical Keyboard",
      price: 120,
      discountedPrice: 110.4,
    },
  ];

  console.log(products);

  return (
    <>
      <div className="flex justify-between px-28 py-16">
        <div className="text-3xl font-semibold">Explore our Products</div>
        <div className="">
          <a className="text-[#0056D1]">View all</a>
        </div>
      </div>
      <div className="flex px-28 gap-4 flex-wrap">
        {products.map((prd, index) => (
          <Test
            key={index}
            productImage={prd.productImage}
            isNew={prd.isNew}
            discount={prd.discount}
            title={prd.title}
            image={prd.image}
            price={prd.price}
            discountedPrice={prd.discountedPrice}
          />
        ))}
      </div>
      <div className="flex justify-center items-center py-14">
        <Btn title="Load More"></Btn>
      </div>
    </>
  );
};

export default Exploree;
