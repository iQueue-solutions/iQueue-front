import QueueListHeading from "../components/QueueListHeading";
import { QueueMembers } from "../components/QueueMembers";

const QueueParticipants = () => (
 <div className="flex justify-center">
  <div className="flex flex-col w-2/5">
   <QueueListHeading queueName="АВПЗ ПЗПІ-20-2" queueCreator="Ігор Мічурін" />
   <QueueMembers />
  </div>
 </div>
);
export default QueueParticipants;
