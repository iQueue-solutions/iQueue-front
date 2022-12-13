import React from 'react'
import {CreateQueueHeading} from '../components/CreateQueueHeading'
import {Input} from '../components/Input'
import {Button} from '../components/Button'

const registration = () => {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto py-5 md:pt-0 mb-5 md:mb-0 md:mt-5 flex flex-col items-center justify-center bg-blue-300 rounded-lg">
   <CreateQueueHeading>
    Реєстрація
   </CreateQueueHeading>
   <div className="flex flex-col w-10/12 md:w-1/2">
     <form className="mt-9 justify-between flex flex-col">
        <Input placeholder="Email" />
        <Input placeholder="Ваше ім'я" />
        <Input type="password" placeholder="Придумайте пароль" />
        <Input type="password" placeholder="Повторіть пароль" />
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