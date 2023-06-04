import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <div className="bg-darkWine">
            <nav className="relative container mx-auto bg-darkWine p-4">
                <div className="flex items-center justify-center">
                    {/* Menu items */}
                    <div className="hidden md:flex space-x-32">
                        <p className="text-2xl text-lightChamPink hover:text-redwood">
                            <NavLink to="/" end>Home</NavLink>
                        </p>
                        <p className="text-2xl text-lightChamPink hover:text-redwood">
                            <NavLink to="/projects" end>Projects</NavLink>
                        </p>
                        <p className="text-2xl text-lightChamPink hover:text-redwood">
                            <NavLink to="/about" end>About</NavLink>
                        </p>
                        <p className="text-2xl text-lightChamPink hover:text-redwood">
                            <NavLink to="/contact" end>Contact</NavLink>
                        </p>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNav}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isNavOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Toggle icon */}
                            {isNavOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/* Hamburger Icon */}
                    {/* <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button> */}
                </div>
                {/* Mobile menu */}
                {/* <div className="md:hidden"> */}
                <div className={`${isNavOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div id="menu" className="absolute flex flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-red sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                        <p className="text-md hover:text-redwood">Home</p>
                        <p className="text-md hover:text-redwood">Projects</p>
                        <p className="text-md hover:text-redwood">About</p>
                        <p className="text-md hover:text-redwood">Contact</p>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;