import {useContext, useState} from "react";
import {LayoutContext} from "../components/Layout/Layout";
import {ProfileImage} from "../components/Profile/ProfileImage"
import {ProfileInfo} from "../components/Profile/ProfileInfo"
import { Button } from "../components/Button";
import {useRouter} from "next/router";
import Link from "next/link";

const Profile = () => {
  const {user, setUser} = useContext(LayoutContext);

  const router = useRouter();

  function logout() {
    localStorage.removeItem('iQueue-jwt');
    localStorage.removeItem('iQueue-user');
    setUser(undefined);
    router.push('/login');
  }

  const [isEdit, setIsEdit] = useState(false)
  return (
    <>
      {user && (
        <div className="flex flex-col mx-auto w-full items-center mt-5">
          <ProfileImage img={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`} />
          <ProfileInfo name={`${user.firstName} ${user.lastName}`} email={user.email} isEdit={isEdit} setIsEdit={setIsEdit} />
          {!isEdit ?
          <div className="flex w-1/2 md:w-1/3 mt-7 justify-around">
            <Button color="purple" variant="solid" onClick={logout}>Вийти</Button>
            <Button color="purple" variant="outline" onClick={() => setIsEdit(true)}>Редагувати</Button>
          </div> :
          <div className="flex w-1/3 mt-5 justify-around">
            <Button color="green" variant="solid" onClick={() => setIsEdit(false)}>Зберегти</Button>
          </div>
          }
        </div>
      )}
      {!user && (
        <div>
          <Link href={'/login'}>
            <a>Вхід</a>
          </Link>
        </div>
      )}
    </>
  );
}

export default Profile;
