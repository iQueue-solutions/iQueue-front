import { CheckIcon, XIcon } from "@heroicons/react/outline";

export const ConfirmQueueMember = ({ title, onConfirm, onCancel, isInput, inputValue, setInputValue }) => {
 return (
  <div className="w-full bg-amber-200 h-[100px] rounded-xl mb-3">
   <div className="flex flex-col items-center px-5 py-3 font-semibold">
    <h1 className="text-lg md:text-2xl text-left">{title}</h1>
    <div className="flex items-center">
    {isInput && <input type="text" placeholder="Номер роботи" className="w-1/2 m-3 bg-white border-2 h-8 md:h-9 border-solid border-amber-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
     value={inputValue}
     onChange={(e) => setInputValue(e.target.value)}
    />
    }
    <div className="flex">
     <button
      onClick={onConfirm}
      className="px-7 m-3 h-8 md:h-9 md:px-10 rounded-lg bg-green-300 transition border-[3px] border-transparent hover:border-green-400"
     >
      <CheckIcon className="w-5 md:w-6" />
     </button>
     <button
      onClick={onCancel}
      className="px-7 m-3 h-8 md:h-9 md:px-10 rounded-lg bg-red-300 transition border-[3px] border-transparent hover:border-red-500"
     >
      <XIcon className="w-6" />
     </button>
    </div>
    </div>
   </div>
  </div>
 );
};
