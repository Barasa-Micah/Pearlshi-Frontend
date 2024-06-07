import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

//Icons
import { FaBirthdayCake } from "react-icons/fa";


//Components
import HeroCarousel from "../Components/Carousel/HeroCarousel";
import CoreCarousel from "../Components/Carousel/CoreCarousel";


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home | Pearlshi Caterers & Event Planners</title>
            </Helmet>
            <HeroCarousel />

            {/* About Section */}
            <section className="w-full bg-[#EBE4FF] pb-4 pt-8 space-y-10">
                <div data-aos="zoom-out-up" data-aos-duration="3000" className="w-[90%] md:w-[70%] mx-auto flex">
                    <div className="w-[250px] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0029.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px] hidden md:block">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0036.jpg')} 
                            alt="" 
                            className="w-full h-full "
                        />
                    </div>
                    <div className="w-[220px] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0030.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0025.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px] hidden md:block">
                        <img 
                            src={require('../Assets/SlideShow/IMG-20240515-WA0052.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/20240518091902_IMG_0340.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/20240518105139_IMG_0420.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-[220px] h-[120px] md:w-[120px] md:h-[150px] lg:h-[200px]">
                        <img 
                            src={require('../Assets/SlideShow/20240518105346_IMG_0428.jpg')} 
                            alt="" 
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl md:text-8xl my-5 text-lighter font-About text-center">About Us</h1>
                    <p className="text-center w-[98%] md:w-[70%] mx-auto mb-10">Pearlshi Caterers and Event planners  is based in Nairobi, Kenya. We offer professional outside catering services. Our company is backed up by professional staff and specializes in offering high quality personalized and reliable catering services to our customers.</p>
                </div>
            </section>

            {/* What we do */}
            <section className="bg-black w-full p-4 pb-10">
                <h1 className="text-center text-white text-xl md:text-3xl lg:text-4xl font-['Roboto'] my-10">WHAT WE DO</h1>
                <div className="mx-auto w-[95%] lg:w-[65%] flex flex-wrap gap-5 mt-5 justify-center items-center">
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="" data-aos-offset="100" className="relative group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="/decorations">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/20240518091902_IMG_0340.jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute text-white bg-black  bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="hidden group-hover:block text-center pt-4 text-4xl font-semibold font-About">Decorations</h1>
                                <p className="hidden group-hover:block text-center mt-10 p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="100" className="relative mt-2 group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="tableSetUp">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/pearlshiTableSetUp.jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute text-white bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Table Set Up</h1>
                                <p className="hidden group-hover:block text-center mt-10 p-3 font-['Inter'] font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1200" data-aos-offset="100" className="relative group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="floralRequisition">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/IMG-20240515-WA0025.jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute text-white bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Floral Requisition</h1>
                                <p className="hidden group-hover:block text-center mt-10 p-3 font-['Inter'] font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="700" data-aos-offset="100" className="relative group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="officeDelivery">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/IMG-20240515-WA0029.jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute text-white bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Office Delivery</h1>
                                <p className="hidden group-hover:block text-center mt-10 p-3 font-['Inter'] font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800" data-aos-offset="100" className="relative group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="/tentHiring">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/TablesetUp.jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute text-white bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Tents & Chair Hiring</h1>
                                <p className="hidden group-hover:block text-center mt-10 p-3 font-['Inter'] font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900" data-aos-offset="100" className="relative group hover:cursor-pointer shadow-black shadow-2xl">
                        <Link to="eventPlanning">
                            <div className="h-[400px] w-[270px]">
                                <img src={require('../Assets/SlideShow/20240518094352_IMG_0373 (2).jpg')} alt="" className="w-full h-full object-cover" /> 
                            </div>
                            <div className="absolute text-white bg-black bg-opacity-75 w-full h-0 group-hover:h-full origin-bottom bottom-0 transition-all duration-1000">
                                <h1 className="text-white hidden group-hover:block pt-4 text-center text-4xl font-semibold font-About">Event Planning & Management</h1>
                                <p className="hidden group-hover:block text-center mt-10 p-3 font-['Inter'] font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </section>

            {/* Why Choose Us? */}
            <section className="font-['Inter'] w-full p-5">
                <h1 className="text-center py-5 text-2xl md:text-3xl font-bold font-['Inter'] text-header-500">Why Choose Us?</h1>
                <div className="md:flex flex-wrap gap-8 w-[95%] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="p-2 shadow-lg rounded-md flex space-x-4 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-5xl text-wedding-500 border rounded-full my-auto p-2">
                            <ion-icon name="document-text-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Tailored Experience</h1>
                            <p className="text-md text-slate-600">We work closely with you to create a personalized menu that reflects your vision and preferences.</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className="p-2 shadow-lg rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-5xl text-wedding-800 border rounded-full my-auto p-2">
                            <ion-icon name="fast-food-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Exceptional Quality</h1>
                            <p className="text-md text-slate-600">Our talented chefs use only the freshest, highest quality ingredients to craft delicious and visually stunning dishes.</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="2000" className="p-2 shadow-lg rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-5xl text-green-700 border rounded-full my-auto p-2">
                            <ion-icon name="restaurant-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Professional Service</h1>
                            <p className="text-md text-slate-600">Our team is dedicated to providing professional, friendly, and reliable service, ensuring a seamless and stress-free event.</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="1000" data-aos-duration="2000" className="p-2 shadow-lg rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-5xl text-wedding-600 border rounded-full my-auto p-2">
                            <ion-icon name="bed-sharp"></ion-icon>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Attention to Detail</h1>
                            <p className="text-md text-slate-600">From the presentation of our dishes to the setup of your event, we pay attention to every detail to ensure perfection.</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="1100" data-aos-duration="2000" className="p-2 shadow-lg rounded-md flex space-x-3 md:w-[45%] mb-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-4xl md:text-5xl text-wedding-400 border rounded-full my-auto p-2">
                            <FaBirthdayCake />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold">Versatility</h1>
                            <p className="text-md text-slate-600">Whether it’s an intimate gathering, a corporate event, or a grand celebration, we have the expertise to cater to all types of events with style and elegancy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-gradient-to-r from-header-200 via-header-600 w-full p-5">
                    <h1 className="text-4xl text-left w-[50%] mx-auto font-semibold font-Title">Our Values</h1> 
                <div className="flex space-x-4">
                    <div className="flex-1 ">
                        <div>
                            <h3 className="text-black text-xl text-center my-10 w-[200px] ml-9">Our core values define our company culture.</h3>
                            <ul className="text-white text-xl m-[100px]">
                                <li className="ml-[12px] my-2">Integrity</li>
                                <li className="ml-[24px] mb-2">Passion</li>
                                <li className="ml-[36px] mb-2">Creativity</li>
                                <li className="ml-[42px] mb-2">Excellence</li>
                                <li className="ml-[54px] ">Sustainability</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 w-[2%]">
                        <CoreCarousel />
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;