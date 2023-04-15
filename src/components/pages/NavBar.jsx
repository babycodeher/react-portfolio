import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="relative container mx-auto bg-lightChamPink">
            <div className="flex items-center justify-center">
                <div className="pt-2">
                    {/* Menu items */}
                    <div className="hidden md:flex space-x-32">
                        <a className="text-xl hover:text-redwood">
                            <NavLink to='/wumi-afolabi-portfolio/' end>Home</NavLink>
                        </a>
                        <a className="text-xl hover:text-redwood">
                            <NavLink to='/wumi-afolabi-portfolio/' end>Projects</NavLink>
                        </a>
                        <a className="text-xl hover:text-redwood">
                            <NavLink to='/wumi-afolabi-portfolio/' end>About</NavLink>
                        </a>
                        <a className="text-xl hover:text-redwood">
                            <NavLink to='/wumi-afolabi-portfolio/' end>Contact</NavLink>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;