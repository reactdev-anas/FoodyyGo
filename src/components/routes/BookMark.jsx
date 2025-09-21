
import React, { useContext } from 'react';
import { DataContext } from '../context/UseContext';

const BookMark = () => {
  const { bookMark, handleDeleteBookMark } = useContext(DataContext);

  return (
    <div className="p-6 font-[cursive] min-h-screen bg-gray-50">
      <h2 className="text-3xl text-center text-blue-700 font-semibold mb-8">🔖 Bookmarked Dishes</h2>

      {bookMark.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {bookMark.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white rounded-lg shadow-lg p-5 transition duration-300 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover rounded-md mb-4"
              />

              <h3 className="text-xl text-gray-800 font-bold mb-2">{item.title}</h3>

              <p className="text-gray-600 text-sm mb-2">{item.description.slice(0,200)}</p>

              <p className="text-gray-800 font-semibold mb-1">💰 Price: ₹{item.price}</p>
              <p className="text-gray-600">🍽 Category: <span className="font-bold">{item.category}</span></p>

              <div className="flex  mt-4">
                <button
                  onClick={() => handleDeleteBookMark(index)}
                  className="bg-red-100 text-red-600 border border-red-300 hover:bg-red-500 hover:text-white px-4 py-1 rounded transition"
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic text-lg mt-12">No bookmarks found.</p>
      )}
    </div>
  );
};

export default BookMark;

