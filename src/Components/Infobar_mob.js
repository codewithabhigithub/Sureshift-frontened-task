import React from 'react';

const InfoBar = () => {
    return (
        <div className="bg-[#d81f47] text-white py-2 md:hidden">
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <div className="flex items-center m-auto space-x-4 text-sm">
                    <a href="mailto:hello@riaadarif.com" className="flex items-center space-x-1">
                        <i className="fas fa-envelope"></i>
                        <span>hello@riaadarif.com</span>
                    </a>
                    <a href="tel:+8801714457298" className="flex items-center space-x-1">
                        <i className="fas fa-phone"></i>
                        <span>+8801714457298</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default InfoBar;
