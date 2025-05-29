// src/pages/FirstSemester.jsx
import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  {
    id: 1,
    name: "Mathematics II",
    sem1Path: "/fybtech/mathematics-i/semester-1-second",
    sem2Path: "/fybtech/mathematics-i/semester-2-second",
  },
  {
    id: 2,
    name: "Physics",
    sem1Path: "/fybtech/physics/semester-1-second",
    sem2Path: "/fybtech/physics/semester-2-second",
  },
  // {
  //   id: 3,
  //   name: "Industrial Chemistry",
  //   sem1Path: "/fybtech/industrial-chemistry/semester-1-second",
  //   sem2Path: "/fybtech/industrial-chemistry/semester-2-second",
  // },
  {
    id: 4,
    name: "Basic Electrical Engineering",                                       // name change
    sem1Path: "/fybtech/basic-electronics-engineering/semester-1-second",
    sem2Path: "/fybtech/basic-electronics-engineering/semester-2-second",
  },
  {
    id: 5,
    name: "Basic in Mechanical Engineering",                                        //name change
    sem1Path: "/fybtech/engineering-mechanics/semester-1-second",
    sem2Path: "/fybtech/engineering-mechanics/semester-2-second",
  },
  {
    id: 6,
    name: "Problem Solving and Programming II",
    sem1Path: "/fybtech/problem-solving-programming-i/semester-1-second",
    sem2Path: "/fybtech/problem-solving-programming-i/semester-2-second",
  },
  {
    id: 7,
    name: "Basic in Mechanical Engineering",                                          //chamge the mane
    sem1Path: "/fybtech/engineering-graphics-cad/semester-1-second",
    sem2Path: "/fybtech/engineering-graphics-cad/semester-2-second",
  },
  {
    id: 8,
    name: "Project Based Learning Management II",
    sem1Path: "/fybtech/pbl-management-i/semester-1-second",
    sem2Path: "/fybtech/pbl-management-i/semester-2-second",
  },
];

const FirstSemester = () => {
  return (
     <div className="relative mx-auto sm:p-3 min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
       {/* Animated Background Bubbles */}
       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         {[...Array(10)].map((_, index) => (
           <div
             key={index}
             className="absolute rounded-full bg-blue-200 opacity-20 animate-bounce"
             style={{
               width: `${30 + Math.random() * 40}px`,
               height: `${30 + Math.random() * 40}px`,
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`,
               animationDuration: `${4 + Math.random() * 3}s`,
               animationDelay: `${Math.random() * 2}s`,
             }}
           />
         ))}
       </div>
 
       {/*Title */}
       <h1 className="relative z-10 text-3xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-green-700 p-6 drop-shadow-md">
         second Semester -II - Subjects, Notes & Timetable
       </h1>
 
     
         
        {/* Subject Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-20">
          {subjects.map((subject) => (
            <Link
              to={subject.sem2Path} // <-- Open Semester 2 on click
              key={subject.id}
              className="bg-gradient-to-br from-green-100 via-white to-emerald-100 p-5 shadow-lg rounded-xl border border-green-200 hover:shadow-2xl transform hover:scale-[1.05] transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md group-hover:rotate-[10deg] transition-all duration-300">
                  {subject.name[0]}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition duration-300">
                  {subject.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">Click to open Semester 2</p>
              </div>
            </Link>
          ))}
        </div>  
        
<div class="overflow-x-auto">
  <table class="min-w-full bg-white border border-gray-300">
    <thead>
      <tr class="bg-blue-500 text-white">
        <th class="py-2 px-4 border-b text-left">Sr No</th>
        <th class="py-2 px-4 border-b text-left">Course</th>
        <th class="py-2 px-4 border-b text-left">Symbol</th>
        <th class="py-2 px-4 border-b text-left">Th</th>
        <th class="py-2 px-4 border-b text-left">Pr</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b">Engineering Mathematics -II</td>
        <td class="py-2 px-4 border-b">EM-II</td>
        <td class="py-2 px-4 border-b">3</td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">2</td>
        <td class="py-2 px-4 border-b">Engineering Physics</td>
        <td class="py-2 px-4 border-b">PHY</td>
        <td class="py-2 px-4 border-b">3</td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">3</td>
        <td class="py-2 px-4 border-b">Basic in Mechanical Engineering</td>
        <td class="py-2 px-4 border-b">BME</td>
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">4</td>
        <td class="py-2 px-4 border-b">Basic Electrical Engineering</td>
        <td class="py-2 px-4 border-b">BEE</td>
        <td class="py-2 px-4 border-b">3</td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">5</td>
        <td class="py-2 px-4 border-b">Environmental Informatics</td>
        <td class="py-2 px-4 border-b">EI</td>
        <td class="py-2 px-4 border-b"></td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">6</td>
        <td class="py-2 px-4 border-b">Project Based Learning and Management-II</td>
        <td class="py-2 px-4 border-b">PBLM-II</td>
        <td class="py-2 px-4 border-b"></td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">7</td>
        <td class="py-2 px-4 border-b">Universal Human Values-II</td>
        <td class="py-2 px-4 border-b">UHV-II</td>
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b"></td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">8</td>
        <td class="py-2 px-4 border-b">Problem Solving and Programming-II</td>
        <td class="py-2 px-4 border-b">PSP-II</td>
        <td class="py-2 px-4 border-b">2</td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">9</td>
        <td class="py-2 px-4 border-b">Sports</td>
        <td class="py-2 px-4 border-b">SPORTS</td>
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b"></td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
};

export default FirstSemester;
