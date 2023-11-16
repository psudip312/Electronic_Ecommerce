import { BsHeadphones } from "react-icons/bs";
import "./App.css";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ExploreCard from "./components/ExploreCard";
import Exploree from "./components/Explore";
import banner from "./assets/Hero-banner.png";
import Category from "./components/catergory/Category";
import NArrivals from "./components/arrivals/NArrivals";
import Banner from "./components/banner/Banner";
import Information from "./components/information/Information";
import FeaturedCardsList from "./components/Featured";

function App() {
  return (
    <>
      <section className="px-5 lg:px-40 w-100 bg-[#0056D1] text-white font-[700] text-center py-3 flex justify-between ">
        <div className="flex gap-4">
          <BsHeadphones size={24} />
          <div className="flex gap-2">
            <div>Support</div>
            <div className="font-normal">01-23456789</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="font-normal">Need Help?</div>
          <div className="flex gap-2">
            <AiFillYoutube size={24} />
            <BiLogoFacebook size={24} />
            <AiOutlineInstagram size={24} />
            <BiLogoLinkedin size={24} />
          </div>
        </div>
      </section>
      <Navbar />
      <div>
        <img src={banner} />
      </div>
      <Category />
      <Banner />
      <NArrivals />
      <FeaturedCardsList />
      <Exploree />
      <ExploreCard />
      <Information />
      <Footer />
    </>
  );
}

export default App;
