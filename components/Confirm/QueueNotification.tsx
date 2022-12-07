import { CheckIcon, XIcon, LockClosedIcon } from "@heroicons/react/outline";
import {useQuery, useMutation} from "@tanstack/react-query";
import {createParticipant} from "../../fetchers/participants";
import {getQueue} from "../../fetchers/queues";
import {useRouter} from "next/router";

export const QueueNotificationJoin = ({queueId, userId}) => {
  const {refetch} = useQuery({queryKey: ['queues', queueId], queryFn: () => getQueue(queueId)});
  const mutation = useMutation({
    mutationFn: createParticipant,
    onSuccess: async (_: string) => {
      await refetch();
    }
  })

  const router = useRouter();

  const onConfirm = () => mutation.mutate({queueId, userId});
  const onCancel = () => router.push("/");

  return (
   <div className="md:w-3/5 w-11/12 bg-amber-200 h-[100px] rounded-b-[50px] mb-3">
    <div className="flex flex-col items-center px-5 py-3 font-semibold">
     <h1 className="text-lg md:text-2xl text-left">
      Бажаєте приєднатись до цієї черги?
     </h1>
     <div className="flex items-center">
      <div className="flex">
       <button
        onClick={onConfirm}
        className="px-7 m-3 h-8 md:h-9 md:px-10 rounded-lg bg-green-300 transition border-[3px] border-transparent hover:border-green-400"
       >
        <CheckIcon className="w-5 md:w-6" />
       </button>
       <button
        onClick={onCancel}
        className="px-7 m-3 h-8 md:h-9 md:px-10 rounded-lg bg-red-300 transition border-[3px] border-transparent hover:border-red-500"
       >
        <XIcon className="w-6" />
       </button>
      </div>
     </div>
    </div>
   </div>
  );
};

export const QueueNotificationClosed = () => {
 return (
   <div className="md:w-3/5 w-11/12 bg-slate-300 text-slate-900 flex justify-center text-lg md:text-2xl rounded-b-[50px] font-semibold py-5">
    <LockClosedIcon className="w-5 md:w-6" />
    <div className="ml-5">Черга закрита</div>
   </div>
 );
}