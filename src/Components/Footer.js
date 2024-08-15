import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0E2334] text-white py-10 lg:mt-[200px] mt-[150px]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:w-[80%] lg:mt-[100px]">
                <div className="flex flex-wrap justify-around lg:pb-20">
                    <div className="w-full md:w-1/4 lg:w-[230px] mb-8 md:mb-0 flex flex-col justify-center lg:items-start lg:me-[50px]">
                        <p className="mb-4 lg:w-[250px] lg:mt-[10px] lg:mb-[30px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                        </p>
                        <div className="flex space-x-5">
                            <a href="/" className="text-red-500 bg-[#D81F47] flex justify-center items-center border border-[#D81F47] rounded-full h-[35px] w-[35px] lg:h-[40px] lg:w-[40px]">
                                <i className="fab fa-facebook-f text-white"></i>
                            </a>
                            <a href="/" className="text-red-500 bg-[#D81F47] flex justify-center items-center border border-[#D81F47] rounded-full h-[35px] w-[35px] lg:h-[40px] lg:w-[40px]">
                                <i className="fab fa-instagram text-white"></i>
                            </a>
                            <a href="/" className="text-red-500 bg-[#D81F47] flex justify-center items-center border border-[#D81F47] rounded-full h-[35px] w-[35px] lg:h-[40px] lg:w-[40px]">
                                <i className="fab fa-twitter text-white"></i>
                            </a>
                        </div>
                    </div>

                    {/* Mobile View  */}
                    <div className='w-full flex justify-between items-top md:hidden'>
                        <div className="w-full md:w-1/4 mb-8 md:mb-0 ">
                            <h3 className="font-bold mb-4 text-[#D81F47] ">USEFUL LINK</h3>
                            <ul className='space-y-3'>
                                <li><a href="/" className="hover:text-red-500">About</a></li>
                                <li><a href="/" className="hover:text-red-500">Services</a></li>
                                <li><a href="/" className="hover:text-red-500">Knowledge</a></li>
                                <li><a href="/" className="hover:text-red-500">Track AWB</a></li>
                            </ul>
                        </div>
                        <div className="w-[50%] md:w-1/4 mb-8 md:mb-0">
                            <h3 className="font-bold mb-4 text-[#D81F47]">COMPANY</h3>
                            <ul className='space-y-3'>
                                <li><a href="/" className="hover:text-red-500">Team</a></li>
                                <li><a href="/" className="hover:text-red-500">Career</a></li>
                                <li><a href="/" className="hover:text-red-500">Blog</a></li>
                                <li><a href="/" className="hover:text-red-500">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* mobile View End */}

                    <div className="w-full md:w-1/4 mb-8 md:mb-0 md:block hidden">
                        <h3 className="font-bold mb-4 text-[#D81F47] ">USEFUL LINK</h3>
                        <ul className='space-y-3'>
                            <li><a href="/" className="hover:text-red-500">About</a></li>
                            <li><a href="/" className="hover:text-red-500">Services</a></li>
                            <li><a href="/" className="hover:text-red-500">Knowledge</a></li>
                            <li><a href="/" className="hover:text-red-500">Track AWB</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-8 md:mb-0 md:block hidden">
                        <h3 className="font-bold mb-4 text-[#D81F47]">COMPANY</h3>
                        <ul className='space-y-3'>
                            <li><a href="/" className="hover:text-red-500">Team</a></li>
                            <li><a href="/" className="hover:text-red-500">Career</a></li>
                            <li><a href="/" className="hover:text-red-500">Blog</a></li>
                            <li><a href="/" className="hover:text-red-500">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 mb-8 md:mb-0 space-y-3">
                        <h3 className="font-bold mb-4 text-[#D81F47]">CONTACT</h3>
                        <p className="mb-4"><i className="fas fa-map-marker-alt text-[#D81F47] me-3"></i> Sylhet 3100, Bangladesh</p>
                        <p className="mb-4"><i className="fas fa-phone text-[#D81F47] me-3"></i><a href="tel:+8801714457298" className="hover:text-red-500">+8801714457298</a></p>
                        <p className="mb-4"><i className="far fa-envelope text-[#D81F47] me-3"></i> <a href="mailto:hello@riazadarif.com" className="hover:text-red-500">hello@riazadarif.com</a></p>
                        <p className="mb-4"><i className="far fa-clock text-[#D81F47] me-3"></i>Sun-Mon: 08:00 - 22:00</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center flex lg:flex-row flex-col justify-between items-center">
                    <p>Developed by Riaz Arif.</p>
                    <a href="/" className="hover:text-red-500"><i className="fas fa-arrow-circle-up text-[#D81F47] me-1"></i>Back To Top</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
