import React, { useState, useEffect, useCallback } from 'react';
import Infobar from './Infobar';
import InfobarMob from './Infobar_mob';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function OrderTracking({ orderId }) {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const awbNumber = searchParams.get('awb');

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.post('/completeInfo', { order_id: awbNumber });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }, [awbNumber]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Order Created':
        return 'text-blue-500';
      case 'Order Delivered':
        return 'text-green-500';
      case 'Order On the Way':
        return 'text-yellow-500';
      default:
        return 'text-red-500';
    }
  };

  return (
    <div>
      <Infobar />
      <InfobarMob />
      <Navbar />
      <div className="mx-auto flex flex-col justify-center items-center mt-10 p-6 bg-white rounded-md shadow-md shadow-[gray] lg:w-[60%] w-[80%] -mb-[60px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Order Tracking Info</h2>
        <div>
          {users.map(user => (
            <div key={user.id} className="bg-white shadow-lg shadow-[gray] rounded-lg p-4 mb-4">
              <h3 className="text-lg font-bold mb-2">{user.name}</h3>
              <p className="mb-2"><strong>Email:</strong> {user.email}</p>
              <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
              <p className="mb-2"><strong>Pickup Date:</strong> {user.pickup_date}</p>
              <p className="mb-2"><strong>Pickup Time:</strong> {user.pickup_time}</p>
              <p className="mb-2"><strong>Pickup Address:</strong> {user.pickup_address}</p>
              <p className="mb-2"><strong>Drop Address:</strong> {user.drop_address}</p>
              <p className="mb-2"><strong>Order Id:</strong> {user.order_id}</p>
              <p className={`mb-2 ${getStatusColor(user.status)}`}><strong>Status:</strong> {user.status || 'Order Requested'}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
