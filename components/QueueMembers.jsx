import { QueueMember } from "./QueueMember";
import { useState } from "react";

export const QueueMembers = () => {

 const [mockResponse] = useState({
  me: "Спектров Денис",
  isInQueue: true,
  members: [
   { id: 0, isEmpty: false, name: "Дмитро Донець", work: "ПЗ2" },
   { id: 1, isEmpty: false, name: "Овчаренко Михайло", work: "ПЗ2", },
   { id: 2, isEmpty: true, },
   { id: 3, isEmpty: false, name: "Спектров Денис", work: "ПЗ2", },
  ],
 });

 return ( <>
   {mockResponse.members.map(({ id, isEmpty, name, work }) => {
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
     />
    );
   })}
  </>
 );
};
