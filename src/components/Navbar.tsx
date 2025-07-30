import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="bg-blue-300 h-16 flex items-center justify-between px-6 shadow-md sticky top-0">
            {/* Left side: App title */}
            <NavLink to="/" className="text-xl font-bold">
                FocusFlow
            </NavLink>

            {/* Right side: Profile nav item */}
            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    `p-2 rounded hover:bg-blue-200 ${isActive ? 'bg-blue-100 font-semibold' : ''}`
                }
            >
                Profile
            </NavLink>
        </header>
    );
};

export default NavBar;
