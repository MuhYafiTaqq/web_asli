import React from 'react'

const Header = () => {
    return (
        <div className='fixed flex justify-between items-center bg-neutral-950 border-b-1 border-white/5 top-0 h-10 w-full px-3 md:bg-transparent'>
            <h1 className='text-white'>Twizz.</h1>
            <div>
                <button className='bg-blue-600 px-4 py-1 rounded-md text-xs text-white'>
                    Login.
                </button>
            </div>
        </div>
    )
}

export default Header