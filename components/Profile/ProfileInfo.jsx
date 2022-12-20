import React from 'react'
import { Input } from '../Input'

export const ProfileInfo = ({name, email, isEdit}) => {
  return (
    <>
      {!isEdit ?
      <>
        <div className='text-2xl font-bold text-violet-800 mt-2'>{name}</div>
        <div className='font-semibold'>{email}</div>
      </> :
      <div className='mt-5'>
        <Input value={name} />
        <Input value={email} />
        <Input placeholder='Введіть старий пароль' />
        <Input placeholder='Введіть новий пароль' />
      </div>}
    </>
  )
}
