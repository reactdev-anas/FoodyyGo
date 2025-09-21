
import React, { useContext } from 'react';
import { DataContext } from '../context/UseContext';

const CarouselMenu = () => {
  const { emojiData, currActiveIndex } = useContext(DataContext);
  const firstItem = emojiData[currActiveIndex];

  return (
    <div
      className="w-full h-52 sm:h-64 md:h-72 lg:h-80 font-[cursive] bg-center bg-cover relative flex items-center justify-center rounded-xl shadow-md overflow-hidden transition-all duration-500"
      style={{
        backgroundImage: `url(${firstItem.image})`,
      }}
    >
   
      <div className="relative z-10 text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center px-4 max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
        {firstItem.content}
      </div>
    </div>
  );
};

export default CarouselMenu;
