import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/UseContext";

const ReservedRestaurant = () => {
  
const {reservedSeats}= useContext(DataContext)
console.log(reservedSeats)
  return (
    <div className="min-h-screen  bg-gray-50 py-10 px-4 font-[cursive]">
      <h1 className="text-4xl  text-center text-red-600 mb-10">
        🍽 Reserved Tables
      </h1>

      {reservedSeats.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No reservations found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reservedSeats.map((reservation, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl  text-blue-600 mb-2">
                {reservation.restaurantName.title}
              </h2>

              <div className="space-y-1 text-gray-700 text-sm">
                <p><span className="font-semibold">👤 Name:</span> {reservation.name}</p>
                <p><span className="font-semibold">📧 Email:</span> {reservation.email}</p>
                <p><span className="font-semibold">📞 Phone:</span> {reservation.phone}</p>
                <p><span className="font-semibold">👥 Seats:</span> {reservation.seats}</p>
                <p><span className="font-semibold">📅 Date:</span> {reservation.date}</p>
                <p><span className="font-semibold">⏰ Time:</span> {reservation.time}</p>
                <p><span className="font-semibold">💰 Amount:</span> ₹{reservation.amount}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservedRestaurant;
