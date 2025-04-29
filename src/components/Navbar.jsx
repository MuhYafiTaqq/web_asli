import { useState } from 'react';
import { Link } from 'react-router-dom';

import { LuLayoutTemplate } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { FaPlus, FaQuestion } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";

export default function Navbar() {

    const [active, setActive] = useState('Home');

    function clickHandle(menu) {
        setActive(menu);
    }

    const isActive = (menu) => active === menu 
        ? 'text-white scale-105' 
        : 'text-white/25';

    return (
        <nav className='fixed bottom-0 w-full h-20 flex justify-between bg-neutral-950 border-t border-white/5 py-2 px-3'>
            <Link to="/Template" onClick={() => clickHandle("Template")}>
                <div className={`h-15 w-18 flex flex-col gap-1.5 justify-center items-center text-xs transition-all duration-300 ease-in-out ${isActive("Template")}`}>
                    <LuLayoutTemplate className='text-2xl' />
                    Template
                </div>
            </Link>

            <Link to="/Toturial" onClick={() => clickHandle("Toturial")}>
                <div className={`h-15 w-18 flex flex-col gap-1.5 justify-center items-center text-xs transition-all duration-300 ease-in-out ${isActive("Toturial")}`}>
                    <FaQuestion className='text-2xl' />
                    Toturial
                </div>
            </Link>

            <Link to="/" onClick={() => clickHandle("Home")}>
                <div className={`h-12 w-12 flex flex-col gap-1.5 justify-center items-center rounded-full transition-all duration-300 ease-in-out ${active == 'Home' ? 'text-white scale-110 bg-blue-500' : 'bg-blue-500/65' }`}>
                    <FaPlus className={`text-2xl ${active == 'Home' ? 'text-white scale-110' : 'text-white/65' }`} />
                </div>
            </Link>

            <Link to="/Setting" onClick={() => clickHandle("Setting")}>
                <div className={`h-15 w-18 flex flex-col gap-1.5 justify-center items-center text-xs transition-all duration-300 ease-in-out ${isActive("Setting")}`}>
                    <FiSettings className='text-2xl' />
                    Setting
                </div>
            </Link>

            <Link to="/About" onClick={() => clickHandle("About")}>
                <div className={`h-15 w-18 flex flex-col gap-1.5 justify-center items-center text-xs transition-all duration-300 ease-in-out ${isActive("About")}`}>
                    <RiContactsLine className='text-2xl' />
                    About
                </div>
            </Link>
        </nav>
    );
}
