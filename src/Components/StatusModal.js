import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

// Configure the modal root element
Modal.setAppElement('#root');

const StatusModal = ({ isOpen, onRequestClose, orderId, onUpdate }) => {
    const [status, setStatus] = useState('');
    const [customStatus, setCustomStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isOpen) {
            setStatus(''); // Clear the Status field when the modal opens
            setCustomStatus(''); // Clear the Custom Status field when the modal opens
            setError('');  // Clear any previous errors
        }
    }, [isOpen]);

    const handleStatusUpdate = async () => {
        setLoading(true);
        try {
            const finalStatus = status === 'Others' ? customStatus : status;
            await axios.post('/status', { order_id: orderId, status: finalStatus });
            alert('Status updated successfully');
            onUpdate(); // Notify parent component to refresh data
            onRequestClose(); // Close the modal
        } catch (error) {
            console.error('Error updating status:', error);
            setError('Failed to update status. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Update Status"
            className="modal"
            overlayClassName="overlay"
        >
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='bg-white w-[20%] p-10 rounded-lg'>
                    <h2 className="text-xl font-bold mb-4 text-center">Update Status</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-black">Order ID</label>
                            <input
                                type="text"
                                value={orderId || ''}
                                readOnly
                                className="mt-2 p-2 block w-full border rounded-md text-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black">Status</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="mt-2 p-2 block w-full border rounded-md text-black"
                            >
                                <option value="">Select</option>
                                <option value="Order Created">Order Created</option>
                                <option value="Order On the Way">Order On the Way</option>
                                <option value="Order Delivered">Order Delivered</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        {status === 'Others' && (
                            <div className="mb-4">
                                <label className="block text-black">Custom Status</label>
                                <input
                                    type="text"
                                    value={customStatus}
                                    onChange={(e) => setCustomStatus(e.target.value)}
                                    className="mt-2 p-2 block w-full border rounded-md text-black"
                                />
                            </div>
                        )}
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <button
                            type="button"
                            onClick={handleStatusUpdate}
                            className="bg-blue-500 text-white p-2 rounded-md"
                            disabled={loading}
                        >
                            {loading ? 'Updating...' : 'Update Status'}
                        </button>
                        <button
                            type="button"
                            onClick={onRequestClose}
                            className="bg-gray-500 text-white p-2 rounded-md ml-4"
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default StatusModal;
