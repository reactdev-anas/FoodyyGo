import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/UseContext';

const CheckOut = () => {
  const [formDetail, setFormDetail] = useState({
    name: '',
    number: '',
    email: '',
    address: '',
    city: ''
  })
  const [showMessage, setShowMessage] = useState(false)

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormDetail({ ...formDetail, [name]: value })
  }
  const { finalDetail, handlePlaceOrder } = useContext(DataContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 1500)
    setFormDetail({
      name: '',
      email: '',
      number: '',
      address: '',
      city: ''
    })
    handlePlaceOrder(finalDetail);

  }


  return (
    <div className='font-[cursive] relative flex flex-col md:flex-row gap-8 justify-center items-center py-10 px-4 bg-gray-50 min-h-screen'>
      {showMessage ? <p className='absolute right-3 top-10 bg-blue-600 text-white py-1 px-2 rounded'>your order is Placed Successfully ☺️</p> : ''}
      {/* Order Summary */}
      <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6 ">
        <h2 className='text-2xl  mb-4 text-center border-b pb-2'>Order Summary</h2>

        <div className="space-y-4 text-gray-700">
          <div className='flex justify-between'>
            <span>Total Items:</span>
            <span>{finalDetail?.cartItems?.length} {finalDetail?.cartItems?.length > 1 ? "Items" : "Item"}</span>
          </div>

          <div className='flex justify-between'>
            <span>Subtotal:</span>
            <span>₹ {finalDetail?.price}</span>
          </div>

          <div className='flex justify-between'>
            <span>Delivery Charges:</span>
            <span className='text-blue-600 '>FREE</span>
          </div>

          <div className='flex justify-between'>
            <span>Shipping Charges:</span>
            <span className='text-blue-600 '> ₹ 0 </span>
          </div>

          <div className='flex justify-between font-semibold text-lg border-t pt-4'>
            <span>Total Payable:</span>
            <span className='text-blue-700'>₹ {finalDetail?.price}</span>
          </div>
        </div>
      </div>

      {/* Billing Form */}
      <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
        <h2 className='text-2xl  mb-4 text-center border-b pb-2'>Billing Information</h2>

        <form className='space-y-4' onSubmit={(e) => {
          handleSubmit(e); // 
        }}>
          <input
            type="text"
            value={formDetail.name}
            name='name'
            placeholder='Full Name'
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type="number"
            value={formDetail.number}
            name='number'
            required
            onChange={handleChange}
            placeholder='Phone Number'
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type="email"
            value={formDetail.email}
            name='email'
            onChange={handleChange}
            placeholder='Email Address'
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type="text"
            required
            value={formDetail.address}
            name='address'
            placeholder='Full Address'
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input
            type="text"
            value={formDetail.city}
            onChange={handleChange}
            name='city'
            required
            placeholder='City'
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />

          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mt-4 transition duration-200'
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
