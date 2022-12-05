import { XIcon, PlusIcon } from "@heroicons/react/outline";
import { Swap } from "./Icons";
import { useState } from "react";
import { ConfirmQueueMember } from "./ConfirmQueueMember";
import {useMutation, useQuery} from "@tanstack/react-query";
import {getUser} from "../fetchers/users";
import {removeRecord} from "../fetchers/records";

const OccupiedPlace = ({
                                index,
                                variant: { isMe, isInQueue },
                                userId,
                                work,
                                onModalConfirm,
                              }) => {
  const {data: userData} = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
  });

  const [isQuestion, setIsQuestion] = useState(false);
  const [question] = useState(
    isMe ? "Залишити чергу?" : `Помінятись з ${name}?`
  );

  const openQuestion = () => setIsQuestion(true);
  const closeQuestion = () => setIsQuestion(false);

  const onConfirm = () => {
    onModalConfirm();
    closeQuestion();
  }

  if (isQuestion)
    return (
      <ConfirmQueueMember
        title={question}
        onConfirm={onConfirm}
        onCancel={closeQuestion}
      />
    );

  return (
    <div
      className={`w-full bg-blue-300 h-[100px] rounded-xl mb-3 ${
        isMe && "border-4 border-solid border-yellow-400"
      }`}
    >
      <div className="flex justify-between px-5 py-3 font-semibold">
        <h1 className="text-xl md:text-2xl w-2/3">
          {`#${index + 1}`} - {userData?.lastName} { userData?.firstName}
        </h1>
        <div className="flex">
          <h2 className="text-xl">{work}</h2>
          {isInQueue && (
            <button
              onClick={openQuestion}
              className="bg-blue-200 rounded-md h-9 px-1.5 ml-3 mt-[-5px] hover:bg-blue-300 transition"
            >
              {isMe ? <XIcon className="w-6" /> : <Swap />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const MyPlace = ({ index, userId, recordId, work, refetchRecords }) => {
  const mutation = useMutation({
    mutationFn: removeRecord,
    onSuccess: () => {
      refetchRecords();
    }
  });

  const onLeaveQueue = () => mutation.mutate({recordId});

  return (
    <OccupiedPlace {...{ index, userId, work }} variant={{ isMe: true, isInQueue: true }} onModalConfirm={onLeaveQueue} />
  );
}

export const StrangerPlace = ({ index, userId, work, isInQueue }) => {
  return (
    <OccupiedPlace {...{ index, userId, work }} variant={{ isMe: false, isInQueue }} />
  );
}

export const EmptyPlace = ({ index, callback }) => {
  const [isQuestion, setIsQuestion] = useState(false);
  const [lab, setLab] = useState('');

  const openQuestion = () => setIsQuestion(true);
  const closeQuestion = () => setIsQuestion(false);

  if (isQuestion)
    return (
      <ConfirmQueueMember
        title="Зайняти чергу?"
        onConfirm={() => callback(index)}
        onCancel={closeQuestion}
        isInput
        inputValue={lab}
        setInputValue={setLab}
      />
    );

  return (
    <div
      className="w-full cursor-pointer bg-slate-300 h-[100px] rounded-xl mb-3 hover:bg-blue-300 transition text-slate-500 hover:text-slate-900"
      onClick={openQuestion}
    >
      <div className="flex justify-between px-5 py-3 font-semibold">
        <h1 className="text-xl md:text-2xl">
          {`#${index + 1}`} - <u>Вільне місце</u>
        </h1>
        <PlusIcon className="w-6" />
      </div>
    </div>
  );
};
