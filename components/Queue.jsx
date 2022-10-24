import { CogIcon } from "@heroicons/react/outline";
import styles from "../styles/Queue.module.css";

export const Queue = ({ name, creatorName, isMy }) => {
 return (
  <div className={`w-full bg-blue-300 rounded-lg ${styles.queueHeight} mb-3`}>
   <div className="flex h-full justify-between items-center px-5">
    <div>
     <div className="text-3xl font-semibold text-slate-900">{name}</div>
     <div className="text-slate-600 text-lg">{creatorName}</div>
    </div>
    {isMy && (
     <button className="hover:bg-blue-400 rounded-xl p-2">
      <CogIcon className="w-8" />
     </button>
    )}
   </div>
  </div>
 );
};
