import { useState } from "react";
import Input from "./Input";

export const DropdownInput = ({ icon, title }) => {
 const [outDropdown, setOutDropdown] = useState("безобмежна");
 const [open, setOpen] = useState(false);

 const toggle = () => setOpen(!open);

 const handleInput = (e) => e.target.value == "" ? setOutDropdown("безобмежна") : setOutDropdown(e.target.value);

 return (
  <div className="w-1/4">
   <div className="flex justify-between mb-2 cursor-pointer" onClick={() => {toggle();}}>
    <div>
     {title}
     <b>{outDropdown}</b>
    </div>
    {icon}
   </div>
   {open && <Input handleInput={handleInput} placeholder="Кількість" />}
  </div>
 );
};
