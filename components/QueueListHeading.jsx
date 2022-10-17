import Heading from "../components/Heading";
import ShareQueue from "../components/ShareQueue";
import QueueCreator from "../components/QueueCreator";

const QueueListHeading = ({ queuename, queuecreator }) => {
 return (
  <div className="mb-12">
   <div className="flex justify-center">
    <Heading>{queuename}</Heading>
    <ShareQueue />
   </div>
   <QueueCreator className="justify-self-start">{queuecreator}</QueueCreator>
  </div>
 );
};

export default QueueListHeading;
