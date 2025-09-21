import React, { useEffect, useState, useContext } from 'react';
import { FaArrowRight, FaArrowLeft, FaCalendarAlt, FaShoppingBag, } from 'react-icons/fa';
import { RxHome } from "react-icons/rx";
import { Link, useNavigate } from 'react-router';
import { TbLogout2 } from "react-icons/tb";


const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [sideBar, setSideBar] = useState(() => {
    const getLoginData = JSON.parse(sessionStorage.getItem('loginDetail'));
    return !!getLoginData;
  });

const navigate = useNavigate();

  useEffect(() => {
    const getUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const getLoginData = JSON.parse(sessionStorage.getItem('loginDetail'));

    if (!getLoginData) {
      setSideBar(false);
      setProfileData(null);
      return;
    }

    const isMatchedCredentials = getUserData.find(
      (u) =>
        u.email === getLoginData?.email && u.password === getLoginData?.password
    );

    if (isMatchedCredentials) {
      setProfileData(isMatchedCredentials);
      setSideBar(true);
    } else {
      setSideBar(false);
      setProfileData(null);
    }
  }, []);


  const handleLogOut = () => {
    sessionStorage.removeItem('loginDetail')
    setSideBar(false)
    navigate('/')
  }

  return (
    <>
      {sideBar && <div
        className={`
        fixed top-0 left-0 h-full z-[999] font-[cursive]
        transition-all duration-300 ease-in-out
        ${showSideBar ? 'w-64 px-6 py-5  bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'w-0 bg-white'}
        text-white overflow-visible`}
      >
        {/* Arrow Toggle Button */}
        <div className="absolute top-4 right-[-40px]  font-[cursive] ">
          <div
            onClick={() => setShowSideBar(!showSideBar)}
            className="bg-gray-800 hover:bg-yellow-400 hover:text-black text-white 
                     p-2 rounded-full shadow-md cursor-pointer transition"
          >
            {showSideBar ? <FaArrowLeft size={16} /> : <FaArrowRight size={16} />}
          </div>
        </div>

        {/* Profile Info */}
        {showSideBar && profileData && (
          <div className="mt-16 flex items-start space-x-4">
            <div className="w-11 h-11 flex items-center justify-center bg-white text-black font-[cursive] rounded-full text-xl lg:text-3xl md:text-2xl xl:text-3xl">
              {profileData.name.charAt(0)}
            </div>
            <div className="text-sm leading-snug">
              <p className="text-gray-400 mb-1 "> 👋, Welcome</p>
              <p className=" truncate text-gray-300 max-w-[160px]">{profileData.name}</p>
              <p className="text-xs text-gray-300 truncate max-w-[160px]">{profileData.email}</p>
            </div>
          </div>
        )}



        {/* Menu Items */}
        {showSideBar && (
          <div className="mt-10 space-y-4">

            <Link to="/">
              <div
                onClick={() => setShowSideBar(false)}
                className="flex items-center mt-2 text-gray-200 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer transition">
                <RxHome className="mr-3" />
                <span> Home</span>
              </div>
            </Link>

            <Link to="/reservedTable">
              <div
                onClick={() => setShowSideBar(false)}
                className="flex items-center mt-2 text-gray-200 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer transition">
                <FaCalendarAlt className="mr-3" />
                <span>Reserved Table</span>
              </div>
            </Link>

            <Link to="/myOrders">
              <div
                onClick={() => setShowSideBar(false)}
                className="flex items-center mt-2 text-gray-200 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer transition">
                <FaShoppingBag className="mr-3" />
                <span>My Orders</span>
              </div>
            </Link>


            <div
              onClick={handleLogOut}
              className="flex items-center mt-7 text-gray-200 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer transition">
              <TbLogout2 className="mr-3" />
              <span>Log Out</span>
            </div>
          </div>
        )}
      </div>}
    </>
  );
};

export default SideBar;