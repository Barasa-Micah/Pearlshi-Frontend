import React from 'react';

//Icons
import { RiCustomerServiceLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";



function ContactPage() {
  return (
    <>
    <section className='bg-[#ffffff]'>
      <section className='w-full relative mt-[120px]'>
        <div className='h-full lg:h-96'>
          <img src={require('../Assets/SlideShow/20240518105255_IMG_0427.jpg')} alt='' className='object-cover w-full h-full' />
        </div>
        <div className='absolute top-0 bg-black bg-opacity-[40%] w-full h-full'>
          <div className='absolute bottom-[10%] md:bottom-[24%] left-[5%]'>
            <h1 className='text-white text-4xl md:text-6xl lg:text-7xl font-semibold text-left font-["Inter"]'>Contact Us</h1>
            <p className='text-gray-200 text-sm md:text-md font-["Inter"] md:w-[70%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </p>
          </div>
        </div>
      </section>

      <section className='w-[90%] mx-auto p-3 mt-[30px] font-["Inter"]'>
        <div className=' space-y-4'>
          <h4 className='text-[#00ADEF] text-lg font-["Inter"]'>Get In Touch</h4>
          <h1 className='text-5xl '>Contact Us</h1>
          <p className='font-light font-md w-[90%]'>Do you need some help planning an event? Please fill in the form below.I look forward to receiving your enquiry and hearing more about your upcoming event!</p>
        </div>
        <div className='flex justify-around space-x-[100px] mt-[100px] mb-[50px]'>
          <div className='flex gap-2'>
            <span className='text-[#00ADEF] text-7xl'>
              <RiCustomerServiceLine />
            </span>
            <div>
              <h1 className='text-xl'>Phone</h1>
              <a href='tel:0715615609'>
                <p className='text-sm text-slate-600 mt-3 hover:text-[#00ADEF]'>0715615609</p>
              </a>
              <a href='tel:0759108174'>
                <p className='text-sm text-slate-600 hover:text-[#00ADEF]'>0759108174</p>
              </a>
            </div>
          </div>
          <div className='flex gap-2'>
            <span className='text-[#00ADEF] text-7xl'>
              <CiLocationOn />
            </span>
            <div>
              <h1 className='text-xl'>Location</h1>
              <p className='mt-3 text-slate-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
            </div>
          </div>
          <div className='flex gap-2'>
            <span className='text-[#00ADEF] text-7xl'>
              <MdOutlineEmail />
            </span>
            <div>
              <h1 className='text-xl'>E- Mail</h1>
              <a href='mailto:pearlcaterers0205@gmail.com'>
                <p className='mt-3 text-slate-600 hover:text-[#00ADEF]'>pearlcaterers0205@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <div className="md:flex items-start  w-[90%] mx-auto bg-[#135a70] mb-10">
      {/* Image Section */}
      <div className="basis-[30%] h-[300px] md:h-screen bg-gray-200 flex justify-center  relative ">
        <img
          src={require('../Assets/SlideShow/IMG-20240515-WA0052.jpg')} alt='' className="w-full h-full object-cover" />
      </div>

      {/* Form Section */}
      <div className="w-full basis-[50%] p-6">
        <h1 className="font-semi bold text-3xl mb-4 text-white ">Get The Party Started</h1>
        <p className='text-white'>As the premier event planning company in the area. Each event and client is unique and we believe our services should be as well.</p>
        <form action="." className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter first name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-white">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter last name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-white">
              Your Number:
            </label>
            <input
              type="text"
              id="number"
              placeholder="Enter number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* <div>
            <label htmlFor="dob" className="block text-sm font-medium text-white">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-white">
              Number of Guests:
            </label>
            <input
              type="text"
              id="guests"
              placeholder="Enter number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="event" className="block text-sm font-medium text-white">
              Type of Event:
            </label>
            <input
              type="text"
              id="event"
              placeholder="Enter event type"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div> */}
          <div className="col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="col-span-2 w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </section>
    </>
  );
}

export default ContactPage;