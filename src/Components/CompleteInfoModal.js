// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const CompleteInfoModal = ({ isVisible, onClose, orderId }) => {
//     const [users, setUsers] = useState([]);

//     const fetchUsers = useCallback(async () => {
//         try {
//             const response = await axios.post('/completeInfo', { order_id: orderId });
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     }, [orderId]);

//     useEffect(() => {
//         if (isVisible) {
//             fetchUsers();
//         }
//     }, [isVisible, fetchUsers]);

//     if (!isVisible) return null;

//     // Utility function to format the date
//     const formatDate = (isoDate) => {
//         const date = new Date(isoDate);
//         const day = date.getDate().toString().padStart(2, '0');
//         const month = (date.getMonth() + 1).toString().padStart(2, '0');
//         const year = date.getFullYear();
//         return `${day}-${month}-${year}`;
//     };

//     return (
//         <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
//             <div className="mx-auto mt-10 p-6 bg-white rounded-md shadow-md w-[95%] -mb-[60px]">
//                 <h2 className="text-2xl font-bold mb-6 text-center">User Info</h2>
//                 <button onClick={onClose} className="bg-blue-500 text-white p-2 rounded-md">
//                     Back to Page
//                 </button>
//                 <table className="min-w-full bg-white">
//                     <thead>
//                         <tr>
//                             {['Name', 'Email', 'Phone', 'Pickup Date', 'Pickup Time', 'Pickup Address', 'Drop Address', 'Order Id', 'Status', 'Purpose'].map((heading, idx) => (
//                                 <th key={idx} className="py-2">{heading}</th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map(user => (
//                             <tr key={user.id}>
//                                 <td className="py-2">{user.name}</td>
//                                 <td className="py-2">{user.email}</td>
//                                 <td className="py-2">{user.phone}</td>
//                                 <td className="py-2">{formatDate(user.pickup_date)}</td>
//                                 <td className="py-2">{user.pickup_time}</td>
//                                 <td className="py-2">{user.pickup_address}</td>
//                                 <td className="py-2">{user.drop_address}</td>
//                                 <td className="py-2">{user.order_id}</td>
//                                 <td className="py-2">{user.status==null?'Order Requested':user.status}</td>
//                                 <td className="py-2">{user.purpose}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default CompleteInfoModal;

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const CompleteInfoModal = ({ isVisible, onClose, orderId }) => {
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        try {
            const response = await axios.post('/completeInfo', { order_id: orderId });
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }, [orderId]);

    useEffect(() => {
        if (isVisible) {
            fetchUsers();
        }
    }, [isVisible, fetchUsers]);

    if (!isVisible) return null;

    // Utility function to format the date
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
            <div className="mx-auto mt-10 p-6 bg-white rounded-md shadow-md w-[30%] -mb-[60px]">
                <h2 className="text-2xl font-bold mb-6 text-center">User Info</h2>
                <button onClick={onClose} className="bg-blue-500 text-white p-2 rounded-md mb-4">
                    Back to Page
                </button>
                <div className="flex justify-center items-center">
                    {users.map(user => (
                        <div key={user.id} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold mb-2">{user.name}</h3>
                            <p><span className="font-semibold">Email:</span> {user.email}</p>
                            <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                            <p><span className="font-semibold">Pickup Date:</span> {formatDate(user.pickup_date)}</p>
                            <p><span className="font-semibold">Pickup Time:</span> {user.pickup_time}</p>
                            <p><span className="font-semibold">Pickup Address:</span> {user.pickup_address}</p>
                            <p><span className="font-semibold">Drop Address:</span> {user.drop_address}</p>
                            <p><span className="font-semibold">Order ID:</span> {user.order_id}</p>
                            <p><span className="font-semibold">Status:</span> {user.status == null ? 'Order Requested' : user.status}</p>
                            <p><span className="font-semibold">Purpose:</span> {user.purpose}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompleteInfoModal;

