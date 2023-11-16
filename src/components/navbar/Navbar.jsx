import React from "react";
import logo from "./../../assets/logo-s 1.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
const CartCountBadge = (props) => {
  const { size } = props;
  return (
    <div
      className={`${size} absolute -top-3 -right-3 rounded-full bg-red-600 text-[14px] text-white place-items-center grid`}
    >
      3
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="px-40 py-6 flex">
      <div>
        <img src={logo} />
      </div>
      <div>
        <div className="">
          <div className=" ml-20">
            <div className="flex">
              <div className="relative w-[648px]">
                <BsSearch
                  className="absolute top-0 left-0 mt-4 mr-5 ml-4 text-gray-500 "
                  size={20}
                />
                <input
                  className="bg-[#f2f3f5] ml-4 outline-none border-none rounded-[30px] px-6 py-3  w-[648px]"
                  type="text"
                  placeholder="Search Products"
                />
              </div>
              <div className="ml-10 flex justify-center items-center">
                <AiOutlineHeart size={30} className="text-gray-600" />
              </div>
              <div className=" flex justify-center items-center gap-3 ml-8">
                <div>
                  <FaUser size={24} className="text-gray-600" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-600 	">
                    Hello, Sign in
                  </span>
                  <div className="text-lg font-semibold ">My Account</div>
                </div>
              </div>
              <div className=" flex ml-4 justify-center items-center gap-5">
                <div>
                  <div className=" relative rounded-full p-2 border  ">
                    <AiOutlineShoppingCart
                      size={24}
                      className="text-gray-600"
                    />
                    <CartCountBadge size="w-[20px] h-[20px]" />
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-600 	">
                    My Cart
                  </span>
                  <div className="text-lg font-semibold ">Rs. 0.00 </div>
                </div>
              </div>
            </div>
            <div>
              <div class="p-4 hidden w-full md:block md:w-auto">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-2"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 "
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 "
                    >
                      Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 "
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 "
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 "
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
