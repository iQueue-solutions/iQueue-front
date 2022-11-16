import React from "react";
import { Heading } from "./Heading";

interface CreateQueueHeadingProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const CreateQueueHeading = ({ children, icon }: CreateQueueHeadingProps) => {
 return (
  <>
   <div className="md:hidden text-purple-800 md:mt-1">
    <button className="absolute hover:text-purple-400 left-[5%] top-[5%]">
     {icon}
    </button>
    <Heading>{children}</Heading>
   </div>
   <div className="hidden md:flex">
    <Heading>{children}</Heading>
   </div>
  </>
 );
};