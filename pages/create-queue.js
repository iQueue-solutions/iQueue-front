import {CreateQueueHeading} from '../components/CreateQueueHeading';
import {Heading} from '../components/Heading';
import {Button} from '../components/Button';
import { QueueCreationForm} from '../components/QueueCreationForm';
import {DropdownInput} from '../components/DropdownInput'
import {ChevronRightIcon, ArrowSmLeftIcon} from "@heroicons/react/outline";

const CreateQueue = () => (
  
    <div className='w-full flex flex-col md:flex-row items-center justify-center'>
    <Heading>Нова черга</Heading>
    <div className='flex flex-col w-10/12 md:w-1/3'>
    <QueueCreationForm />
    <DropdownInput title="Кількість учасників - " />
    <Button icon={<ChevronRightIcon className='w-5 md:w-6' />} color="purple" variant="solid">Створити чергу</Button>
    </div>
    </div>
);

export default CreateQueue;