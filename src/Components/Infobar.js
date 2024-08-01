import React from 'react';

const InfoBar = () => {
  return (
    <div className='w-[100%] bg-[#d81f47] py-2 flex justify-center md:block hidden'>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 text-white w-[80%]">
        <div className="flex items-center space-x-2">
          <i className="fas fa-info-circle"></i>
          <span>INFO: Covid-19 information update!</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="mailto:hello@riaadarif.com" className="flex items-center space-x-1">
            <i className="fas fa-envelope"></i>
            <span>hello@riaadarif.com</span>
          </a>
          <a href="tel:+8801714457298" className="flex items-center space-x-1">
            <i className="fas fa-phone"></i>
            <span>+8801714457298</span>
          </a>
          <div className="flex items-center space-x-1">
            <i className="fas fa-clock"></i>
            <span>Sun - Mon: 08:00 - 22:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
