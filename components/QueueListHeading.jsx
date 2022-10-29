import { Heading } from "./Heading";
import { ShareQueue } from "./ShareQueue";
import { QueueCreator } from "./QueueInfo";

export const QueueListHeading = ({ queueName, queueCreator }) => {
 return (
  <div className="mb-12">
   <div className="flex justify-center">
    <Heading>{queueName}</Heading>
    <ShareQueue />
   </div>
   <QueueCreator>{queueCreator}</QueueCreator>
  </div>
 );
};
