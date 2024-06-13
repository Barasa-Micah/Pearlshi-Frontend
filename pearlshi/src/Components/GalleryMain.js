import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GalleryMain =() => {
    useEffect(() => {
        AOS.init();
        }, []);
    return(
        <>
          <div className='mx-auto mt-0 flex flex-wrap  w-full md:w-[70%] lg:w-[95%] justify-center items-center  gap-4 '>
          <div className='h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/chairs3.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className='h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/t2.jpg')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className='h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/Birthday.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/table19.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>

            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/table24.png')} alt='Gallery' className='rounded-md object-cover h-full w-full trasform transition duration-500 hover:scale-125' />
            </div>
            <div className='h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/chairs4.png')} alt='Gallery' className='rounded-md object-cover h-full w-full trasform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/wedding5.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/wedding3.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/wedding20.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/chairs7.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
        
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/chef8.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/chef7.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/chef3.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/chef5.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/chef10.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
        
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/food4.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/drinks.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/drinks2.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/food5.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/food2.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/food7.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/food11.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/food14.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/fruits.png')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
        

        </div>
        </>
    );
 }


export default GalleryMain;
