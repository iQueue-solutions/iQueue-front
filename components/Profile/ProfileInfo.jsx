import React from 'react'

export const ProfileInfo = ({name, email}) => {
  return (
    <>
      <div className='text-2xl font-bold text-violet-800 mt-2'>{name}</div>
      <div className='font-semibold'>{email}</div>
    </>
  )
}
