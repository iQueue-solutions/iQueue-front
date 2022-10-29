import { ShieldExclamationIcon } from "@heroicons/react/outline";

export const QueueCreator = ({ children }) => {
 return (
  <div className="text-slate-500 flex p-2">
   <ShieldExclamationIcon className="w-5 md:w-7" />
   <div className="ml-1 text-lg font-semibold">{children}</div>
  </div>
 );
};
