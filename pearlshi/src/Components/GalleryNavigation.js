import React from 'react';
import { NavLink } from "react-router-dom";



const GalleryNavigation = () => {
    return(
        <>
        <div className='w-full m-auto px-2 py-4 lg:flex-row '>
         <div className='flex justify-center items-center space-x-2 flex-wrap'>
            
            <nav>
                <NavLink to="/Gallery"
                className={({ isActive }) => [
                    "text-white", isActive ? : 'text-black',
                    bg-'[#a30a0a]', isActive ? : 'none'
                ]}
            >
                <button className='m-2  px-4 py-2 text-black hover:bg-[#a30a0a] font-medium hover:text-white text-sm text-center'>All</button>
            </NavLink>
            </nav>
            <NavLink to="/Weddings">
            <button className='m-2  px-4 py-2 text-black hover:bg-[#a30a0a] font-medium hover:text-white text-sm text-center'>Weddings</button> 
            </NavLink>
           <NavLink to="/Birthdays">
           <button className='m-2  px-4 py-2 text-black hover:bg-[#a30a0a] font-medium hover:text-white text-sm text-center'>Birthdays</button>
           </NavLink>
           <NavLink to="/corprateevents">
           <button className='m-2  px-4 py-2 text-black hover:bg-[#a30a0a] font-medium hover:text-white text-sm text-center'>Corprate Events</button>
           </NavLink>
           <NavLink to="/Traditional Events">
           <button className='m-2  px-4 py-2 text-black hover:bg-[#a30a0a] font-medium hover:text-white text-sm text-center'>Traditional Events</button>
           </NavLink>
         
            </div>         
        </div>
        </>
    );
}

export default GalleryNavigation;