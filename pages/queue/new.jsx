import { CreateQueueHeading } from "../../components/CreateQueueHeading";
import { Button } from "../../components/Button";
import { DropdownInput } from "../../components/DropdownInput";
import {ChevronRightIcon, ArrowSmLeftIcon, CalendarIcon} from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { API_URL } from "../../constants";
import { LayoutContext } from "../../components/Layout";
import {Input} from "../../components/Input";

const calendarIcon = <CalendarIcon className="w-5 md:w-6 mr-2" />;

const New = () => {
  const [maxPeople, setMaxPeople] = useState(0);
  const [queueName, setQueueName] = useState('');
  const [queueOpenTime, setQueueOpenTime] = useState('');
  const [queueCloseTime, setQueueCloseTime] = useState('');

  const {user} = useContext(LayoutContext);

  const inputQueueName = (event) => {
    const value = event.target.value;
    setQueueName(value);
  }

  const inputQueueOpenTime = (event) => {
    const value = event.target.value;
    const date = new Date(value).toISOString()
    setQueueOpenTime(date);
  }

  const inputQueueCloseTime = (event) => {
    const value = event.target.value;
    const date = new Date(value).toISOString()
    setQueueCloseTime(date);
  }

  async function createQueue() {
    const response = await fetch(`${API_URL}/queues`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: queueName,
        adminId: user.id,
        openTime: queueOpenTime,
        closeTime: queueCloseTime,
        isOpen: true,
        maxRecordNumber: maxPeople,
      }),
    });
  }

 return (
  <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center">
   <CreateQueueHeading icon={<ArrowSmLeftIcon className="w-8" />}>
    Нова черга
   </CreateQueueHeading>
   <div className="flex flex-col w-10/12 md:w-1/3 mt-7">
     <form className="mt-9">
       <Input placeholder="Назва" handleInput={inputQueueName}/>
       <Input type={"date"} handleInput={inputQueueOpenTime} placeholder="Початок запису в чергу" />
       <Input type={"date"} handleInput={inputQueueCloseTime} placeholder="Кінець запису в чергу" />
     </form>
    <DropdownInput
     title="Кількість учасників - "
     amount={maxPeople}
     setAmount={setMaxPeople}
    />
    <Button
     icon={<ChevronRightIcon className="w-5 md:w-6" />}
     color="purple"
     variant="solid"
     onClick={createQueue}
    >
     Створити чергу
    </Button>
   </div>
  </div>
 );
};

export default New;
