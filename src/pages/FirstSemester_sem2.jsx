// src/pages/FirstSemester.jsx
import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  {
    id: 1,
    name: "Mathematics",
    // sem1Path: "/fybtech/mathematics-i/semester-1",
    sem2Path: "/fybtech/mathematics-i/semester-2",
  },
  {
    id: 2,
    name: "Physics",
    // sem1Path: "/fybtech/physics/semester-1",
    sem2Path: "/fybtech/physics/semester-2",
  },
  {
    id: 3,
    name: "Industrial Chemistry",
    // sem1Path: "/fybtech/industrial-chemistry/semester-1",
    sem2Path: "/fybtech/industrial-chemistry/semester-2",
  },
  {
    id: 4,
    name: "Basic Electronics Engineering",
    // sem1Path: "/fybtech/basic-electronics/semester-1",
    sem2Path: "/fybtech/basic-electronics/semester-2",
  },
  {
    id: 5,
    name: "Engineering Mechanics",
    // sem1Path: "/fybtech/engineering-mechanics/semester-1",
    sem2Path: "/fybtech/engineering-mechanics/semester-2",
  },
  {
    id: 6,
    name: "Problem Solving and Programming I",
    // sem1Path: "/fybtech/problem-solving-programming-i/semester-1",
    sem2Path: "/fybtech/problem-solving-programming-i/semester-2",
  },
  {
    id: 7,
    name: "Engineering Graphics & Introduction to CAD",
    // sem1Path: "/fybtech/engineering-graphics-cad/semester-1",
    sem2Path: "/fybtech/engineering-graphics-cad/semester-2",
  },
  {
    id: 8,
    name: "Project Based Learning Management I",
    // sem1Path: "/fybtech/pbl-management-i/semester-1",
    sem2Path: "/fybtech/pbl-management-i/semester-2",
  },
];

const FirstSemester_sem2 = () => {
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
       <h1 className="relative z-10 text-3xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-blue-700 p-6 drop-shadow-md">
         First Semester - Subjects, Notes & Timetable semester 2
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
  




      {/* Exam Pattern */}
      <div className="bg-gray-100 p-2 rounded-md shadow-md">
        <h2 className="text-2xl sm:text-xl md:text-2xl font-bold text-center mb-6 text-blue-600">
          Exam Pattern
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Subject</th>
                <th className="py-3 px-6 text-left">Exam Type</th>
                <th className="py-3 px-6 text-left">Total Marks</th>
                <th className="py-3 px-6 text-left">Duration</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="py-4 px-6">Mathematics-I</td>
                <td className="py-4 px-6">Written</td>
                <td className="py-4 px-6">100</td>
                <td className="py-4 px-6">3 Hours</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Physics</td>
                <td className="py-4 px-6">Written + Lab</td>
                <td className="py-4 px-6">70 + 30</td>
                <td className="py-4 px-6">3 Hours</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Industrial Chemistry</td>
                <td className="py-4 px-6">Written + Lab</td>
                <td className="py-4 px-6">70 + 30</td>
                <td className="py-4 px-6">3 Hours</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Basic Electronics Engineering</td>
                <td className="py-4 px-6">Written</td>
                <td className="py-4 px-6">100</td>
                <td className="py-4 px-6">3 Hours</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Engineering Mechanics</td>
                <td className="py-4 px-6">Written</td>
                <td className="py-4 px-6">100</td>
                <td className="py-4 px-6">3 Hours</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Problem Solving and Programming I</td>
                <td className="py-4 px-6">Written + Lab</td>
                <td className="py-4 px-6">70 + 30</td>
                <td className="py-4 px-6">3 Hours</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Engineering Graphics & Introduction to CAD</td>
                <td className="py-4 px-6">Practical</td>
                <td className="py-4 px-6">50</td>
                <td className="py-4 px-6">2 Hours</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">Project Based Learning Management I</td>
                <td className="py-4 px-6">Project Evaluation</td>
                <td className="py-4 px-6">100</td>
                <td className="py-4 px-6">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FirstSemester_sem2;
