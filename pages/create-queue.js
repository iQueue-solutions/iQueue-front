import {CreateQueueHeading} from '../components/CreateQueueHeading';
import {Button} from '../components/Button';
import { QueueCreationForm} from '../components/QueueCreationForm';
import {DropdownInput} from '../components/DropdownInput'
import {ChevronRightIcon, ArrowSmLeftIcon} from "@heroicons/react/outline";
import { Navbar } from '../components/Navbar';

const CreateQueue = () => (
  <div className='flex flex-col mt-10 w-full items-center'>
    <div className='w-11/12 flex flex-col items-center bg-slate-50 py-5 mt-20 cont-size pb-2 overflow-scroll'>
    <CreateQueueHeading icon={<ArrowSmLeftIcon className='w-8 md:w-9' />}>Нова черга</CreateQueueHeading>
    <QueueCreationForm />
    <DropdownInput title="Кількість учасників - " />
    <Button icon={<ChevronRightIcon className='w-5 md:w-6' />} color="purple" variant="solid">Створити чергу</Button>
    </div>
    <Navbar />
  </div>
);

export default CreateQueue;