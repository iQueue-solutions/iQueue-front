import { XIcon, PlusIcon } from "@heroicons/react/outline";
import Button from "./Button";
import {Swap} from "./Icons";

const SwapPlaces = ({ id, variant: {isMe, isInQueue}, name, work, callback }) => {
 return (
     <div className={`w-full bg-slate-400 h-[100px] rounded-xl mb-3 ${isMe && 'border-4 border-solid border-yellow-400'}`}>
      <div className="flex justify-between px-5 py-3 font-semibold">
       <h1 className="text-2xl">{`#${id + 1}`} - {name}</h1>
       <div className="flex">
        <h2 className="text-xl">{work}</h2>
        {isInQueue &&
          <button onClick={() => callback(id, name)} className="bg-slate-300 rounded-md px-1.5 ml-3 mt-[-5px]">
            {isMe ? <XIcon className="w-6" /> : <Swap />}
          </button>
        }
       </div>
      </div>
     </div>
 );
}

const EmptyPlace = ({ id, callback }) => {
  return (
    <Button onClick={() => callback(id)}>
      <div className="w-full cursor-pointer bg-slate-300 h-[100px] rounded-xl mb-3 hover:bg-slate-400 transition">
        <div className="flex justify-between px-5 py-3 font-semibold">
          <h1 className="text-2xl">
            {`#${id + 1}`} - <u>Вільне місце</u>
          </h1>
          <PlusIcon className="w-6"/>
        </div>
      </div>
    </Button>
  );
}

const QueueMember = ({ id, variant, name, work, callback }) => {
 return (<>
   {!variant.isEmpty ?
     <SwapPlaces id={id} variant={variant} name={name} work={work} callback={callback} />
     :
     <EmptyPlace id={id} callback={callback} />
   }
 </>)
};

export default QueueMember;