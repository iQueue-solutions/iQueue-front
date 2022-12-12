import { CheckIcon } from "@heroicons/react/outline";
import {useContext} from "react";
import {LayoutContext} from "../components/Layout/Layout";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import {getUsers} from "../fetchers/users";
import { Heading } from "../components/Heading";

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['users'], getUsers);

 return {
  props: {
    dehydratedState: dehydrate(queryClient),
  },
 };
}

const Profile = () => {
  const {user: contextUser, setUser} = useContext(LayoutContext);

  const {data} = useQuery({queryKey: ['users'], queryFn: getUsers});
  return (
    <div className="flex flex-col items-center">
      <Heading>Профіль</Heading>
      <div className="flex flex-col items-start">
      {data.map((user, index) => (
        <div key={user.id} className="mb-2 text-xl font-semibold flex">
          <button className="p-2 bg-purple-800 text-slate-50 border-2 border-purple-800 hover:bg-slate-50 hover:text-purple-800 transition mr-1"
           onClick={()=>setUser(data[index])}>
            <CheckIcon className="w-6" />
          </button>
          <div className="mt-2">
          {user.firstName} {user.lastName}
          {user.email && <> ({user.email}) </>}
          </div>
        </div>
      ))}
        {contextUser.id &&
          <button className="mt-5 self-center py-2 px-5 text-purple-800 bg-slate-50 border-2 border-purple-800 hover:text-slate-50 hover:bg-purple-800 transition mr-1 rounded-lg font-bold text-xl"
                  onClick={()=>setUser({})}>
            Вийти
          </button>
        }
      </div>
    </div>
  );
}

export default Profile;
