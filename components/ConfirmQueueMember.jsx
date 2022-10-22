import { CheckIcon, XIcon } from "@heroicons/react/outline";

export const ConfirmQueueMember = ({
 title,
 onConfirm,
 onCancel,
}) => {
 return (
  <div className="w-full bg-amber-200 h-[100px] rounded-xl mb-3">
   <div className="flex flex-col items-center px-5 py-3 font-semibold">
    <h1 className="text-2xl">{title}</h1>
    <div className="flex">
     <button
      onClick={onConfirm}
      className="m-3 px-10 py-1 rounded-lg bg-green-300 transition border-[3px] border-transparent hover:border-green-400"
     >
      <CheckIcon className="w-6" />
     </button>
     <button
      onClick={onCancel}
      className="m-3 px-10 py-1 rounded-lg bg-red-300 transition border-[3px] border-transparent hover:border-red-500"
     >
      <XIcon className="w-6" />
     </button>
    </div>
   </div>
  </div>
 );
};
