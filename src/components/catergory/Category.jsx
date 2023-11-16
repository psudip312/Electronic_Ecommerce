import React from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import cate1 from "./../../assets/Dell-XPS-13-Plus-i7-14900H-14th-Gen-Laptop 1.png";
const categories = [
  {
    id: 1,
    name: "Laptop",
    image: "https://source.unsplash.com/800x600/?laptop", // Unsplash placeholder image link for laptops
  },
  {
    id: 2,
    name: "Smartphone",
    image: "https://source.unsplash.com/800x600/?smartphone", // Unsplash placeholder image link for smartphones
  },
  {
    id: 3,
    name: "Headphones",
    image: "https://source.unsplash.com/800x600/?headphones", // Unsplash placeholder image link for headphones
  },
  {
    id: 4,
    name: "Tablet",
    image: "https://source.unsplash.com/800x600/?tablet", // Unsplash placeholder image link for tablets
  },
  {
    id: 5,
    name: "Camera",
    image: "https://source.unsplash.com/800x600/?camera", // Unsplash placeholder image link for cameras
  },
  {
    id: 6,
    name: "Smartwatch",
    image: "https://source.unsplash.com/800x600/?smartwatch", // Unsplash placeholder image link for smartwatches
  },
];

const Category = () => {
  return (
    <>
      <div className="flex justify-between px-40 py-10">
        <div className="text-3xl font-semibold">Browse by Category</div>
        <div className="flex  gap-2">
          <BsArrowLeftSquare size={26} />
          <BsArrowRightSquare size={26} />
        </div>
      </div>
      <div className="px-40">
        <div className="flex justify-around">
          {categories.map((category) => (
            <div
              key={category.id}
              className="max-w-[199px] rounded-lg p-4 shadow-lg"
            >
              <div className="flex justify-center">
                <img
                  src={category.image}
                  className="w-[136px] h-[110px]"
                  alt={category.name}
                />
              </div>
              <div className="text-center font-medium p-2">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
