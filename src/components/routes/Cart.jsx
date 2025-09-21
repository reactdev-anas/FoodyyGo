import React, { useContext } from 'react';
import { DataContext } from '../context/UseContext';
import { Link } from 'react-router';

const Cart = () => {
  const {
    cartItems,
    handleRemoveDish,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    price,
    handleProceedToCheckOut
  } = useContext(DataContext);

  return (
    <div className='p-6 font-[cursive] bg-gray-100 min-h-screen'>
      <h2 className='text-3xl  mb-6 text-center text-gray-800'>🛒 Cart Dishes</h2>

      <div className='space-y-6 max-w-4xl mx-auto'>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div
              key={index}
              className='flex flex-col md:flex-row gap-6 items-start bg-white p-4 md:p-6 rounded-lg shadow-md'
            >
              {/* Image Section with its own background */}
              <div className='bg-gray-200 p-3 rounded-md w-full  md:w-60 flex justify-center'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='h-50  object-cover rounded-md'
                />
              </div>

              {/* Details Section */}
              <div className='flex-1 bg-yellow-100 p-5 rounded-md self-stretch w-full'>
                <h3 className='text-xl  text-gray-800 mb-2'>{item.title}</h3>
                <p className='text-gray-700 mb-2'>💰 Price: ₹{item.price}</p>

                {/* Quantity Controls */}
                <div className='flex items-center gap-3 mb-4'>
                  <button
                    onClick={() => handleDecreaseQuantity(index)}
                    className='bg-gray-300 px-3 py-1 cursor-pointer rounded hover:bg-gray-400'
                  >
                    -
                  </button>
                  <span className='text-lg '>{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(index)}
                    className='bg-gray-300 px-3 py-1 rounded cursor-pointer hover:bg-gray-400'
                  >
                    +
                  </button>
                </div>

                <p className='mb-4 text-gray-700'>
                  📂 Category: <span >{item.category}</span>
                </p>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveDish(index)}
                  className='bg-red-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-red-600 transition duration-200'
                >
                  🗑️ Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-600 mt-10 text-lg'>No dishes found.</p>
        )}
      </div>

      {/* Total Price */}
      {price > 0 && (
        <div className='mt-8 text-xl  flex justify-between items-center max-w-4xl mx-auto text-green-700 '>
          <span className='ml-2'>Total Price: ₹ {price}</span>
          <Link to='/checkOut'>
           <button  className={`border-1 bg-blue-500 text-white border-gray-500 rounded my-2 mr-3 cursor-pointer py-1 px-2 transition ease-in-out transform duration-100 hover:bg-blue-600`} onClick={()=> handleProceedToCheckOut({cartItems,price})}>Proceed to CheckOut</button>
         </Link>
        </div>
      )}
      {/* checkout page */}
   
       
    </div>
  );
};

export default Cart;


