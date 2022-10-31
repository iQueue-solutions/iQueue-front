import {
  UserAddIcon,
  CogIcon,
  ShareIcon, ShieldExclamationIcon, ClockIcon
} from "@heroicons/react/outline";

export const QueueCreator = ({ Icon, children }) => {
  return (
    <div className="text-slate-500 flex p-2 items-center">
      <Icon className="w-6 md:w-7" />
      <div className="ml-1 text-md md:text-lg font-semibold">{(children || '').substring(0, (children || '').indexOf(' ')+2)+"."}</div>
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

export const QueueOptionsBtn = ({ Icon, children }) => {
  return (
    <div className="flex md:bg-slate-200 p-2 rounded-2xl md:hover:bg-slate-300 mb-1">
      <Icon className="w-6 md:w-7 hover:text-purple-500" />
      <div className="ml-2 text-slate-700 hidden md:flex">{children}</div>
    </div>
  );
}

export const QueueInfo = ({creator, start, end}) => {
 return (
   <div className="flex flex-col md:w-full font-semibold md:mt-2 mb-7 cursor-pointer items-center">
    <div className="flex md:flex-col justify-between w-full">
      <QueueCreator Icon={ShieldExclamationIcon}>{creator}</QueueCreator>
      <QueueTime start={start} end={end} />
    </div>
    <div className="text-purple-800 flex md:flex-col md:w-full">
      <QueueOptionsBtn Icon={UserAddIcon}>Додати</QueueOptionsBtn>
      <QueueOptionsBtn Icon={CogIcon}>Налаштування</QueueOptionsBtn>
      <QueueOptionsBtn Icon={ShareIcon}>Поділитися</QueueOptionsBtn>
    </div>
   </div>
 );
};
