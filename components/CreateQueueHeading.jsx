import { Heading } from "./Heading";

export const CreateQueueHeading = ({ children, icon }) => {
 return (
  <div className="w-10/12 md:w-1/3 text-purple-800 md:mt-1">
   <button className="md:hidden absolute hover:text-purple-400">{icon}</button>
   <Heading className="text-cente">{children}</Heading>
  </div>
 );
};