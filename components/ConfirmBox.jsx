import { CheckIcon, XIcon } from "@heroicons/react/outline";
export const ConfirmBox = ({ queueName }) => {
 return (
  <div className="flex flex-col items-center justify-center md:h-[50vh] md:w-[50vw] h-[30vh] z-10 w-[70vh] border-[6px] border-purple-800 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-50 drop-shadow-2xl">
   <div className="w-10/12 text-center text-2xl md:text-4xl md:mb-10 mb:5">{`Приєднатися до черги «${queueName}»?`}</div>
   <div className="flex w-10/12 justify-around">
    <button className="m-3 lg:px-24 md:py-2 px-10 py-1 rounded-lg bg-green-300 transition border-[3px] border-transparent hover:border-green-500">
     <CheckIcon className="w-7" />
    </button>
    <button className="m-3 lg:px-24 md:py-2 px-10 py-1 rounded-lg bg-red-300 transition border-[3px] border-transparent hover:border-red-500">
     <XIcon className="w-7" />
    </button>
   </div>
  </div>
 );
};
