import React, { useState, useEffect, useRef } from "react";
import { LinkData } from "../assets/data/dummydata";
import { NavLink, Link } from "react-router-dom";
import { HiViewGrid, HiOutlineSun, HiOutlineMoon, HiMenuAlt1, HiX } from "react-icons/hi";
import LogoImg from "../assets/images/text_effect_study.png";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for the last saved theme
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark'; // Return true if 'dark' is found, false otherwise
  });
  const [isClicked, setIsClicked] = useState(false); // State for bubble effect
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    // Save the current theme to localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCategory(false);
      }
      if (mobileMenuRef.current && openMenu && !mobileMenuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle bubble effect on click
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className="bg-white dark:bg-gray-900 py-4 text-black dark:text-white sticky z-50 shadow-md top-0 w-full">
      <div className="container flex justify-between items-center px-4 md:px-1 relative">

        {/* Logo and Category */}
        <div className="flex items-center gap-4 relative">
          {/* Logo Container */}
          <div className="flex items-center justify-center gap-6">
            <img
              src={LogoImg} // Ensure this path is correct
              alt="Logo"
              className="h-16 md:h-20 ml-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-2 cursor-pointer relative z-10 block md:hidden"
              onClick={handleClick} // Handle click to toggle bubble effect
            />
          </div>

          {/* Bubble Effect */}
          <div
            className={`absolute -inset-2 bg-gradient-to-r from-blue-200 to-purple-300 rounded-full opacity-0 ${isClicked ? 'opacity-50 scale-110' : 'opacity-0 scale-100'} blur-lg transition-all duration-500 z-0`}
          ></div>

          {/* Category Dropdown */}
          <div
            className="flex items-center text-sm gap-2 cursor-pointer relative hover:text-primary transition"
            onClick={() => setOpenCategory(!openCategory)}
          >
            <HiViewGrid size={38} />
            <span>Engineering</span>

            {openCategory && (
              <div
                ref={dropdownRef}
                className="absolute top-10 left-0 bg-white dark:bg-gray-800 shadow-xl rounded-lg w-64 p-5 z-50 transition-all duration-300 ease-in-out transform"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-100">
                  Select Year Engineering
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    { title: "FY BTech", path: "/fy-btech" },
                    { title: "SY BTech", path: "/sy-btech" },
                    { title: "Third Year", path: "/third-year" },
                    { title: "Final Year", path: "/final-year" }
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded transition transform duration-300 ease-in-out"
                    >
                      <Link
                        to={item.path}
                        onClick={() => setOpenCategory(false)}
                        className="block text-gray-800 dark:text-gray-200 hover:text-primary transition"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Nav Links (Only Mobile) */}
        <nav className="block md:hidden">
          <ul className="flex items-center gap-4 text-sm">
            {LinkData.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    `relative px-3 py-2 rounded-md transition-all duration-200 cursor-pointer ${
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

        {/* Dark mode + Menu Button */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Button */}
          <button
            onClick={toggleDarkMode}
            className="border rounded-full p-2 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition"
          >
            {darkMode ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
          </button>

          {/* Desktop Menu Button */}
          <button className="hidden md:block" onClick={toggleMenu}>
            {openMenu ? <HiX size={25} /> : <HiMenuAlt1 size={25} />}
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      {openMenu && (
        <>
          {/* Background */}
          <div
            className="hidden md:block fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          {/* Sidebar */}
          <div
            ref={mobileMenuRef}
            className="hidden md:block fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl z-50 transition-transform duration-300"
          >
            <div className="p-4 flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors"
              >
                <HiX size={25} />
              </button>
            </div>

            <nav className="flex flex-col p-4">
              {LinkData.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.url}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `relative px-4 py-3 rounded-md transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-gray-800 dark:text-gray-200 hover:text-primary hover:bg-primary/10"
                    }`
                  }
                >
                  {link.title}
                  {/* Line Divider */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300 dark:bg-gray-700 mt-2"></div>
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
