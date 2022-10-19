import { Heading } from "./Heading";

export const CreateQueueHeading = ({ children, icon }) => {
 return (
  <div className="flex w-1/4 text-purple-800">
   <button className="basis-1/4">{icon}</button>
   <Heading>{children}</Heading>
  </div>
 );
};
