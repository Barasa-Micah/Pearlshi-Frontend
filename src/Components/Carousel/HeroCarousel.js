import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    const settingsLg = {
        fade: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        pauseOnHover: false
    }

    return (
        <>
            <div className="hidden lg:block">
                <Slider {...settingsLg}>
                    <div className="h-screen relative w-full">
                        <div>
                            <img src={require('../../Assets/SlideShow/IMG-20240515-WA0004.jpg')} alt="" className="w-full h-full" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10">
                            <h1 className="text-white text-7xl font-Title">Pearlshi Events</h1>
                            <p className="text-xl text-white">Your premier events and catering service provider</p>
                        </div>
                    </div>
                    <div className="h-screen relative w-full">
                        <div>
                            <img src={require('../../Assets/SlideShow/20240518105255_IMG_0427.jpg')} alt="" className="w-full max-h-screen" />
                        </div>
                        <div className="absolute top-[300px] left-[300px] p-10 font-[Inter]">
                            <h1 className="text-white text-6xl font-[Inter]">Pearlshi Events</h1>
                            <p className="text-xl text-white">Your premier events and catering service provider</p>
                            <button className="px-4 py-3 text-lg">Learn More</button>
                        </div>
                    </div>
                    <div className="h-screen relative w-full">
                        
                            <img src={require('../../Assets/SlideShow/20240518093945_IMG_0363.jpg')} alt="" className="w-full max-h-screen" />
                        
                        <div className="absolute top-[300px] p-10">
                            <h1 className="text-white text-8xl font-[Inter]">Pearlshi Events</h1>
                            <p className="text-xl text-white">Your premier events and catering service provider</p>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="hidden md:block lg:hidden mt-[100px]">
                <Slider {...settingsLg}>
                    <div className="h-[500px] relative w-full">
                        <div className="h-[500px]">
                            <img src={require('../../Assets/SlideShow/IMG-20240515-WA0004.jpg')} alt="" className="w-full h-full" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  items-center p-10">
                            <h1 className="text-white text-7xl font-[Inter]">Pearlshi Events</h1>
                            <p className="text-xl text-white">Your premier events and catering service provider</p>
                        </div>
                    </div>
                    <div className="h-[500px] relative w-full">
                        <div className="h-[500px]">
                            <img src={require('../../Assets/SlideShow/20240518105255_IMG_0427.jpg')} alt="" className="w-full max-h-screen" />
                        </div>
                        <div className="absolute  left-[300px] p-10 font-[Inter]">
                            <h1 className="text-white text-6xl font-[Inter]">Pearlshi Events</h1>
                            <p className="text-xl text-white">Your premier events and catering service provider</p>
                            <button className="px-4 py-3 text-lg">Learn More</button>
                        </div>
                    </div>
                    <div className="h-[500px] relative w-full">
                        <div className="h-[500px]">
                            <img src={require('../../Assets/SlideShow/20240518093945_IMG_0363.jpg')} alt="" className="w-full max-h-screen" />
                        </div>
                        <div className="absolute  p-10">
                            <h1 className="text-white text-8xl font-[Inter]">Pearlshi Events</h1>
                            <p className="text-xl text-white">Your premier events and catering service provider</p>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="md:hidden mt-[80px]">
                <Slider {...settingsLg}>
                    <div className="h-[250px] relative w-full">
                        <div className="h-[250px] w-full">
                            <img src={require('../../Assets/SlideShow/IMG-20240515-WA0004.jpg')} alt="" className="w-full h-full" />
                        </div>
                        <div className="absolute  flex flex-col items-center justify-center p-2">
                            <h1 className="text-white text-lg font-bold font-[Inter]">Pearlshi Events</h1>
                            <p className="text-md text-white">Your premier events and catering service provider</p>
                        </div>
                    </div>
                    <div className="h-[250px] relative w-full">
                        <div className="h-[250px] w-full">
                            <img src={require('../../Assets/SlideShow/20240518105255_IMG_0427.jpg')} alt="" className="w-full h-full" />
                        </div>
                        <div className="absolute   p-2 font-[Inter]">
                            <h1 className="text-white text-lg font-[Inter]"></h1>
                            <p className="text-md text-white"></p>
                            <button className="px-4 py-3 text-lg"></button>
                        </div>
                    </div>
                    <div className="h-[250px] relative w-full">
                        <div className="h-[250px] w-full">
                            <img src={require('../../Assets/SlideShow/20240518093945_IMG_0363.jpg')} alt="" className="w-full h-full" />
                        </div>
                        <div className="absolute  p-10">
                            <h1 className="text-white text-8xl font-[Inter]">Pearlshi Events</h1>
                            <p className="text-xl text-white">Your premier events and catering service provider</p>
                        </div>
                    </div>
                </Slider>
            </div>

            
        </>
    );
}

export default HeroCarousel;