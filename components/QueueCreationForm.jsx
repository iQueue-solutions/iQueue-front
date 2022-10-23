import { Input } from "./Input";
import { CalendarIcon } from "@heroicons/react/outline";

export const QueueCreationForm = () => {
 const calendarIcon = <CalendarIcon className="w-5 md:w-6 mr-2" />;
 return (
  <form className="w-10/12 lg:w-1/3 mt-9">
   <Input placeholder="Назва" />
   <Input icon={calendarIcon} placeholder="Початок запису в чергу" />
   <Input icon={calendarIcon} placeholder="Кінець запису в чергу" />
  </form>
 );
};
