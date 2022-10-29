import {
  UserAddIcon,
  CogIcon,
  ShareIcon, ShieldExclamationIcon, ClockIcon
} from "@heroicons/react/outline";

export const QueueCreator = ({ Icon, children }) => {
  return (
    <div className="text-slate-500 flex p-2">
      <Icon className="w-5 md:w-7" />
      <div className="ml-1 text-lg font-semibold">{children}</div>
    </div>
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
   <div className="flex justify-between md:flex-col md:w-full font-semibold md:mt-2 mb-7 cursor-pointer">
    <QueueCreator Icon={ShieldExclamationIcon}>{creator}</QueueCreator>
    <QueueCreator Icon={ClockIcon}>{start}</QueueCreator>
    <QueueCreator Icon={ClockIcon}>{end}</QueueCreator>
    <div className="text-purple-800 flex md:flex-col md:w-full">
      <QueueOptionsBtn Icon={UserAddIcon}>Додати</QueueOptionsBtn>
      <QueueOptionsBtn Icon={CogIcon}>Налаштування</QueueOptionsBtn>
      <QueueOptionsBtn Icon={ShareIcon}>Поділитися</QueueOptionsBtn>
    </div>
   </div>
 );
};
