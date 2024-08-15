import React, { useState } from 'react';
import axios from 'axios';

import Infobar from "./Infobar";
import InfobarMob from "./Infobar_mob";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UserForm = () => {
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        pickup_date: '',
        pickup_time: '',
        pickup_address: '',
        drop_address: '',
        purpose: '' // Add purpose to initial form data
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading
        try {
            await axios.post('/user', formData);
            alert('User data submitted successfully');
            handleReset(); // Reset the form data after successful submission
        } catch (error) {
            console.error('Error submitting user data:', error);
            alert('Failed to submit user data');
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    const handleReset = () => {
        setFormData(initialFormData);
    };

    return (
        <div>
            <Infobar />
            <InfobarMob />
            <Navbar />

            <div className='w-[100%] flex justify-center items-center mt-6'>
                <div className="w-[80%] lg:w-[30%] -mb-20 p-6 rounded-md shadow-md bg-[#D81F47] text-white">
                    <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
                    <form onSubmit={handleSubmit}>
                        {['name', 'email', 'phone', 'pickup_address', 'drop_address'].map((field, idx) => (
                            <div key={idx} className="mb-4">
                                <label className="block text-gray-700 text-white">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                <input
                                    type="text"
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="mt-2 p-2 block w-full border rounded-md placeholder-black text-black"
                                    required
                                />
                            </div>
                        ))}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-white">Pickup Date</label>
                            <input
                                type="date"
                                name="pickup_date"
                                value={formData.pickup_date}
                                onChange={handleChange}
                                className="mt-2 p-2 block w-full border rounded-md placeholder-black text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-white">Pickup Time</label>
                            <input
                                type="time"
                                name="pickup_time"
                                value={formData.pickup_time}
                                onChange={handleChange}
                                className="mt-2 p-2 block w-full border rounded-md placeholder-black text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-white">Purpose</label>
                            <select
                                name="purpose"
                                value={formData.purpose}
                                onChange={handleChange}
                                className="mt-2 p-2 block w-full border rounded-md placeholder-black text-black"
                                required
                            >
                                <option value="" disabled>Select purpose</option>
                                <option value="Commercial or Business Use">Commercial or Business Use</option>
                                <option value="Household Goods">Household Goods</option>
                                <option value="Movers and Packers">Movers and Packers</option>
                            </select>
                        </div>
                        <div>
                            <button 
                                type="submit" 
                                className={`w-full p-2 rounded-md mb-5 ${isLoading ? 'bg-gray-500' : 'bg-blue-500'} text-white`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Submitting...' : 'Submit'}
                            </button>
                            <button 
                                type="button" 
                                onClick={handleReset} 
                                className="w-full bg-blue-500 text-white p-2 rounded-md"
                                disabled={isLoading}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserForm;
