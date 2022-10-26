import { API_URL } from "../constants";
import { CheckIcon } from "@heroicons/react/outline";
import {useContext} from "react";
import {LayoutContext} from "../components/Layout";

export async function getServerSideProps() {
  const response = await fetch(`${API_URL}/Users`);
  const users = await response.json();

 return {
  props: {
   users: users,
  },
 };
}

const Profile = ({ users }) => {
  const {user: contextUser, setUser} = useContext(LayoutContext);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl md:text-8xl md:lowercase font-semibold md:font-light text-purple-800 mb-9">
        Профіль
      </h1>
      <div className="flex flex-col items-start">
      {users.map((user, index) => (
        <div key={user.id} className="mb-2 text-xl font-semibold flex">
          <button className="p-2 bg-purple-800 text-slate-50 border-2 border-purple-800 hover:bg-slate-50 hover:text-purple-800 transition mr-1"
           onClick={()=>setUser(users[index])}>
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
