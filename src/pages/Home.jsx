import React, { useState } from "react";
import heroImg from "../components/assets/images/book_icon.png";
import heroImgback from "../components/assets/images/hero-shape-purple.png";
import { FiSearch } from "react-icons/fi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaBookReader, FaGraduationCap, FaUsers } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi"; // ✅ Import added
import { About } from "./About";
import { Courses } from "./Courses";
import { Instructor } from "./Instructor";

// import { Blog } from "./Blog";

import CategoryDropdown from "./CategoryDropdown";


export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Courses />
      <Instructor />
      {/* <Blog /> */}
    </>
  );
};

export const HomeContent = () => {
  const [openCategory, setOpenCategory] = useState(false); // ✅ Added

  return (
    <>
     <section className="relative bg-secondary min-h-screen w-full py-10 overflow-hidden">

  {/* 🫧Background Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-[#548bf1] opacity-20 animate-bounce"
        style={{
          width: `${20 + Math.random() * 30}px`,
          height: `${20 + Math.random() * 30}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 5}s`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
    
      </div>
        <div className="container">
          <div className="flex items-center justify-center md:flex-col ">

            {/* Category Button */}
            {/* <div
              className="category flex items-center text-sm gap-2 cursor-pointer relative hover:text-primary transition mb-6"
              onClick={() => setOpenCategory(!openCategory)}
            >
              <HiViewGrid size={20} />
              <span>Engineering</span>

              {/* Custom Dropdown */}
              {/* <CategoryDropdown openCategory={openCategory} toggleCategory={setOpenCategory} /> */}
            {/* </div> */}

            {/* Left Content */}
            <div className="left w-1/2 text-black md:w-full p-4">
              <h1 className="text-6xl sm:text-3xl leading-tight text-black font-semibold">
              Build  <br /> Your Learning <br /> Hub
              </h1>
              <h3 className="text-lg mt-3">
                Unlimited access to all{" "}
                <span className="text-5xl font-semibold">Engineering</span> study material
              </h3>
            </div>

            {/* Right Content */}
            <div className="right w-1/2 md:w-full relative">
              <div className="images relative">
                <img src={heroImgback} alt="background shape" className="absolute top-32 left-10 w-96 md:left-10" />
                <div className="img h-[85vh] w-full">
                  <img src={heroImg} alt="hero" className="h-full w-full object-contain z-20 relative" />
                </div>
              </div>

              {/* Floating Buttons */}
              <div className="content">
                 {/* Popup 1 */}
                 <button className="bg-white shadow-md absolute top-2 right-45 z-30 p-2 flex items-center rounded-lg
                sm:top-2 sm:right-1/5 md:right-0">
                  <div className="icon w-10 h-10 text-white rounded-lg flex items-center justify-center bg-indigo-400">
                    <FaBookReader size={18} />
                  </div>
                </button>


                {/* Popup 2 */}
                <button className="bg-white shadow-md absolute top-40 right-33 z-30 p-2 flex items-center rounded-lg 
                 sm:top-20 sm:right-1/4 md:right-0">
                  <div className="icon w-10 h-10 text-white rounded-lg flex items-center justify-center bg-orange-400">
                    <BsFillLightningChargeFill size={18} />
                  </div>
                  <div className="text flex flex-col items-start pl-4">
                    <span className="text-xs text-black">🚀 Keep Pushing Forward</span>
                    <span className="text-[10px]">One step daily, a better you.</span>
                  </div>
                </button>

                {/* Popup 3 */}
                <button className="bg-white shadow-md absolute top-20 right-0 z-30 p-2 flex items-center rounded-lg 
                 sm:top-40 sm:right-1/5 md:right-9">
                  <div className="icon w-10 h-10 text-white rounded-lg flex items-center justify-center bg-blue-400">
                    <FaGraduationCap size={18} />
                  </div>
                  <div className="text flex flex-col items-start pl-4">
                    <span className="text-xs text-black">🌟 Unlock Your Potential</span>
                    <span className="text-[10px]">Unleash your strength, shine bright.</span>
                  </div>
                </button>

                {/* Popup 3 */}
                <button className="bg-white shadow-md absolute top-80 right-0 z-30 p-2 flex items-center rounded-lg 
                 sm:top-60 sm:right-1/5 md:right-10">
                  <div className="icon w-10 h-10 text-white rounded-lg flex items-center justify-center bg-orange-400">
                    <FaUsers size={18} />
                  </div>
                  <div className="text flex flex-col items-start pl-4">
                    <span className="text-xs text-black">🎯 Achieve the Impossible</span>
                    <span className="text-[10px]">Dreamers make the impossible possible.</span>
                  </div>
                </button>

               
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
