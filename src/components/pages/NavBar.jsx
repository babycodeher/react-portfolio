import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
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

                    {/* Hamburger Icon */}
                    <div>
                        <button onClick={handleNav} className='block md:hidden'>
                            <FontAwesomeIcon icon={nav ? faClose : faBars} size='2x' className="text-lightChamPink items-center" />
                        </button>
                        {/* Mobile menu */}
                        {nav && (
                            <ul className="flex flex-col items-center py-2 space-y-2 font-bold md:hidden">
                                {/* Menu items */}
                                <li className="text-md text-lightChamPink hover:text-redwood"><NavLink to="/" end>Home</NavLink></li>
                                <li className="text-md text-lightChamPink hover:text-redwood"><NavLink to="/projects" end>Projects</NavLink></li>
                                <li className="text-md text-lightChamPink hover:text-redwood"><NavLink to="/about" end>About</NavLink></li>
                                <li className="text-md text-lightChamPink hover:text-redwood"><NavLink to="/contact" end>Contact</NavLink></li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;