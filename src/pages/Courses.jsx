import React from "react";
import { Link } from "react-router-dom";

const courseData = [
  {
    id: 1,
    title: "FYBTech",
    path: "/fy-btech",
    image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "SYBTech",
    path: "/sy-btech",
    image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "TYBTech",
    path: "/third-year",
    image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "FinalYear",
    path: "/final-year",
    image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
    color: "bg-red-500",
  },
];

export const Courses = () => {
  return (
    <section className="py-10 bg-gray-100" id="courses">
 <div className="p-1 mx-auto px-4">        {/*padding dei hai  */}
        <h2 className="text-2xl font-bold text-center mb-7">Enggineering Material</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseData.map((course) => (
            <Link to={course.path} key={course.id}>
              <div className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer ${course.color} text-white`}>
                
                {/* Bubbles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="absolute rounded-full bg-white opacity-20 animate-bounce"
                      style={{
                        width: `${20 + Math.random() * 30}px`,
                        height: `${20 + Math.random() * 30}px`,
                        top: `${Math.random() * 80}%`,
                        left: `${Math.random() * 80}%`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Image Container */}
                <div className="flex justify-center items-center pt-6 relative z-10">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-24 h-24 object-contain"
                  />
                </div>

                {/* Title */}
                <div className="p-6 text-center relative z-10">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
