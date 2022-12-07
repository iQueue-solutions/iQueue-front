import { CheckIcon, XIcon } from "@heroicons/react/outline";
import {useState} from "react";

interface ConfirmQueueMemberProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  isInput?: boolean;
  isInputRequired?: boolean;
  inputValue?: string;
  setInputValue?: (value: string) => void;
}
export const ConfirmQueueMember = ({
                                     title,
                                     onConfirm, onCancel,
                                     isInput, isInputRequired,
                                     inputValue, setInputValue,
                                   }: ConfirmQueueMemberProps) => {
  const [isError, setIsError] = useState(false);
  const onConfirmAdaptive = () => {
    if (isInputRequired) {
      return () => {
        if (inputValue) {
          setIsError(false);
          onConfirm();
        } else {
          setIsError(true);
        }
      }
    }
    return onConfirm;
  }
  return (
    <div className="w-full bg-amber-200 h-[100px] rounded-xl mb-3">
      <div className="flex flex-col items-center px-5 py-3 font-semibold">
        <h1 className="text-lg md:text-2xl text-left">{title}</h1>
        <div className="flex items-center">
          {isInput && (
            <input
              type="text"
              placeholder="Номер роботи"
              className={`w-1/2 m-3 bg-white h-8 md:h-9 border-solid rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent
                ${!isError ? 'border-2 border-amber-400' : 'border-4 border-red-400'}
              `}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}
          <div className="flex">
            <button
              onClick={onConfirmAdaptive()}
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
