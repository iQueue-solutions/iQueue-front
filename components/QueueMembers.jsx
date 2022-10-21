import { QueueMember } from "../components/QueueMember";
import { ConfirmQueueMember } from "./ConfirmQueueMember";
import { useState } from "react";

export const QueueMembers = () => {
 const takePlace = (id, placeNumber) => {
  setIsConfirmActive(true);
  setConfirmTitle(`Зайняти місце ${placeNumber} ?`);
 };

 const swapPlaces = (id, name) => {
  setIsConfirmActive(true);
  setConfirmTitle(`Помінятись місцями з ${name} ?`);
 };

 const freePlace = () => {
  setIsConfirmActive(true);
  setConfirmTitle("Залишити чергу?");
 };

 const confirm = () => setConfirmTitle("Okay");
 const cancel = () => setIsConfirmActive(false);

 const [isConfirmActive, setIsConfirmActive] = useState(false);
 const [confirmTitle, setConfirmTitle] = useState("");

 const [mockResponse] = useState({
  me: "Спектров Денис",
  isInQueue: true,
  members: [
   { id: 0, isEmpty: false, name: "Дмитро Донець", work: "ПЗ2" },
   {
    id: 1,
    isEmpty: false,
    name: "Овчаренко Михайло",
    work: "ПЗ2",
    callback: swapPlaces,
   },
   { id: 2, isEmpty: true, callback: takePlace },
   {
    id: 3,
    isEmpty: false,
    name: "Спектров Денис",
    work: "ПЗ2",
    callback: freePlace,
   },
  ],
 });

 return (
  <>
   {mockResponse.members.map(({ id, isEmpty, name, work, callback }) => {
    const variant = {
     isMe: name === mockResponse.me,
     isInQueue: mockResponse.isInQueue,
     isEmpty,
    };
    return (
     <QueueMember
      key={id}
      id={id}
      variant={variant}
      name={name}
      work={work}
      callback={callback}
     />
    );
   })}
   {isConfirmActive && (
    <ConfirmQueueMember
     confirmCallback={confirm}
     cancelCallback={cancel}
     title={confirmTitle}
    />
   )}
  </>
 );
};
