import { QueueInfo } from "../../components/QueueInfo";
import { QueueMembers } from "../../components/QueueMembers";
import { CreateQueueHeading } from "../../components/CreateQueueHeading";
import { API_URL } from "../../constants";
import { DateToQueueDate } from "../../utlis";
import {useState, useEffect, useContext, useRef} from "react";
import { createParticipant, getParticipants } from "../../api/participants";
import { LayoutContext } from "../../components/Layout";
import { useRouter } from "next/router";
import {QueueNotificationClosed, QueueNotificationJoin} from "../../components/QueueNotification";

export const getServerSideProps = async (ctx) => {
 const queueResponse = await fetch(`${API_URL}/queues/${ctx.query.id}`);

 if (!queueResponse.ok) {
  return {
   notFound: true,
  };
 }

 const queue = await queueResponse.json();

 const adminResponse = await fetch(`${API_URL}/users/${queue.adminId}`);
 const admin = await adminResponse.json();

 return {
  props: {queue, admin},
 };
};

const Id = ({ queue, admin }) => {
 const router = useRouter();

 const [participants, setParticipants] = useState([]);
 const [isParticipant, setIsParticipant] = useState(true);

 const start = useRef(DateToQueueDate(new Date(queue.openTime)));
 const end = useRef(DateToQueueDate(new Date(queue.closeTime)));
 const creator = useRef(`${admin.lastName} ${admin.firstName}`);
 const [isAdmin, setIsAdmin] = useState(false);

 const { user } = useContext(LayoutContext);

 useEffect(() => {
  getParticipants(queue.id).then((_participants) =>
   setParticipants(_participants)
  );
 }, []);

 useEffect(() => {
  if (user) {
   setIsAdmin(admin.id === user.id);
  }
 }, [user]);

 useEffect(() => {
  const _isParticipant = participants.some((participant) => {
   if (participant.userId === user.id) {
    return true;
   }
  });
  setIsParticipant(_isParticipant);
 }, [participants]);

 const onAddParticipant = () => {
  createParticipant(queue.id, user.id).then((response) => {
   if (response.ok) {
    router.reload();
   }
  });
 };

 const onAddParticipantCancel = () => router.push("/");

 return (
  <div className="flex justify-center">
   <div className="flex flex-col w-11/12 items-center">
    {!queue.isOpen && <QueueNotificationClosed />}
    {(queue.isOpen && !isParticipant) && (
     <QueueNotificationJoin
      onConfirm={onAddParticipant}
      onCancel={onAddParticipantCancel}
     />
    )}
    <CreateQueueHeading>{queue.name}</CreateQueueHeading>
    <div className="md:flex w-full mt-5 hidden">
     <div className="basis-1/5 px-10">
      <QueueInfo creator={creator.current} start={start.current} end={end.current} isOpen={queue.isOpen} isParticipant={isParticipant} isAdmin={isAdmin} />
     </div>
     <div className="basis-3/5">
      <QueueMembers />
     </div>
     <div className="basis-1/5 px-10"></div>
    </div>
    <div className="md:hidden">
     <QueueInfo creator={creator.current} start={start.current} end={end.current} isOpen={queue.isOpen} isParticipant={isParticipant} isAdmin={isAdmin} />
     <QueueMembers />
    </div>
   </div>
  </div>
 );
};

export default Id;
