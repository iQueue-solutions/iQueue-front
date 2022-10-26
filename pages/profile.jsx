import {Heading} from "../components/Heading";
import {API_URL} from "../constants";
import {CheckIcon} from "@heroicons/react/outline";
import {useContext} from "react";
import {LayoutContext} from "../components/Layout";

export async function getServerSideProps() {
  const response = await fetch(`${API_URL}/Users`);
  const users = await response.json();

  return {
    props: {
      users: users
    },
  };
}

const Profile = ({users}) => {
  const {user, setUser} = useContext(LayoutContext);
  return (
    <div>
      <Heading>Profile</Heading>
      <h1>Profile {user?.firstName}</h1>
      {users.map((user, index) => (
        <div key={user.id}>
          <button onClick={()=>setUser(users[index])}><CheckIcon /> check</button>
          {user.firstName} {user.lastName}
          {user.email && <> ({user.email}) </> }
        </div>
      ))}
    </div>
  );
}

export default Profile;
