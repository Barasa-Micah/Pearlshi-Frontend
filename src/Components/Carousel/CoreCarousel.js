import React from 'react';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoreCarousel = () => {
    const settingLg = {
        autoplay: true,
        infintite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        speed: 2000,
        fade: true,
        arrows: false
    }

    return (
        <>
            <div className='hidden lg:block w-full'>
                <Slider {...settingLg}>
                    <div className='w-[500px] h-[500px] rounded-full relative inline-flex'>
                        <img src={require('../../Assets/SlideShow/IMG-20240515-WA0058.jpg')} alt="" className='w-[500px] h-[500px] rounded-full object-cover shadow-xl' />
                        <div className='absolute inset-0 bg-[#1E40AF] text-white w-[500px] h-[500px] rounded-full bg-opacity-[40%]  p-4'>
                            <h1 className='text-center font-bold text-2xl'>Integrity</h1>
                            <div className='max-w-[200px] '>
                                <p className='text-center text-3xl mt-10'>We are committed to the highest standards of quality in every dish we create and every service we provide.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='w-[500px] h-[500px] rounded-full relative inline-flex'>
                        <img src={require('../../Assets/SlideShow/20240518105139_IMG_0420.jpg')} alt="" className='w-[500px] h-[500px] rounded-full object-cover' />
                        <div className='absolute top-0 bg-[#1E40AF] text-white w-[500px] h-[500px] rounded-full bg-opacity-[40%] shadow-xl p-4'>
                            <h1 className='text-center font-bold text-2xl'>Integrity</h1>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default CoreCarousel;