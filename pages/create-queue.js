import Head from 'next/head'
import Heading from '../components/Heading';
import Button from '../components/Button';
import {ChevronRightIcon} from "@heroicons/react/outline"

const CreateQueue = () => (
  <>
    <Heading text="Створення нової черги" />
    <Button text="Створіть чергу" icon={<ChevronRightIcon className='w-5 md:w-6' />} style="btn--orange--solid" />
  </>
);

export default CreateQueue;