import { QueueInfo } from "../../components/QueueInfo";
import { QueueMembers } from "../../components/QueueMembers";
import { CreateQueueHeading } from "../../components/CreateQueueHeading";
import { ArrowSmLeftIcon } from "@heroicons/react/outline";

const Id = () => (
 <div className="flex justify-center">
  <div className="flex flex-col w-11/12 items-center">
   <CreateQueueHeading icon={<ArrowSmLeftIcon className="w-9" />}>ПарП ПЗПІ-20-2</CreateQueueHeading>
   <div className="md:flex w-full mt-5 hidden">
    <div className="basis-1/5 px-10">
      <QueueInfo />
    </div>
    <div className="basis-3/5">
      <QueueMembers />
    </div>
    <div className="basis-1/5 px-10">
    </div>
   </div>
   <div className="md:hidden">
    <QueueInfo />
    <QueueMembers />
   </div>
  </div>
 </div>
);
export default Id;
