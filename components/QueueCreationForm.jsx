import { Input } from "./Input";
import { CalendarIcon } from "@heroicons/react/outline";

export const QueueCreationForm = () => {
 const calendarIcon = <CalendarIcon className="w-5 md:w-6 mr-2" />;
 return (
  <form className="mt-9">
   <Input placeholder="Назва" />
   <Input icon={calendarIcon} placeholder="Початок запису в чергу" />
   <Input icon={calendarIcon} placeholder="Кінець запису в чергу" />
  </form>
 );
};
