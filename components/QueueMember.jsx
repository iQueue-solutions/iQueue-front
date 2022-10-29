import { XIcon, PlusIcon } from "@heroicons/react/outline";
import { Swap } from "./Icons";
import { useState } from "react";
import { ConfirmQueueMember } from "./ConfirmQueueMember";

const OccupiedPlace = ({
 id,
 variant: { isMe, isInQueue },
 name,
 work,
 callback,
}) => {
 const [isQuestion, setIsQuestion] = useState(false);
 const [question] = useState(
  isMe ? "Залишити чергу?" : `Помінятись з ${name}?`
 );

 const openQuestion = () => setIsQuestion(true);
 const closeQuestion = () => setIsQuestion(false);

 if (isQuestion)
  return (
   <ConfirmQueueMember
    title={question}
    onConfirm={() => callback(id)}
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
     {`#${id + 1}`} - {name}
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

const EmptyPlace = ({ id, callback }) => {
 const [isQuestion, setIsQuestion] = useState(false);
 const [lab, setLab] = useState('');

 const openQuestion = () => setIsQuestion(true);
 const closeQuestion = () => setIsQuestion(false);

 if (isQuestion)
  return (
    <ConfirmQueueMember
      title="Зайняти чергу?"
      onConfirm={() => callback(id)}
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
     {`#${id + 1}`} - <u>Вільне місце</u>
    </h1>
    <PlusIcon className="w-6" />
   </div>
  </div>
 );
};

export const QueueMember = ({
 id,
 variant,
 name,
 work,
 callback = () => console.warn("[QueueMember] Empty callback"),
}) => {
 return (
  <>
   {!variant.isEmpty ? (
    <OccupiedPlace
     id={id}
     variant={variant}
     name={name}
     work={work}
     callback={callback}
    />
   ) : (
    <EmptyPlace id={id} callback={callback} />
   )}
  </>
 );
};
