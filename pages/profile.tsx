import {useContext} from "react";
import {LayoutContext} from "../components/Layout/Layout";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import {getUsers} from "../fetchers/users";
import {ProfileImage} from "../components/Profile/ProfileImage"
import {ProfileInfo} from "../components/Profile/ProfileInfo"
import { Button } from "../components/Button";

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
    <>
      <div className="flex flex-col mx-auto w-10/12 md:w-1/3 items-center mt-5">
        <ProfileImage img={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`} />
        <ProfileInfo name={`Denys Spektrov`} email={`denys.spektrov@nure.ua`} />
        <div className="flex w-1/2 mt-5 justify-around">
          <Button color="purple" variant="outline">Вийти</Button>
          <Button color="red" variant="outline">Видалити</Button>
        </div>
      </div>
    </>
  );
}

export default Profile;
