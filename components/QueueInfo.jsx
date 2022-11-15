import {
  UserAddIcon, TrashIcon,
  CogIcon,
  ShareIcon, ShieldExclamationIcon, ClockIcon,
  LockOpenIcon, LockClosedIcon, ArrowCircleLeftIcon
} from "@heroicons/react/outline";
import {useState} from "react";
import {AddToQueue} from "./AddToQueue";

export const QueueCreator = ({ Icon, children }) => {
  return (
    <div className="text-slate-500 flex p-2 items-center">
      <Icon className="w-6 md:w-7" />
      <div className="ml-1 text-md md:text-lg font-semibold">{children}</div>
    </div>
  );
};

export const QueueTime = ({start, end}) => {
  return(
    <>
    <div className="text-slate-500 flex p-2 md:hidden items-center">
      <ClockIcon className="w-6 md:w-7" />
      <div className="ml-1 text-md font-semibold">{(start || '').slice(0,-5)} - {(end || '').slice(0,-5)}</div>
    </div>
    <div className="hidden md:flex flex-col">
      <div className="text-slate-500 flex p-2">
      <ClockIcon className="w-6 md:w-7" />
      <div className="ml-1 text-lg font-semibold">{start}</div>
    </div>
    <div className="text-slate-500 flex p-2">
      <ClockIcon className="w-6 md:w-7" />
      <div className="ml-1 text-lg font-semibold">{end}</div>
    </div>
    </div>
    </>
  );
};

export const QueueOptionsBtn = ({ Icon, onClick, children }) => {
  return (
    <div className="flex md:bg-slate-200 p-2 rounded-2xl md:hover:bg-slate-300 mb-1" onClick={onClick}>
      <Icon className="w-6 md:w-7 hover:text-purple-500" />
      <div className="ml-2 text-slate-700 hidden md:flex">{children}</div>
    </div>
  );
}

export const QueueInfo = ({creator, start, end, isOpen, isParticipant, isAdmin}) => {
  const [isAddToQueue, setIsAddToQueue] = useState(false);
  const showAddPeople = () => setIsAddToQueue(true);
  const hideAddPeople = () => setIsAddToQueue(false);

 return (
   <div className="flex flex-col md:w-full font-semibold md:mt-2 mb-7 cursor-pointer items-center">
    <div className="flex md:flex-col justify-between w-full">
      <QueueCreator Icon={ShieldExclamationIcon}>{creator}</QueueCreator>
      <QueueTime start={start} end={end} />
    </div>
    <div className="text-purple-800 flex md:flex-col md:w-full">
      <QueueOptionsBtn Icon={ShareIcon}>Поділитися</QueueOptionsBtn>
      {isParticipant &&
        <QueueOptionsBtn Icon={ArrowCircleLeftIcon}>Вийти</QueueOptionsBtn>
      }
      {isAdmin && <>
        <hr className="my-4 mx-auto w-40 h-1 bg-gray-200 sm:hidden md:block" />
        <QueueOptionsBtn Icon={UserAddIcon} onClick={showAddPeople}>Додати</QueueOptionsBtn>
        <QueueOptionsBtn Icon={CogIcon}>Налаштування</QueueOptionsBtn>
        {isOpen
          ? <QueueOptionsBtn Icon={LockOpenIcon}>Заблокувати</QueueOptionsBtn>
          : <QueueOptionsBtn Icon={LockClosedIcon}>Розблокувати</QueueOptionsBtn>
        }
        <QueueOptionsBtn Icon={TrashIcon}>Видалити</QueueOptionsBtn>
      </>}
    </div>
     {isAddToQueue && <AddToQueue onClose={hideAddPeople} />}
   </div>
 );
};
