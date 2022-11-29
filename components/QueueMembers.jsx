import { QueueMember } from "./QueueMember";
import { useState } from "react";

export const QueueMembers = ({queueMembers}) => {
 return (
  <div className="pb-[4rem] md:pb-0">
   {queueMembers.members.map(({ id, isEmpty, name, work }) => {
    const variant = {
     isMe: name === queueMembers.me,
     isInQueue: queueMembers.isInQueue,
     isEmpty,
    };
    return (
     <QueueMember key={id} id={id} variant={variant} name={name} work={work} />
    );
   })}
  </div>
 );
};
