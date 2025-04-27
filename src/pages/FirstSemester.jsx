// src/pages/FirstSemester.jsx
import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  {
    id: 1,
    name: "Mathematics-I",
    sem1Path: "/fybtech/mathematics-i/semester-1",
    sem2Path: "/fybtech/mathematics-i/semester-2",
  },
  {
    id: 2,
    name: "Physics",
    sem1Path: "/fybtech/physics/semester-1",
    sem2Path: "/fybtech/physics/semester-2",
  },
  {
    id: 3,
    name: "Industrial Chemistry",
    sem1Path: "/fybtech/industrial-chemistry/semester-1",
    sem2Path: "/fybtech/industrial-chemistry/semester-2",
  },
  {
    id: 4,
    name: "Basic Electronics Engineering",
    sem1Path: "/fybtech/basic-electronics/semester-1",
    sem2Path: "/fybtech/basic-electronics/semester-2",
  },
  {
    id: 5,
    name: "Engineering Mechanics",
    sem1Path: "/fybtech/engineering-mechanics/semester-1",
    sem2Path: "/fybtech/engineering-mechanics/semester-2",
  },
  {
    id: 6,
    name: "Problem Solving and Programming I",
    sem1Path: "/fybtech/programming-i/semester-1",
    sem2Path: "/fybtech/programming-i/semester-2",
  },
  {
    id: 7,
    name: "Engineering Graphics & Introduction to CAD",
    sem1Path: "/fybtech/engineering-graphics/semester-1",
    sem2Path: "/fybtech/engineering-graphics/semester-2",
  },
  {
    id: 8,
    name: "Project Based Learning Management I",
    sem1Path: "/fybtech/pbl-management-i/semester-1",
    sem2Path: "/fybtech/pbl-management-i/semester-2",
  },
];

const FirstSemester = () => {
  return (
    <div className=" mx-auto sm:p-3 ">
      <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-blue-600 p-6">
        First Semester - Subjects, Notes & Timetable
      </h1>

      {/* Subjects List */}
      <div className="grid grid-cols-2 p-2 sm:grid-cols-1 md:grid-cols-1 gap-6 mb-12">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white p-6 shadow-md rounded-md border hover:shadow-lg transition"
          >
            <h3 className="text-xl sm:text-lg md:text-xl font-semibold text-gray-800 mb-4">
              {subject.name}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to={subject.sem1Path}
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition text-center"
              >
                Semester 1
              </Link>

              <Link
                to={subject.sem2Path}
                className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition text-center"
              >
                Semester 2
              </Link>
            </div>
          </div>
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

export default FirstSemester;
