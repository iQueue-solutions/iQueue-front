import {useEffect, useState} from "react";

interface InputProps {
  isIcon?: boolean;
  placeholder?: string;
  handleInput: (value: string) => void;
  value: string;
  type?: string;
  min?: string;
}
export const Input = ({isIcon, placeholder, handleInput, value, min, type="text"} : InputProps ) => {
  return (<div
    className={`border-2 bg-white border-purple-800 p-2 rounded-lg ${isIcon ? "mb-6 flex" : "mb-10"}`}
  >
    <input
      value={value}
      type={type}
      onInput={e => handleInput((e.target as HTMLInputElement).value)}
      placeholder={placeholder}
      min={min}
      className="bg-transparent focus:outline-none w-full"
    />
  </div>);
};

export const formatDate = (date: Date): string => {
  return new Date(date.toString().split('GMT')[0]+' UTC').toISOString().split(".")[0];
}

interface DateInputProps {
  title: string;
  initialDate: Date;
  setTime: (time: string) => void;
}
export const DateInput = ({title, initialDate, setTime}: DateInputProps) => {
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    setMinDate(formatDate(new Date()));
  }, []);

  const [queueOpenTime, setQueueOpenTime] = useState(formatDate(initialDate));

  useEffect(() => {
    setTime(queueOpenTime);
  }, []);

  const handleInput = (value: string) => {
    setQueueOpenTime(value);
    setTime(value);
  }

  return <>
    <div className="text-slate-600 text-lg">{title}</div>
    <Input min={minDate} value={queueOpenTime} type="datetime-local" handleInput={handleInput} />
  </>
}
