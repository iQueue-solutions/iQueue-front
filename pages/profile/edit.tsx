import {ProfileImage} from "../../components/Profile/ProfileImage";
import {EditBasicInfo} from "../../components/Profile/EditBasicInfo";
import {EditPassword} from "../../components/Profile/EditPassword";

export default function Edit() {
  return (
  <div className="flex flex-col mx-auto w-full items-center mt-5">
    <ProfileImage img={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`} />
    <EditBasicInfo />
    <hr className='w-2/3 md:w-1/3 my-6' />
    <EditPassword />
  </div>
  );
}
