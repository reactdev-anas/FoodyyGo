import React, {  useEffect, useState } from 'react'
import onlineDishes from '../mockData/OrderOnline'
import { Link } from "react-router"
import EmojiBasedMenu from './EmojiBasedMenu'
import CarouselMenu from './CarouselMenu'


const OrderOnline = () => {
  const [onlineCategory, setOnlineCategory] = useState(onlineDishes)
  const [cuisineQuery, setCuisineQuery] = useState('')
  const [sortByPopularity, setSortByPopularity] = useState('')
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(true)
  const [isRating, setIsRating] = useState(true)
  const [showOffer, setShowOffer]= useState(true)

  
 const handleEmojiFilter = (emojiName) => {
  const tagToMatch = emojiName.toLowerCase()
  const filtered = onlineDishes.filter(dish =>
    dish.tags?.some(tag => tag.toLowerCase() === tagToMatch)
  )

  setOnlineCategory(filtered)
}


  const handlePureVeg = () => {
    setActive((prevActive) => !prevActive)
    if (active) {
      const filterData = onlineCategory.filter((dishes) => {
        return dishes.vegetarian === true;
      })
      setOnlineCategory(filterData)
    } else {
      setOnlineCategory(onlineDishes)
    }
  }
  const handleRatings = () => {
    setIsRating((prevIsRating) => !prevIsRating)
    if (isRating) {
      const filterRatings = onlineCategory.filter((dishes) => {
        return dishes.rating > 4.5
      })
      console.log(filterRatings)
      setOnlineCategory(filterRatings)
    } else {
      setOnlineCategory(onlineDishes)
    }

  }
  const handleOffer = () => {
    setShowOffer((prevOffer)=> !prevOffer)
    if(showOffer){
       const filterOffer = onlineDishes.filter((dishes) => {
      return dishes.discount !== "No discount";
    })
    setOnlineCategory(filterOffer)
    } else {
      setOnlineCategory(onlineDishes)
    }
 
  }
  const handleSorting = (order) => {
    setSortByPopularity(order)
    if (order === 'low to high') {
      const filterSortLowToHigh = [...onlineDishes].sort((a, b) => a.price - b.price)
      setOnlineCategory(filterSortLowToHigh)
    } else if (order === 'high to low') {
      const filterSortHighToLow = [...onlineDishes].sort((a, b) => b.price - a.price)
      setOnlineCategory(filterSortHighToLow)
    }
  }
  const handleApply = () => {
    if (cuisineQuery) {
      const filterCuisine = [...onlineDishes].filter((dishes) => {
        return dishes.title.toLocaleLowerCase().includes(cuisineQuery.toLocaleLowerCase())
      })
      setOnlineCategory(filterCuisine)
      setCuisineQuery('')
    } else {
      setOnlineCategory(onlineDishes)
    }
  }

  const handleDetails = (dish) => {
    localStorage.setItem('productDetail', JSON.stringify(dish))
  }
const handleEmojiData=(emoji)=>{
  const filterData = [...onlineDishes].filter((dishes)=>{
    return dishes.category==emoji.emoji
  })
  setOnlineCategory(filterData)
}
  return (
    <>
    <section role='carousel-image'>
      <CarouselMenu/>
    </section>
<section
  role="Filters"
  className="px-3 my-4 sm:px-12 sm:my-4 md:px-16 md:my-6 lg:px-20 lg:my-8 xl:px-24 xl:my-10 bg-gray-100"
>
  <div className="flex flex-wrap justify-start items-start lg:flex lg:justify-between lg:items-center">
    {/* Filters buttons and select */}
    <div className="flex flex-wrap font-[cursive] justify-start sm:justify-start gap-5 sm:gap-4 w-full sm:w-auto">
      <p
        className={`border border-gray-400 text-gray-500 py-1 px-2 rounded cursor-pointer ${
          show ? "bg-blue-600 text-white" : ""
        }`}
        onClick={() => setShow((prevShow) => !prevShow)}
      >
        Filters
      </p>

      {show && (
        <select
          className="border border-gray-400 text-gray-600 outline-none py-1 px-3 rounded cursor-pointer transition transform ease-in-out duration-150 hover:bg-gray-300"
          value={sortByPopularity}
          onChange={(e) => handleSorting(e.target.value)}
        >
          <option value="">Sort by Popularity</option>
          <option value="low to high">Low to High</option>
          <option value="high to low">High to Low</option>
        </select>
      )}

      <p
        className={`border border-gray-400 text-gray-500 py-1 px-3 rounded cursor-pointer ${
          active ? "" : "bg-blue-600 text-white"
        }`}
        onClick={handlePureVeg}
      >
        Pure Veg {active ? "" : "x"}
      </p>
      <p
        className={`border border-gray-400 text-gray-500 py-1 px-3 rounded cursor-pointer ${
          isRating ? "" : "bg-blue-600 text-white"
        }`}
        onClick={handleRatings}
      >
        Ratings 4.5 {isRating ? "" : "x"}
      </p>
      <p
        className={`border border-gray-400 text-gray-500 py-1 px-3 rounded cursor-pointer ${
          showOffer ? "" : "bg-blue-600 text-white"
        }`}
        onClick={handleOffer}
      >
        Offers % {showOffer ? "" : "x"}
      </p>
    </div>

    {/* Search input and button */}
    <div className="font-[cursive] mt-4 sm:mt-0 flex items-center w-full sm:w-auto">
      <input
        type="text"
        value={cuisineQuery}
        onChange={(e) => setCuisineQuery(e.target.value)}
         placeholder='Enter "cuisine" or dish...'
        className="border border-gray-400 py-2 pl-3 rounded outline-none w-full sm:w-72"
      />
      <button
        className={`py-2 px-7 ml-2 rounded text-white ${
          cuisineQuery === ""
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 cursor-pointer"
        }`}
        disabled={cuisineQuery === ""}
        onClick={handleApply}
      >
        Apply
      </button>
    </div>
  </div>
</section>

      <section role='menu-based-carousel'>
        <EmojiBasedMenu handleEmojiFilter={handleEmojiFilter}/>
      </section>
      {/* Cards Details */}
      <section role='online-dishes' className=" font-[cursive] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  gap-y-14 px-0 py-6 sm:py-6 lg:py-6  sm:px-6 lg:px-10 bg-gray-100" >
        {onlineCategory && onlineCategory.map((dishes, index) => {
          const { title, image, restaurantName, rating, price, deliveryTime, discount } = dishes;
          return <Link to={`/dishDetail/${dishes.id}`} key={dishes.id}>
            <div
              onClick={() => handleDetails(dishes)}
              className="bg-white relative rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 mx-auto cursor-pointer w-72 sm:w-full lg:w-80 max-w-sm">
              <img
                className="w-full h-40 object-cover"
                src={image}
                alt={title}
              />
              <p className='absolute bottom-36 left-0 text-white bg-blue-400 px-1 rounded-r-sm'>{discount} </p>
              <div className="p-4">
                <h4 className="text-lg font-semibold mt-2 flex justify-between items-center">{title} <span className='bg-green-600 text-white px-2 py-1 rounded text-sm'>{rating} ⭐</span></h4>
                <p className='flex justify-between items-center mt-3 text-gray-500'>{restaurantName} <span>$ {price} for One</span></p>
                <p className='flex justify-end mt-3'>{deliveryTime} min</p>

              </div>
            </div>
          </Link>
        })}
      </section>
    </>
  )
}

export default OrderOnline
