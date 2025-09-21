import React, { useEffect, useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";

const NightClubDetail = () => {
  const [nightClubDetail, setNightClubDetail] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const clubDetail = JSON.parse(localStorage.getItem('nightClubDetail'));
    setNightClubDetail(clubDetail);
  }, []);

  return (
    <>
      <article className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 font-[cursive] flex justify-center items-start min-h-screen">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 sm:p-6 space-y-4">
          
          {/* Image */}
          <img
            className="w-full h-60 sm:h-72 md:h-[50vh] lg:h-[55vh] xl:h-[60vh] object-cover rounded-lg mb-4"
            src={nightClubDetail?.image}
            alt="Dish"
          />

          {/* Title & Rating */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{nightClubDetail?.name}</h2>
            <span className="bg-green-600 text-white text-sm sm:text-base px-3 py-1 rounded-full w-max">
              ⭐ {nightClubDetail?.rating}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base">{nightClubDetail?.description}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-sm">
            <p><strong>💰 Entry Fee:</strong> {nightClubDetail?.entry_fee}</p>
            <p><strong>📞 Contact:</strong> {nightClubDetail?.contact}</p>
            <p><strong>🍽 Category:</strong> {nightClubDetail?.category}</p>
            <p><strong>🕰 Open:</strong> {nightClubDetail?.opening_hours}</p>
            <p><strong>🧑‍🤝‍🧑 Avg Cost for Two:</strong> ₹{nightClubDetail?.average_cost_for_two}</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-800 text-sm sm:text-base">
            <IoLocationOutline className="text-xl" />
            <span>{nightClubDetail?.location}</span>
          </div>

          {/* Tags */}
          <div>
            <p className="font-semibold text-sm sm:text-base">#Tags:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {nightClubDetail?.highlights?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-purple-200 text-purple-700 px-2 py-1 mt-1 rounded-full text-xs sm:text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-4">
            <button
              onClick={() => setShow(prev => !prev)}
              className="bg-gray-200 cursor-pointer hover:bg-blue-600 hover:text-white text-gray-800 px-4 py-2 rounded transition text-sm sm:text-base"
            >
              💬 Reviews
            </button>
          </div>

          {/* Reviews Section */}
          {show && (
            <div className="mt-6 max-h-96 overflow-y-auto space-y-4 pt-4">
              {nightClubDetail?.reviews?.length > 0 ? (
                nightClubDetail.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-300 p-4 rounded-md shadow text-sm sm:text-base"
                  >
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
                <p className="text-gray-500 italic">No reviews available.</p>
              )}
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default NightClubDetail;
