import {
 PlusCircleIcon,
 ViewListIcon,
 UserCircleIcon,
} from "@heroicons/react/outline";
import { NavLinkMobile } from "./NavLinkMobile";
import { NavLinkPC } from "./NavLinkPC";

export const Navbar = () => {
 return (
  <>
   <div className="w-full md:hidden h-16 bg-blue-300 flex justify-around items-center fixed bottom-0">
    <NavLinkMobile icon={<ViewListIcon className="w-7" />} text="мої черги" />
    <NavLinkMobile
     icon={<PlusCircleIcon className="w-7" />}
     text="нова черга"
     isAcive={true}
    />
    <NavLinkMobile
     icon={<UserCircleIcon className="w-7" />}
     text="мій акаунт"
    />
   </div>

   <div className="w-full hidden h-16 bg-slate-50 md:flex justify-between items-center fixed top-0 mx-7">
    <div className="flex">
     <NavLinkPC icon={<ViewListIcon className="w-9" />} text="мої черги" />
     <NavLinkPC
      icon={<PlusCircleIcon className="w-9" />}
      text="нова черга"
      isAcive={true}
     />
    </div>
    <NavLinkPC icon={<UserCircleIcon className="w-9" />} text="мій акаунт" />
   </div>
  </>
 );
};
