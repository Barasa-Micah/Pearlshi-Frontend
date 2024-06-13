import React from 'react';
import { NavLink } from "react-router-dom";


const GalleryNavigation = () => {
    return(
        <>
        <div className='w-full m-auto px-2 py-4  flex justify-center items-center'>
             
         <ul className='flex justify-center content-center text-center space-x-2 flex-wrap font-medium  lg:flex-row  p-4 md:p-0 mt-4  md:mt-0'>
         <NavLink to="/All"
         className={({ isActive }) =>
              isActive ? "text-white bg-[#a30a0a] font-bold" : ""
            }>
         <li className=" py-2 px-3  hover:bg-[#a30a0a] hover:text-white ">All</li>
         </NavLink>
          <NavLink to="/Weddings"
          className={({ isActive }) =>
              isActive ? "text-white bg-[#a30a0a] font-bold" : ""
            }>
          <li className="py-2 px-3  hover:bg-[#a30a0a] hover:text-white">Weddings</li>
            </NavLink> 
          <NavLink to="/Birthdays"
          className={({ isActive }) =>
              isActive ? "text-white bg-[#a30a0a] font-bold" : ""
            }>
          <li className=" py-2 px-3  hover:bg-[#a30a0a] hover:text-white">Birthdays</li>
            </NavLink> 
          <NavLink to="/corprateevents"
          className={({ isActive }) =>
              isActive ? "text-white bg-[#a30a0a] font-bold" : ""
            }>
          <li className="py-2 px-3  hover:bg-[#a30a0a] hover:text-white">Corprate Events</li>
            </NavLink> 
          <NavLink to="/traditionalevents"
          className={({ isActive }) =>
              isActive ? "text-white bg-[#a30a0a] font-bold" : ""
            }>
          <li className=" py-2 px-3  hover:bg-[#a30a0a] hover:text-white">Traditional Events</li>
          </NavLink>

          </ul>        
        </div>
        </>
    );
}
         
         
         
export default GalleryNavigation; 
         
            

