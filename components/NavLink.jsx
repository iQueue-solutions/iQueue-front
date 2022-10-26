import Link from "next/link";

export const NavLinkPC = ({ icon, text, isActive, href='#' }) => {
  return (
    <Link href={isActive ? "#" : href}>
      <a className={`flex mx-7 ${isActive ? 'text-purple-800' : 'justify-center text-slate-900 hover:text-purple-800'}`}>
        {icon}
        <div className={`text-2xl ${!isActive && 'ml-1'}`}>{text}</div>
      </a>
    </Link>
  );
};

export const NavLinkMobile = ({ icon, text, isActive, href='#' }) => {
  return (
    <Link href={isActive ? "#" : href}>
      <button className={`flex flex-col items-center ${isActive && 'text-slate-50'}`}>
        {icon}
        <div className="text-[11px]">{text}</div>
      </button>
    </Link>
  );
};
