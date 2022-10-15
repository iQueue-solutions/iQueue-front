import Input from "./Input";
import {CalendarIcon} from "@heroicons/react/outline";

const QueueCreationForm = () => {
  const calendarIcon = <CalendarIcon className='w-5 md:w-6 mr-2' />;
  return (
    <form className="w-1/4 mt-24">
      <Input placeholder="Назва" />
      <Input icon={calendarIcon} placeholder="Початок запису в чергу" />
      <Input icon={calendarIcon} placeholder="Кінець запису в чергу" />
    </form>
  )
}


export default QueueCreationForm;