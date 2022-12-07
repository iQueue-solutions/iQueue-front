import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { PageSwitcher } from "../components/PageSwitcher";
import { Queue } from "../components/Queue/Queue";
import {useRouter} from "next/router";
import {useMemo, useState} from "react";
import {dehydrate, QueryClient, useQueries, useQuery} from "@tanstack/react-query";
import {getQueues} from "../fetchers/queues";
import {getUser} from "../fetchers/users";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['queues'], getQueues);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const {data} = useQuery({queryKey: ['queues'], queryFn: getQueues});

  const admins = useQueries({
    queries: data?.map(queue => ({
      queryKey: ['users', queue.adminId],
      queryFn: () => getUser(queue.adminId),
    }))
  });

  const adminNames = useMemo((() => {
    return admins.map(admin => {
      if (admin.data?.firstName || admin.data?.lastName) {
        return `${admin.data.firstName} ${admin.data.lastName}`;
      }
      return '...';
    })
  }), [admins])

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col items-center justify-center">
      <Heading>Мої черги</Heading>
      <div className="w-10/12 md:w-1/2 mt-5">
      <Input placeholder={"Пошук"} value={search} handleInput={setSearch} />
        {
          data.map((queue, index) => (
            <Queue name={queue.name}
                   creatorName={adminNames[index]}
                   isMy={false} key={queue.id}
                   onClick={() => router.push(`/queue/${queue.id}`)}
            />
          ))
        }
      <PageSwitcher />
      </div>
      </div>
    </div>
  );
}
