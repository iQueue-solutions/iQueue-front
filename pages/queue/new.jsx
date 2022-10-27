import {CreateQueueHeading} from '../../components/CreateQueueHeading';
import {Button} from '../../components/Button';
import { QueueCreationForm} from '../../components/QueueCreationForm';
import {DropdownInput} from '../../components/DropdownInput'
import {ChevronRightIcon, ArrowSmLeftIcon} from "@heroicons/react/outline";
import {useContext, useState} from "react";
import {API_URL} from "../../constants";
import {LayoutContext} from "../../components/Layout";

const New = () => {
  const [maxPeople, setMaxPeople] = useState(0);

  const {user} = useContext(LayoutContext);

  async function createQueue() {
    const queueID = crypto.randomUUID();
    const adminID = user.id;

    const response = await fetch(`${API_URL}/Queues`, {
      method: "POST",
      body: JSON.stringify({
        id: queueID,
        adminID: adminID,
        createTime: new Date().toISOString(),
        isOpen: true,
        maxRecordNumber: maxPeople,
      }),
    });
  }

  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center'>
      <CreateQueueHeading icon={<ArrowSmLeftIcon className='w-8' />}>Нова черга</CreateQueueHeading>
      <div className='flex flex-col w-10/12 md:w-1/3'>
        <QueueCreationForm />
        <DropdownInput title="Кількість учасників - " amount={maxPeople} setAmount={setMaxPeople} />
        <Button icon={<ChevronRightIcon className='w-5 md:w-6' />} color="purple" variant="solid" margin={10}
          onClick={createQueue}
        >Створити чергу</Button>
      </div>
    </div>
  )
}

export default New;
