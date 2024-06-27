import React from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Card } from "flowbite-react";
import { Footer } from "flowbite-react";
function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar fluid rounded className='ml-10 mr-10'>
        <NavbarBrand href="">
          <img src="https://i.ibb.co/3c47Ccs/Screenshot-2024-06-25-at-9-34-14-AM.png" className="mr-3 h-16 sm:h-20" alt="Flowbite React Logo" />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink className='text-xl font-bold' href="#">
            Home
          </NavbarLink>
          <NavbarLink className='text-xl font-bold' href="#">
            About
          </NavbarLink>
          <NavbarLink className='text-xl font-bold' href="#">Services</NavbarLink>
          <NavbarLink className='text-xl font-bold' href="#">Pricing</NavbarLink>
          <NavbarLink className='text-xl font-bold' href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      {/* Carousel and Contact Section */}
      <div className="flex flex-wrap " >
        {/* Image Section */}
        <div className="w-full md:w-7/10 border-b border-black" style={{ maxHeight: "85vh" }}>
          <img
            src="https://i.ibb.co/mvdqV88/Screenshot-2024-06-25-at-11-33-04-AM.png"
            alt="Large description"
            className="w-full h-full object-cover"
            style={{ maxHeight: 'calc(100vh - 4rem)' }} // Adjust for navbar height if needed
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-3/10 bg-[#f6f2ec] p-8 overflow-auto border-b border-black" style={{ maxHeight: "85vh" }}>
          <h2 className="text-2xl mb-6 p-4">Let's Find Your Dream Properties, Request a Callback</h2>
          <form>
            <div className="mb-6 mt-10">
              <input
                type="text"
                id="fullname"
                className="mt-1 block w-full px-3 py-2 border border-[#dddcdb] rounded-2xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#f6f2ec]"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-[#dddcdb] rounded-2xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#f6f2ec]"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <input
                type="tel"
                id="mobile"
                className="mt-1 block w-full px-3 py-2 border border-[#dddcdb] rounded-2xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#f6f2ec]"
                placeholder="Mobile Number"
              />
            </div>
            <div className="mb-6">
              <select
                id="state"
                className="mt-1 block w-full px-3 py-2 border border-[#dddcdb] rounded-2xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#f6f2ec]"
              >
                <option>Select State</option>
                <option>State 1</option>
                <option>State 2</option>
              </select>
            </div>
            <div className="mb-6">
              <select
                id="city"
                className="mt-1 block w-full px-3 py-2 border border-[#dddcdb] rounded-2xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#f6f2ec]"
              >
                <option>Select City</option>
                <option>City 1</option>
                <option>City 2</option>
              </select>
            </div>
            <div className="mb-6">
              <select
                id="property"
                className="mt-1 block w-full px-3 py-2 border border-[#dddcdb] rounded-2xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#f6f2ec]"
              >
                <option>Select Property</option>
                <option>Property 1</option>
                <option>Property 2</option>
              </select>
            </div>
            <div className="mb-6">
              <select
                id="location"
                className="mt-1 block w-full px-3 py-2 border border-[#dddcdb] rounded-2xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#f6f2ec]"
              >
                <option>Select Location</option>
                <option>Location 1</option>
                <option>Location 2</option>
              </select>
            </div>
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#ffcd73] text-black text-xl py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Schedule a Call
            </button>
          </form>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 mb-20 mt-16 ">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#faa283" }}>HOT PROPERTIES</h2>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">NEWLY LAUNCHED IN FARIDABAD</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Card
            className="max-w-sm shadow-none border-none"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://i.ibb.co/10YBYbg/Screenshot-2024-06-27-at-10-38-03-AM.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Universal Square By Auric
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
            Independent SCO FLOORS Sector 79, Faridabad
            </p>
            <h3 className="text-xl tracking-tight text-gray-900 dark:text-white text-center">
            Starting @45 Lakh*
            </h3>
          </Card>
          <Card
            className="max-w-sm shadow-none border-none"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://i.ibb.co/CKm1hMd/Screenshot-2024-06-27-at-10-38-19-AM.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            MANSHA ORCHID PLOTS
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
            Gated Plot Township Sector 110, Faridabad

            </p>
            <h3 className="text-xl tracking-tight text-gray-900 dark:text-white text-center">
            Starting @45000/sq. yard.*
            </h3>
          </Card>
          <Card
            className="max-w-sm shadow-none border-none"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://i.ibb.co/DgKfqC9/Screenshot-2024-06-27-at-10-38-30-AM.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            
MANSHA AFFORDABLE FLATS
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
            
2BHK & 4BHK Flats Sector 104, Faridabad
            </p>
            <h3 className="text-xl tracking-tight text-gray-900 dark:text-white text-center">
            Starting @31.25 Lakh*
            </h3>
          </Card>
        </div>
      </div>

      {/*2nd Contact section */}
      <div className="bg-[#ffcd73] py-8 rounded-3xl mx-12 sm:mx-20 mb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3 text-left mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-white dark:text-white">
              
              Start Your Property <br /> Purchase Jurney Now! 
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <form className="flex flex-wrap items-center">
              <div className="relative mb-4 mr-4 flex-grow">
                <input
                  type="text"
                  id="fullname"
                  className="block w-full px-4 pt-6 pb-2 border border-gray-100 rounded-3xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder=" "
                />
                <label htmlFor="fullname" className="absolute top-0 left-0 px-4 pt-2 text-gray-700 text-sm">
                  Full Name
                </label>
              </div>
              <div className="relative mb-4 mr-4 flex-grow">
                <input
                  type="email"
                  id="email"
                  className="block w-full px-4 pt-6 pb-2 border border-gray-100 rounded-3xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder=" "
                />
                <label htmlFor="email" className="absolute top-0 left-0 px-4 pt-2 text-gray-700 text-sm">
                  Email ID
                </label>
              </div>
              <div className="relative mb-4 mr-4 flex-grow">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">+91 |</span>
                  <input
                    type="tel"
                    id="mobile"
                    className="block w-full px-4 pt-6 pb-2 border border-gray-100 rounded-3xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder=" "
                  />
                  <label htmlFor="mobile" className="absolute top-0 left-0 pl-16 pt-2 text-gray-700 text-sm">
                    Mobile Number
                  </label>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="bg-[#ff9d7a] text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    {/*About Us section */}
    <div className="flex flex-wrap">
      {/* Heading */}
      <div className="w-full md:w-3/10 p-8 flex items-center justify-center" style={{ maxHeight: "52vh" }}>
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
      </div>
      {/* Paragraph */}
      <div className="w-full md:w-7/10 bg-[#ffcd73]" style={{ maxHeight: "52vh" }}>
        <p className="text-gray-900 text-md sm:text-2xl p-20">
          Welcome to <span className="font-bold">KAN Properties</span>, your trusted partner in real estate consultancy.
          With years of experience and a deep understanding of the market, we offer personalized, transparent, and professional solutions for all your real estate needs. Whether you're buying, selling, investing, or managing property, our expert team is dedicated to ensuring you achieve your goals with confidence and ease.
          <br />
          At <span className="font-bold">KAN Properties</span>, we pride ourselves on our integrity, expertise, and commitment to excellence. Our tailored services and client-centric approach set us apart, making us your go-to advisor for navigating the complexities of the real estate market.
        </p>
      </div>
    </div>

 {/*Who we are section */}
 <section className="px-8 py-24 mb-8  dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-16">
          Who We Are?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-stretch">
          <div className="flex justify-center">
            <Card href="#" className="max-w-sm h-full bg-[#ffcd73]">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Our Mission
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Our mission is to provide our clients with the highest level of service and to become their most trusted advisor in all real estate matters. We strive to create lasting relationships by ensuring every interaction is marked by integrity and dedication to transparency, achieving the best outcomes for our clients. Residential and Commercial Sales: Whether you are buying your first home, upgrading to a larger space, or investing in commercial properties, we have the expertise to guide you. Property Management: Our services are designed to maximize the value of your investment while ensuring your property is well-maintained.
              </p>
            </Card>
          </div>
          <div className="flex justify-center">
            <Card href="#" className="max-w-sm h-full bg-[#ffcd73]">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our Services
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
               <b> Residential and Commercial Sales:</b>
Whether you are buying your first home, upgrading to a larger space, or
investing in commercial properties, we have the expertise to guide you. 
<br />
<b>Property Management:</b> Our services are designed to maximise the value of
your investment while ensuring your property is well-maintained.
                    </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

     {/* Featured Section */}
     <div className="container mx-auto px-4 mb-20 ">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4" >WHAT WE OFFER</h2>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Featured Properties</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Card
            className="max-w-sm shadow-none border-none"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://i.ibb.co/gDSMWs4/Screenshot-2024-06-27-at-11-46-53-AM.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Shop-Cum Office
      </h5>
      <button
        type="submit"
        className="block mx-auto bg-[#ffcd73] text-black text-xl py-2 px-6 rounded-3xl hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        
      >
        Enquire Now
      </button>
           
           
          </Card>
          <Card
            className="max-w-sm shadow-none border-none"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://i.ibb.co/X7PMPJH/Screenshot-2024-06-27-at-11-47-03-AM.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Residential Plots
      </h5>
      <button
        type="submit"
        className="block mx-auto bg-[#ffcd73] text-black text-xl py-2 px-6 rounded-3xl hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        
      >
        Enquire Now
      </button>
          </Card>
          <Card
            className="max-w-sm shadow-none border-none"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://i.ibb.co/gPG6ZZc/Screenshot-2024-06-27-at-11-47-12-AM.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Affordable Flats
      </h5>
      <button
        type="submit"
        className="block mx-auto bg-[#ffcd73] text-black text-xl py-2 px-6 rounded-3xl hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        
      >
        Enquire Now
      </button>
          </Card>
        </div>
      </div>

    {/* Contact form and Contact us Section */}
    <div className=" flex flex-col md:flex-row bg-gray-100">
      {/* Contact Form Side */}
      <div className="w-full md:w-1/2 bg-[#ffcd73] flex flex-col px-10 sm:px-0  py-12">
        <h2 className="text-4xl font-bold mb-8 mx-auto">Have Any Question?</h2>
        <div className="w-full max-w-lg mx-auto">
          <form className=''>
            <div className="mb-6">
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-white rounded-3xl border border-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffcd73] focus:border-transparent sm:text-sm" 
                placeholder="Full Name" 
              />
            </div>
            <div className="mb-6">
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-white rounded-3xl border border-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffcd73] focus:border-transparent sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <input 
                type="tel" 
                id="mobile" 
                className="w-full px-4 py-3 bg-white rounded-3xl border border-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffcd73] focus:border-transparent sm:text-sm"
                placeholder="Your Mobile Number"
              />
            </div>
            <div className="mb-6">
              <textarea 
                id="message" 
                rows="4"
                className="w-full px-4 py-3 bg-white rounded-3xl border border-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffcd73] focus:border-transparent sm:text-sm"
                placeholder="Got something more to say"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#e9825c] text-white py-3 px-6 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Schedule a Meeting
            </button>
          </form>
        </div>
      </div>

      {/* Contact Information Side */}
      <div className="w-full md:w-1/2 bg-white py-12 px-8">
        <h2 className="text-4xl font-bold mb-8 ">Contact Us</h2>
        <p className="text-lg mb-6 ">
          If you would like to know more details or something specific, feel free to contact us. Our site representative will give you a call back.
        </p>
        <div className="text-left">
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p className="mb-2">+91 84475 75752</p>
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="mb-2">info@thekanproperties.com</p>
          <h3 className="text-xl font-bold mb-2">Address</h3>
          <p className="mb-2">Kan Infratech<br />Faridabad, Haryana India</p>
          <h3 className="text-xl font-bold mb-2">Working Hours</h3>
          <p className="mb-2">Monday - Saturday 10:00 AM - 06:00 PM</p>
        </div>
      </div>
    </div>

    {/* Copyright section */}
    <Footer container className='bg-black'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand className='mx-8'
            href="https://flowbite.com"
            src="https://i.ibb.co/x7x4VQG/Screenshot-2024-06-27-at-1-20-25-PM.png"
            alt="Flowbite Logo"
            
          />
          <Footer.Copyright href="#" by="Copyright@KanInfratech| thekanproperties.com.AllRightReserved." year={2024} />
        </div>
       
        
      </div>
    </Footer> 
    </>
  );
}

export default Home;
