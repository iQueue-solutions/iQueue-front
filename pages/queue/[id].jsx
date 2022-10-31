import { QueueInfo } from "../../components/QueueInfo";
import { QueueMembers } from "../../components/QueueMembers";
import { CreateQueueHeading } from "../../components/CreateQueueHeading";
import {API_URL} from "../../constants";
import {DateToQueueDate} from "../../utlis";

export const getServerSideProps = async (ctx) => {

  const queueResponse = await fetch(`${API_URL}/queues/${ctx.query.id}`);

  if (!queueResponse.ok) {
    return {
      notFound: true,
    };
  }

  const queue = await queueResponse.json();

  const adminResponse = await fetch(`${API_URL}/users/${queue.adminId}`);
  const admin = await adminResponse.json();

  return {
    props: {
      name: queue.name,
      queueInfo: {
        start: DateToQueueDate( new Date(queue.openTime) ),
        end: DateToQueueDate( new Date(queue.closeTime) ),
        creator: `${admin.lastName} ${admin.firstName}`,
      },
    }
  }
}

const Id = ({name, queueInfo}) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-11/12 items-center">
        <CreateQueueHeading>{name}</CreateQueueHeading>
        <div className="md:flex w-full mt-5 hidden">
          <div className="basis-1/5 px-10">
            <QueueInfo {...queueInfo} />
          </div>
          <div className="basis-3/5">
            <QueueMembers />
          </div>
          <div className="basis-1/5 px-10">
          </div>
        </div>
        <div className="md:hidden">
          <QueueInfo {...queueInfo} />
          <QueueMembers />
        </div>
      </div>
    </div>
  )
}

export default Id;
