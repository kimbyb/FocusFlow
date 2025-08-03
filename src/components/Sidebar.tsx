import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItem = {
    name: string;
    path: string;
}

const navItems: NavItem[] = [
    { name: 'Dashboard', path: '/' },
    { name: 'Books', path: '/books' },
    { name: 'Habits', path: '/habits' },
    { name: 'Tasks', path: '/tasks' },
    { name: 'Mood Tracker', path: '/mood' }
]

const Sidebar = () => {
    return (
        <aside className='w-64 h-screen bg-blue-100 p-4'>
            <nav className='flex flex-col space-y-2'>
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `p-2 rounded hover:bg-gray-200 ${isActive ? 'bg-blue-300 font-semibold' : ''
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;