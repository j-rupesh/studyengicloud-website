import React from "react";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { GiEvilBook, GiWorld } from "react-icons/gi";

export const Instructor = () => {
  return (
    <section className="instructor mb-16">
      <div className="p-3">
        {/* Heading Section */}
        <div className="heading py-12 text-center w-2/3 mx-auto md:w-full">
          <h1 className="text-3xl font-semibold text-black">
            How can our platform boost your engineering degree?
          </h1>
          <p className="text-[14px] mt-2 text-gray-600">
            "Believe in yourself and keep pushing forward. Every challenge is an opportunity to grow. 
            With determination and persistence, success is within reach. Stay focused and positive! 
            Our website offers study materials, notes, mock tests, and past year papers for all engineering subjects to help you excel!"
          </p>
        </div>

        {/* Two Image Cards */}
        <div className="content grid grid-cols-2 gap-5 md:grid-cols-1">
          <ImageCard 
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Urval_av_de_bocker_som_har_vunnit_Nordiska_radets_litteraturpris_under_de_50_ar_som_priset_funnits_%282%29.jpg/330px-Urval_av_de_bocker_som_har_vunnit_Nordiska_radets_litteraturpris_under_de_50_ar_som_priset_funnits_%282%29.jpg" 
            title="Keep believing and working hard — success will follow." 
          />
          <ImageCard 
            imgSrc="https://static.vecteezy.com/system/resources/thumbnails/027/671/926/small/standardized-test-in-university-uniform-with-answers-and-pencil-focus-on-answer-sheet-exam-passing-concept-ai-generative-photo.jpg" 
            title="Get study materials, notes, mock tests, and question papers on our website." 
          />
        </div>

        {/* Proud Section */}
        <div className="p-10">
          <div className="heading py-12 text-center w-2/3 mx-auto md:w-full">
            <h1 className="text-3xl font-semibold text-black">We Are Proud</h1>
            <p className="text-[14px] mt-2 text-gray-600">
            We are proud to offer the best study materials and support.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="content grid grid-cols-3 gap-5 md:grid-cols-2">
            <InstructorCard color="text-red-500" icon={<FaUsers size={40} />} title="50" desc="Students Enrolled" />
            <InstructorCard color="text-orange-500" icon={<GiEvilBook size={40} />} title="1" desc="Total Courses" />
            <InstructorCard color="text-purple-500" icon={<FaGraduationCap size={40} />} title="1" desc="degree" />
           
          </div>
        </div>
      </div>
    </section>
  );
};

// Single Card Component
export const InstructorCard = ({ color, icon, title, desc }) => {
  return (
    <div className="box p-5 rounded-md shadow hover:shadow-md transition">
      <div className={`${color} mb-3`}>{icon}</div>
      <div className="text mt-2">
        <h4 className="text-lg font-semibold text-black">{title}</h4>
        <p className="text-[15px] text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

// Single Image Card Component
const ImageCard = ({ imgSrc, title }) => {
  return (
    <div className="images rounded-lg relative overflow-hidden h-72 w-full before:bg-black before:opacity-40 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:content-['']">
      <img src={imgSrc} alt="card" className="rounded-t-lg object-cover w-full h-72" />
      <div className="categ flex flex-col gap-4 absolute inset-0 z-20 items-center justify-center text-center px-4">
        <h2 className="text-3xl sm:text-2xl text-white font-semibold">{title}</h2>
        <button className="text-[15px] py-2 px-5 border border-white rounded-md text-white hover:bg-white hover:text-black transition">
          Start a class today
        </button>
      </div>
    </div>
  );
};
