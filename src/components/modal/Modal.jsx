import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const FilterModal = ({
  isOpen,
  onClose,
  sortByPopularity,
  setSortByPopularity,
  sortByRange,
  setSortByRange,
  handleSorting,
  handleSortingByRange
}) => {

  const [filterModal, setFilterModal]= useState(null)

  useEffect(()=>{
    const modal = document.getElementById('filter-modal');
    setFilterModal(modal)
  },[])

  if(!filterModal) return null;


  if (!isOpen) return null;

  const handlePopularityChange = (value) => {
    setSortByPopularity(value);
    handleSorting(value);
    onClose(); // ✅ Close modal after selection
  };

  const handleRangeChange = (value) => {
    setSortByRange(value);
    handleSortingByRange(value);
    onClose(); // ✅ Close modal after selection
  };

  return ReactDOM.createPortal (
   <div className="fixed inset-0 font-[cursive] bg-white/10 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="bg-white p-6 rounded-lg w-80 shadow-lg relative">
    <button
      className="absolute top-5 cursor-pointer right-3 text-gray-600 text-lg"
      onClick={onClose}
    >
      ✖
    </button>
    <h2 className="text-xl mb-4 text-purple-700">Filters</h2>

    {/* Popularity Sorting */}
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Sort by Popularity</label>
      <select
        value={sortByPopularity}
        onChange={(e) => handlePopularityChange(e.target.value)}
        className="w-full border outline-0 border-gray-300 p-2 rounded text-gray-700 "
      >
        <option value="">Select</option>
        <option value="low to high">Low to High</option>
        <option value="high to low">High to Low</option>
      </select>
    </div>

    {/* Range Sorting */}
    <div>
      <label className="block text-gray-700 mb-2">Sort by Range</label>
      <select
        value={sortByRange}
        onChange={(e) => handleRangeChange(e.target.value)}
        className="w-full border outline-0 border-gray-300 p-2 rounded text-gray-700 "
      >
        <option value="">Select</option>
        <option value=" 500 - 1000">500 - 1000</option>
        <option value="1000 - 2000">1000 - 2000</option>
        <option value="2000 above">2000 Above</option>
      </select>
    </div>
  </div>
</div>,
filterModal

  );
};

export default FilterModal;
