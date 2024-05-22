import React, { useState } from "react";
import { Link } from "react-router-dom";


//Components
import NavLinks from "./NavLinks";


const NavSm = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav>
                <div className="bg-white flex justify-between p-4 w-full fixed top-0 z-50">
                    <div className="w-[70px] h-[]">
                        <img src={require('../../Assets/IMG-20240515-WA0002.jpg')} alt="Logo" className="w-full h-full" />
                    </div>
                    <div className="text-5xl my-auto hover:cursor-pointer z-50" onClick={() => setOpen(!open)}>
                        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <ul className={`
                    md:hidden bg-white z-10 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 text-center text-xl font-semibold
                    duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}>
                    <li>
                        <Link to="/" className="pb-10">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">
                            About Us
                        </Link>
                    </li>
                    <NavLinks />
                    <li>
                        <Link to="/">
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

const NavMd = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav>
                <div className="bg-white flex justify-between p-4 w-full">
                    <div className="w-[100px] h-[]">
                        <img src={require('../../Assets/IMG-20240515-WA0002.jpg')} alt="Logo" className="w-full h-full" />
                    </div>
                    <div className="text-6xl my-auto hover:cursor-pointer z-50" onClick={() => setOpen(!open)}>
                        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
            </nav>
        </>
    );
}

const NavLg = () => {
    return (
        <>
            <header className="px-10 py-4 flex justify-between h-[120px] font-[Inter]">
                <div className="w-[100px] my-auto">
                    <img src={require('../../Assets/IMG-20240515-WA0002.jpg')} alt="" className="w-full h-full"/>
                </div>
                <nav>
                    <div className="flex justify-end">
                        <button className="bg-[#00ADEF] text-white text-lg font-bold px-4 py-2">Book Now</button>
                    </div>
                    <div className="mt-3">
                        <ul className="inline-flex justify-center text-xl font-semibold gap-4">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="">About Us</Link></li>
                            <li><Link to="">Services</Link></li>
                            <li><Link to="">Gallery</Link></li>
                            <li><Link to="">Contact Us</Link></li>
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