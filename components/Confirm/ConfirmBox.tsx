import {CheckIcon, PlusCircleIcon, XIcon} from "@heroicons/react/outline";
import {DateInput} from "../Input";
import {useMutation, useQuery} from "@tanstack/react-query";
import {closeQueue, getQueue, openQueue, removeQueue, changeAdmin} from "../../fetchers/queues";
import {getUser, getUsers, User} from "../../fetchers/users";
import {useRouter} from "next/router";
import React, {useState} from "react";
import {Button} from "../Button";

interface ConfirmBoxProps {
  question: string;
  onConfirm: () => void;
  onCancel: () => void;
  withDateInput?: boolean;
  dateInputProps?: {
    title: string;
    initialDate: Date;
    setTime: (time: string) => void;
  }
}
const ConfirmBox = ({ question, onConfirm, onCancel, withDateInput, dateInputProps }: ConfirmBoxProps) => {
 return (
  <div className="flex flex-col items-center justify-center md:h-[50vh] md:w-[50vw] h-[30vh] z-10 w-[70vh] border-[6px] border-purple-800 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-50 drop-shadow-2xl">
   <div className="w-10/12 text-center text-2xl md:text-4xl md:mb-10 mb:5">{question}</div>
    {withDateInput && <DateInput {...dateInputProps} /> }
   <div className="flex w-10/12 justify-around">
    <button onClick={onConfirm} className="m-3 lg:px-24 md:py-2 px-10 py-1 rounded-lg bg-green-300 transition border-[3px] border-transparent hover:border-green-500">
     <CheckIcon className="w-7" />
    </button>
    <button onClick={onCancel} className="m-3 lg:px-24 md:py-2 px-10 py-1 rounded-lg bg-red-300 transition border-[3px] border-transparent hover:border-red-500">
     <XIcon className="w-7" />
    </button>
   </div>
  </div>
 );
};

interface ConfirmQueueOpenBoxProps {
  queueName: string;
  queueId: string;
  hideConfirm: () => void;
}
export const ConfirmQueueOpenBox = ({ queueName, queueId, hideConfirm }: ConfirmQueueOpenBoxProps) => {
  const {data: queueData, refetch} = useQuery({queryKey: ['queues', queueId], queryFn: () => getQueue(queueId)});
  const {data: adminData} = useQuery({
    queryKey: ['users', queueData.adminId],
    queryFn: () => getUser(queueData.adminId),
    enabled: !!queueData.adminId,
  });

  const mutation = useMutation({
    mutationFn: openQueue,
    onSuccess: async (_: string) => {
      await refetch();
      hideConfirm();
    },
  })

  return (
    <ConfirmBox
      question={`Розблокувати чергу "${queueName}"?`}
      onConfirm={
        () => mutation.mutate({
          id: queueData.id,
          userId: adminData.id,
        })
      }
      onCancel={hideConfirm}
      />
  );
};

interface ConfirmQueueCloseBoxProps {
  queueName: string;
  queueId: string;
  hideConfirm: () => void;
}
export const ConfirmQueueCloseBox = ({ queueName, queueId, hideConfirm }: ConfirmQueueCloseBoxProps) => {
  const {data: queueData, refetch} = useQuery({queryKey: ['queues', queueId], queryFn: () => getQueue(queueId)});
  const {data: adminData} = useQuery({
    queryKey: ['users', queueData.adminId],
    queryFn: () => getUser(queueData.adminId),
    enabled: !!queueData.adminId,
  });

  const mutation = useMutation({
    mutationFn: closeQueue,
    onSuccess: async (_: string) => {
      await refetch();
      hideConfirm();
    },
  })

  return (
    <ConfirmBox
      question={`Заблокувати чергу "${queueName}"?`}
      onConfirm={
        () => mutation.mutate({
          id: queueData.id,
          userId: adminData.id,
        })
      }
      onCancel={hideConfirm}
    />
  );
};

export const ConfirmQueueDeleteBox = ({ queueName, queueId, hideConfirm }: ConfirmQueueCloseBoxProps) => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: removeQueue,
    onSuccess: () => {
      hideConfirm();
      router.push('/');
    },
  })

  return (
    <ConfirmBox
      question={`Видалити чергу "${queueName}"?`}
      onConfirm={
        () => mutation.mutate({
          id: queueId,
        })
      }
      onCancel={hideConfirm}
    />
  );
};

const PreAdmin = ({ user, setSelectedUserId }: {
  user: User,
  setSelectedUserId: (id: string | null) => void,
} ) => {
  const [isChecked, setChecked] = useState(false);

  function onChecked() {
    setChecked(c => {
      setSelectedUserId(!c ? user.id : "");
      return !c;
    });
  }

  return (
    <div className="flex md:w-1/4">
      <PlusCircleIcon className={`w-6 ${isChecked ? 'text-green-400 hover:text-green-600' : 'text-gray-400 hover:text-gray-600'}`} onClick={onChecked} />
      <div className="pl-1 w-3/4 text-gray-700">{user.lastName} {user.firstName}</div>
    </div>
  )
}

export const ConfirmChangeAdminBox = ({ queueId, hideConfirm }: ConfirmQueueCloseBoxProps) => {
  const {data: users} = useQuery({queryKey: ['users'], queryFn: getUsers});
  const {data: queue, refetch: refetchQueue} = useQuery({queryKey: ['queues', queueId], queryFn: () => getQueue(queueId)});

  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: changeAdmin,
    onSuccess: async () => {
      await refetchQueue();
      hideConfirm();
    },
  })

  const changeAdminCallback = () => mutation.mutate({
    queueId: queue.id,
    userId: selectedUserId,
  })

  return (
  <div className="bg-blue-300 z-10 flex flex-col items-center fixed rounded-lg w-[330px] md:w-[1100px] h-[500px] md:h-[600px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%] drop-shadow-2xl">
    <XIcon
      className="w-7 md:w-8 self-end text-slate-50 m-1 hover:text-purple-800"
      onClick={hideConfirm}
    />
    <div className="bg-slate-50 w-[270px] md:w-[1000px] h-[400px] md:h-[450px] flex flex-col items-center px-5 md:mb-7">
      <h1 className="text-2xl md:text-4xl font-bold pt-2 pb-1">
        Передати права адміністратора черги?
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-400 font-semibold pb-5">{queue?.name} {selectedUserId}</h2>
      <div className="flex flex-col overflow-scroll overflow-x-hidden md:overflow-hidden w-full md:flex-wrap md:items-center">
        {queue?.participants?.map((participant) => {
          const user = users?.find((user) => user.id === participant.userId);

          if (user)
            return <PreAdmin user={user} key={`pre-admin-${user.id}`} setSelectedUserId={setSelectedUserId} />
        })}
      </div>
    </div>
    {selectedUserId &&
      <Button color="purple" variant="solid" margin={2} onClick={changeAdminCallback}>Підтвердити</Button>
    }
  </div>
  );
};
