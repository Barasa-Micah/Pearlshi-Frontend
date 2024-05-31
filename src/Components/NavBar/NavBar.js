import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
                        <Link to="/">
                            <img src={require('../../Assets/IMG-20240515-WA0002.jpg')} alt="Logo" className="w-[60px] max-h-[60px]" />
                        </Link>
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
                                <Link to="/" onClick={closemenu}><MenuItem label="Home" /></Link>
                                <Link to="/aboutUs" onClick={closemenu}><MenuItem label="About Us" /></Link>
                                <MenuItem label="Our Services">
                                    <Link to="/" onClick={closemenu}><MenuItem label="Decorations" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Tents & Chairs for Hire" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Table Set Up" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Floral Requisition" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Office Delivery" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Event Planning & Event Management" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Backdrops & Garlands for Hire" /></Link>
                                </MenuItem>
                                <Link to="" onClick={closemenu}><MenuItem label="Gallery" /></Link>
                                <Link to="/" onClick={closemenu}><MenuItem label="Contact Us" /></Link>
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
                                <Link to="/" onClick={closemenu}><MenuItem label="Home" /></Link>
                                <Link to="/aboutUs" onClick={closemenu}><MenuItem label="About Us" /></Link>
                                <MenuItem label="Our Services">
                                    <Link to="/" onClick={closemenu}><MenuItem label="Decorations" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Tents & Chairs for Hire" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Table Set Up" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Floral Requisition" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Office Delivery" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Event Planning & Event Management" /></Link>
                                    <Link to="/" onClick={closemenu}><MenuItem label="Backdrops & Garlands for Hire" /></Link>
                                </MenuItem>
                                <Link to="" onClick={closemenu}><MenuItem label="Gallery" /></Link>
                                <Link to="/" onClick={closemenu}><MenuItem label="Contact Us" /></Link>
                            </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

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
            <header className={`bg-white w-full bg-opacity-50 p-2 flex justify-between h-[120px] font-[Inter] fixed top-0 z-50 transition-all duration-300 ${scrolled ? ' bg-opacity-75 h-[70px] justify-around align-center' : ''}`}>
                <div className={`my-auto pl-10 ${scrolled ? 'hidden' : ''}`}>
                    <img src={require('../../Assets/IMG-20240515-WA0002.jpg')} alt="" className="w-[100px] max-h-[100px]"/>
                </div>
                <nav>
                    <div className={`flex justify-end ${scrolled ? 'hidden' : ''}`}>
                        <div className="">
                            <table className="border-collapse border my-auto w-[200px] h-[50px] mr-3 ">
                                <tr className="my-auto">
                                    <th className="border hover:bg-white transition-colors duration-300">
                                        <span className="text-3xl align-middle my-auto text-gray-500 hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-colors duration-300">
                                            <a href="https://www.instagram.com/the_pearlshi_caterers?igsh=ZTRqdTRsZHNvbmtw" target="_blank">
                                                <ion-icon name="logo-instagram"></ion-icon>
                                            </a>
                                        </span>
                                    </th>
                                    <th className="border hover:bg-white transition-colors duration-300">
                                        <span className="text-3xl align-middle my-auto text-gray-500 hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-colors duration-300">
                                            <a href="https://www.facebook.com/profile.php?id=100086976352392&mibextid=ZbWKwL" target="_blank">
                                                <ion-icon name="logo-facebook"></ion-icon>
                                            </a>
                                        </span>
                                    </th>
                                    <th className="border hover:bg-white transition-colors duration-300">
                                        <span className="text-3xl align-middle my-auto text-gray-500 hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-colors duration-300">
                                            <a href="">
                                                <ion-icon name="logo-whatsapp"></ion-icon>
                                            </a>
                                        </span>
                                    </th>
                                    <th className="hover:bg-white transition-colors duration-300">
                                        <span className="text-3xl align-middle my-auto text-gray-500 hover:text-[#00ADEF] hover:cursor-pointer hover:scale-125 transition-colors duration-300">
                                            <a href="https://www.tiktok.com/@pearlshi_caterers?_t=8mMyz7LWFGv&_r=1" target="_blank">
                                                <ion-icon name="logo-tiktok"></ion-icon>
                                            </a>
                                        </span>
                                    </th>
                                </tr>
                            </table>
                        </div>
                        <button className="bg-gradient-to-r from-header-200 via-header-600 hover:from-header-600 hover:via-white hover:to-header-600 p-5 text-white text-lg font-bold px-4 py-2 transition-all duration-2000">Book Now</button>
                    </div>
                    <div className="mt-3">
                        <ul className="inline-flex justify-center text-xl space-x-8 font-semibold gap-4">
                            <li><Link to="/" activeClassName="text-red">Home</Link></li>
                            <li><Link to="/aboutUs">About Us</Link></li>
                            <li>
                                <div className="relative text-left inline-block group">
                                    <div>
                                        <button className="inline-flex justify-center w-full text-center">Our Services</button>
                                    </div>
                                    <div className="hidden bg-white absolute origin-top top-[29px] group-hover:block transition-all duration-300">
                                        <div className="py-5 px-4 w-[200px] txt-sm font-light" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link to="" className="text-md border-b-2 border-e-red-50 font-light block" role="menuitem">Decorations</Link>
                                            <Link to="" className="block " role="menuitem">Tents & Chairs for Hire</Link>
                                            <Link to="" className="block" role="menuitem">Table Set Up</Link>
                                            <Link to="" className="block " role="menuitem">Floral Requisition</Link>
                                            <Link to="" className="block " role="menuitem">Office Delivery</Link>
                                            <Link to="" className=" block" role="menuitem">Event Planning & Event Management</Link>
                                            <Link to="" className="block" role="menuitem">Backdrops & Garlands for Hire</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="">Gallery</Link></li>
                            <li><Link to="/connect">Contact Us</Link></li>
                        </ul>
                    </div>
                </nav>
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