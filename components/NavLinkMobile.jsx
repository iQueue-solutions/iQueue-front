export const NavLinkMobile = ({ icon, text, isAcive }) => {
 if (isAcive) {
  return (
   <button className="flex flex-col items-center text-slate-50">
    {icon}
    <div className="text-[11px]">{text}</div>
   </button>
  );
 }
 return (
  <button className="flex flex-col items-center">
   {icon}
   <div className="text-[11px]">{text}</div>
  </button>
 );
};
