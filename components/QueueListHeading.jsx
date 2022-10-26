import { Heading } from "./Heading";
import { ShareQueue } from "./ShareQueue";
import { QueueCreator } from "./QueueCreator";

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