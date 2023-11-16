import React from "react";
import test2 from "../assets/Group 42 (1).png";

const FeaturedCard = ({ item }) => {
  const { image, title, price } = item;

  return (
    <div>
      <div className="p-4 flex gap-5">
        <div>
          <img src={image} className="h-[112.9px] w-[112.9px]" alt={title} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-medium leading-4 max-w-[218px]">{title}</div>
          <div>
            <img src={test2} alt="Some description" />
          </div>
          <div className="text-xl font-semibold leading-6">{price}</div>
        </div>
      </div>
    </div>
  );
};

const featuredItems = [
  {
    image: "https://source.unsplash.com/150x150/?technology", // Unsplash placeholder image link for technology
    title: "Samsung 2TB 980 PRO PCIe 4.0 x4 M.2 Internal SSD",
    price: "$119.99",
  },
  {
    image: "https://source.unsplash.com/150x150/?mouse", // Unsplash placeholder image link for mouse
    title: "Logitech MX Master 3 Advanced Wireless Mouse",
    price: "$99.99",
  },
  {
    image: "https://source.unsplash.com/150x150/?product", // Unsplash placeholder image link for a generic product
    title: "Example Product",
    price: "$49.99",
  },
  {
    image: "https://source.unsplash.com/150x150/?keyboard", // Unsplash placeholder image link for keyboard
    title: "Mechanical Gaming Keyboard",
    price: "$79.99",
  },
  {
    image: "https://source.unsplash.com/150x150/?headphones", // Unsplash placeholder image link for headphones
    title: "Wireless Over-Ear Headphones",
    price: "$129.99",
  },
  {
    image: "https://source.unsplash.com/150x150/?camera", // Unsplash placeholder image link for camera
    title: "Professional DSLR Camera",
    price: "$899.99",
  },
];

const FeaturedCardsList = () => {
  return (
    <>
      <div className="flex justify-between px-28 py-10">
        <div className="text-3xl font-semibold">Featured Products</div>
        <div className="">
          <a className="text-[#0056D1]">View all</a>
        </div>
      </div>
      <div className="flex flex-wrap px-28 gap-4">
        {featuredItems.map((item, index) => (
          <FeaturedCard key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default FeaturedCardsList;
