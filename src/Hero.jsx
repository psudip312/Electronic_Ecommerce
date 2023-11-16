import React from "react";
import New from "../assets/1.png";
import New1 from "../assets/2.png";
import New2 from "../assets/3.png";
import New3 from "../assets/m.png";

const Hero = () => {
  const [slide, setSlide] = React.useState(1);

  const [intervalId, setIntervalId] = React.useState(null);
  const [intervalDuration, setIntervalDuration] = React.useState(7000); //
  const [timer, setTimer] = React.useState(0);

  const slideChange = () =>
    setSlide((prev) => {
      if (prev < 3) {
        return prev + 1;
      } else {
        return 1;
      }
    });

  const changeSlideIndex = (param) => {
    if (intervalId) {
      clearInterval(intervalId);
      console.log(`clear ${intervalId}`);
    }

    setSlide(param);
    const id = setInterval(slideChange, intervalDuration);
    setIntervalId(id);
    console.log(`set ${id}`);
  };

  React.useEffect(() => {
    console.log("mount");
    const startInterval = () => {
      const id = setInterval(slideChange, intervalDuration);
      setIntervalId(id);
      console.log(`set ${id}`);
    };
    startInterval();
    return () => {
      // Clear the interval when the component unmounts
      if (intervalId) {
        clearInterval(intervalId);
        console.log(`clear ${intervalId}`);
      }
    };
  }, [intervalDuration]);

  React.useEffect(() => {
    const time = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(time);
  }, [timer]);

  return (
    <section>
      <h1 className="text-9xl font-extrabold">{timer}</h1>
      <div className="slider relative ">
        <div
          className={`  relative w-[100%] transition-all  duration-[2000ms]  ${
            slide === 1
              ? "flex ps-[10%] gap-[5%] h-[70vh] opacity-100    "
              : "hidden "
          }`}
        >
          <div className=" flex justify-center flex-col basis-[45%] gap-5 ">
            <p
              className={`text-blue-500 s-opacity font-bold  transition-opacity duration-[3000ms] delay-1000 ${
                slide === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              Hot Deal in this week
            </p>
            <h2
              className={`font-extrabold text-6xl s-opacity transition-opacity duration-[3500ms] delay-1000${
                slide === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              Smart MacBook Laptop
            </h2>
            <button className="p-[2%] w-max bg-slate-300 border-none">
              Shop Now
            </button>
          </div>
          <div className=" basis-[55%] relative ">
            <div className="n1 absolute bottom-0 right-0 ">
              <img src={New} alt="" className=" object-cover w-[100%]" />
            </div>
            <div className="n2 max-w-[450px] w-[100%] absolute bottom-0 left-0">
              <img src={New1} alt="" className="object-cover w-[100%]" />
            </div>
            <div
              className={`n3 max-w-[420px] s-opacity w-[100%] absolute top-[25%] left-[25%] transition-opacity delay-[500ms] duration-[4000ms] `}
            >
              <img src={New3} alt="" className="object-cover w-[100%]" />
            </div>
          </div>
        </div>
        <div
          className={`  relative w-[100%] transition-all  duration-[2000ms]  ${
            slide === 2
              ? "flex ps-[10%] gap-[5%] h-[70vh] opacity-100    "
              : "hidden "
          }`}
        >
          <div className=" flex justify-center flex-col basis-[45%] gap-5 ">
            <p
              className={`text-blue-500 s-opacity font-bold  transition-opacity duration-[3000ms] delay-1000 ${
                slide === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              Hot Deal in this week
            </p>
            <h2
              className={`font-extrabold text-6xl s-opacity transition-opacity duration-[3500ms] delay-1000${
                slide === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              Smart MacBook Laptop
            </h2>
            <button className="p-[2%] w-max bg-slate-300 border-none">
              Shop Now
            </button>
          </div>
          <div className=" basis-[55%] relative ">
            <div className="n1 absolute bottom-0 right-0 ">
              <img src={New} alt="" className=" object-cover w-[100%]" />
            </div>
            <div className="n2 max-w-[450px] w-[100%] absolute bottom-0 left-0">
              <img src={New1} alt="" className="object-cover w-[100%]" />
            </div>
            <div
              className={`n3 max-w-[420px] s-opacity w-[100%] absolute top-[25%] left-[25%] transition-opacity delay-[500ms] duration-[4000ms] `}
            >
              <img src={New2} alt="" className="object-cover w-[100%]" />
            </div>
          </div>
        </div>
        <div
          className={`  relative w-[100%] transition-all  duration-[2000ms]  ${
            slide === 3
              ? "flex ps-[10%] gap-[5%] h-[70vh] opacity-100    "
              : "hidden "
          }`}
        >
          <div className=" flex justify-center flex-col basis-[45%] gap-5 ">
            <p
              className={`text-blue-500 s-opacity font-bold  transition-opacity duration-[3000ms] delay-1000 ${
                slide === 3 ? "opacity-100" : "opacity-0"
              }`}
            >
              Hot Deal in this week
            </p>
            <h2
              className={`font-extrabold text-6xl s-opacity transition-opacity duration-[3500ms] delay-1000${
                slide === 3 ? "opacity-100" : "opacity-0"
              }`}
            >
              Smart MacBook Laptop
            </h2>
            <button className="p-[2%] w-max bg-slate-300 border-none">
              Shop Now
            </button>
          </div>
          <div className=" basis-[55%] relative ">
            <div className="n1 absolute bottom-0 right-0 ">
              <img src={New} alt="" className=" object-cover w-[100%]" />
            </div>
            <div className="n2 max-w-[450px] w-[100%] absolute bottom-0 left-0">
              <img src={New1} alt="" className="object-cover w-[100%]" />
            </div>
            <div
              className={`n3 max-w-[420px] s-opacity w-[100%] absolute top-[25%] left-[25%] transition-opacity delay-[500ms] duration-[4000ms] `}
            >
              <img src={New3} alt="" className="object-cover w-[100%]" />
            </div>
          </div>
        </div>
        <ul className="threedots absolute bottom-[5%] flex w-max z-10 mx-[10%]">
          {[1, 2, 3].map((item, index) => {
            return (
              <li
                key={index}
                className={`dot list-disc list-inside cursor-pointer transition-all duration-500  marker:text-[40px]  hover:to-blue-400  ${
                  slide === item ? " text-blue-600" : "text-gray-500"
                }`}
                onClick={() => changeSlideIndex(item)}
              ></li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
