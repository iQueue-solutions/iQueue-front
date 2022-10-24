import { Heading } from "./Heading";

export const CreateQueueHeading = ({ children, icon }) => {
 return (
  <div className=" text-purple-800 md:mt-1">
   <button className="md:hidden absolute hover:text-purple-400 left-[9%] top-[7%]">
    {icon}
   </button>
   <Heading className="text-center">{children}</Heading>
  </div>
 );
};
