import React from "react";
import { MdEmail } from "react-icons/Md";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTiktok } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const CustomerLinks = [
    { id: 1, text: "Return Policy" },
    { id: 2, text: "Request a Return" },
    { id: 3, text: "Unsubscribe from Mailing" },
    { id: 4, text: "Payments" },
    { id: 5, text: "International" },
  ];
  const AccountLinks = [
    { id: 1, text: "My Account" },
    { id: 2, text: "Login / Register" },
    { id: 3, text: "Cart" },
    { id: 4, text: "Wishlist" },
    { id: 5, text: "Shop" },
  ];
  const UsefulLinks = [
    { id: 1, text: "Privacy Policy" },
    { id: 2, text: "Terms Of Use" },
    { id: 3, text: "FAQ" },
    { id: 4, text: "Contact" },
  ];

  return (
    <div className="bg-[#F3F6FF] text-[#222222] ">
      <div className=" min-h-[40vh] flex flex-col gap-[5%]  lg:flex-row lg:justify-between px-10 lg:px-40 py-[4%] text-[#222222] ">
        <div className="flex  flex-col gap-2 mt-6 lg:mt-0">
          <strong className=" ">Customer Service & Help</strong>
          <div className="flex flex-row flex-wrap lg:flex-col gap-2">
            {CustomerLinks.map((item) => {
              return (
                <span key={item.id} className="hover:text-[#0056D1] ">
                  {item.text}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex  flex-col gap-2 mt-6 lg:mt-0">
          <strong className=" ">Account</strong>
          <div className="flex flex-row flex-wrap lg:flex-col gap-2">
            {AccountLinks.map((item) => {
              return (
                <span key={item.id} className=" hover:text-[#0056D1]">
                  {item.text}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex  flex-col gap-2 mt-6 lg:mt-0">
          <strong className=" ">Useful Links</strong>
          <div className="flex flex-row flex-wrap lg:flex-col gap-2">
            {UsefulLinks.map((item) => {
              return (
                <span
                  key={item.id}
                  className="hover:text-[#0056D1] font-normal "
                >
                  {item.text}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-6 lg:mt-0">
          <strong>Support</strong>
          <div className="flex  gap-2 ">
            <MdEmail className="text-[#0056D1]" size={20} />
            <span className="hover:text-[#0056D1] ">example@domain.com</span>
          </div>
          <div className="flex gap-2">
            <IoIosCall className="text-[#0056D1]" size={20} />
            <span className="hover:text-[#0056D1] "> 01-123456789</span>
          </div>
          <div className="flex gap-3 mt-6">
            <div className="rounded-full border-2 hover:bg-blue-400 cursor-pointer border-gray-900 p-[2px]">
              <BiLogoFacebook />
            </div>
            <div className="rounded-full border-2 hover:bg-blue-400 cursor-pointer border-gray-900 p-[2px]">
              <AiOutlineInstagram />
            </div>
            <div className="rounded-full border-2 hover:bg-blue-400 cursor-pointer border-gray-900 p-[2px]">
              <BiLogoTiktok />
            </div>
            <div className="rounded-full border-2 hover:bg-blue-400 cursor-pointer border-gray-900 p-[2px]">
              <BiLogoLinkedin />
            </div>
          </div>
          <div className="hidden lg:flex"></div>
          <div className="hidden  lg:flex"></div>
        </div>
      </div>

      <section className="lg:ps-[5%] px-[5%] lg:pr-0">
        <hr className="text-white" />
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between py-4">
          <p>© 2023 EasyMobile All Rights Reserved</p>
          <div className="flex flex-row gap-3 pr-3">
            <div className="bg-white p-2 text-black rounded-md ">
              <p>Terms of use</p>
            </div>
            <div className="bg-white p-2 text-black rounded-md ">
              <p>Privacy</p>
            </div>
            <div className="bg-white p-2 text-black rounded-md ">
              <p>Export Policy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
