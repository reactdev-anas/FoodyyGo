import React, { useState } from "react";

const ReservedTable = ({ setShowReservedModal, diningDishDetail }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        seats: "",
        date: "",
        time: "",
        amount: "",
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Reservation Saved
    const handleSubmit = (e) => {
        e.preventDefault();

        const currentUser = JSON.parse(sessionStorage.getItem("loginDetail"));
        if (!currentUser?.email) {
            alert("Please login first to reserve!");
            return;
        }

        const allReservations = JSON.parse(localStorage.getItem("reservations")) || {};
        const newReservation = { ...formData, restaurantName: diningDishDetail, };

        allReservations[currentUser.email] = allReservations[currentUser.email] || [];
        allReservations[currentUser.email].push(newReservation);

        localStorage.setItem("reservations", JSON.stringify(allReservations));
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
            setShowReservedModal(false);
        }, 2500);
    };

    return (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex justify-center items-center">
            <div className="bg-white shadow-xl rounded-md w-94 sm:w-full md:w-full lg:w-full xl:w-full max-w-2xl p-6 font-[cursive]">
                <h2 className="text-2xl text-center mb-4">🍽 Reserve a Table</h2>

                {showSuccess && (
                    <div className="mb-4 text-green-700 bg-green-100 border border-green-400 px-4 py-2 rounded text-center font-semibold">
                        ✅ Successfully Reserved Table!
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="border border-gray-300 rounded px-4 py-2 outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="border border-gray-300 rounded px-4 py-2 outline-none"
                            required
                        />
                    </div>

                    {/* Row 2: Phone + Seats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="border border-gray-300 rounded px-4 py-2 outline-none"
                            required
                        />
                        <input
                            type="number"
                            name="seats"
                            value={formData.seats}
                            onChange={handleChange}
                            placeholder="No. of Seats"
                            className="border border-gray-300 rounded px-4 py-2 outline-none"
                            required
                            min={1}
                        />
                    </div>

                    {/* Row 3: Date + Time */}
                    <div className="grid grid-cols-1 sm:md-grid-cols-1  md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-4">
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                           
                            className="border w-full border-gray-300 rounded px-4 py-2 outline-none"
                            required
                        />
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="border w-full border-gray-300 rounded px-4 py-2 outline-none"
                            required
                        />
                    </div>

                    {/* Row 4: Payment Amount */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Enter Payment Amount (₹)"
                            className="border border-gray-300 rounded px-4 py-2 outline-none"
                            required
                            min={1}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end mt-4 gap-2">
                        <button
                            type="button"
                            onClick={() => setShowReservedModal(false)}
                            className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
                        >
                            Confirm Reservation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReservedTable;

