import {CreateQueueHeading} from '../../components/CreateQueueHeading';
import {Button} from '../../components/Button';
import { QueueCreationForm} from '../../components/QueueCreationForm';
import {DropdownInput} from '../../components/DropdownInput'
import {ChevronRightIcon, ArrowSmLeftIcon} from "@heroicons/react/outline";

const New = () => (

    <div className='w-full flex flex-col md:flex-row items-center justify-center'>
    <CreateQueueHeading icon={<ArrowSmLeftIcon className='w-8' />}>Нова черга</CreateQueueHeading>
    <div className='flex flex-col w-10/12 md:w-1/3'>
    <QueueCreationForm />
    <DropdownInput title="Кількість учасників - " />
    <Button icon={<ChevronRightIcon className='w-5 md:w-6' />} color="purple" variant="solid" margin={10}>Створити чергу</Button>
    </div>
    </div>
);

export default New;
