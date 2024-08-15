import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StatusModal from './StatusModal'; // Import the modal component
import CompleteInfoModal from './CompleteInfoModal';
import { AuthContext } from './context/AuthContext'; // Import AuthContext

const AdminDashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [selectedOrderId1, setSelectedOrderId1] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { logout } = useContext(AuthContext); // Use the logout function from AuthContext
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    useEffect(() => {
        fetchUsers();
    }, [searchQuery]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/users');
            const filteredUsers = response.data.filter(user =>
                user.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setUsers(filteredUsers);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const openModal = (orderId) => {
        setSelectedOrderId(orderId);
        setModalIsOpen(true);
    };

    const openModal1 = (orderId) => {
        setSelectedOrderId1(orderId);
        setShowModal1(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedOrderId(null);
    };

    const handleUpdate = () => {
        fetchUsers(); // Refresh the user data after updating an order
    };

    // Utility function to format the date
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = users.slice(firstIndex, lastIndex);
    const npage = Math.ceil(users.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const renderPagination = () => {
        if (npage <= 6) {
            return numbers.map((n) => (
                <button
                    key={n}
                    href="#"
                    className={`bg-[white] text-black px-3 border p-1 ${currentPage === n ? 'font-bold' : ''}`}
                    onClick={() => changeCPage(n)}
                >
                    {n}
                </button>
            ));
        } else {
            const firstThree = numbers.slice(0, 3);
            const last = numbers[numbers.length - 1];
            return (
                <>
                    {firstThree.map((n) => (
                        <button
                            key={n}
                            href="#"
                            className={`bg-[white] text-black px-3 border p-1 ${currentPage === n ? 'font-bold' : ''}`}
                            onClick={() => changeCPage(n)}
                        >
                            {n}
                        </button>
                    ))}
                    <span className='bg-[white] text-black px-3 border p-1 '>. . .</span>
                    <button
                        href="#"
                        className={`bg-[white] text-black px-3 border p-1 ${currentPage === last ? 'font-bold' : ''}`}
                        onClick={() => changeCPage(last)}
                    >
                        {last}
                    </button>
                </>
            );
        }
    };

    return (
        <div>
            <div className='w-[100%] flex justify-center p-5'>
                <div className='flex justify-center items-center lg:w-[80%]'>
                    <div className="w-[165px] px-2 pb-3 pt-2 mx-2 text-[#d81f47] border-[1px] border-[#d81f47] rounded-full flex items-center justify-center mb-[20px]">
                        <button className="px-5 font-medium" onClick={logout}>Admin Logout</button>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-3 p-6 bg-white rounded-md shadow-md w-[95%] -mb-[60px] lg:h-[820px] mb-5">
                <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>
                <div className="mb-4 w-[200px]">
                    <input
                        type="text"
                        placeholder="Search by Name"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="p-2 border rounded-md w-full border-[black]"
                    />
                </div>
                <div className='h-[600px]'>
                    <table className="min-w-full bg-white ">
                        <thead>
                            <tr>
                                {['Date','Name', 'Email', 'Pickup Date', 'Order Id', 'Actions'].map((heading, idx) => (
                                    <th key={idx} className="py-2">{heading}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {records.map(user => (
                                <tr key={user.id} className='text-center'>
                                    <td className="py-2">{formatDate(user.entry_date)}</td>
                                    <td className="py-2">{user.name}</td>
                                    <td className="py-2">{user.email}</td>
                                    <td className="py-2">{formatDate(user.pickup_date)}</td>
                                    <td className="py-2">{user.order_id}</td>
                                    <td className="py-2">{user.status==null?'Order Requested':user.status}</td>
                                    <td className="py-2">
                                        <button
                                            onClick={() => openModal(user.order_id)}
                                            className="bg-blue-500 text-white p-2 mr-2 rounded-md"
                                        >
                                            Update Status
                                        </button>
                                        <button
                                            onClick={() => openModal1(user.order_id)}
                                            className="bg-red-500 text-white p-2 rounded-md"
                                        >
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='flex justify-center items-center mt-5'>
                    <button href="#" className='bg-[#d81f47] text-white p-1 px-2 rounded-s-lg' onClick={prePage}>Prev</button>
                    {renderPagination()}
                    <button href="#" className='bg-[#d81f47] text-white p-1 px-2 rounded-e-lg' onClick={nextPage}>Next</button>
                </div>

                <StatusModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    orderId={selectedOrderId}
                    onUpdate={handleUpdate}
                    isVisible={showModal} onClose={() => setShowModal(false)}
                />
                <CompleteInfoModal
                    orderId={selectedOrderId1}
                    isVisible={showModal1} onClose={() => setShowModal1(false)}
                />
            </div>
        </div>
    );

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function changeCPage(id) {
        setCurrentPage(id);
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }
};

export default AdminDashboard;
