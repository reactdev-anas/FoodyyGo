import React, { useState } from 'react';
import bgImage from '../Images/background-image.jpg';
import { useNavigate } from 'react-router'; 
import SignUp from '../modal/SignUp';

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const categoryCard = [
    {
      id: 1,
      title: 'Order-online',
      content: 'Stay home and order to your doorstep',
      url: 'https://thaka.bing.com/th/id/OIP.w1yPPFpoDRf1eCOf1C58xQHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 2,
      title: 'Dining',
      content: 'View the city’s favourite dining venues',
      url: 'https://tse2.mm.bing.net/th/id/OIP.Cjnprf-rgUgWjqGMSP2X2wHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 3,
      title: 'Nightlife and clubs',
      content: 'Explore the city’s top nightlife outlets',
      url: 'https://thaka.bing.com/th/id/OIP.IXom0mNLcGzl-rXA6Wo1mAHaD2?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
  ];

  const handleRoutes = (index) => {

      const isLogin = sessionStorage.getItem('loginDetail');

    if (!isLogin) {
      setShowModal(true);
      return;
    }

    if (index === 0) navigate('/order-online');
    else if (index === 1) navigate('/dining');
    else if (index === 2) navigate('/night-clubs');
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* 🔹 Hero Section */}
      <section
        className="w-full h-[70vh] sm:h-[75vh] md:h-[75vh] lg:h-[75vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* 🔹 Navbar */}
        <nav className="flex flex-wrap sm:flex-nowrap justify-between items-center p-4 sm:p-7 mx-4 sm:mx-6">
          <h2 className="text-white text-2xl sm:text-3xl font-[cursive] mb-2 sm:mb-0">.FoodyGo</h2>
          <button
            className="bg-black py-1.5 sm:py-2 px-4 sm:px-5 text-sm sm:text-base text-white rounded font-[cursive]"
            onClick={() => setShowModal(true)}
          >
            Sign In
          </button>
          {showModal && <SignUp setShowModal={setShowModal} />}
        </nav>

        {/* 🔹 Hero Text */}
        <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:px-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl leading-relaxed tracking-wide text-white text-center font-[cursive]">
            Craving something delicious? <br />
            Order from your favorite restaurants now.
          </h3>
        </section>
      </section>

      {/* 🔹 Category Cards */}
      <section className="flex flex-wrap justify-center gap-6 p-4 sm:p-6 bg-gray-100 font-[cursive]">
        {categoryCard.map((category, index) => (
          <div
            key={category.id}
            onClick={() => handleRoutes(index)}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer w-full mx-4 sm:mx-4 md:mx-3 lg:mx-3 xl:mx-2 sm:w-[300px] max-w-sm"
          >
            <img
              className="w-full h-40 object-cover"
              src={category.url}
              alt={category.title}
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-1">{category.title}</h4>
              <p className="text-sm text-gray-600">{category.content}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Page;
