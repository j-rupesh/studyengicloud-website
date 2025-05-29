// import React from "react";
// import { Link } from "react-router-dom";

// const courseData = [
//   {
//     id: 1,
//     title: "FYBTech",
//     path: "/fy-btech",
//     image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
//     color: "bg-blue-500",
//   },
//   {
//     id: 2,
//     title: "SYBTech",
//     path: "/sy-btech",
//     image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
//     color: "bg-green-500",
//   },
//   {
//     id: 3,
//     title: "TYBTech",
//     path: "/third-year",
//     image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
//     color: "bg-yellow-500",
//   },
//   {
//     id: 4,
//     title: "FinalYear",
//     path: "/final-year",
//     image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
//     color: "bg-red-500",
//   },
// ];

// export const Courses = () => {
//   return (
//     <section className="py-10 bg-gray-100" id="courses">
//  <div className="p-1 mx-auto px-4">        {/*padding dei hai  */}
//         <h2 className="text-2xl font-bold text-center mb-7">Enggineering Material</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {courseData.map((course) => (
//             <Link to={course.path} key={course.id}>
//               <div className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer ${course.color} text-white`}>
                
//                 {/* Bubbles */}
//                 <div className="absolute inset-0 overflow-hidden">
//                   {[...Array(3)].map((_, index) => (
//                     <div
//                       key={index}
//                       className="absolute rounded-full bg-white opacity-20 animate-bounce"
//                       style={{
//                         width: `${20 + Math.random() * 30}px`,
//                         height: `${20 + Math.random() * 30}px`,
//                         top: `${Math.random() * 80}%`,
//                         left: `${Math.random() * 80}%`,
//                         animationDuration: `${2 + Math.random() * 2}s`,
//                       }}
//                     ></div>
//                   ))}
//                 </div>

//                 {/* Image Container */}
//                 <div className="flex justify-center items-center pt-6 relative z-10">
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-24 h-24 object-contain"
//                   />
//                 </div>

//                 {/* Title */}
//                 <div className="p-6 text-center relative z-10">
//                   <h3 className="text-xl font-semibold">{course.title}</h3>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };




















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const courseData = [
  {
    id: 1,
    title: "FYBTech",
    path: "/fy-btech",
    image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
    color: "bg-blue-500",
    hasSemesters: true,
  },
  {
    id: 2,
    title: "SYBTech",
    path: "/sy-btech",
    image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
    color: "bg-green-500",
    comingSoon: true,
  },
  {
    id: 3,
    title: "TYBTech",
    path: "/third-year",
    image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
    color: "bg-yellow-500",
    comingSoon: true,
  },
  {
    id: 4,
    title: "FinalYear",
    path: "/final-year",
    image: "https://cdn-icons-png.flaticon.com/512/7917/7917730.png",
    color: "bg-red-500",
    comingSoon: true,
  },
];

export const Courses = () => {
  const [openModal, setOpenModal] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (course) => {
    if (course.comingSoon) return;

    if (course.hasSemesters) {
      setOpenModal(course);
    } else {
      navigate(course.path);
    }
  };

  const goToSemester = (semester) => {
    navigate(`${openModal.path}/semester-${semester}`);
    setOpenModal(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 via-white to-gray-100 " id="courses">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Engineering Materials
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courseData.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCardClick(course)}
              className={`relative rounded-2xl overflow-hidden border border-white shadow-xl transform transition duration-300 hover:scale-105 cursor-pointer ${
                course.comingSoon ? "opacity-80 pointer-events-none" : ""
              } ${course.color} text-white`}
            >
              {course.comingSoon && (
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-800 to-black opacity-50 z-0 rounded-2xl"></div>
              )}
              {course.comingSoon && (
                <div className="absolute top-2 right-2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full z-20 shadow-md">
                  Coming Soon
                </div>
              )}
              <div className="flex justify-center items-center pt-8 relative z-20">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-24 h-24 object-contain drop-shadow-xl"
                />
              </div>
              <div className="p-6 pb-8 text-center relative z-20">
                <h3 className="text-xl font-semibold tracking-wide">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semester Selection Modal */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setOpenModal(null)} // ✅ close when background clicked
        >
          <div
            className="bg-white rounded-xl p-6 w-80 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()} // ✅ prevent close when modal content clicked
          >
            <h3 className="text-lg font-bold mb-4">Select Semester for {openModal.title}</h3>
            <div className="flex flex-col gap-4">
  {/* Semester 1 */}
  <button
    onClick={() => goToSemester(1)}
    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
  >
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
    Semester 1
  </button>

  {/* Semester 2 */}
  <button
    onClick={() => goToSemester(2)}
    className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
  >
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
    Semester 2
  </button>

  {/* Cancel Button */}
  <button
    onClick={() => setOpenModal(null)}
    className="text-sm text-red-500 hover:text-red-600 font-medium underline transform transition duration-200 hover:scale-105"
  >
    Cancel
  </button>
</div>


          </div>
        </div>
      )}

    </section>
  );
};
