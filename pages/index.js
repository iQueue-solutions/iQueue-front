import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { PageSwitcher } from "../components/PageSwitcher";
import { Queue } from "../components/Queue";
import {API_URL} from "../constants";
import {useRouter} from "next/router";
import {useState} from "react";

export const getServerSideProps = async () => {
  const queuesResponse = await fetch(`${API_URL}/queues`);

  const queues = await queuesResponse.json();

  const queuesAdmins = []

  for (const queue of queues) {
    const adminResponse = await fetch(`${API_URL}/users/${queue.adminId}`);
    const admin = await adminResponse.json();

    queuesAdmins.push({queue: queue, admin: admin})
  }

  return {
    props: {
      queuesAdmins
    }
  }
}

export default function Home({queuesAdmins}) {
  const router = useRouter();
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col items-center justify-center">
      <Heading>Мої черги</Heading>
      <div className="w-10/12 md:w-1/2 mt-5">
      <Input placeholder={"Пошук"} value={search} handleInput={setSearch} />
        {
          queuesAdmins.map(queueAdmin => (
            <Queue name={queueAdmin.queue.name}
                   creatorName={`${queueAdmin.admin.lastName} ${queueAdmin.admin.firstName}`}
                   isMy={false} key={queueAdmin.queue.id}
                   onClick={() => router.push(`/queue/${queueAdmin.queue.id}`)}
            />
          ))
        }
      <PageSwitcher />
      </div>
      </div>
    </div>
  );
}
