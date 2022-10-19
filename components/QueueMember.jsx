import { XIcon, PlusIcon } from "@heroicons/react/outline";
import Button from "./Button";

const NotInQueue = ({ number, name, work }) => {
 return (
     <div className="w-full bg-slate-400 h-[100px] rounded-xl mb-3">
      <div className="flex justify-between px-5 py-3 font-semibold">
       <h1 className="text-2xl">
        {number} - {name}
       </h1>
       <h2 className="text-xl">{work}</h2>
      </div>
     </div>
 );
}
const SwapPlaces = ({ id, number, name, work, callback }) => {
 return (
     <div className="w-full bg-slate-400 h-[100px] rounded-xl mb-3">
      <div className="flex justify-between px-5 py-3 font-semibold">
       <h1 className="text-2xl">
        {number} - {name}
       </h1>
       <div className="flex">
        <h2 className="text-xl">{work}</h2>
        <button onClick={() => callback(id, name)} className="bg-slate-300 rounded-md px-1.5 ml-3 mt-[-5px]">
         <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={1.5}
             stroke="currentColor"
             className="w-6 h-6"
         >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
         </svg>
        </button>
       </div>
      </div>
     </div>
 );
}

const Me = ({ id, number, name, work, callback }) => {
 return (
     <div className="w-full bg-slate-400 h-[100px] rounded-xl mb-3 border-4 border-solid border-yellow-400">
      <div className="flex justify-between px-5 py-3 font-semibold">
       <h1 className="text-2xl">
        {number} - {name}
       </h1>
       <div className="flex">
        <h2 className="text-xl">{work}</h2>
        <button onClick={() => callback(id)} className="bg-slate-300 rounded-md px-1.5 ml-3 mt-[-5px]">
         <XIcon className="w-6" />
        </button>
       </div>
      </div>
     </div>
 );
}

const EmptyPlace = ({ id, number, callback }) => {
  return (
    <Button onClick={() => callback(id, number)}>
      <div className="w-full cursor-pointer bg-slate-300 h-[100px] rounded-xl mb-3 hover:bg-slate-400 transition">
        <div className="flex justify-between px-5 py-3 font-semibold">
          <h1 className="text-2xl">
            {number} - <u>Вільне місце</u>
          </h1>
          <PlusIcon className="w-6"/>
        </div>
      </div>
    </Button>
  );
}

const QueueMember = ({ id, number, name, work, variant, callback }) => {
 switch (variant) {
  case "stranger-out":
   return <NotInQueue number={number} name={name} work={work} />
  case "stranger-in":
   return <SwapPlaces id={id} number={number} name={name} work={work} callback={callback} />
  case "me":
   return <Me id={id} number={number} name={name} work={work} callback={callback} />
  case "empty":
   return <EmptyPlace id={id} number={number} callback={callback} />
 }
};

export default QueueMember;