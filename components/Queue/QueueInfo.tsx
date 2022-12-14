import {
  UserAddIcon, UsersIcon, TrashIcon,
  CogIcon,
  ShareIcon, ShieldExclamationIcon, ClockIcon,
  LockOpenIcon, LockClosedIcon, ArrowCircleLeftIcon
} from "@heroicons/react/outline";
import {useEffect, useState} from "react";
import {AddToQueue} from "../Confirm/AddToQueue";
import {
  ConfirmQueueOpenBox,
  ConfirmQueueCloseBox,
  ConfirmQueueDeleteBox,
  ConfirmChangeAdminBox
} from "../Confirm/ConfirmBox";
import {Queue} from "../../fetchers/queues";
import {DateToQueueDate} from "../../utils";
import {useFlag} from "../../utils/useFlag";

export const QueueCreator = ({ Icon, children }) => {
  return (
    <div className="text-slate-500 flex p-2 items-center">
      {Icon && <Icon className="w-6 md:w-7" /> }
      <div className="ml-1 text-md md:text-lg font-semibold">{children}</div>
    </div>
  );
};

export const QueueTime = ({startDate, endDate}) => {
  const [start, setStart] = useState(DateToQueueDate(new Date(startDate)));
  const [end, setEnd] = useState(DateToQueueDate(new Date(endDate)));

  useEffect(() => {
    setStart(DateToQueueDate(new Date(startDate)));
    setEnd(DateToQueueDate(new Date(endDate)));
  }, [startDate, endDate]);

  return(
    <>
    <div className="text-slate-500 flex p-2 md:hidden items-center">
      <ClockIcon className="w-6 md:w-7" />
      <div className="ml-1 text-md font-semibold">{(start || '').slice(0,-5)} - {(end || '').slice(0,-5)}</div>
    </div>
    <div className="hidden md:flex flex-col">
      <div className="text-slate-500 flex p-2">
      <ClockIcon className="w-6 md:w-7" />
      <div className="ml-1 text-lg font-semibold">{start}</div>
    </div>
    <div className="text-slate-500 flex p-2">
      <ClockIcon className="w-6 md:w-7" />
      <div className="ml-1 text-lg font-semibold">{end}</div>
    </div>
    </div>
    </>
  );
};

interface QueueOptionsBtnArgs {
  Icon: any;
  onClick: () => void;
  children: string;
}
export const QueueOptionsBtn = ({ Icon, onClick, children }: QueueOptionsBtnArgs) => {
  return (
    <div className="flex md:bg-slate-200 p-2 rounded-2xl md:hover:bg-slate-300 mb-1" onClick={onClick}>
      <Icon className="w-6 md:w-7 hover:text-purple-500" />
      <div className="ml-2 text-slate-700 hidden md:flex">{children}</div>
    </div>
  );
}

interface QueueInfoProps {
  queueData: Queue;
  creator: string;
  isParticipant: boolean;
  isAdmin: boolean;
}
export const QueueInfo = ({queueData, creator, isParticipant, isAdmin}: QueueInfoProps) => {
  const [isAddToQueue, showAddPeople, hideAddPeople] = useFlag();
  const [isDeleteQueue, showDeleteQueue, hideDeleteQueue] = useFlag();
  const [isChangeAdmin, showChangeAdmin, hideChangeAdmin] = useFlag();
  const [isShowConfirmOpenQueue, showConfirmOpenQueue, hideConfirmOpenQueue] = useFlag();
  const [isShowConfirmCloseQueue, showConfirmCloseQueue, hideConfirmCloseQueue] = useFlag();

  return (
   <div className="flex flex-col md:w-full font-semibold md:mt-2 mb-7 cursor-pointer items-center">
    <div className="flex md:flex-col justify-between w-full">
      <QueueCreator Icon={ShieldExclamationIcon}>{creator}</QueueCreator>
      <QueueTime startDate={queueData.openTime} endDate={queueData.closeTime} />
    </div>
    <div className="text-purple-800 flex md:flex-col md:w-full">
      <QueueOptionsBtn Icon={ShareIcon} onClick={() => {console.log('share')}}>????????????????????</QueueOptionsBtn>
      {isParticipant &&
        // @ts-ignore
        <QueueOptionsBtn Icon={ArrowCircleLeftIcon}>??????????</QueueOptionsBtn>
      }
      {isAdmin && <>
        <hr className="my-4 mx-auto w-40 h-1 bg-gray-200 sm:hidden md:block" />
        {/* @ts-ignore*/}
        <QueueOptionsBtn Icon={UserAddIcon} onClick={showAddPeople}>???????????? ????????????????</QueueOptionsBtn>
        {/* @ts-ignore*/}
        <QueueOptionsBtn Icon={CogIcon}>????????????????????????</QueueOptionsBtn>
        {queueData.isOpen
          ? <>
            {/* @ts-ignore*/}
             <QueueOptionsBtn Icon={LockOpenIcon} onClick={showConfirmCloseQueue}>??????????????????????</QueueOptionsBtn>
              {isShowConfirmCloseQueue &&
                // @ts-ignore
                <ConfirmQueueCloseBox queueName={queueData.name} queueId={queueData.id} hideConfirm={hideConfirmCloseQueue} />
              }
          </>
          : <>
            {/* @ts-ignore*/}
             <QueueOptionsBtn Icon={LockClosedIcon} onClick={showConfirmOpenQueue}>????????????????????????</QueueOptionsBtn>
              {isShowConfirmOpenQueue &&
                // @ts-ignore
                <ConfirmQueueOpenBox queueName={queueData.name} queueId={queueData.id} hideConfirm={hideConfirmOpenQueue} />
              }
          </>
        }
        {/* @ts-ignore*/}
        <QueueOptionsBtn Icon={UsersIcon} onClick={showChangeAdmin}>?????????????? ????????????????????????????</QueueOptionsBtn>
        {/* @ts-ignore*/}
        {isChangeAdmin && <ConfirmChangeAdminBox queueName={queueData.name} queueId={queueData.id} hideConfirm={hideChangeAdmin} />}
        {/* @ts-ignore*/}
        <QueueOptionsBtn Icon={TrashIcon} onClick={showDeleteQueue}>????????????????</QueueOptionsBtn>
        {/* @ts-ignore*/}
        {isDeleteQueue && <ConfirmQueueDeleteBox queueName={queueData.name} queueId={queueData.id} hideConfirm={hideDeleteQueue} />}
      </>}
    </div>
     {isAddToQueue && <AddToQueue queueId={queueData.id} onClose={hideAddPeople} />}
   </div>
 );
};
