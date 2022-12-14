import React from 'react'
import { Notification } from '../components/Notifications/Notification'
import { Heading } from "../components/Heading";

const notifications = () => {
  return (
    <div className='w-10/12 md:w-1/2 flex flex-col ml-[50%] translate-x-[-50%]'>
      <Heading>Запити на заміну</Heading>
      <div className='mt-5 w-full'>
        <Notification from={10} to={7} user="Спектров" queueName="ПарП" />
        <Notification from={22} to={15} user="Спектров" queueName="ПарПППППППППППП" />
      </div>
    </div>
  )
}

export default notifications