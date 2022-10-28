import { CreateQueueHeading } from "../../components/CreateQueueHeading";
import { Button } from "../../components/Button";
import { QueueCreationForm } from "../../components/QueueCreationForm";
import { DropdownInput } from "../../components/DropdownInput";
import { ChevronRightIcon, ArrowSmLeftIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { API_URL } from "../../constants";
import { LayoutContext } from "../../components/Layout";

const New = () => {
  const [maxPeople, setMaxPeople] = useState(0);

  const {user} = useContext(LayoutContext);

  async function createQueue() {
    const response = await fetch(`${API_URL}/queues`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Test queue name",
        adminId: user.id,
        openTime: new Date().toISOString(),
        closeTime: new Date().toISOString(),
        isOpen: true,
        maxRecordNumber: maxPeople,
      }),
    });
  }

 return (
  <div className="w-full flex flex-col items-center md:items-center justify-center">
   <CreateQueueHeading icon={<ArrowSmLeftIcon className="w-9" />}>
    Нова черга
   </CreateQueueHeading>
   <div className="flex flex-col w-10/12 md:w-1/3">
    <QueueCreationForm />
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
