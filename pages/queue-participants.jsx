import { QueueInfo } from "../components/QueueInfo";
import { QueueMembers } from "../components/QueueMembers";

const QueueParticipants = () => (
 <div className="flex justify-center">
  <div className="flex flex-col w-11/12 md:w-1/2">
   <QueueInfo />
   <QueueMembers />
  </div>
 </div>
);
export default QueueParticipants;
