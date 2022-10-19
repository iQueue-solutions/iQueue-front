import {CreateQueueHeading} from '../components/CreateQueueHeading';
import {Button} from '../components/Button';
import { QueueCreationForm} from '../components/QueueCreationForm';
import {DropdownInput} from '../components/DropdownInput'
import {ChevronRightIcon, ChevronDownIcon, ArrowSmLeftIcon} from "@heroicons/react/outline";

const CreateQueue = () => (
  <div className='flex flex-col items-center'>
    <CreateQueueHeading icon={<ArrowSmLeftIcon className='w-5 md:w-9' />}>Нова черга</CreateQueueHeading>
    <QueueCreationForm />
    <DropdownInput icon={<ChevronDownIcon className='w-5' />} title="Кількість учасників - " />
    <Button icon={<ChevronRightIcon className='w-5 md:w-6' />} color="purple" variant="solid">Створити чергу</Button>
  </div>
);

export default CreateQueue;