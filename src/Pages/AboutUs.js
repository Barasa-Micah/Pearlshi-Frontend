import React, {useRef} from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

//components



const AboutUs = () => { 
  return (
    <>
      <Helmet>
        <title>About Us | Pearlshi Caterers & Event Planners</title>
      </Helmet>
      <html className='scroll-smooth'>
      <body className='bg-[#F5F2FB] w-full'>
        <div className="w-full h-56 md:h-80 relative">
          <img src={require('../Assets/SlideShow/20240518094120_IMG_0369.jpg')} alt="" className='w-full h-full object-cover' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center'>
            <hr className=' flex-grow'/>
            <h1 className='text-3xl md:text-7xl text-white text-center font-sembibold'>About Us</h1>
            <hr className='flex-grow'/>
          </div>
        </div>
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
              <li><a href="#"><button className='bg-[#00ADEF] text-white font-semibold text-4xl px-5 py-2 lg:rounded-tr-3xl lg:rounded-bl-3xl w-[300px] lg:w-auto mb-3 lg:mb-0'>Personnel</button></a></li>
            </ul>
          </div>
        </section>

        {/* Who We are Section */}
        <section id='WhoWeAre' className='bg-white rounded-lg w-[95%] lg:w-[80%] mx-auto p-4 mt-10 relative'>
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
                <img src={require('../Assets/SlideShow/pearlshiTableSetUp.jpg')} alt="" className='w-full h-full' />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id='OurMission'>
          <div className='w-[95%] lg:w-[80%] mx-auto mt-[100px]'>
            <h1 className='text-white text-2xl md:text-4xl flex  font-bold bg-[#00ADEF] px-2 w-[170px] h-[40px]  md:w-[220px] md:h-[50px] py-auto'>Our Mission</h1>
            <div className='md:flex justify-evenly space-x-2 bg-white rounded-lg p-4 shadow-2xl'>
              <div className='basis-[40%]'>
                <p className='text-lg'>Our mission is to provide exquisite cuisine, personalized service, and meticulous attention to detail. We strive to exceed our clients' expectations by transforming their ideas into memorable culinary experiences, ensuring every event is as unique and special as the people we serve.</p>
              </div>
              <div className='w-[99%] h-[300px] mt-2 mx-auto md:w-[400px] md:h-[350px]'>
                <img src={require('../Assets/SlideShow/pearlshiTableSetUp.jpg')} alt="" className='w-full h-full' />
              </div>
            </div>
          </div>
        </section>
      </body>
      </html>
    </>
  );
}

export default AboutUs;