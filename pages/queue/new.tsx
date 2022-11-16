import { CreateQueueHeading } from "../../components/CreateQueueHeading";
import { Button } from "../../components/Button";
import { useRouter } from "next/router";
import { DropdownInput } from "../../components/DropdownInput";
import { ChevronRightIcon, ArrowSmLeftIcon } from "@heroicons/react/outline";
import { useContext, useEffect, useState } from "react";
import { LayoutContext } from "../../components/Layout";
import { Input } from "../../components/Input";
import {useMutation} from "@tanstack/react-query";
import {createQueue} from "../../fetchers/queues";

const New = () => {
  const [maxPeople, setMaxPeople] = useState(0);
  const [queueName, setQueueName] = useState('');

  const formatDate = (date) => {
    return new Date(date.toString().split('GMT')[0]+' UTC').toISOString().split(".")[0];
  }

  let date = new Date();
  const openTime = formatDate(date)
  const [queueOpenTime, setQueueOpenTime] = useState(openTime);

  date.setDate(date.getDay())
  const closeTime = formatDate(date)
  const [queueCloseTime, setQueueCloseTime] = useState(closeTime);

  const {user} = useContext(LayoutContext);

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createQueue,
    onSuccess: (id: string) => {
      router.push(`/queue/${id}`)
    }
  });

 const [minDate, setMinDate] = useState('');
  useEffect(() => {
    setMinDate(formatDate(new Date()));
  }, []);

 return (
  <div className="w-full flex flex-col items-center md:items-center justify-center">
   <CreateQueueHeading icon={<ArrowSmLeftIcon className="w-9" />}>
    Нова черга
   </CreateQueueHeading>
   <div className="flex flex-col w-10/12 md:w-1/3">
     <form className="mt-9">
       <Input value={queueName} placeholder="Назва" handleInput={setQueueName}/>

       <div className="text-slate-600 text-lg">{"Час початку запису в чергу"}</div>
       <Input min={minDate} value={queueOpenTime} type={"datetime-local"} handleInput={setQueueOpenTime} placeholder="Час початку запису в чергу" />

       <div className="text-slate-600 text-lg">{"Кінець черги"}</div>
       <Input min={minDate} value={queueCloseTime} type={"datetime-local"} handleInput={setQueueCloseTime} placeholder="Кінець запису в чергу" />
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
     onClick={() => mutation.mutate({
        name: queueName,
        adminId: user.id,
        openTime: queueOpenTime,
        closeTime: queueCloseTime,
        maxRecordNumber: maxPeople,
     })}
    >
     Створити чергу
    </Button>
   </div>
  </div>
 );
};

export default New;
