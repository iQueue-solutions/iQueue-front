import {
 PlusCircleIcon,
 ViewListIcon,
 UserCircleIcon,
} from "@heroicons/react/outline";
import { NavLinkPC, NavLinkMobile } from "./NavLink";
import { useContext } from "react";
import { LayoutContext } from "./Layout";
import { useRouter } from "next/router";
import { Swap } from "../Icons";

export const Navbar = () => {
 const { user } = useContext(LayoutContext);
 const router = useRouter();

 return (
  <>
   <div className="w-full md:hidden h-16 bg-blue-300 flex justify-around fixed bottom-0 items-center">
    <NavLinkMobile
     icon={<ViewListIcon className="w-7" />}
     text="мої черги"
     isActive={router.pathname === "/"}
     href="/"
    />
    <NavLinkMobile
     icon={<PlusCircleIcon className="w-7" />}
     text="нова черга"
     isActive={router.pathname === "/queue/new"}
     href="/queue/new"
    />
    <NavLinkMobile
     icon={<Swap width="w-7" />}
     text="запити"
     isActive={router.pathname === "/queue/new"}
     href="/queue/new"
    />
    <NavLinkMobile
     icon={<UserCircleIcon className="w-7" />}
     text={user?.firstName || "мій акаунт"}
     isActive={router.pathname === "/profile"}
     href="/profile"
    />
   </div>

   <div className="w-full hidden md:flex fixed top-0 py-7 justify-center bg-blue-300">
    <div className="w-11/12 flex bg-slate-50 h-16 items-center justify-between">
     <div className="flex">
      <NavLinkPC
       icon={<ViewListIcon className="w-9" />}
       text="мої черги"
       isActive={router.pathname === "/"}
       href="/"
      />
      <NavLinkPC
       icon={<PlusCircleIcon className="w-9" />}
       text="нова черга"
       isActive={router.pathname === "/queue/new"}
       href="/queue/new"
      />
      <NavLinkPC
       icon={<Swap width="w-9" />}
       text="запити"
       isActive={router.pathname === "/queue/new"}
       href="/queue/new"
      />
     </div>
     <NavLinkPC
      icon={<UserCircleIcon className="w-9" />}
      text={user?.firstName || "мій акаунт"}
      isActive={router.pathname === "/profile"}
      href="/profile"
     />
    </div>
   </div>
  </>
 );
};
