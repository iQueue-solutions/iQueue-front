import { Heading } from '../components/Heading';
import { Button } from '../components/Button';
import QueueCreationForm from '../components/QueueCreationForm';
import {ChevronRightIcon} from "@heroicons/react/outline"

const CreateQueue = () => (
  <div className='flex flex-col items-center'>
    <Heading>Створення</Heading>
    <QueueCreationForm />
    <Button icon={<ChevronRightIcon className='w-5 md:w-6' />} variant="outline">Створити чергу</Button>
  </div>
);

export default CreateQueue;
