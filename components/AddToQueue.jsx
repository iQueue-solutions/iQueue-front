import { XIcon, XCircleIcon, CheckCircleIcon } from "@heroicons/react/outline";
import { Button } from "./Button";
export const AddToQueue = ({ queueName }) => {
 return (
  <div className="bg-blue-300 flex flex-col items-center fixed rounded-lg w-[330px] md:w-[1100px] h-[500px] md:h-[600px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%] drop-shadow-2xl">
   <XIcon className="w-7 md:w-8 self-end text-slate-50 m-1 hover:text-purple-800" />
   <div className="bg-slate-50 w-[270px] md:w-[1000px] h-[400px] md:h-[450px] flex flex-col items-center px-5 md:mb-7">
    <h1 className="text-2xl md:text-4xl font-bold pt-2 pb-1">
     Додати до черги
    </h1>
    <h2 className="text-xl md:text-2xl font-semibold pb-5">{queueName}</h2>
    <div className="flex flex-col self-start overflow-scroll overflow-x-hidden md:overflow-hidden w-full md:flex-wrap md:items-center">
     <div className="flex">
      <XCircleIcon className="w-6 text-red-400 hover:text-red-700" />
      <div className="pl-1">Костікова Олеся</div>
     </div>
     <div className="flex">
      <CheckCircleIcon className="w-6 text-green-400 hover:text-green-700" />
      <div className="pl-1">Костікова Олеся</div>
     </div>
    </div>
   </div>
   <Button color="purple" variant="solid" margin={2}>
    {"Підтвердити"}
   </Button>
  </div>
 );
};
