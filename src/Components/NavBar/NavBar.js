import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSquareXTwitter, FaSquareInstagram  } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram, FaFacebookF, FaTiktok   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcTwoSmartphones } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";








const MenuItem = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSubmenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <li className="relative">
        <button 
          className="w-full text-left p-2 rounded-md transition-colors duration-200"
          onClick={toggleSubmenu}
        >
          {label}
        </button>
        {children && (
          <ul 
            className={`pl-3 mt-1  space-y-1 transition-all duration-300 overflow-hidden ${
              isOpen ? 'max-h-[270px]' : 'max-h-0'
            }`}
          >
            {children}
          </ul>
        )}
      </li>
    );
};

const NavSm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closemenu = () => {
        setIsOpen(false);
    }


    return (
        <>
            <nav className="bg-white fixed top-0 z-50  w-full">
                <div className="h-[80px]  flex justify-between">
                    <div className=" my-auto">
                        <NavLink to="/">
                            <img src={require('../../Assets/IMG-20240515-WA0002.jpg')} alt="Logo" className="w-[60px] max-h-[60px]" />
                        </NavLink>
                    </div>
                    <div className="text-5xl my-auto hover:cursor-pointer z-50" onClick={toggleMenu}>
                        <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <div className="relative">
                    <div
                        className={`absolute top-0 left-0 w-full h-screen bg-white text-black z-50 text-lg shadow-lg transition-all duration-500 overflow-hidden ${isOpen ? 'right-[100%]  ' : 'left-[-100%]'}`}
                    >
                        <ul className="flex flex-col p-2 space-y-2">
                                <NavLink to="/" onClick={closemenu}><MenuItem label="Home" /></NavLink>
                                <NavLink to="/aboutUs" onClick={closemenu}><MenuItem label="About Us" /></NavLink>
                                <MenuItem label="Our Services">
                                    <NavLink to="/decorations" onClick={closemenu}><MenuItem label="Decorations" /></NavLink>
                                    <NavLink to="/tentHiring" onClick={closemenu}><MenuItem label="Tents & Chairs for Hire" /></NavLink>
                                    <NavLink to="/tableSetUp" onClick={closemenu}><MenuItem label="Table Set Up" /></NavLink>
                                    <NavLink to="/floralRequisition" onClick={closemenu}><MenuItem label="Floral Requisition" /></NavLink>
                                    <NavLink to="/officeDelivery" onClick={closemenu}><MenuItem label="Office Delivery" /></NavLink>
                                    <NavLink to="/eventPlanning" onClick={closemenu}><MenuItem label="Event Planning & Event Management" /></NavLink>
                                    <NavLink to="/" onClick={closemenu}><MenuItem label="Backdrops & Garlands for Hire" /></NavLink>
                                </MenuItem>
                                <NavLink to="" onClick={closemenu}><MenuItem label="Gallery" /></NavLink>
                                <NavLink to="/connect" onClick={closemenu}><MenuItem label="Contact Us" /></NavLink>
                            </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

const NavMd = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closemenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            <nav className="bg-white fixed top-0 z-50 w-full">
                <div className="h-[100px] flex justify-between p-3 w-full ">
                    <div className="">
                        <img src={require('../../Assets/IMG-20240515-WA0002.jpg')} alt="Logo" className="w-full max-h-[85px]" />
                    </div>
                    <div className="text-6xl my-auto hover:cursor-pointer z-50" onClick={toggleMenu}>
                        <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <div className="relative">
                    <div
                        className={`absolute top-0 left-0 w-full h-screen bg-white text-black z-50 text-lg shadow-lg transition-all duration-500 overflow-hidden ${isOpen ? 'right-[100%]  ' : 'left-[-100%]'}`}
                    >
                        <ul className="flex flex-col p-2 space-y-2">
                                <NavLink to="/" onClick={closemenu}><MenuItem label="Home" /></NavLink>
                                <NavLink to="/aboutUs" onClick={closemenu}><MenuItem label="About Us" /></NavLink>
                                <MenuItem label="Our Services">
                                    <NavLink to="/decorations" onClick={closemenu}><MenuItem label="Decorations" /></NavLink>
                                    <NavLink to="/tentHiring" onClick={closemenu}><MenuItem label="Tents & Chairs for Hire" /></NavLink>
                                    <NavLink to="/tableSetUp" onClick={closemenu}><MenuItem label="Table Set Up" /></NavLink>
                                    <NavLink to="/floralRequisition" onClick={closemenu}><MenuItem label="Floral Requisition" /></NavLink>
                                    <NavLink to="/officeDelivery" onClick={closemenu}><MenuItem label="Office Delivery" /></NavLink>
                                    <NavLink to="/eventPlanning" onClick={closemenu}><MenuItem label="Event Planning & Event Management" /></NavLink>
                                    <NavLink to="/" onClick={closemenu}><MenuItem label="Backdrops & Garlands for Hire" /></NavLink>
                                </MenuItem>
                                <NavLink to="" onClick={closemenu}><MenuItem label="Gallery" /></NavLink>
                                <NavLink to="/connect" onClick={closemenu}><MenuItem label="Contact Us" /></NavLink>
                            </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

// const NavLg = () => {
//     const [scrolled, setScrolled] = useState(false);
//     useEffect(() => {
//         const handleScroll = () => {
//             const offset = window.scrollY;
//             if (offset > 50){
//                 setScrolled(true);
//             } else{
//                 setScrolled(false);
//             }
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         }
//     }, []);

//     return (
//         <>
//             <header className={`bg-white w-full bg-opacity-[70%] p-2 flex justify-between h-[120px] font-[Inter] fixed top-0 z-50 transition-all duration-300 ${scrolled ? ' bg-opacity-75 h-[70px] justify-around align-center' : ''}`}>
//                 <div className={`my-auto pl-10 bg-none ${scrolled ? 'hidden' : ''}`}>
//                     <img src={require('../../Assets/output-onlinepngtools.png')} alt="" className="w-[100px] max-h-[110px]"/>
//                 </div>
//                 <nav>
//                     <div className={`flex justify-end ${scrolled ? 'hidden' : ''}`}>
//                         <div className="">
//                             <table className="border-collapse border my-auto w-[200px] h-[50px] mr-3 ">
//                                 <tr className="my-auto">
//                                     <th className="border hover:bg-white transition-colors duration-300">
//                                         <span className="text-3xl flex justify-center items-center text-gray-500 hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-all duration-300">
//                                             <a href="https://www.instagram.com/the_pearlshi_caterers?igsh=ZTRqdTRsZHNvbmtw" target="_blank">
//                                                 <FaSquareInstagram  />
//                                             </a>
//                                         </span>
//                                     </th>
//                                     <th className="border hover:bg-white transition-colors duration-300">
//                                         <span className="text-3xl flex justify-center items-center text-gray-500 hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-all duration-300">
//                                             <a href="https://www.facebook.com/profile.php?id=100086976352392&mibextid=ZbWKwL" target="_blank">
//                                                 <FaFacebookSquare />
//                                             </a>
//                                         </span>
//                                     </th>
//                                     <th className="border hover:bg-white transition-colors duration-300">
//                                         <span className="text-3xl text-gray-500 flex justify-center items-center hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-all duration-300">
//                                             <a href="https://x.com/pearlshiCaterer?t=eEyZsG57PhY5sUmpq32pDg&s=09" target="_blank">
//                                                 <FaSquareXTwitter />
//                                             </a>
//                                         </span>
//                                     </th>
//                                     <th className="hover:bg-white transition-colors duration-300">
//                                         <span className="text-4xl flex justify-center items-center text-gray-500 hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-all duration-300">
//                                             <a href="https://www.tiktok.com/@pearlshi_caterers?_t=8mMyz7LWFGv&_r=1" target="_blank">
//                                                 <AiFillTikTok />
//                                             </a>
//                                         </span>
//                                     </th>
//                                 </tr>
//                             </table>
//                         </div>
//                         <Link to="/booking"><button className="bg-gradient-to-r from-header-200 via-header-600 hover:from-header-600  hover:to-header-600  text-white text-lg font-bold px-4 py-2 transition-colors duration-300">Book Now</button></Link>
//                     </div>
//                     <div className="mt-3">
//                         <ul className="inline-flex justify-center text-xl space-x-8 font-semibold gap-4">
//                             <li className="py-[11px]">
//                                 <NavLink to="/" 
//                                     className={({ isActive }) => [
//                                         "text-black", isActive ? "font-bold text-red-700" : null
//                                     ].filter(Boolean).join("")}
//                                     >Home
//                                 </NavLink>
//                             </li>
//                             <li className="py-[11px]">
//                                 <NavLink to="/aboutUs"
//                                     className={({ isActive }) => [
//                                         "text-black", isActive ? "font-bold text-red-700" : null
//                                     ]}
//                                     >About Us
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <div className="relative text-left inline-block py-[11px] group">
//                                     <div>
//                                         <button className="inline-flex justify-center w-full text-center">Our Services</button>
//                                     </div>
//                                     <div className="hidden bg-[#F5F2FB] absolute origin-top top-[50px] -left-[28%] group-hover:block transition-all duration-300">
//                                         <div className="space-y-2 py- w-[250px] font-light text-md font-['Inter']" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                                             <NavLink to="/decorations" className="block hover:bg-header-500 hover:text-white transition-colors duration-700 px-2 py-2" role="menuitem">Decorations</NavLink>
//                                             <NavLink to="/tentHiring" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Tents & Chairs for Hire</NavLink>
//                                             <NavLink to="/tableSetUp" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Table Set Up</NavLink>
//                                             <NavLink to="/floralRequisition" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Floral Requisition</NavLink>
//                                             <NavLink to="/officeDelivery" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Office Delivery</NavLink>
//                                             <NavLink to="/eventPlanning" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Event Planning & Management</NavLink>
//                                             <NavLink to="" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Backdrops & Garlands for Hire</NavLink>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>
//                             <li className="py-[11px]">
//                                 <NavLink to="/gallery"
//                                     className={({ isActive }) => [
//                                         "text-black", isActive ? "text-red-700 font-bold" : null
//                                     ].filter(Boolean).join("")}
//                                 >Gallery</NavLink>
//                             </li>
//                             <li className="py-[11px]">
//                                 <NavLink to="/connect"
//                                     className={({ isActive }) => [
//                                         "text-black", isActive ? "text-red-700 font-bold" : null
//                                     ].filter(Boolean).join("")}
//                                 >Contact Us</NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//             </header>
//         </>
//     );
// }

const NavLg = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <header className={`bg-white w-full bg-opacity-100  h-[125px] font-[Inter] fixed top-0 z-50 transition-all duration-300  ${scrolled ? ' bg-opacity-75 h-[125px] justify-around align-center' : ''}`}>
                <div className="bg-header-600 w-full h-[30px] flex justify-between px-3">
                    <div className="flex just items-center space-x-3">
                        <span className="text-xl flex">
                            <FcTwoSmartphones />
                            <a href="tel:0759108174">
                                <p className="text-gray-200 text-sm">Tel: 0759108174</p>
                            </a>
                        </span>
                        <span className="text-xl text-white flex">
                            <MdOutlineMailOutline />
                            <a href="mailto:pearlcaterers0205@gmail.com">
                                <p className="text-sm text-gray-200">E- Mail: pearlcaterers0205@gmail.com </p>
                            </a>
                        </span>
                    </div>
                    <div className="flex justify-center items-center space-x-3">
                        <span className="text-xl flex justify-center items-center text-white hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-all duration-300 my-auto">
                            <a href="https://www.instagram.com/the_pearlshi_caterers?igsh=ZTRqdTRsZHNvbmtw" target="_blank">
                                <FaInstagram  />
                            </a>
                        </span>
                        <span className="text-lg text-white flex justify-center items-center hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-all duration-300">
                            <a href="https://www.facebook.com/profile.php?id=100086976352392&mibextid=ZbWKwL" target="_blank">
                                <FaFacebookF />
                            </a>
                        </span>
                        <span className="text-lg text-white flex justify-center items-center hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-all duration-300">
                            <a href="https:x.com/pearlshiCaterer?t=eEyZsG57PhY5sUmpq32pDg&s=09" target="_blank">
                                <FaXTwitter />
                            </a>
                        </span>
                        <span className="text-lg text-white flex justify-center items-center hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-all duration-300">
                            <a href="https://www.tiktok.com/@pearlshi_caterers?_t=8mMyz7LWFGv&_r=1" target="_blank">
                                <FaTiktok  />
                            </a>
                        </span>
                    </div>
                </div>
                <div className="flex justify-evenly items-center space-x-10">
                    <div className={`my-auto -top-1 relative  ${scrolled ? '' : ''}`}>
                        <img src={require('../../Assets/output-onlinepngtools.png')} alt="" className="w-[100px] max-h-[100px]"/>
                    </div>
                    <ul className="inline-flex justify-center text-xl space-x-8 font-semibold gap-4">
                        <li className="py-[11px] ">
                            <NavLink to="/" 
                                className={({ isActive }) => [
                                    "text-black hover:text-red-700", isActive ? "font-bold text-black border-b-[4px] border-red-700 " : ""
                                ]}
                                >Home
                            </NavLink>
                        </li>
                        <li className="py-[11px]">
                            <NavLink to="/aboutUs"
                                className={({ isActive }) => [
                                    "text-black", isActive ? "font-bold text-black border-b-[4px] border-red-700 hover:text-red-700" : ""
                                ]}
                                >About Us
                            </NavLink>
                        </li>
                        <li>
                            <div className="relative text-left inline-block py-[11px] group">
                                <div>
                                    <button className="inline-flex justify-center w-full text-center">Our Services</button>
                                </div>
                                <div className="hidden bg-[#F5F2FB] absolute origin-top top-[50px] -left-[28%] group-hover:block transition-all duration-300">
                                    <div className="space-y-2 py- w-[250px] font-light text-md font-['Inter']" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <NavLink to="/decorations" className="block hover:bg-header-500 hover:text-white transition-colors duration-700 px-2 py-2" role="menuitem">Decorations</NavLink>
                                        <NavLink to="/tentHiring" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Tents & Chairs for Hire</NavLink>
                                        <NavLink to="/tableSetUp" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Table Set Up</NavLink>
                                        <NavLink to="/floralRequisition" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Floral Requisition</NavLink>
                                        <NavLink to="/officeDelivery" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Office Delivery</NavLink>
                                        <NavLink to="/eventPlanning" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Event Planning & Management</NavLink>
                                        <NavLink to="" className="block px-2 hover:bg-header-500 hover:text-white transition-colors duration-700 py-2" role="menuitem">Backdrops & Garlands for Hire</NavLink>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="py-[11px]">
                            <NavLink to="/gallery"
                                className={({ isActive }) => [
                                    "text-black", isActive ? "font-bold text-black border-b-[4px] border-red-700 " : ""
                                ]}
                            >Gallery</NavLink>
                        </li>
                        <li className="py-[11px]">
                            <NavLink to="/connect"
                                className={({ isActive }) => [
                                    "text-black", isActive ? "font-bold text-black border-b-[4px] border-red-700 " : ""
                                ]}
                            >Contact Us</NavLink>
                        </li>
                    </ul>
                    <div>
                        <Link to="/booking"><button className="bg-[#00ADEF]  text-white text-lg font-bold px-4 py-2 transition-colors duration-300">Book Now</button></Link>
                    </div>
                </div>
            </header>
        </>
    );
}


const NavBar = () => {
    return (
        <>
            <div className="md:hidden">
                <NavSm />
            </div>
            <div className="hidden md:block lg:hidden">
                <NavMd />
            </div>
            <div className="hidden lg:block">
                <NavLg />
            </div>
        </>
    );
}

export default NavBar;