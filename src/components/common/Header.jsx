import React, { useState, useEffect, useRef } from "react";
import { LinkData } from "../assets/data/dummydata";
import { NavLink, Link } from "react-router-dom";
import {
  HiViewGrid,
  HiOutlineSun,
  HiOutlineMoon,
  HiMenuAlt1,
  HiX,
  HiChevronUp,
  HiChevronDown
} from "react-icons/hi";
import LogoImg from "../assets/images/text_effect_study.png";

const yearData = [
  {
    title: "FY BTech",
    semesters: [
      { name: "Semester 1", path: "/fy-btechsem1" },
      { name: "Semester 2", path: "/fy-btechsem2" }
    ]
  },
  {
    title: "SY BTech",
    semesters: [
      { name: "Semester 3", path: "/sy-btech" },
      { name: "Semester 4", path: "/sy-btech" }
    ]
  },
  {
    title: "Third Year",
    semesters: [
      { name: "Semester 5", path: "/third-year" },
      { name: "Semester 6", path: "/third-year" }
    ]
  },
  {
    title: "Final Year",
    semesters: [
      { name: "Semester 7", path: "/final-year" },
      { name: "Semester 8", path: "/final-year" }
    ]
  }
];

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [openYearDropdown, setOpenYearDropdown] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenCategory(false);
      }
      if (mobileMenuRef.current && openMenu && !mobileMenuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  const toggleYearDropdown = (title) =>
    setOpenYearDropdown((prev) => (prev === title ? null : title));

  return (
    <header className="bg-white dark:bg-gray-900 py-4 text-black dark:text-white sticky z-50 shadow-md top-0 w-full">
      <div className="container flex justify-between items-center px-4 md:px-1 relative">

        {/* Logo and Category */}
        <div className="flex items-center gap-4 relative">
          {/* Logo */}
          <img
            src={LogoImg}
            alt="Study Logo"
            className="h-16 md:h-20 transition-transform hover:scale-110 hover:rotate-2 cursor-pointer block md:hidden z-10"
            onClick={() => setIsClicked((prev) => !prev)}
          />

          {/* Bubble Effect */}
          <div
            className={`absolute -inset-2 bg-gradient-to-r from-blue-200 to-purple-300 rounded-full blur-lg transition-all duration-500 z-0 ${
              isClicked ? "opacity-50 scale-110" : "opacity-0 scale-100"
            }`}
          />

          {/* Category Dropdown */}
          <button
            onClick={() => setOpenCategory((prev) => !prev)}
            aria-expanded={openCategory}
            aria-controls="category-dropdown"
            className="flex items-center text-sm gap-2 relative hover:text-primary transition"
          >
            <HiViewGrid size={38} />
            <span>Engineering</span>
          </button>



          {openCategory && (
            <div
              ref={dropdownRef}
              id="category-dropdown"
              className="absolute top-10 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md w-72 p-4 z-50"
            >
              <h3 className="text-lg font-semibold mb-3">Select Engineering Year</h3>
              <ul className="space-y-2">
                {yearData.map((year) => (
                  <li key={year.title}>
                    <button
                      onClick={() => toggleYearDropdown(year.title)}
                      className="w-full flex justify-between items-center px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg"
                    >
                      <span>{year.title}</span>
                      {openYearDropdown === year.title ? <HiChevronUp /> : <HiChevronDown />}
                    </button>
                    {openYearDropdown === year.title && (
                      <ul className="mt-2 space-y-2 bg-gradient-to-r  from-indigo-200  border rounded-lg shadow-lg p-2">
                        {year.semesters.map((sem) => (
                          <li key={sem.name}>
                            <Link
                              to={sem.path}
                              onClick={() => setOpenCategory(false)}
                              className="block px-4 py-2 text-sm hover:bg-blue-100 dark:hover:bg-blue-400 rounded"
                            >
                              {sem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>




        {/* Mobile Nav Links */}
        <nav className="block md:hidden">
          <ul className="flex items-center gap-4 text-sm">
            {LinkData.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    `relative px-3 py-2 rounded-md ${
                      isActive
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/10"
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="border rounded-full p-2 hover:bg-primary hover:text-white transition"
          >
            {darkMode ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
          </button>

          {/* Desktop Menu */}
          <button
            className="hidden md:block"
            onClick={() => setOpenMenu((prev) => !prev)}
            aria-label="Toggle sidebar menu"
          >
            {openMenu ? <HiX size={25} /> : <HiMenuAlt1 size={25} />}
          </button>
        </div>
      </div>

      {/* Sidebar for Desktop */}
      {openMenu && (
        <>
          <div
            className="hidden md:block fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setOpenMenu(false)}
          />
          <div
            ref={mobileMenuRef}
            className="hidden md:block fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 z-50 shadow-lg"
          >
            <div className="p-4 flex justify-end">
              <button onClick={() => setOpenMenu(false)} aria-label="Close sidebar">
                <HiX size={25} className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <nav className="flex flex-col p-4">
              {LinkData.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.url}
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-md transition ${
                      isActive
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-gray-800 dark:text-gray-200 hover:text-primary hover:bg-primary/10"
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
