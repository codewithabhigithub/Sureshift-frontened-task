import React, { useState, useContext } from 'react';
import { AuthContext } from './context/AuthContext';

import Infobar from "./Infobar";
import InfobarMob from "./Infobar_mob";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div>
      <Infobar />
      <InfobarMob />
      <Navbar />
      <div className='w-[100%] flex justify-center mt-6 lg:mt-[50px] -mb-20 lg:-mb-[150px]'>
        <div className="mx-auto p-6 bg-[white] rounded-md shadow-md text-black lg:w-[20%]">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-black">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 p-2 block w-full border rounded-md text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 p-2 block w-full border rounded-md text-black"
                required
              />
            </div>
            {error && <p className="text-red-500 mb-4 text-center font-bold">{error}</p>}
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
