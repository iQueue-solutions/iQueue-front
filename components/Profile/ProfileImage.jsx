import React from 'react'

export const ProfileImage = ({img}) => {
  return (
    <div className="w-1/2 aspect-square bg-black rounded-full">
      <img src={img} alt="Image" className="w-full h-full cursor-pointer border-2 border-slate-50 object-cover hover:opacity-50 rounded-full transition duration-300 ease-in-out" />
    </div>
  )
}
