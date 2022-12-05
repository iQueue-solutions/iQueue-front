import { QueueInfo } from "../../components/QueueInfo";
import { QueueMembers } from "../../components/QueueMembers";
import { CreateQueueHeading } from "../../components/CreateQueueHeading";
import { API_URL } from "../../constants";
import {useState, useEffect, useContext} from "react";
import { LayoutContext } from "../../components/Layout";
import {QueueNotificationClosed, QueueNotificationJoin} from "../../components/QueueNotification";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import {getUser} from "../../fetchers/users";
import {getQueue, Queue} from "../../fetchers/queues";

export const getServerSideProps = async (ctx) => {
 const queueResponse = await fetch(`${API_URL}/queues/${ctx.query.id}`);

 if (!queueResponse.ok) {
  return {
   notFound: true,
  };
 }

 const queue: Queue = await queueResponse.json();
 const queryClient = new QueryClient();
 await queryClient.setQueryData(['queues', queue.id], queue);

 return {
  props: {
   queueId: ctx.query.id,
   dehydratedState: dehydrate(queryClient),
  },
 };
};

const Id = ({ queueId }) => {
 const {data: queueData} = useQuery({queryKey: ['queues', queueId], queryFn: () => getQueue(queueId)});
 const {data: adminData} = useQuery({
  queryKey: ['users', queueData.adminId],
  queryFn: () => getUser(queueData.adminId),
  enabled: !!queueData.adminId,
 });

 const [isParticipant, setIsParticipant] = useState(true);

 const [creator, setCreator] = useState('...');
 const [isAdmin, setIsAdmin] = useState(false);

 const { user } = useContext(LayoutContext);

 useEffect(() => {
  if (adminData) {
   setCreator(`${adminData.lastName} ${adminData.firstName}`);
  }
 }, [adminData]);

 useEffect(() => {
  if (user && adminData) {
   setIsAdmin(adminData.id === user.id);
  }
 }, [user, adminData]);

 useEffect(() => {
  const _isParticipant = queueData.participants?.some((participant) => {
   if (participant.userId === user.id) {
    return true;
   }
  }) || false;
  setIsParticipant(_isParticipant);
 }, [queueData, user.id]);

 return (
  <div className="flex justify-center">
   <div className="flex flex-col w-11/12 items-center">
    {!queueData.isOpen && <QueueNotificationClosed />}
    {(queueData.isOpen && !isParticipant) && (
     <QueueNotificationJoin queueId={queueData.id} userId={user.id} />
    )}
    <CreateQueueHeading>{queueData.name}</CreateQueueHeading>
    <div className="md:flex w-full mt-5 hidden">
     <div className="basis-1/5 px-10">
      <QueueInfo queueData={queueData} creator={creator} isParticipant={isParticipant} isAdmin={isAdmin} />
     </div>
     <div className="basis-3/5">
      <QueueMembers queueId={queueId} />
     </div>
     <div className="basis-1/5 px-10"></div>
    </div>
    <div className="md:hidden">
     <QueueInfo queueData={queueData} creator={creator} isParticipant={isParticipant} isAdmin={isAdmin} />
     <QueueMembers  queueId={queueId}/>
    </div>
   </div>
  </div>
 );
};

export default Id;
