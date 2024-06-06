import React, {useRef} from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ReviewForm from '../Components/Rating/ReviewForm';

//components



const AboutUs = () => { 
  return (
    <>
      <Helmet>
        <title>About Us | Pearlshi Caterers & Event Planners</title>
      </Helmet>
      <body className='bg-[#F5F2FB] w-full mt-[80px] md:mt-[100px] lg:mt-0'>
        <div className="w-full h-56 md:h-96 relative">
          <img src={require('../Assets/SlideShow/20240518134030_IMG_0519.jpg')} alt="" className='w-full h-full object-cover' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center'>
            <hr className=' flex-grow'/>
            <h1 className='text-3xl md:text-7xl text-header-700 text-center font-semibold'>About Us</h1>
            <hr className='flex-grow'/>
          </div>
        </div>

        {/* Welcoming Section */}
        <section>
          <div className='py-10'>
            <h3 className='text-[#C61313] text-center text-lg font-semibold'>WELCOME TO</h3>
            <h1 className='text-center pt-3 text-2xl md:text-4xl font-["Inter"]'>PEARLSHI CATERERS & EVENT PLANNERS</h1>
          </div>
          <div className='lg:w-[90%] mx-auto flex justify-center'>
            <ul className='lg:inline-flex  justify-center items-center text-center space-x-7'>
              <li><a href='#WhoWeAre'><button className='bg-[#00ADEF] text-white font-semibold text-4xl px-5 py-2 lg:rounded-tr-3xl lg:rounded-bl-3xl w-[300px] lg:w-auto mb-3 lg:mb-0'>Who We Are</button></a></li>
              <li><a href="#OurVision"><button className='bg-[#00ADEF] text-white font-semibold text-4xl px-5 py-2 lg:rounded-tr-3xl lg:rounded-bl-3xl w-[300px] lg:w-auto mb-3 lg:mb-0'>Our Vision</button></a></li>
              <li><a href="#OurMission"><button className='bg-[#00ADEF] text-white font-semibold text-4xl px-5 py-2 lg:rounded-tr-3xl lg:rounded-bl-3xl w-[300px] lg:w-auto mb-3 lg:mb-0'>Our Mision</button></a></li>
              <li><a href="#OurTeam"><button className='bg-[#00ADEF] text-white font-semibold text-4xl px-5 py-2 lg:rounded-tr-3xl lg:rounded-bl-3xl w-[300px] lg:w-auto mb-3 lg:mb-0'>Our Team</button></a></li>
            </ul>
          </div>
        </section>

        {/* Who We are Section */}
        <section id='WhoWeAre' className='bg-white rounded-lg w-[95%] lg:w-[80%] mx-auto p-4 mt-10 relative shadow-2xl'>
          <div className='md:flex justify-evenly space-x-2 '>
            <div className='w-[99%] h-[300px] mb-2 mx-auto md:w-[400px] md:h-[350px]'>
              <img src={require('../Assets/SlideShow/pearlshiTableSetUp.jpg')} alt="" className='w-full h-full' />
            </div>
            <div className='basis-[50%] leading-tight pb-10'>
              <p className='text-lg'>
                As an outside catering company we specialize in providing food and beverage solutions for events hosted at external & internal venues.
              </p>
              <p className='text-lg'>
                This can include weddings, corporate events, parties, and more. The company handles everything from menu planning and food preparation to delivery, setup, and  staffing for the event.
              </p>
              <p className='text-lg'>
                From intimate gatherings to large-scale celebrations, these business excel in menu customization, food preparation, delivery, and on-site service, ensuring memorable dining experiences for clients and their guests.
              </p>
            </div>
          </div>
          <div className='absolute bottom-[20px] right-[50px]'>
            <Link to=""><button className='text-white bg-[#00ADEF] font-bold text-xl px-4 py-2 rounded-tl-3xl rounded-br-3xl'>Reach Out</button></Link>
          </div>
        </section>

        {/* Vision Section */}
        <section id='OurVision'>
          <div className='w-[95%] lg:w-[80%] mx-auto mt-[100px]'>
            <h1 className='text-white text-2xl md:text-4xl font-bold bg-[#00ADEF] px-2 w-[150px] h-[40px] md:w-[220px] md:h-[50px] py-auto'>Our Vision</h1>
            <div className='md:flex justify-evenly space-x-2 bg-white rounded-lg p-4 shadow-2xl'>
              <div className='basis-[40%]'>
                <p className='text-lg'>Our mission is to provide exquisite cuisine, personalized service, and meticulous attention to detail. We strive to exceed our clients' expectations by transforming their ideas into memorable culinary experiences, ensuring every event is as unique and special as the people we serve.</p>
              </div>
              <div className='w-[99%] h-[300px] mt-2 mx-auto md:w-[400px] md:h-[350px]'>
                <img src={require('../Assets/SlideShow/20240518110314_IMG_0443.jpg')} alt="" className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id='OurMission'>
          <div className='w-[95%] lg:w-[80%] mx-auto mt-[100px]'>
            <h1 className='text-white text-2xl md:text-4xl flex  font-bold bg-[#00ADEF] px-2 w-[170px] h-[40px]  md:w-[220px] md:h-[50px] py-auto'>Our Mission</h1>
            <div className='md:flex flex-row-reverse justify-evenly space-x-2 bg-white rounded-lg p-4 shadow-2xl'>
              <div className='basis-[40%]'>
                <p className='text-lg'>Our mission is to provide exquisite cuisine, personalized service, and meticulous attention to detail. We strive to exceed our clients' expectations by transforming their ideas into memorable culinary experiences, ensuring every event is as unique and special as the people we serve.</p>
              </div>
              <div className='w-[99%] h-[300px] mt-2 mx-auto md:w-[400px] md:h-[350px]'>
                <img src={require('../Assets/SlideShow/20240518105407_IMG_0430.jpg')} alt="" className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section id='OurTeam' className='p-5'>
          <h1 className='text-center text-4xl pt-11 mb-4'>OUR TEAM</h1>
          <p className='text-gray-500 text-center text-lg'>Meet the brilliant individuals behind our success.</p>
          <div className='mt-8 flex flex-wrap gap-3 justify-center items-center'>
            <div className='bg-white p-3 h-auto w-[400px] md:w-[70%] lg:w-[400px] hover:shadow-2xl hover:-translate-y-7 transition-all duration-700'>
              <div className='w-[150px] h-[150px] mx-auto'>
                <img src={require('../Assets/Executive/Marketing Manager.jpg')} alt='' className='w-full h-full rounded-full' />
              </div>
              <h1 className='text-center text-xl font-bold'>Faith Wanjiru</h1>
              <p className='text-[#00ADEF] text-center text-sm pb-3'>Marketing Manager</p>
              <span className="text-3xl align-middle my-auto text-[#00ADEF] hover:cursor-pointer rounded-full items-center justify-center flex">
                <a href="">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </span>
            </div>
            <div className='bg-white p-3 h-auto w-[400px] md:w-[70%] lg:w-[400px] hover:shadow-2xl hover:-translate-y-7 transition-all duration-700'>
              <div className='w-[150px] h-[150px] mx-auto'>
                <img src={require('../Assets/Executive/Bernard Kioko1.jpg')} alt='' className='w-full h-full rounded-full object-cover' />
              </div>
              <h1 className='text-center text-xl font-bold'>Benard Kioko</h1>
              <p className='text-[#00ADEF] text-center text-sm pb-3'>Head of Finance</p>
              <span className="text-3xl align-middle my-auto text-[#00ADEF] hover:cursor-pointer rounded-full items-center justify-center flex">
                <a href="">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </span>
            </div>
            <div className='bg-white p-3 h-auto w-[400px] md:w-[70%] lg:w-[400px] hover:shadow-2xl hover:-translate-y-7 transition-all duration-700'>
              <div className='w-[150px] h-[150px] mx-auto'>
                <img src={require('../Assets/Executive/HeadChef1.jpg')} alt='' className='w-full h-full rounded-full objectq' />
              </div>
              <h1 className='text-center text-xl font-bold'>Andrew Bwire</h1>
              <p className='text-[#00ADEF] text-center text-sm pb-3'>Head Chef</p>
              <span className="text-3xl align-middle my-auto text-[#00ADEF] hover:cursor-pointer rounded-full items-center justify-center flex">
                <a href="">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </span>
            </div>
            <div className='bg-white p-3 h-auto w-[400px] md:w-[70%] lg:w-[400px] hover:shadow-2xl hover:-translate-y-7 transition-all duration-700'>
              <div className='w-[150px] h-[150px] mx-auto'>
                <img src={require('../Assets/Executive/Photograapher1.jpg')} alt='' className='w-full h-full rounded-full object-cover' />
              </div>
              <h1 className='text-center text-xl font-bold'>Charles Njuki</h1>
              <p className='text-[#00ADEF] text-center text-sm pb-3'>Photographer</p>
              <span className="text-3xl align-middle my-auto text-[#00ADEF] hover:cursor-pointer rounded-full items-center justify-center flex">
                <a href="">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </span>
            </div>
            <div className='bg-white p-3 h-auto w-[400px] md:w-[70%] lg:w-[400px] hover:shadow-2xl hover:-translate-y-7 transition-all duration-700'>
              <div className='w-[150px] h-[150px] mx-auto'>
                <img src={require('../Assets/Executive/Marketing Manager.jpg')} alt='' className='w-full h-full rounded-full' />
              </div>
              <h1 className='text-center text-xl font-bold'>Faith Wanjiru</h1>
              <p className='text-[#00ADEF] text-center text-sm pb-3'>Marketing Manager</p>
              <span className="text-3xl align-middle my-auto text-[#00ADEF] hover:cursor-pointer rounded-full items-center justify-center flex">
                <a href="">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </span>
            </div>
            <div className='bg-white p-3 h-auto w-[400px] md:w-[70%] lg:w-[400px] hover:shadow-2xl hover:-translate-y-10 transition-all duration-700'>
              <div className='w-[150px] h-[150px] mx-auto'>
                <img src={require('../Assets/Executive/Marketing Manager.jpg')} alt='' className='w-full h-full rounded-full' />
              </div>
              <h1 className='text-center text-xl font-bold'>Faith Wanjiru</h1>
              <p className='text-[#00ADEF] text-center text-sm pb-3'>Marketing Manager</p>
              <span className="text-3xl align-middle my-auto text-[#00ADEF] hover:cursor-pointer rounded-full items-center justify-center flex">
                <a href="">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </span>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default AboutUs;