import React from 'react'
import { ArrowRightIcon, XIcon, CheckIcon } from "@heroicons/react/outline";

export const Notification = ({from, to, user, queueName}) => {
  return (
    <div className='p-3 bg-green-200 border-2 w-full border-green-600 rounded-xl mt-3 text-slate-900 flex justify-between'>
      <div className='flex-col w-full'>
      <div className='flex font-semibold text-3xl items-center'>
        <div className='text-slate-500'>{from}</div>
        <ArrowRightIcon className='w-8 mx-2' />
        {to}
      </div>
      <div className='flex text-xl text-slate-500 mt-1 flex-wrap'>
        Від <span className='font-bold mx-2 text-slate-900'>{user}</span> у <span className='font-bold mx-2 text-slate-900'>{queueName}</span>
      </div>
      </div>
      <div className='flex'>
        <button>
          <CheckIcon className='w-7 hover:text-green-700' />
        </button>
        <button>
          <XIcon className='w-7 ml-2 hover:text-red-600' />
        </button>
      </div>
    </div>
  )
}
