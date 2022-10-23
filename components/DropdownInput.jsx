import { useState } from "react";
import { Input } from "./Input";
import { ChevronDownIcon } from "@heroicons/react/outline";

export const DropdownInput = ({ title }) => {
 const [outDropdown, setOutDropdown] = useState("безобмежна");
 const [open, setOpen] = useState(false);

 const toggle = () => setOpen(!open);

 const handleInput = (e) =>
  e.target.value === ""
   ? setOutDropdown("безобмежна")
   : setOutDropdown(e.target.value);

 return (
  <div className="w-10/12 lg:w-1/3 mb-10">
   <div className="flex justify-between mb-2 cursor-pointer" onClick={toggle}>
    <div>
     {title}
     <b>{outDropdown}</b>
    </div>
    <ChevronDownIcon className="w-5" />
   </div>
   <div className="absolute w-10/12 md:w-1/3">
    <div className="md:w-11/12">
     {open && <Input handleInput={handleInput} placeholder="Кількість" />}
    </div>
   </div>
  </div>
 );
};
