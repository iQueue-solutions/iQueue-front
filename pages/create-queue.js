import Head from 'next/head'
import Heading from '../components/Heading';
import Button from '../components/Button';
import QueueCreationForm from '../components/QueueCreationForm';
import {ChevronRightIcon} from "@heroicons/react/outline"
import {CalendarIcon} from "@heroicons/react/outline"

const CreateQueue = () => (
  <div className='flex flex-col items-center'>
    <Heading text="Створення нової черги" />
    <QueueCreationForm icon={<CalendarIcon className='w-5 md:w-6 mr-2' />} />
    <Button text="Створити чергу" icon={<ChevronRightIcon className='w-5 md:w-6' />} style="btn--orange--outline" />
  </div>
);

export default CreateQueue;