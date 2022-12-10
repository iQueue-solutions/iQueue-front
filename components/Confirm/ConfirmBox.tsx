import { CheckIcon, XIcon } from "@heroicons/react/outline";
import {DateInput} from "../Input";
import {useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {closeQueue, getQueue, openQueue, removeQueue} from "../../fetchers/queues";
import {getUser} from "../../fetchers/users";
import {useRouter} from "next/router";

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
  const getInitialDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  }
  const [time, setTime] = useState('');

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
          openTime: time,
        })
      }
      onCancel={hideConfirm}
      withDateInput
      dateInputProps={{
        title: "Кінець запису в чергу",
        initialDate: getInitialDate(),
        setTime: setTime,
      }}
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
