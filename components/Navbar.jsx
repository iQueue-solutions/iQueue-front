import {
 PlusCircleIcon,
 ViewListIcon,
 UserCircleIcon,
} from "@heroicons/react/outline";
import { NavLinkMobile } from "./NavLinkMobile";
import { NavLinkPC } from "./NavLinkPC";
import {useContext} from "react";
import {LayoutContext} from "./Layout";

export const Navbar = () => {
 const {user} = useContext(LayoutContext);
 return (
  <>
   <div className="w-full md:hidden h-16 bg-blue-300 flex justify-around fixed bottom-0 items-center">
    <NavLinkMobile icon={<ViewListIcon className="w-7" />} text="мої черги" />
    <NavLinkMobile
     icon={<PlusCircleIcon className="w-7" />}
     text="нова черга"
     isAcive={true}
    />
    <NavLinkMobile
     icon={<UserCircleIcon className="w-7" />}
     text={user?.firstName || "мій акаунт"}
    />
   </div>

   <div className="w-full hidden md:flex fixed top-0 py-7 justify-center bg-blue-300">
    <div className="w-11/12 flex bg-slate-50 h-16 items-center justify-between">
     <div className="flex">
      <NavLinkPC icon={<ViewListIcon className="w-9" />} text="мої черги" />
      <NavLinkPC
       icon={<PlusCircleIcon className="w-9" />}
       text="нова черга"
       isAcive={true}
      />
     </div>
     <NavLinkPC icon={<UserCircleIcon className="w-9" />} text={user?.firstName || "мій акаунт"} />
    </div>
   </div>
  </>
 );
};
