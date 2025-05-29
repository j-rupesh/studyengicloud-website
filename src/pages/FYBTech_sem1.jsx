// src/pages/FYBTech.jsx

import React from "react";
import { Link } from "react-router-dom"; 
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

const FYBTech = () => {
  return (
    <div className="relative  mx-auto p-5 overflow-hidden min-h-screen bg-gradient-to-b from-blue-100 to-white">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-5">FY BTech Page sem I </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Welcome to the FY BTech page! Here you will find all the information
        related to the First Year BTech program, including courses, syllabus, and more.
      </p>

      {/* Bubbles background */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white opacity-20 animate-float"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Semester Boxes */}
      <div className="relative grid grid-cols-3 sm:grid-cols-2 md:grid-cols-1 gap-6 mt-10 z-10">

        {/* First Semester Box */}
        <Link to="/fy-btech/first-semester_sem1">
          <div className="bg-blue-500 p-8 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center">
            <div className="text-5xl mb-4">
              <BsFillLightningChargeFill />
            </div>
            <h3 className="text-2xl font-semibold text-center">In Semester-I</h3>
            <p className="text-center mt-4">Details about the First Semester go here.</p>
          </div>
        </Link>

        {/* Second Semester Box */}
        <Link to="/fy-btech/second-semester_sem1">
          <div className="bg-green-500 p-8 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center">
            <div className="text-5xl mb-4">
              <FaGraduationCap />
            </div>
            <h3 className="text-2xl font-semibold text-center">Second In Semester-I</h3>
            <p className="text-center mt-4">Details about the Second Semester go here.</p>
          </div>
        </Link>

        {/* End Semester Box */}
        <Link to="/fy-btech/end-semester_sem1">
          <div className="bg-red-500 p-8 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center">
            <div className="text-5xl mb-4">
              <FaBookOpen />
            </div>
            <h3 className="text-2xl font-semibold text-center">End Semester-I</h3>
            <p className="text-center mt-4">Details about the End Semester go here.</p>
          </div>
        </Link>

      </div>

    </div>
  );
};

export default FYBTech;
