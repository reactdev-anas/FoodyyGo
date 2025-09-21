import React, { useState } from 'react';
import diningData from '../mockData/DiningData';
import { Link } from 'react-router';
import { IoLocationOutline } from "react-icons/io5";
import FilterModal from '../modal/Modal';

const Dining = () => {
  const [diningList, setDiningList] = useState(diningData);
  const [sortByPopularity, setSortByPopularity] = useState('');
  const [location, setLocation] = useState('');
  const [cuisineQuery, setQuisineQuery] = useState('');
  const [showRating, setShowRating] = useState(true);
  const [show, setShow] = useState(false);
  const [sortByRange, setSortByRange] = useState('');

  const handleDiningDetails = (dish) => {
    localStorage.setItem('productDiningDetail', JSON.stringify(dish));
  };

  const handleRatings = () => {
    setShowRating((prevRating) => !prevRating);
    if (showRating) {
      const filterRatings = diningList.filter((item) => item.rating >= 4.5);
      setDiningList(filterRatings);
    } else {
      setDiningList(diningData);
    }
  };

  const handleSorting = (order) => {
    if (!order) return;
    setSortByPopularity(order);
    if (order === 'high to low') {
      const sorted = [...diningData].sort((a, b) => b.price - a.price);
      setDiningList(sorted);
    } else if (order === 'low to high') {
      const sorted = [...diningData].sort((a, b) => a.price - b.price);
      setDiningList(sorted);
    }
  };

  const handleSortingByRange = (range) => {
    setSortByRange(range);
    if (range === ' 500 - 1000') {
      const filtered = diningData.filter(item => item.price >= 500 && item.price <= 1000);
      setDiningList(filtered);
    } else if (range === '1000 - 2000') {
      const filtered = diningData.filter(item => item.price > 1000 && item.price <= 2000);
      setDiningList(filtered);
    } else if (range === '2000 above') {
      const filtered = diningData.filter(item => item.price > 2000);
      setDiningList(filtered);
    }
  };

  const handleLocation = (loca) => {
    setLocation(loca);
    const lowerLoca = loca.toLowerCase().trim();
    if (["bangalore", "mumbai", "kolkata", "delhi", "chennai"].includes(lowerLoca)) {
      const filterLocation = diningData.filter(
        (item) => item.location.toLowerCase() === lowerLoca
      );
      setDiningList(filterLocation);
    } else {
      setDiningList(diningData);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const filtered = diningData.filter(item =>
        item.cuisine.toLowerCase().includes(cuisineQuery.toLowerCase())
      );
      setDiningList(filtered);
      setQuisineQuery('');
    }
  };

  return (
    <>
      <section role='dining-filters' className='px-4 sm:px-7 md:px-12 lg:px-16 xl:px-18 my-8'>
        <div className="flex flex-col items-center  sm:flex-col md:flex-row lg:flex-row xl:flex-row sm:items-start md:items-start lg:items-center xl:items-center " >
          <div className="flex  font-[cursive]">
            <p
              className={`border-1 text-gray-500  border-gray-400 py-1 px-2 mx-4 rounded cursor-pointer`}
              onClick={() => setShow(true)}
            >
              Filters
            </p>

            <p
              className={`border-1 text-gray-500 border-gray-400 py-1 px-2 mx-4 rounded cursor-pointer ${showRating ? "" : 'bg-blue-600 text-white'}`}
              onClick={handleRatings}
            >
              Ratings 4.5 {showRating ? "" : 'x'}
            </p>
          </div>

          <div className="bg-gray-100 p-3 mt-3 sm:mt-3 md:mt-0 lg:mt-0 xl:mt-0 rounded-lg shadow-lg w-full max-w-2xl mx-auto flex flex-row sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center border border-gray-300">
            <div className="w-full sm:w-1/3 flex items-center gap-2">
              <IoLocationOutline className="text-xl text-gray-600" />
              <select
                value={location}
                onChange={(e) => handleLocation(e.target.value)}
                className="w-full bg-transparent px-2 cursor-pointer text-gray-800 placeholder:text-gray-500 focus:outline-none appearance-none"
              >
                <option value="">Location</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="chennai">Chennai</option>
                <option value="kolkata">Kolkata</option>
              </select>
            </div>

            <div className="hidden sm:block h-6 w-px bg-gray-300 mx-3"></div>

            <input
              type="text"
              placeholder='Enter "cuisine" or dish...'
              value={cuisineQuery}
              onKeyDown={handleKeyDown}
              onChange={(e) => setQuisineQuery(e.target.value)}
              className="w-full sm:flex-1 px-3 bg-transparent text-gray-800 placeholder:text-gray-500 focus:outline-none"
            />
          </div>
        </div>
      </section>

      


      <FilterModal
        isOpen={show}
        onClose={() => setShow(false)}
        sortByPopularity={sortByPopularity}
        setSortByPopularity={setSortByPopularity}
        sortByRange={sortByRange}
        setSortByRange={setSortByRange}
        handleSorting={handleSorting}
        handleSortingByRange={handleSortingByRange}
      />

      <section
        role="restaurant"
        className="font-[cursive] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-14 px-0 py-6 sm:py-6 lg:py-6  sm:px-6 lg:px-10 bg-gray-100"
      >
        {diningList.map((dishes) => {
          const { location, title, image, restaurantName, rating, price, openTimings } = dishes;
          return (
            <Link to={`/diningDishDetail/${dishes.id}`} key={dishes.id}>
              <div
                onClick={() => handleDiningDetails(dishes)}
                className={`
                  bg-white rounded-lg shadow-md overflow-hidden 
                  transform transition-transform duration-300 hover:scale-105 mx-auto cursor-pointer

                  w-74
                  sm:w-[280px] sm:h-[450px]
                  md:w-[320px] md:h-auto
                  lg:w-80 lg:h-auto
                  xl:w-80 xl:h-auto
                `}
              >
                <img
                  className={`
                    object-cover 
                    h-44 sm:h-44 
                    md:h-40 lg:h-40 xl:h-40 
                    w-full
                  `}
                  src={image}
                  alt={title}
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-1 flex justify-between items-center">
                    {title}
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                      {rating} ⭐
                    </span>
                  </h4>
                  <p className="flex justify-between items-center mt-2 text-gray-500">
                    {restaurantName} <span>$ {price} for One</span>
                  </p>
                  <p className="flex justify-between items-center mt-3 text-red-950">
                    Opens at {openTimings}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Dining;




