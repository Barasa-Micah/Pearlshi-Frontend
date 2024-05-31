import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Icons
import { FaCopyright } from "react-icons/fa";


const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  

  return (
    <>
      <footer className='bg-blue-800 w-full text-white md:flex justify-around gap-5 p-5'>
        <div className='my-3'>
          <h1 className='text-2xl font-bold my-3'>Find Us On</h1>
          <div className=''>
            <span className='text-4xl mr-2'>
              <a href="">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </span>
            <span className='text-4xl mr-2'>
              <a href="">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </span>
            <span className='text-3xl mr-2'>
              <a href="">
                <ion-icon name="logo-tiktok"></ion-icon>
              </a>
            </span>
            <span className='text-4xl mr-2'>
              <a href="">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>
            </span>
          </div>
        </div>
        <div className='my-3'>
          <h1 className='text-2xl font-bold my-3'>EXPLORE</h1>
          <div>
            <ul className='text-md animate-pulse'>
              <li className='text-lg'><Link to="">About Us</Link></li>
              <li className='text-lg'><Link to="">Services</Link></li>
              <li className='text-lg'><Link to="">About Us</Link></li>
              <li className='text-lg'><Link to="">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className='text-2xl font-semibold mt-3'>GET IN TOUCH</h1>
        </div>
      </footer>
      <section className='bg-[#120F36] flex gap-2 justify-center w-full text-white py-3'>
        <span className='text-xl my-auto'>
          <FaCopyright />
        </span>
        <h4>Pearlshi Caterers & Event Planner {year}. All  rights Reserved.</h4>
      </section>
    </>
  )
}

export default Footer;