import {CreateQueueHeading} from '../components/CreateQueueHeading';
import {Button} from '../components/Button';
import { QueueCreationForm} from '../components/QueueCreationForm';
import {DropdownInput} from '../components/DropdownInput'
import {ChevronRightIcon, ArrowSmLeftIcon} from "@heroicons/react/outline";
import { Navbar } from '../components/Navbar';

const CreateQueue = () => (
  <div className='flex w-screen flex-col mt-10 items-center bg-blue-300'>
    <Navbar />
    <div className='w-11/12 flex flex-col items-center bg-slate-50 py-5 mt-20 pb-5'>
    <CreateQueueHeading icon={<ArrowSmLeftIcon className='w-8 md:w-9' />}>Нова черга</CreateQueueHeading>
    <QueueCreationForm />
    <DropdownInput title="Кількість учасників - " />
    <Button icon={<ChevronRightIcon className='w-5 md:w-6' />} color="purple" variant="solid">Створити чергу</Button>
    </div>
  </div>
);

export default CreateQueue;