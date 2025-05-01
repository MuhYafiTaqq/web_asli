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
        ? 'text-white scale-105 md:bg-white/5' 
        : 'text-white/25';

    return (
        <nav className='fixed bottom-0 w-full h-20 flex justify-between bg-neutral-950 border-t border-white/5 py-2 px-3 z-100 md:w-60 md:h-full md:flex-col md:justify-center md:items-start md:border-r md:gap-2'>
            <Link to="/Template" onClick={() => clickHandle("Template")} className='md:w-full md:mx-2'>
                <div className={`h-15 w-18 flex flex-col gap-1.5 justify-center items-center text-xs transition-all duration-300 ease-in-out ${isActive("Template")} md:flex-row md:h-18 md:w-50 md:text-2xl md:pl-5 md:justify-start md:rounded-xl`}>
                    <LuLayoutTemplate className='text-2xl md:text-4xl md:mr-2' />
                    Template
                </div>
            </Link>

            <Link to="/Toturial" onClick={() => clickHandle("Toturial")} className='md:w-full md:mx-2'>
                <div className={`h-15 w-18 flex flex-col gap-1.5 justify-center items-center text-xs transition-all duration-300 ease-in-out ${isActive("Toturial")} md:flex-row md:h-18 md:w-50 md:text-2xl md:pl-5 md:justify-start md:rounded-xl`}>
                    <FaQuestion className='text-2xl md:text-4xl md:mr-2' />
                    Toturial
                </div>
            </Link>

            <Link to="/" onClick={() => clickHandle("Home")} className='md:-order-1 md:w-full md:mx-1'>
                <div className={`h-12 w-12 flex flex-col gap-1.5 justify-center items-center rounded-full transition-all duration-300 ease-in-out ${active == 'Home' ? 'text-white scale-110 bg-blue-500' : 'bg-blue-500/65'} md:w-52 md:h-18 md:rounded-xl md:mb-4`}>
                    <FaPlus className={`text-2xl ${active == 'Home' ? 'text-white scale-110' : 'text-white/65' } md:text-3xl`} />
                </div>
            </Link>

            <Link to="/Setting" onClick={() => clickHandle("Setting")} className='md:w-full md:mx-2'>
                <div className={`h-15 w-18 flex flex-col gap-1.5 justify-center items-center text-xs transition-all duration-300 ease-in-out ${isActive("Setting")} md:flex-row md:h-18 md:w-50 md:text-2xl md:pl-5 md:justify-start md:rounded-xl`}>
                    <FiSettings className='text-2xl md:text-4xl md:mr-2' />
                    Setting
                </div>
            </Link>

            <Link to="/About" onClick={() => clickHandle("About")} className='md:w-full md:mx-2'>
                <div className={`h-15 w-18 flex flex-col gap-1.5 justify-center items-center text-xs transition-all duration-300 ease-in-out ${isActive("About")} md:flex-row md:h-18 md:w-50 md:text-2xl md:pl-5 md:justify-start md:rounded-xl`}>
                    <RiContactsLine className='text-2xl md:text-4xl md:mr-2' />
                    About
                </div>
            </Link>
        </nav>
    );
}
