// ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
 const [darkMode, setDarkMode] = useState(() => {
   const storedTheme = localStorage.getItem('theme');
   return storedTheme === 'dark';
 });

 useEffect(() => {
   document.body.classList.toggle('dark', darkMode);
   localStorage.setItem('theme', darkMode ? 'dark' : 'light');
 }, [darkMode]);

 const toggleDarkMode = () => {
   setDarkMode(!darkMode);
 };

 return (
   <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
     {children}
   </ThemeContext.Provider>
 );
};

export const useTheme = () => useContext(ThemeContext);

// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import { ThemeProvider } from './ThemeContext';

function App() {
 return (
   <ThemeProvider>
     <Router>
       <Header />
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutPage />} />
         {/* Add other routes */}
       </Routes>
     </Router>
   </ThemeProvider>
 );
}

export default App;

// Header.js (Simplified to use the context)
import React from 'react';
import { LinkData } from '../assets/data/dummydata';
import { NavLink, Link } from 'react-router-dom';
import { HiViewGrid, HiOutlineSun, HiOutlineMoon, HiMenuAlt1, HiX } from 'react-icons/hi';
import { useTheme } from './ThemeContext';

export const Header = () => {
 const { darkMode, toggleDarkMode } = useTheme();
 // ... rest of your Header component
 return (
   <header className={`bg-white ${darkMode ? 'dark:bg-gray-900' : ''} py-4 text-black ${darkMode ? 'dark:text-white' : ''} sticky z-50 shadow-md top-0 w-full`}>
     {/* ... your header content */}
     <button onClick={toggleDarkMode}>
       {darkMode ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
     </button>
     {/* ... */}
   </header>
 );
};