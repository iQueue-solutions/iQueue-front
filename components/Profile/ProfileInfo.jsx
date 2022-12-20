import React from 'react'
import { Input } from '../Input'

export const ProfileInfo = ({name, email, isEdit}) => {
  return (
    <>
      {!isEdit ?
      <>
        <div className='text-3xl font-bold text-violet-800 mt-2'>{name}</div>
        <div className='font-semibold text-xl'>{email}</div>
      </> :
      <div className='mt-5 w-2/3 md:w-1/3 -mb-5'>
        <Input value={name} />
        <Input value={email} />
        <Input type='password' placeholder='Введіть старий пароль' />
        <Input type='password' placeholder='Введіть новий пароль' />
      </div>}
    </>
  )
}
