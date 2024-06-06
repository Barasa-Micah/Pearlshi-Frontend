import React from 'react';

function ContactPage() {
  return (
    <section>
    <div className="md:flex items-start mt-[120px] w-[90%] mx-auto bg-[#135a70] mb-10">
      {/* Image Section */}
      <div className="basis-[55%] h-[300px] md:h-[489px] bg-gray-200 flex justify-center items-center relative ">
        <img
          src="https://images.unsplash.com/photo-1513618364580-fe1596762e8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact Us"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-lg p-6">
        <h1 className="font-bold text-2xl underline mb-4 text-white">CONTACT US</h1>
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
  );
}

export default ContactPage;