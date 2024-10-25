import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Header = () => {
    const { toggleTheme, isDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleMouseEnter = (e) => {
        const { offsetWidth, offsetLeft } = e.currentTarget;
        setPosition({
            left: offsetLeft,
            width: offsetWidth,
            opacity: 1,
        });
    };

    return (
        <nav className="bg-slate-900 p-4 text-white shadow-lg fixed w-full top-0 sticky z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <span className="text-2xl font-bold">Sahasra Kesara</span>
                </Link>

                <button
                    className="lg:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300 focus:outline-none"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                <div className="hidden lg:flex lg:items-center lg:space-x-6 max-h-10 relative">
                    <ul className="relative flex items-center">
                        <Cursor position={position} />
                        <NavLink onMouseEnter={handleMouseEnter} to="/">Home</NavLink>
                        <NavLink onMouseEnter={handleMouseEnter} to="/about">About</NavLink>
                        <NavLink onMouseEnter={handleMouseEnter} to="/projects">Projects</NavLink>
                        <NavLink onMouseEnter={handleMouseEnter} to="/certifications">Certifications</NavLink>
                        <NavLink onMouseEnter={handleMouseEnter} to="/contact">Contact</NavLink>
                    </ul>
                    <button onClick={toggleTheme} className="ml-4 items-center">
                        {isDarkMode ? (
                            <FontAwesomeIcon icon={faSun} className="mr-2" />
                        ) : (
                            <FontAwesomeIcon icon={faMoon} className="mr-2" />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 lg:hidden`}
            >
                <div className="px-8 flex justify-between p-4 border-b border-white">
                    <span className="text-2xl font-bold">Menu</span>
                    <button
                        className="text-white focus:outline-none"
                        aria-label="Close menu"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col mt-4">
                    <Link to="/" className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200" onClick={toggleMenu}>About</Link>
                    <Link to="/projects" className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200" onClick={toggleMenu}>Projects</Link>
                    <Link to="/certifications" className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200" onClick={toggleMenu}>Certifications</Link>
                    <Link to="/contact" className="py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200" onClick={toggleMenu}>Contact</Link>

                    <button 
                        onClick={() => { 
                            toggleTheme(); 
                            toggleMenu(); 
                        }} 
                        className="flex items-center py-2 px-8 text-white hover:bg-slate-700 rounded transition duration-200 mt-4"
                    >
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="mr-2" />
                        {isDarkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ children, to, onMouseEnter }) => {
    return (
        <li onMouseEnter={onMouseEnter} className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base">
            <Link to={to}>{children}</Link>
        </li>
    );
};


const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                left: position.left,
                width: position.width,
                opacity: position.opacity,
            }}
            className="absolute z-0 h-7 rounded-full bg-black border-2 border-white md:h-12" // Add border-2 and border-white
        />
    );
};


export default Header;
