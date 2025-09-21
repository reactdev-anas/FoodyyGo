import React, { useState } from 'react'
import nightClubData from '../mockData/NightClubs'
import { Link } from 'react-router'

const NightClubs = () => {
  const [isOpen, setIsOpen]= useState(false)
  const [showFree, setShowFree]= useState(false)
  const [selectedTag, setSelectedTag] = useState('')


const handleNightClubDetail=(club)=>{
localStorage.setItem('nightClubDetail', JSON.stringify(club));
}


const filterNightClubData = nightClubData.filter((item)=>{
  return showFree ? item.entry_fee === "Free" : item
})

const filterClubData = filterNightClubData.filter((item)=>{
  return isOpen ? item.isOpen === true : item
})

const finalFilter= filterClubData.filter((item)=>{
  if(selectedTag && !item.category.includes(selectedTag)) return false
   return true
})

  return (
    <>
    {/* Filter Section */}
     <section role='nightClubs-filters' className='px-4 sm:px-6 lg:px-10 xl:px-18 my-8 '>
  <div className="flex flex-wrap items-start sm:items-start md:items-center lg:items-center xl:items-center">
    <p
      className={`border-1 text-gray-500 border-gray-400 py-1 px-2 mx-2 sm:mx-4 rounded cursor-pointer `}
    >
      Filters
    </p>
  
    <p className={`text-gray-500 py-1 px-2 mx-2 sm:mx-4 cursor-pointer`}>
      <input
        type="checkbox"
        className='mr-2'
        checked={showFree}
        onChange={(e) => setShowFree(e.target.checked)}
      />
      Free Entry
    </p>

    <p className={`text-gray-500 py-1 px-2 mx-2 sm:mx-4 cursor-pointer`}>
      <input
        type="checkbox"
        className='mr-2'
        checked={isOpen}
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      Open Now
    </p>

    <select
      value={selectedTag}
      onChange={(e) => setSelectedTag(e.target.value)}
      className='border-1 text-gray-600 outline-0 border-gray-400 py-1 px-1 mx-2 mt-3 sm:mt-3 md:mt-0 lg:mt-0 xl:mt-0 sm:mx-4 rounded cursor-pointer transition transform ease-in-out duration-150 hover:bg-gray-300'
    >
      <option value="">Events</option>
      <option value="live music club">Live music club</option>
      <option value="nightclub">Night club</option>
      <option value="lounge">Lounge</option>
      
    </select>
    
   
  </div>
</section>

   {/* Cards Details */}
      <section role='restaunt' className=" font-[cursive] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   gap-y-14 px-0 py-6 sm:py-6 lg:py-6  sm:px-6 lg:px-10 " >
        {finalFilter.map((club) => {
          const { name, image, category, average_cost_for_two,  entry_fee, opening_hours } = club;
          return  <Link to={`/nightClubDetail/${club.id}`} key={club.id}>
          <div
          onClick={() => handleNightClubDetail(club)}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 mx-auto cursor-pointer  w-74
                  sm:w-[280px] sm:h-[450px]
                  md:w-[320px] md:h-auto
                  lg:w-80 lg:h-auto
                  xl:w-80 xl:h-auto">
            <img
              className=" object-cover 
                    h-44 sm:h-44 
                    md:h-40 lg:h-40 xl:h-40 
                    w-full"
              src={image}
              alt={name}
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-1 flex justify-between items-center">{name} </h4>
              <p className='flex justify-between items-center text-gray-500'>{category} <span> {entry_fee} for One</span></p>
              <p className='text-gray-500 mt-2'>Average Cost for two {average_cost_for_two}</p>
              <p className='flex justify-between items-center mt-2 text-red-950'> Opens at {opening_hours}</p>

            </div>
          </div>
          </Link>
        })}
      </section>
    </>
  )
}

export default NightClubs






