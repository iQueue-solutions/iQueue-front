import { XIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { Button } from "../Button";
import {useMutation, useQuery} from "@tanstack/react-query";
import {getUsers, User} from "../../fetchers/users";
import {getQueue} from "../../fetchers/queues";
import React, {useContext, useEffect, useMemo, useState} from "react";
import {createParticipants} from "../../fetchers/participants";

interface PreParticipantProps {
  user: User;
}
const PreParticipant = ({ user }: PreParticipantProps) => {

  const [isChecked, setChecked] = useState(false);
  const usersMap = useContext(PreParticipantsContext);

  function onChecked() {
    setChecked(c => {
      usersMap.set(user.id, !c);
      return !c;
    });
  }

  return (
    <div className="flex md:w-1/4" key={`pre-participant-${user.id}`}>
      <PlusCircleIcon className={`w-6 ${isChecked ? 'text-green-400 hover:text-green-600' : 'text-gray-400 hover:text-gray-600'}`} onClick={onChecked} />
      <div className="pl-1 w-3/4 text-gray-700">{user.lastName} {user.firstName}</div>
    </div>
  )
}

const PreParticipantsContext = React.createContext(new Map<string, boolean>());

export const AddToQueue = ({ queueId, onClose }) => {
  const {data: users} = useQuery({queryKey: ['users'], queryFn: getUsers});
  const {data: queueData, refetch: refetchQueueData} = useQuery({queryKey: ['queues', queueId], queryFn: () => getQueue(queueId)});

  const nonParticipants = useMemo(() => {
    if (!users || !queueData) {
      return [];
    }
    return users.filter((user) => {
      if (!queueData?.participants?.some((participant) => participant.userId === user.id)) {
        return user;
      }
    });
  }, [users, queueData]);

  const usersMap = useContext(PreParticipantsContext);

  useEffect(() => {
    for (const user of nonParticipants) {
      usersMap.set(user.id, false);
    }
  }, [nonParticipants]);

  const mutation = useMutation({
    mutationFn: createParticipants,
    onSuccess: () => {
      onClose();
      refetchQueueData();
    }
  });

  function onSubmit() {
    const participants = [];
    for (const [userId, isChecked] of usersMap) {
      if (isChecked) {
        participants.push(userId);
      }
    }
    mutation.mutate({
      queueId,
      userIds: participants
    });
  }

 return (
  <div className="bg-blue-300 z-10 flex flex-col items-center fixed rounded-lg w-[330px] md:w-[1100px] h-[500px] md:h-[600px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%] drop-shadow-2xl">
   <XIcon
    className="w-7 md:w-8 self-end text-slate-50 m-1 hover:text-purple-800"
    onClick={onClose}
   />
   <div className="bg-slate-50 w-[270px] md:w-[1000px] h-[400px] md:h-[450px] flex flex-col items-center px-5 md:mb-7">
    <h1 className="text-2xl md:text-4xl font-bold pt-2 pb-1">
     Додати до черги
    </h1>
    <h2 className="text-xl md:text-2xl text-gray-400 font-semibold pb-5">{queueData?.name}</h2>
    <div className="flex flex-col overflow-scroll overflow-x-hidden md:overflow-hidden w-full md:flex-wrap md:items-center">
      {nonParticipants?.map((user) => (
        <PreParticipant user={user} key={`pre-participant-${user.id}`} />
      ))}
    </div>
   </div>
   <Button color="purple" variant="solid" margin={2} onClick={onSubmit}>
    {"Підтвердити"}
   </Button>
  </div>
 );
};
