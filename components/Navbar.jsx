import {
 PlusCircleIcon,
 ViewListIcon,
 UserCircleIcon,
} from "@heroicons/react/outline";
import { NavLinkMobile } from "./NavLinkMobile";

export const Navbar = () => {
 return (
  <div className="w-full md:hidden h-16 bg-blue-300 flex justify-around items-center fixed bottom-0">
   <NavLinkMobile icon={<ViewListIcon className="w-7" />} text="мої черги" />
   <NavLinkMobile
    icon={<PlusCircleIcon className="w-7" />}
    text="нова черга"
    isAcive={true}
   />
   <NavLinkMobile icon={<UserCircleIcon className="w-7" />} text="мій акаунт" />
  </div>
 );
};
