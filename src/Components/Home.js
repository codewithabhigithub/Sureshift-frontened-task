import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import banner from './img/banner_img_1.svg'
import Delivery_Man from './img/Delivery_Man.webp'
import Faster from './img/Faster.svg'
import Best_Courier from './img/Best_Courier.svg'
import Best_Price from './img/Best_Price.svg'

import Infobar from "./Infobar";
import InfobarMob from "./Infobar_mob";
import Navbar from "./Navbar";
import Footer from "./Footer";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    name: "ANNA LEE",
    role: "FOOD SHOP",
    image: "https://via.placeholder.com/50",
    rating: 5
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    name: "ANNA LEE",
    role: "FOOD SHOP",
    image: "https://via.placeholder.com/50",
    rating: 5
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    name: "ANNA LEE",
    role: "FOOD SHOP",
    image: "https://via.placeholder.com/50",
    rating: 5
  },

];

export default function Home() {
  const [awbNumber, setAwbNumber] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setAwbNumber(e.target.value);
  };

  const openModal1 = (awbNumber) => {
    if (!awbNumber) {
      alert('Please enter a valid AWB number');
      return;
    }

    // Validate that the AWB number starts with "SSON" and is exactly 20 characters long
    const awbPattern = /^SSON[0-9A-Za-z]{16}$/;
    if (!awbPattern.test(awbNumber)) {
      alert('Invalid AWB number format. The AWB number should start with "SSON" and be 20 characters long.');
      return;
    }

    // If the AWB number is valid, proceed with the redirection
    console.log(`AWB Number: ${awbNumber}`);
    navigate(`/order_track?awb=${awbNumber}`);
  };
  
  return (
    <div >
      <Infobar />
      <InfobarMob />
      <Navbar />
      <div className='w-[100%] flex justify-center mt-6'>
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 lg:w-[80%]">
          <div className="lg:w-1/2 text-center lg:text-left w-[350px]">
            <h1 className="lg:text-6xl text-3xl font-bold mb-4">BEST LOGISTIC DELIVERY SERVICE IN TOWN</h1>
            <p className="text-lg mb-6 text-[#7f7e7e] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <a href="/user-form" className="inline-block bg-[#D81F47] text-white py-3 px-8 rounded-lg" >Book Now</a>
          </div>
          <div className="lg:w-[800px] flex justify-center lg:justify-end mt-2">
            <img src={banner} alt="Delivery Service" className="w-full lg:w-[]" />
          </div>
        </div>
      </div>

      {/* <!-- Features Section --> */}
      <div className='w-[100%] flex justify-center mt-6'>
        <section className="bg-white py-12 w-[80%]">
          <div className="container mx-auto flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 p-2">
              <div className="shadow-2xl border-none p-6 border rounded-xl">
                <div className='flex justify-evenly lg:w-[50%] w-[20%]'>
                  <img src={Faster} alt="Delivery Service" className="relative w-full lg:w-1/3" />
                  <h2 className="text-lg lg:text-lg font-bold mb-4 mt-[15px] ml-[15px]">FASTER</h2>
                </div>
                <p className='lg:text-base text-[#7f7e7e] text-xs lg:ml-[102px] ml-[75px] font-medium'>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-2">
              <div className="shadow-2xl border-none p-6 border rounded-xl">
                <div className='flex justify-evenly lg:w-[65%] w-[65%]'>
                  <img src={Best_Courier} alt="Delivery Service" className="relative w-full lg:w-[50px] w-[50px]" />
                  <h2 className="text-lg lg:text-lg font-bold mb-4 mt-[15px] lg:ml-[15px] ml-[20px]">BEST COURIER</h2>
                </div>
                <p className='lg:text-base text-[#7f7e7e] text-xs lg:ml-[95px] ml-[80px] font-medium'>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-2">
              <div className="shadow-2xl border-none p-6 border rounded-xl">
                <div className='flex justify-evenly lg:w-[60%] w-[60%]'>
                  <img src={Best_Price} alt="Delivery Service" className="relative w-full lg:w-[50px] w-[50px]" />
                  <h2 className="text-lg lg:text-lg font-bold mb-4 mt-[15px] lg:ml-[10px] ml-[18px]">BEST PRICE</h2>
                </div>
                <p className='lg:text-base text-[#7f7e7e] text-xs lg:ml-[100px] ml-[82px] font-medium'>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            {/* <div className="w-full md:w-1/3 p-2">
              <div className="shadow-2xl border-none p-6 border rounded-xl">
                <div className='flex justify-evenly lg:w-[65%] w-[85%]'>
                  <img src={Best_Courier} alt="Delivery Service" className="relative w-full lg:w-[50px] w-[35px]" />
                  <h2 className="text-lg lg:text-lg font-bold mb-4 mt-[15px] ml-[15px]">BEST COURIER</h2>
                </div>
                <p className='lg:text-base text-[#7f7e7e] text-xs lg:ml-[95px] ml-[65px] font-medium'>Lorem ipsum dolor sit amet</p>
              </div>
            </div> */}
            {/* <div className="w-full md:w-1/3 p-2">
              <div className="shadow-2xl border-none p-6 border rounded-xl">
                <div className='flex justify-evenly lg:w-[60%] w-[75%]'>
                  <img src={Best_Price} alt="Delivery Service" className="relative w-full lg:w-[50px] w-[35px]" />
                  <h2 className="text-lg lg:text-lg font-bold mb-4 mt-[15px] ml-[10px]">BEST PRICE</h2>
                </div>
                <p className='lg:text-base text-[#7f7e7e] text-xs lg:ml-[100px] ml-[65px] font-medium'>Lorem ipsum dolor sit amet</p>
              </div>
            </div> */}
          </div>
        </section>
      </div>

      {/* <!-- Features Section --> */}
      <div className='w-[100%] flex justify-center mt-6'>
        <div className="py-12 bg-[#D81F47] text-white w-[80%] rounded-xl">
          <div className="mx-auto flex flex-col lg:flex-row lg:justify-around items-center lg:space-x-12 -mb-4 lg:w-[80%] ">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-4 px-4">TRACK YOUR PACKET</h1>
              <p className="mb-6 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="lg:w-[650px] flex flex-col lg:flex-row justify-around lg:justify-around">
            <input
                type="text"
                className="bg-transparent p-2 pl-5 lg:pl-5 lg:w-[380px] lg:me-8 mb-4 w-[250px] border border-[white] rounded-full placeholder-white"
                placeholder="AWB Number"
                value={awbNumber}
                onChange={handleInputChange}
              />
              <button
                onClick={() => openModal1(awbNumber)}
                className="m-auto mb-4 bg-[#FFFFFF] text-[#D81F47] py-2 w-[150px] lg:w-[170px] lg:py-3 lg:px-10 rounded-full mb-4 font-bold"
              >Search 
              </button>
              </div>
          </div>
        </div>
      </div>

      {/* <!-- Special Occasion Section --> */}
      <div className='w-[100%] flex justify-center mt-[60px] lg:mt-[75px] '>
        <div className=" relative container mx-auto flex flex-col justify-between lg:ml-8 p-2 lg:mr-5 lg:flex-row lg:space-x-12 lg:w-[80%] ">
          <div className="lg:w-auto flex lg:justify-center">
            {/* Remove this below image in the mobile view */}
            <img src={Delivery_Man} alt="Delivery Service" className="relative w-full lg:w-3/4 md:block hidden" />
          </div>
          <div className=" lg:w-[350px] w-[200px] flex justify-center lg:justify-center lg:absolute lg:z-20 lg:top-1/2 lg:-translate-y-1/2 lg:ml-[500px] ml-[50px]">
            <img src={Delivery_Man} alt="Delivery Service" className="relative w-full lg:w-3/4 lg:-mr-[450px] -mb-[25px] lg:-mt-[35px] ml-[170px] lg:-ml-[50px]" />
          </div>
          <div className="lg:w-[60%] text-center text-white lg:text-left mt-8 lg:mt-[28.5px] bg-[#0C1E2D] lg:p-[50px] p-[25px] lg:py-[70px] lg:ps-[120px] rounded-xl" >
            <h2 className="text-4xl font-bold mb-4">DELIVERY FOR ANY SPECIAL OCCASION</h2>
            <p className="text-lg mb-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="/" className="inline-block bg-[#D81F47] text-white py-3 px-8 rounded-full" >Learn More</a>
          </div>
        </div>
      </div>

      {/* <!-- Testinomial --> */}
      <div className="w-[100%] flex justify-center mt-[80px] lg:mt-[100px]">
        <div className="lg:w-[80%] mx-auto px-4 sm:px-6 flex flex-col lg:flex-col justify-center items-center">
          <div className="lg:text-center text-center flex flex-col lg:flex-col justify-center lg:w-[55%] ">
            <h2 className="lg:text-4xl text-3xl font-bold mb-3">WHAT THEY SAY ABOUT US</h2>
            <p className="text-lg text-[#7f7e7e] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>

          <div className="mt-10 lg:mt-[60px]">
            <div className="flex flex-wrap -mx-4 ">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <p className="text-gray-800 mb-6 font-bold text-lg">{testimonial.text}</p>
                    <img
                      className="w-16 h-16 rounded-full mx-auto mb-4"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <h5 className="text-xl font-semibold font-bold">{testimonial.name}</h5>
                    <p className="text-gray-400 font-bold">{testimonial.role}</p>
                    <div className="mt-4">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 inline-block text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.389 2.462a1 1 0 00-.364 1.118l1.286 3.965c.3.921-.755 1.688-1.538 1.118l-3.389-2.462a1 1 0 00-1.175 0l-3.389 2.462c-.783.57-1.838-.197-1.538-1.118l1.286-3.965a1 1 0 00-.364-1.118L2.69 9.393c-.783-.57-.381-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.286-3.966z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Partner Section --> */}
      <div className="w-[100%] flex justify-center lg:mt-[80px] mt-[60px]">
        {/* <div className="bg-white py-12"> */}
        <div className="w-[80%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex lg:flex-row flex-col justify-center items-center">
          <div className='lg:w-[450px] text-center lg:text-left'>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">OUR PARTNER</h2>
            <p className="mt-4 max-w-2xl text-xl lg:mx-auto text-[#7f7e7e] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center ml-[20px]">
            <div className="flex justify-center items-center p-4">
              <img className="h-16" src="https://via.placeholder.com/150x50?text=BALANCE" alt="Balance" />
            </div>
            <div className="flex justify-center items-center p-4">
              <img className="h-16" src="https://via.placeholder.com/150x50?text=MEGAN" alt="Megan" />
            </div>
            <div className="flex justify-center items-center p-4">
              <img className="h-16" src="https://via.placeholder.com/150x50?text=Urban" alt="Urban" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* <!-- Features Section --> */}
      <div className='w-[100%] flex justify-center mt-[80px] lg:mt-[120px]'>
        <div className="py-12 p-[5px] lg:py-[90px] bg-[#D81F47] text-white w-[80%] rounded-xl">
          <div className="mx-auto flex flex-col lg:flex-row lg:justify-between items-center lg:space-x-12 -mb-4 lg:w-[80%]">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 px-4">LET'S JOIN WITH US</h1>
              <p className="text-sm lg:text-lg mb-6 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit telus, luctus nec ullamcorper mattis, pulvinar depibus leo.</p>
            </div>
            <button className="m-auto text-sm lg:text-lg bg-[#FFFFFF] text-[#D81F47] py-2 w-[120px] lg:w-[150px] lg:py-4 py-3 rounded-full font-bold lg:mb-[50px] mb-[18px]">JOIN NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
