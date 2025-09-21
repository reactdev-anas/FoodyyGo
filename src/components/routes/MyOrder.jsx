
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const MyOrder = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
  const currentUser = JSON.parse(sessionStorage.getItem('loginDetail'));

  if (!currentUser || !currentUser.email) {
    console.warn("No user logged in");
    setOrderList([]);
    return;
  }

  const allOrders = JSON.parse(localStorage.getItem('orderDetail')) || {};
  const userOrders = allOrders[currentUser.email] || [];

  console.log("Loaded Orders for user:", currentUser.email, userOrders);
  setOrderList(userOrders);
}, []);


  return (
    <div className="min-h-screen bg-gray-100 py-7 px-4 font-[cursive]">
      <h2 className="text-3xl text-center mb-8 text-gray-800">🛒 My Orders</h2>

      {orderList.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No orders found!</p>
      ) : (
        <div className="flex flex-col gap-y-7 max-w-6xl mx-auto">
          {orderList.map((order, orderIndex) => (
            <div key={order.id || orderIndex}>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Order #{order.id} - {order.orderDate}
              </h3>
              <div className="flex justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start flex-wrap gap-x-8">
                {order.items?.cartItems?.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white shadow-md mt-7 sm:mt-5 md:mt-2 lg:mt-0 xlmt-0 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 w-74 sm:74 md:w-70 lg:w-64 xl:64"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />

                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      {/* <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.description}</p> */}

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-md font-bold text-green-600">₹{item.price}</span>

                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} size={14} className="text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-right text-sm text-gray-500 mt-5 sm:mt-5 md:mt-3 lg:mt-0 xl:mt-0">
                Status: <span className="font-semibold text-yellow-600">{order.status}</span> | Delivery by: <span className="text-green-700">{order.deliveryDate}</span>
              </div>
              <hr className="my-6 border-t-2 border-gray-300" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrder;


