import { Heading } from "./Heading";

export const CreateQueueHeading = ({ children, icon }) => {
 return (
  <>
   <div className="md:hidden text-purple-800 md:mt-1">
    <button className="absolute hover:text-purple-400 left-[9%] top-[7%]">
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
