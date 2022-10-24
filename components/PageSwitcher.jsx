import {
 ArrowCircleLeftIcon,
 ArrowCircleRightIcon,
} from "@heroicons/react/outline";

export const PageSwitcher = () => {
 return (
  <div className="flex justify-center items-center mt-5">
   <ArrowCircleLeftIcon className="w-8 mr-2 text-slate-400" />
   <div className="h-2 w-2 rounded-full bg-slate-900 ml-1"></div>
   <div className="h-2 w-2 rounded-full bg-slate-400 ml-1"></div>
   <div className="h-2 w-2 rounded-full bg-slate-400 ml-1"></div>
   <div className="h-2 w-2 rounded-full bg-slate-400 ml-1"></div>
   <ArrowCircleRightIcon className="w-8 ml-3 text-slate-900" />
  </div>
 );
};
