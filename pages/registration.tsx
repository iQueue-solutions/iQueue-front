import React from 'react'
import {CreateQueueHeading} from '../components/CreateQueueHeading'
import {Input} from '../components/Input'
import {Button} from '../components/Button'

const registration = () => {
  return (
    <div className="w-[90%] ml-[50%] translate-x-[-50%] py-5 md:py-0 mb-5 md:mb-0 flex flex-col items-center md:items-center justify-center bg-blue-300 md:bg-transparent rounded-lg">
   <CreateQueueHeading>
    Реєстрація
   </CreateQueueHeading>
   <div className="flex flex-col w-10/12 md:w-2/3">
     <form className="mt-9 justify-between flex flex-col md:flex-row">
      <div className='flex flex-col md:w-[45%]'>
        <Input placeholder="Email" />
        <Input placeholder="Ваше ім'я" />
       </div>
       <div className='flex flex-col md:w-[45%]'>
        <Input type="password" placeholder="Придумайте пароль" />
        <Input type="password" placeholder="Повторіть пароль" />
       </div>
     </form>
    <Button
     color="purple"
     variant="solid"
    >
     Реєстрація
    </Button>
   </div>
   <div className='text-md text-purple-800 mt-2'>Вже реєструвалися? <span className='underline hover:decoration-dashed cursor-pointer'>Увійдіть</span></div>
  </div>
  )
}

export default registration