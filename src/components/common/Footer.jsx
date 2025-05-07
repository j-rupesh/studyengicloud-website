import React from "react";
import { useLocation } from "react-router-dom";  
import logImg from "../assets/images/text_effect_study.png";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  if (location.pathname !== "/" && location.pathname !== "/about") {
    return null; // Footer hidden on other pages
  }

  return (
    <>
      {/* {/*App Download Section/*}
      <section className="p-1 app w-4/5 m-auto rounded-lg shadow-lg text-white flex md:flex-col bg-[#184672] mt-16 relative z-10">
        <div className="left w-[60%] md:w-full p-10">
          <h1 className="text-4xl font-semibold leading-tight">
            Start learning by <br /> Downloading Apps.
          </h1>
        </div>
        <div className="right w-[40%] md:w-full flex items-center px-5 rounded-r-lg rounded-bl-[500px] gap-8 bg-[#2edb2e] md:bg-transparent md:p-8">
          <div className="box flex gap-2 items-center px-5 py-3 border text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow1 rounded-sm">
            <BsApple />
            <label className="text-sm">App Store</label>
          </div>
          <div className="box flex gap-2 items-center px-5 py-3 bg-white text-black shadow-shadow1 rounded-sm">
            <BsGooglePlay />
            <label className="text-sm">Play Store</label>
          </div>
        </div>
      </section> */}




      


      {/* App Download Section - Coming Soon */}
<section className="p-1 app w-4/5 m-auto rounded-lg shadow-lg text-white flex md:flex-col bg-[#3a3a3a] mt-16 relative z-10">
  <div className="left w-[60%] md:w-full p-10">
    <h1 className="text-4xl font-semibold leading-tight">
      Start learning by <br /> Downloading Apps.
    </h1>
    <p className="text-gray-300 mt-2">Our mobile apps are launching soon!</p>
  </div>
  <div className="right w-[40%] md:w-full flex items-center px-5 rounded-r-lg rounded-bl-[500px] gap-8 bg-[#555555] md:bg-transparent md:p-8">
    <div className="box flex gap-2 items-center px-5 py-3 border border-gray-300 text-gray-300 bg-transparent hover:bg-gray-200 hover:text-black shadow-shadow1 rounded-sm cursor-not-allowed opacity-60">
      <BsApple />
      <label className="text-sm">App Store (Coming Soon)</label>
    </div>
    <div className="box flex gap-2 items-center px-5 py-3 bg-gray-200 text-gray-600 shadow-shadow1 rounded-sm cursor-not-allowed opacity-60">
      <BsGooglePlay />
      <label className="text-sm">Play Store (Coming Soon)</label>
    </div>
  </div>
</section>






      {/* Footer Section */}
      <footer className="bg-[#F3F4F8] pt-32 -mt-24">
        <div className="p-5 grid grid-cols-4 md:grid-cols-2 gap-8 pb-10">
          
          {/* Logo and Description */}
          <div className="logo flex flex-col items-center md:items-start">
            <img src={logImg} alt="logImg" className="h-20 mb-4" />
            <span className="text-center md:text-left text-[14px] text-gray-700">
              Believe in yourself and keep moving forward with hard work and focus.
              Our website offers study materials, notes, mock tests, and question papers to help you succeed.
            </span>
          </div>

          {/* Company Links */}
          <div className="bg-white p-6 rounded-lg items-center shadow-lg">
            <h4 className="text-black text-sm font-semibold mb-5">Company</h4>
            <NavLink to='/about' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">About Us</NavLink>
            <NavLink to='/contact' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">Contact Us</NavLink>
            <NavLink to='/team' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">Our Team</NavLink>
            <NavLink to='/careers' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">Careers</NavLink>
          </div>

          {/* Platform Links */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-black text-sm font-semibold mb-5">Platform</h4>
            <NavLink to='/notes' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">Notes</NavLink>
            <NavLink to='/mock-tests' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">Mock Tests</NavLink>
            <NavLink to='/papers' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">Past Year Papers</NavLink>
            <NavLink to='/study-material' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">Study Material</NavLink>
          </div>

          {/* Support Links */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-black text-sm font-semibold mb-5">Support</h4>
            <NavLink to='/faqs' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">FAQs</NavLink>
            <NavLink to='/help' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">Help Center</NavLink>
            <NavLink to='/privacy-policy' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">Privacy Policy</NavLink>
            <NavLink to='/terms' className="text-[14px] block mb-2 hover:text-blue-600 transition-all duration-200">Terms & Conditions</NavLink>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-10 pt-5 text-center text-gray-500 text-sm bg-[#e6e8eb]">
          © 2025 <span className="font-semibold text-black"> StudyEngiCloud</span> All rights reserved.
        </div>
      </footer>
    </>
  );
};
