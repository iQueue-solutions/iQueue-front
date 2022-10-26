import {Heading} from "../components/Heading";
import {API_URL} from "../constants";
import {CheckIcon} from "@heroicons/react/outline";

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
  console.log(users);
  return (
    <div>
      <Heading>Profile</Heading>
      <h1>Profile</h1>
      {users.map((user) => (
        <div key={user.id}>
          <button><CheckIcon /> check</button>
          {user.firstName} {user.lastName}
          {user.email && <> ({user.email}) </> }
        </div>
      ))}
    </div>
  );
}

export default Profile;
