import React from 'react'
import {CreateQueueHeading} from '../components/CreateQueueHeading'
import {Input} from '../components/Input'
import {Button} from '../components/Button'

const registration = () => {
  return (
    <div className="w-full flex flex-col items-center md:items-center justify-center">
   <CreateQueueHeading>
    Реєстрація
   </CreateQueueHeading>
   <div className="flex flex-col w-10/12 md:w-1/3">
     <form className="mt-9">
       <Input placeholder="Email" />

       <Input type="password" placeholder="Придумайте пароль" />

       <div className='-mt-5'><Input type="password" placeholder="Повторіть пароль" /></div>

       <Input placeholder="Ваше ім'я" />
     </form>
    <Button
     color="green"
     variant="solid"
    >
     Реєстрація
    </Button>
   </div>
  </div>
  )
}

export default registration