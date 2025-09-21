import React, { useContext, useState, useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import { DataContext } from '../context/UseContext';

const DishDetail = () => {
  const [dishDetail, setDishDetail] = useState(null);
  const [show, setShow] = useState(false);

  const { handleBookMark, handleAddToCart } = useContext(DataContext);

  useEffect(() => {
    const getProductDetail = JSON.parse(localStorage.getItem('productDetail'));
    setDishDetail(getProductDetail);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>

      <article className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 font-[cursive] flex justify-center items-start min-h-screen">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 sm:p-6 space-y-4">
          {/* Image */}
          <img
            src={dishDetail?.image}
            alt={dishDetail?.title}
            className="w-full h-60 sm:h-72 md:h-[50vh] lg:h-[55vh] xl:h-[60vh] object-cover rounded-lg mb-4"
          />

          {/* Title & Rating */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{dishDetail?.title}</h1>
            <span className="bg-green-600 text-white text-sm sm:text-base px-3 py-1 rounded-full w-max">
              ⭐ {dishDetail?.rating}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base">{dishDetail?.description}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-sm">
            <p><strong>💰 Price:</strong> ₹{dishDetail?.price}</p>
            <p><strong>⌛ Delivery Time:</strong> {dishDetail?.deliveryTime} mins</p>
            <p><strong>🍽 Category:</strong> {dishDetail?.category}</p>
            <p><strong>📦 Availability:</strong> {dishDetail?.availability}</p>
            <p><strong>🏢 Restaurant:</strong> {dishDetail?.restaurantName}</p>
            <p><strong>🏷 Discount:</strong>
              <span className="ml-1 bg-blue-500 text-white px-2 py-0.5 rounded text-xs sm:text-sm">
                {dishDetail?.discount}
              </span>
            </p>
          </div>

          {/* Ingredients */}
          <div>
            <p className="font-semibold text-sm sm:text-base">🥗 Ingredients:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {dishDetail?.ingredients?.map((item, i) => (
                <span key={i} className="bg-purple-200 text-purple-700 px-2 py-1 mt-1 rounded-full text-xs sm:text-sm">
                  #{item}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-1.5 sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-3 mt-4">
            <button
              onClick={() => handleBookMark(dishDetail)}
              className="bg-gray-200 cursor-pointer hover:bg-blue-600 hover:text-white text-gray-800 px-4 py-2 rounded transition text-sm sm:text-base"
            >
              📌 Bookmark
            </button>

            <button
              onClick={() => handleAddToCart(dishDetail)}
              className="bg-gray-200 cursor-pointer hover:bg-blue-600 hover:text-white text-gray-800 px-4 py-2 rounded transition text-sm sm:text-base"
            >
              🛒 Add to Cart
            </button>

            <button
              onClick={() => setShow(!show)}
              className="bg-gray-200 cursor-pointer hover:bg-blue-600 hover:text-white text-gray-800 px-4 py-2 rounded transition text-sm sm:text-base"
            >
              💬 Reviews
            </button>
          </div>

          {/* Reviews Section */}
          {show && (
            <div className="mt-6 max-h-96 overflow-y-auto space-y-4 pt-4">
              {dishDetail?.reviews?.length > 0 ? (
                dishDetail.reviews.map((review, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-300 p-4 rounded-md shadow text-sm sm:text-base">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-gray-700">
                        {review.user.charAt(0)}
                      </div>
                      <span className="ml-3 font-medium text-gray-800">{review.user}</span>
                    </div>
                    <p className="text-gray-700 mb-1">{review.comment}</p>
                    <p className="text-yellow-600 text-sm font-semibold">⭐ {review.rating}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">No reviews yet.</p>
              )}
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default DishDetail;
