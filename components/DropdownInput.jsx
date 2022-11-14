import { useState } from "react";
import { Input } from "./Input";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

export const DropdownInput = ({ title, amount, setAmount }) => {
 const [open, setOpen] = useState(false);

 const toggleOpen = () => setOpen(o => !o);

 const handleInput = (value) =>
  value === ""
   ? setAmount(0)
   : setAmount( parseInt(value) || 0 );

 return (
  <div className="">
   <div className={`flex justify-between cursor-pointer ${open ? 'mb-2' : 'mb-10'}`} onClick={toggleOpen}>
    <div>
     {title}
     <b>{amount !== 0 ? amount : "безобмежна"}</b>
    </div>
     {open
       ? <ChevronUpIcon className="w-5" />
       : <ChevronDownIcon className="w-5" />
     }
   </div>
     {open && <Input value={amount} type={"number"} handleInput={handleInput} placeholder="Кількість" />}
  </div>
 );
};
