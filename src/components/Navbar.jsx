
import { Link } from 'react-router-dom';

import { LuLayoutTemplate } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className='fixed bottom-0 w-full flex justify-between bg-neutral-950 border-t-1 border-white/5 py-2 px-3'>
        <div className='h-15 w-18 flex flex-col gap-1.5 justify-center items-center'>
            <LuLayoutTemplate className='text-white/35 text-2xl' />
            <Link to="/" className='text-white/35 text-xs'>Template</Link>
        </div>
        <div className='h-15 w-18 flex flex-col gap-1.5 justify-center items-center'>
            <FiSettings className='text-white/35 text-2xl' />
            <Link to="/" className='text-white/35 text-xs'>Setting</Link>
        </div>
        <div className='h-12 w-12 flex flex-col gap-1.5 justify-center items-center bg-blue-500 rounded-full'>
            <Link to="/" className='text-white/35 text-xs'>
                <FaPlus className='text-white text-2xl' />
            </Link>
        </div>
        <div className='h-15 w-18 flex flex-col gap-1.5 justify-center items-center'>
            <LuLayoutTemplate className='text-white/35 text-2xl' />
            <Link to="/" className='text-white/35 text-xs'>Template</Link>
        </div>
        <div className='h-15 w-18 flex flex-col gap-1.5 justify-center items-center'>
            <FiSettings className='text-white/35 text-2xl' />
            <Link to="/" className='text-white/35 text-xs'>Setting</Link>
        </div>
    </nav>
  );
}
