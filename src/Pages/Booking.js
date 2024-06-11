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
      <body className='bg-[#F5F2FB] mt-[120px] p-4'>
        <section className='bg-[#135A70] w-[95%] mx-auto mt-[100px] md:flex justify-center items-center gap-3 p-4 '>
          <div className='text-white basis-[40%]'>
            <h1 className='font-["Inter"] text-3xl'>Book With Us</h1>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,.</p>
            {/* <div className='mt-[100px]'>
              <h1 className='text-white text-lg font-["Inter"] my-3'>Our Customers Are Loving Us...</h1>
              <div className='bg-white text-black p-4'>
                <p className='text-center text-sm font-["Inter"]'>"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='w-[90px] h-[90px] mx-auto mt-4'>
                  <img src={require('../Assets/Executive/HeadChef1.jpg')} alt='' className='w-full h-full rounded-full' />
                </div>
                <h1 className='text-center text-header-500 text-lg'>John Muturi</h1>
              </div>
            </div> */}
          </div>


          <div className='basis-[55%] bg-white p-3'>
            <form action="https://api.web3forms.com/submit" method="POST" className=''>
            <input type="hidden" name="access_key" value="6152af76-4346-403d-a7b3-fdcfceaf5455"></input>
              <div className='flex flex-wrap gap-5'>
                <div className='text-md font-["Inter"]'>
                  <label>First Name</label>
                  <input type='text' name='booker_fname' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Last Name</label>
                  <input type='text' name='booker_lname' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Phone Number</label>
                  <input type='text' name='booker_number' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
                </div>
                <div className='text-md font-["Inter"]'>
                  <label>Email Address</label>
                  <input type='email' name='booker_email' className='block bg-[#F5F2FB] py-2 px-2 w-[300px]'/>
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
                <label>Description</label>
                <textarea type="text" name='description' rows="6" className='bg-[#F5F2FB] block w-[400px]' required/>
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
