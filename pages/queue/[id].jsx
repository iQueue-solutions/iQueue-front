import { QueueInfo } from "../../components/QueueInfo";
import { QueueMembers } from "../../components/QueueMembers";
import { CreateQueueHeading } from "../../components/CreateQueueHeading";
import { API_URL } from "../../constants";
import { DateToQueueDate } from "../../utlis";
import { useState, useEffect, useContext } from "react";
import { createParticipant, getParticipants } from "../../api/participants";
import { LayoutContext } from "../../components/Layout";
import { useRouter } from "next/router";
import { QueueStatus } from "../../components/QueueStatus";

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
  props: {
   name: queue.name,
   queueInfo: {
    id: queue.id,
    start: DateToQueueDate(new Date(queue.openTime)),
    end: DateToQueueDate(new Date(queue.closeTime)),
    creator: `${admin.lastName} ${admin.firstName}`,
   },
  },
 };
};

const Id = ({ name, queueInfo }) => {
 const router = useRouter();

 const [participants, setParticipants] = useState([]);
 const [isParticipant, setIsParticipant] = useState(false);

 const { user } = useContext(LayoutContext);

 useEffect(() => {
  getParticipants(queueInfo.id).then((_participants) =>
   setParticipants(_participants)
  );
 }, []);

 useEffect(() => {
  const _isParticipant = participants.some((participant) => {
   if (participant.userId === user.id) {
    return true;
   }
  });
  setIsParticipant(_isParticipant);
 }, [participants]);

 const onAddParticipant = () => {
  createParticipant(queueInfo.id, user.id).then((response) => {
   if (response.ok) {
    router.reload();
   }
  });
 };

 const onAddParticipantCancel = () => router.push("/");

 return (
  <div className="flex justify-center">
   <div className="flex flex-col w-11/12 items-center">
    {!isParticipant && (
     <QueueStatus
      isOpen={false}
      onConfirm={onAddParticipant}
      onCancel={onAddParticipantCancel}
     />
    )}
    <CreateQueueHeading>{name}</CreateQueueHeading>
    <div className="md:flex w-full mt-5 hidden">
     <div className="basis-1/5 px-10">
      <QueueInfo {...queueInfo} />
     </div>
     <div className="basis-3/5">
      <QueueMembers />
     </div>
     <div className="basis-1/5 px-10"></div>
    </div>
    <div className="md:hidden">
     <QueueInfo {...queueInfo} />
     <QueueMembers />
    </div>
   </div>
  </div>
 );
};

export default Id;
