import React, { useContext } from 'react'
import { DataContext } from '../context/UseContext'

const EmojiBasedMenu = ({ handleEmojiFilter }) => {
  const { emojiData, currActiveIndex, handleEmojiData } = useContext(DataContext)

  return (
    <div className="flex flex-wrap justify-center font-[cursive] items-center gap-6 my-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {emojiData.map((emoji, index) => {
        return (
          <div
            key={emoji.name}
            onClick={() => {
              handleEmojiData(index) // for carousel image
              handleEmojiFilter(emoji.name) // for filtering dishes
            }}
            className={`flex cursor-pointer flex-col justify-center items-center border border-gray-500 rounded-full
              w-18 h-18 sm:w-20 sm:h-20 md:w-23 md:h-23 lg:w-25 lg:h-25 xl:w-25 xl:h-25
              ${currActiveIndex === index ? "bg-blue-600 text-white" : ""}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-center">
              {emoji.emoji}
            </h2>
            <p className="mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-2  text-xs sm:text-sm md:text-base lg:text-lg xl:text-sm text-center">
              {emoji.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default EmojiBasedMenu
