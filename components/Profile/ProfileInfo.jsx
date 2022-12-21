import React from 'react'

export const ProfileInfo = ({name, email}) => {
  return (
    <>
      <div className='text-3xl font-bold text-violet-800 mt-2'>{name}</div>
      <div className='font-semibold text-xl'>{email}</div>
    </>
  )
}
