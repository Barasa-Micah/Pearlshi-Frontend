import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

//Components
import NavBar from "../Components/NavBar/NavBar";
import HeroCarousel from "../Components/Carousel/HeroCarousel";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home | Pearlshi Caterers & Event Planners</title>
            </Helmet>
            <NavBar />
            <HeroCarousel />

            <html className="scroll-smooth">

            {/* About Section */}
            <section className="w-full bg-[#EBE4FF] pb-4 pt-8 space-y-10">
                <div className="w-[90%] md:w-[70%] mx-auto flex">
                    <div className="w-[250px] h-[150px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0029.jpg')} 
                            alt="" 
                            className="w-full h-full  object-cover"
                        />
                    </div>
                    <div className="w-[220px] h-[150px] md:w-[120px] md:h-[150px] lg:h-[200px] hidden md:block">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0036.jpg')} 
                            alt="" 
                            className="w-[220px] h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[150px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0030.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[150px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0025.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[150px] md:w-[120px] md:h-[150px] lg:h-[200px] hidden md:block">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0052.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[150px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/20240518091902_IMG_0340.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[150px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/20240518105139_IMG_0420.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[150px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/20240518105346_IMG_0428.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl md:text-8xl my-5 text-lighter font-About text-center">About Us</h1>
                    <p className="text-center w-[98%] md:w-[70%] mx-auto mb-10">Pearlshi Caterers and Event planners  is based in Nairobi, Kenya. We offer professional outside catering services. Our company is backed up by professional staff and specializes in offering high quality personalized and reliable catering services to our customers.</p>
                </div>
            </section>

            {/* What we do */}
            <section className="bg-black w-full p-4 pb-10">
                <h1 className="text-center text-white text-xl md:text-3xl lg:text-4xl font-['Inter'] my-10">WHAT WE DO</h1>
                <div className="mx-auto w-[95%] md:flex flex-wrap space-x-5 mt-5 justify-center items-center">
                    <div className="relative mx-auto inline-block justify-center group hover:cursor-pointer">
                        <div className="">
                            <img src={require('../Assets/SlideShow/20240518091902_IMG_0340.jpg')} alt="" className="h-[400px] w-[270px]" /> 
                        </div>
                        <div className="absolute bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                            <h1 className="text-white hidden group-hover:block text-center pt-4 text-4xl font-semibold font-About">Weddings</h1>
                        </div>
                    </div>
                    <div className="relative mx-auto inline-block justify-center mt-2 group hover:cursor-pointer">
                        <div className="">
                            <img src={require('../Assets/SlideShow/20240518111050_IMG_0453.jpg')} alt="" className="h-[400px] w-[270px]" /> 
                        </div>
                        <div className="absolute bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                            <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Caterers</h1>
                        </div>
                    </div>
                    <div className="relative mx-auto inline-block justify-center group hover:cursor-pointer">
                        <div className="">
                            <img src={require('../Assets/SlideShow/IMG-20240515-WA0025.jpg')} alt="" className="h-[400px] w-[270px]" /> 
                        </div>
                        <div className="absolute bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                            <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Decorations</h1>
                        </div>
                    </div>
                    <div className="relative mx-auto inline-block justify-center group hover:cursor-pointer">
                        <div className="w-300px">
                            <img src={require('../Assets/SlideShow/IMG-20240515-WA0029.jpg')} alt="" className="h-[400px] w-[270px]" /> 
                        </div>
                        <div className="absolute bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                            <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Birthday Parties</h1>
                        </div>
                    </div>
                    <div className="relative mx-auto inline-block justify-center group hover:cursor-pointer">
                        <div className="">
                            <img src={require('../Assets/SlideShow/20240518121632_IMG_0492.jpg')} alt="" className="h-[400px] w-[270px] " /> 
                        </div>
                        <div className="absolute bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                            <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Weddings</h1>
                        </div>
                    </div>
                    <div className="relative mx-auto inline-block justify-center group hover:cursor-pointer">
                        <div className="">
                            <img src={require('../Assets/SlideShow/20240518094352_IMG_0373 (2).jpg')} alt="" className="h-[400px] w-[270px]" /> 
                        </div>
                        <div className="absolute bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                            <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Weddings</h1>
                        </div>
                    </div>
                    <div className="relative mx-auto inline-block justify-center group hover:cursor-pointer">
                        <div className="">
                            <img src={require('../Assets/SlideShow/20240518060004_IMG_0304.jpg')} alt="" className="h-[400px] w-[270px]" /> 
                        </div>
                        <div className="absolute bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                            <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Weddings</h1>
                        </div>
                    </div>
                    <div className="relative mx-auto inline-block justify-center group hover:cursor-pointer">
                        <div className="">
                            <img src={require('../Assets/SlideShow/20240518103917_IMG_0394.jpg')} alt="" className="h-[400px] w-[270px]" /> 
                        </div>
                        <div className="absolute bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                            <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Weddings</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us? */}
            <section className="font-['Inter'] w-full p-5">
                <h1 className="text-center py-5 text-2xl md:text-3xl font-bold font-['Inter']">Why Choose Us?</h1>
                <div className="md:flex flex-wrap space-x-3 w-[95%] mx-auto">
                    <div className="p-2 border rounded-md flex space-x-4 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-7xl text-wedding-500 border rounded-full my-auto">
                            <ion-icon name="document-text-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Tailored Experience</h1>
                            <p className="text-md md:text-lg">We work closely with you to create a personalized menu that reflects your vision and preferences.</p>
                        </div>
                    </div>
                    <div className="p-2 border rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-6xl text-wedding-800 border rounded-full my-auto">
                            <ion-icon name="fast-food-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Exceptional Quality</h1>
                            <p className="text-md md:text-lg">Our talented chefs use only the freshest, highest quality ingredients to craft delicious and visually stunning dishes.</p>
                        </div>
                    </div>
                    <div className="p-2 border rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-6xl text-wedding-700 border rounded-full my-auto">
                            <ion-icon name="restaurant-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Professional Service</h1>
                            <p className="text-md md:text-lg">Our team is dedicated to providing professional, friendly, and reliable service, ensuring a seamless and stress-free event.</p>
                        </div>
                    </div>
                    <div className="p-2 border rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-7xl text-wedding-600 border rounded-full my-auto">
                            <ion-icon name="bed-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Attention to Detail</h1>
                            <p className="text-md md:text-lg">From the presentation of our dishes to the setup of your event, we pay attention to every detail to ensure perfection.</p>
                        </div>
                    </div>
                    <div className="p-2 border rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-6xl text-wedding-400 border rounded-full my-auto">
                            <ion-icon name="restaurant-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Versatility</h1>
                            <p className="text-md md:text-lg">Whether it’s an intimate gathering, a corporate event, or a grand celebration, we have the expertise to cater to all types of events with style and elegancy.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Core Values section */}
            <section className="bg-[#EBE4FF] w-full P-4">
                <h1 className="text-2xl md:text-4xl text-center font-semibold py-5">Core Values</h1>
                <div className="md:flex justify-center gap-5 md:mt-10 mx-auto">
                    <div className="bg-black w-[75%] h-[250px] md:w-[22%] md:h-[270px] mx-auto md:mx-0 mt-10 relative bg-opacity-[75%]">
                        <div 
                            className="absolute top-[-25px] md:top-[-35px]   flex justify-center items-center bg-[#00ADEF] w-[50px] h-[50px] md:w-[70px] md:h-[70px] rotate-45"
                        />
                        <div className="pb-4">
                            <h1 className="text-[#00ADEF] text-2xl font-bold text-center pt-10 mt-4">Integrity</h1>
                            <p className="text-white text-center w-[90%] mx-auto text indent-1 mt-5">We conduct our business with honesty and transparency, fostering trust and long-lasting relationships with our clients and partners.</p>
                        </div>
                    </div>
                    <div className="bg-black w-[75%] h-[250px] md:w-[22%] md:h-[270px] mx-auto md:mx-0 mt-10 relative bg-opacity-[75%]">
                        <div 
                            className="absolute top-[-25px] md:top-[-35px] bg-[#00ADEF] w-[50px] h-[50px] md:w-[70px] md:h-[70px] rotate-45"
                        />
                        <div className="pb-4">
                            <h1 className="text-[#00ADEF] text-2xl font-bold text-center pt-10 mt-4">Creativity</h1>
                            <p className="text-white text-center w-[90%] mx-auto text indent-1 mt-5">We embrace innovation and creativity, offering unique and customized menus that reflect our clients’ tastes and preferences.</p>
                        </div>
                    </div>
                    <div className="bg-black w-[75%] h-[250px] md:w-[22%] md:h-[270px] mx-auto md:mx-0 mt-10 relative bg-opacity-[75%]">
                        <div 
                            className="absolute top-[-25px] md:top-[-35px] bg-[#00ADEF] w-[50px] h-[50px] md:w-[70px] md:h-[70px] rotate-45"
                        />
                        <div className="pb-4">
                            <h1 className="text-[#00ADEF] text-2xl font-bold text-center pt-10 mt-4">Excellence</h1>
                            <p className="text-white text-center w-[90%] mx-auto text indent-1 mt-5">We are committed to the highest standards of quality in every dish we create and every service we provide.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center my-5 pb-4 ">
                    <button className="bg-[#00ADEF] px-6 py-3 text-xl text-center font-bold text-white">
                        <Link to="">
                            Learn More
                        </Link>
                    </button>
                </div>
            </section>
            <Footer />
            </html>
        </>
    );
}

export default HomePage;