import React from "react";
import { useParams } from "react-router-dom";

const courseData = [
  { id: 1, title: "Web Development Bootcamp", description: "Learn HTML, CSS, JavaScript, and React." },
  { id: 2, title: "UI/UX Design Masterclass", description: "Master UI/UX tools like Figma and XD." },
  { id: 3, title: "Python for Beginners", description: "Start programming with Python." },
  { id: 4, title: "Digital Marketing Essentials", description: "Basics of SEO, SEM, and social media." },
  { id: 5, title: "JavaScript Essentials", description: "JavaScript from zero to advanced." },
  { id: 6, title: "Full Stack Development", description: "Frontend + Backend with React & Node.js." },
  { id: 7, title: "React Native Crash Course", description: "Build mobile apps with React Native." },
  { id: 8, title: "SEO & Content Strategy", description: "Learn how to rank on Google." },
];

export const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div className="p-10 text-center">Course not found</div>;
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-700 text-lg">{course.description}</p>
      </div>
    </div>
  );
};
