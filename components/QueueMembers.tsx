import {EmptyPlace, MyPlace, StrangerPlace} from "./QueueMember";
import {useContext, useMemo } from "react";
import {useQuery} from "@tanstack/react-query";
import {getRecords} from "../fetchers/records";
import {LayoutContext} from "./Layout";

const additionalEmptyMembers = () => {
  const emptyMembers = [];
  for (let i = 0; i < 5; i++) {
    emptyMembers.push({
      id: `additional-empty-${i}`,
      isEmpty: true,
    });
  }
  return emptyMembers;
}

export const QueueMembers = ({queueId}) => {
  const { user } = useContext(LayoutContext);
  const {data, refetch} = useQuery({queryKey: ['records', queueId], queryFn: () => getRecords(queueId) });

  const membersList = useMemo(() => {
    const members = [];

    if (data?.length) {
      for (const record of data) {
        members[record.index] = record;
      }

      const lastElement = data[data.length - 1];
      for (let i = 0; i < lastElement.index; i++) {
        if (!members[i]) {
          members[i] = {
            id: `empty-${i}`,
            isEmpty: true,
          };
        }
      }
    }

   return [...members, ...additionalEmptyMembers()];
  }, [data]);

  const isInQueue = useMemo(() => {
    if (data) {
      return data.some(record => record.userId === user.id);
    }
    return false;
  }, [data, user]);

  return (
    <div className="pb-[4rem] md:pb-0">
      {membersList?.map(({ id, isEmpty=false, userId, labNumber}, index) => {
        const isMe = user.id === userId;

        if (isEmpty) {
          return <EmptyPlace key={`empty-${id}`} index={index} callback={() => console.log("Empty place")}/>
        } else {
          if (isMe) {
            return <MyPlace key={`my-${id}`} index={index} userId={userId} recordId={id} work={labNumber} refetchRecords={refetch} />
          } else {
            return <StrangerPlace key={`stranger-${id}`} index={index} userId={userId} work={labNumber} isInQueue={isInQueue} />
         }
        }
      })}
    </div>
  );
};
