import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; 
  };

  return (
    <>
      <Helmet>
        <title>Booking | Pearlshi Cateres & Event Planners</title>
      </Helmet>
      <body className='bg-[#F5F2FB] mt-[120px]'>
        <section
          className="bg-center relative bg-cover bg-no-repeat bg-fixed w-full lg:h-[350px]"
          style={{backgroundImage: "url(https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
        >
          <div className='absolute top-0 w-full h-full bg-[#00ADEF] bg-opacity-[50%] font-Mons'>
            <div className='absolute bottom-[25%] left-[4%]'>
              <h1 className='text-7xl font-bold text-white'>Book Now</h1>
              <p className='text-gray-200 text-sm w-[60%]'>Transform your vision into a spectacular reality with our bespoke catering and event planning services, where every detail is crafted to perfection, ensuring your event is as unique and memorable as you are</p>
            </div>
          </div>
        </section>
        <section className='bg-[#135A70] w-[95%] mx-auto mt-[100px] md:flex justify-center items-center gap-3 p-4 mb-10'>
          <div className='text-white basis-[40%]'>
            <h1 className='font-["Inter"] text-3xl'>Book With Us</h1>
            <p className='text-emerald-200'>Elevate your next celebration to unforgettable heights with our premier catering and event planning services, where exquisite cuisine and impeccable attention to detail come together to create magical moments that will leave your guests in awe. Book your event with us today and let’s turn your vision into a spectacular reality!</p>
          </div>
            
          {/* Book Now Form */}
          <div className='basis-[55%] bg-white p-3'>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="6152af76-4346-403d-a7b3-fdcfceaf5455"></input>
              <div className='flex flex-wrap gap-5'>
                <div className='text-md font-["Inter"]'>
                  <label>First Name</label>
                  <input type='text' name='booker_fname' placeholder='Enter First Name' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Last Name</label>
                  <input type='text' name='booker_lname' placeholder='Enter Last Name' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Phone Number</label>
                  <input type='text' name='booker_number' placeholder='Phone Number' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Email Address</label>
                  <input type='email' name='booker_email' placeholder='Enter Email Address' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
              </div>
              <label id='package'>Choose a Package</label>
              <select id="package" className='w-[300px] py-2 px-2 mt-3'>
                <option value="event_name" className='w-[300px p-3]'>Event Planning</option>
                <option value="Caterers">Caterers</option>
                <option value="Both">Both</option>
              </select>
              <div className='flex flex-wrap gap-5'>
                <div className='text-md font-["Inter"]'>
                  <label>Type of Event</label>
                  <input type='text' name='event_name' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Number of Guests</label>
                  <input type='number' name='guests' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Date of Event</label>
                  <input type='date' name='event_date' min={getTodayDate()} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Time of Event</label>
                  <input type='time' name='event_time' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Location of Event</label>
                  <input type='text' name='location' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Description</label>
                  <textarea type="text" name='description' placeholder='Describe Your Event...' rows="6" className='bg-[#F5F2FB] p-2 block w-[400px]' required/>
                </div>
              </div>
              <input type='submit' value="Book Now" className='w-[70%] flex flex-col items-center justify-center my-5 py-3 bg-[#135A70] text-white text-xl  font-["Inter"] hover:cursor-pointer' />
            </form>
          </div>
        </section>
      </body>
    </>
  )
}

export default Booking;
