// src/pages/FirstSemester.jsx
import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  {
    id: 1,
    name: "Mathematics I",
    sem1Path: "/fybtech/mathematics-i/semester-1-end",
    // sem2Path: "/fybtech/mathematics-i/semester-2",
  },
  // {
  //   id: 2,
  //   name: "Physics",
  //   sem1Path: "/fybtech/physics/semester-1-end",
  //   // sem2Path: "/fybtech/physics/semester-2",
  // },
  {
    id: 3,
    name: "Industrial Chemistry",
    sem1Path: "/fybtech/industrial-chemistry/semester-1-end",
    // sem2Path: "/fybtech/industrial-chemistry/semester-2",
  },
  {
    id: 4,
    name: "Basic Electronics Engineering",
    sem1Path: "/fybtech/basic-electronics-engineering/semester-1-end",
    // sem2Path: "/fybtech/basic-electronics/semester-2",
  },
  {
    id: 5,
    name: "Engineering Mechanics",
    sem1Path: "/fybtech/engineering-mechanics/semester-1-end",
    // sem2Path: "/fybtech/engineering-mechanics/semester-2",
  },
  {
    id: 6,
    name: "Problem Solving and Programming I",
    sem1Path: "/fybtech/problem-solving-programming-i/semester-1-end",
    // sem2Path: "/fybtech/problem-solving-programming-i/semester-2",
  },
  {
    id: 7,
    name: "Engineering Graphics & Introduction to CAD",
    sem1Path: "/fybtech/engineering-graphics-cad/semester-1-end",
    // sem2Path: "/fybtech/engineering-graphics-cad/semester-2",
  },
  {
    id: 8,
    name: "Project Based Learning Management I",
    sem1Path: "/fybtech/pbl-management-i/semester-1-end",
    // sem2Path: "/fybtech/pbl-management-i/semester-2",
  },
];

const FirstSemester_sem1 = () => {
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
       <h1 className="relative z-10 text-3xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-red-700 p-6 drop-shadow-md">
         End Semester - Subjects, Notes & Timetable semester 1
       </h1>
 


 
     
        {/* Subject Cards */}
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-20">
  {subjects.map((subject) => (
    <Link
      to={subject.sem1Path} // Ya subject.link - jisme aap next page ka path doge
      key={subject.id}
      className="bg-gradient-to-br from-blue-100 via-white to-indigo-100 p-5 shadow-lg rounded-xl border border-blue-200 hover:shadow-2xl transform hover:scale-[1.05] transition-all duration-300 cursor-pointer group"
    >
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md group-hover:rotate-[10deg] transition-all duration-300">
          {subject.name[0]}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition duration-300">
          {subject.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">Click to explore</p>
      </div>
    </Link>
  ))}
</div>


      {/* Exam Pattern */}

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
        <td class="py-2 px-4 border-b">Engineering Mathematics -I</td>
        <td class="py-2 px-4 border-b">EM-I</td>
        <td class="py-2 px-4 border-b">3</td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">2</td>
        <td class="py-2 px-4 border-b">Industrial Chemistry</td>
        <td class="py-2 px-4 border-b">CHEM</td>
        <td class="py-2 px-4 border-b">3</td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">3</td>
        <td class="py-2 px-4 border-b">Engineering Graphics and Introduction to Cad</td>
        <td class="py-2 px-4 border-b">EG</td>
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">4</td>
        <td class="py-2 px-4 border-b">Basic Electronics Engineering</td>
        <td class="py-2 px-4 border-b">BXE</td>
        <td class="py-2 px-4 border-b">3</td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">5</td>
        <td class="py-2 px-4 border-b">Engineering Mechanics</td>
        <td class="py-2 px-4 border-b">EM</td>
        <td class="py-2 px-4 border-b">2</td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">6</td>
        <td class="py-2 px-4 border-b">Project Based Learning and Management-I</td>
        <td class="py-2 px-4 border-b">PBLM-I</td>
        <td class="py-2 px-4 border-b"></td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">7</td>
        <td class="py-2 px-4 border-b">Universal Human Values-I</td>
        <td class="py-2 px-4 border-b">UHV-I</td>
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b"></td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">8</td>
        <td class="py-2 px-4 border-b">Problem Solving and Programming-I</td>
        <td class="py-2 px-4 border-b">PSP-I</td>
        <td class="py-2 px-4 border-b">2</td>
        <td class="py-2 px-4 border-b">6</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="py-2 px-4 border-b">9</td>
        <td class="py-2 px-4 border-b">Physical Education</td>
        <td class="py-2 px-4 border-b">PE</td>
        <td class="py-2 px-4 border-b">1</td>
        <td class="py-2 px-4 border-b"></td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
};

export default FirstSemester_sem1;
