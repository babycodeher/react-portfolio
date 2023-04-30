import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="relative container mx-auto bg-dogwood p-4">
            <div className="flex items-center justify-center">
                {/* Menu items */}
                <div className="hidden md:flex space-x-32">
                    <p className="text-xl hover:text-redwood">
                        <NavLink to='/wumi-afolabi-portfolio/' end>Home</NavLink>
                    </p>
                    <p className="text-xl hover:text-redwood">
                        <NavLink to='/wumi-afolabi-portfolio/projects' end>Projects</NavLink>
                    </p>
                    <p className="text-xl hover:text-redwood">
                        <NavLink to='/wumi-afolabi-portfolio/about' end>About</NavLink>
                    </p>
                    <p className="text-xl hover:text-redwood">
                        <NavLink to='/wumi-afolabi-portfolio/contact' end>Contact</NavLink>
                    </p>
                </div>
                {/* Hamburger Icon */}
                <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            {/* Mobile menu */}
            <div className="md:hidden">
                <div id="menu" className="absolute flex flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-red sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                    <p className="text-md hover:text-redwood">Home</p>
                    <p className="text-md hover:text-redwood">Projects</p>
                    <p className="text-md hover:text-redwood">About</p>
                    <p className="text-md hover:text-redwood">Contact</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;