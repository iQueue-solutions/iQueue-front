import { useState } from "react";
import { Input } from "./Input";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

export const DropdownInput = ({ title, amount, setAmount }) => {
 const [open, setOpen] = useState(false);

 const toggleOpen = () => setOpen(o => !o);

 const handleInput = (e) =>
  e.target.value === ""
   ? setAmount(0)
   : setAmount( parseInt(e.target.value) || 0 );

 return (
  <div className="mb-10">
   <div className="flex justify-between mb-2 cursor-pointer" onClick={toggleOpen}>
    <div>
     {title}
     <b>{amount !== 0 ? amount : "безобмежна"}</b>
    </div>
     {open
       ? <ChevronUpIcon className="w-5" />
       : <ChevronDownIcon className="w-5" />
     }
   </div>
   <div className="absolute w-10/12 md:w-1/3">
    <div className="md:w-11/12">
     {open && <Input handleInput={handleInput} placeholder="Кількість" />}
    </div>
   </div>
  </div>
 );
};
