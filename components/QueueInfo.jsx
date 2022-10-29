import { QueueCreator } from "../components/QueueCreator";
import {
 UserAddIcon,
 CogIcon,
 ShareIcon
} from "@heroicons/react/outline";

export const QueueInfo = () => {
 return (
   <div className="flex justify-between md:flex-col md:w-full font-semibold md:mt-2 mb-7 cursor-pointer">
    <QueueCreator>Олійник О. В.</QueueCreator>
    <div className="text-purple-800 flex md:flex-col md:w-full">
      <div className="flex md:bg-slate-200 p-2 rounded-2xl md:hover:bg-slate-300 mb-1"><UserAddIcon className="w-6 md:w-7 hover:text-purple-500" /><div className="ml-2 text-slate-700 hidden md:flex">Додати</div></div>
      <div className="flex md:bg-slate-200 p-2 rounded-2xl md:hover:bg-slate-300 mb-1"><CogIcon className="w-6 md:w-7 hover:text-purple-500" /><div className="ml-2 text-slate-700 hidden md:flex">Налаштування</div></div>
      <div className="flex md:bg-slate-200 p-2 rounded-2xl md:hover:bg-slate-300 mb-1"><ShareIcon className="w-6 md:w-7 hover:text-purple-500" /><div className="ml-2 text-slate-700 hidden md:flex">Поділитися</div></div>
    </div>
   </div>
 );
};
