import { QueueCreator } from "../components/QueueCreator";
import { GroupHeading } from "../components/GroupHeading";
import {
 UserAddIcon,
 CogIcon,
 ShareIcon,
 ArrowSmLeftIcon,
} from "@heroicons/react/outline";

export const QueueInfo = () => {
 return (
  <div className="mt-6 mb-10">
   <ArrowSmLeftIcon className="absolute text-purple-800 mr-10 w-9 md:hidden hover:text-purple-500" />
   <GroupHeading queueName="АВПЗ ПЗПІ-20-2" />
   <div className="flex justify-between">
    <QueueCreator>Олійник О. В.</QueueCreator>
    <div className="text-purple-800 flex">
     <UserAddIcon className="w-6 md:w-7 hover:text-purple-500" />
     <CogIcon className="w-6 md:w-7 hover:text-purple-500" />
     <ShareIcon className="w-6 md:w-7 hover:text-purple-500" />
    </div>
   </div>
  </div>
 );
};
