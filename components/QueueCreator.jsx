import { ShieldExclamationIcon } from "@heroicons/react/outline";

export const QueueCreator = ({ children }) => {
 return (
  <div className="text-slate-500 flex">
   <ShieldExclamationIcon className="w-5 md:w-7" />
   <div className="ml-1 font-semibold">{children}</div>
  </div>
 );
};

