export const NavLinkPC = ({ icon, text, isAcive }) => {
 if (isAcive) {
  return (
   <button className="flex text-purple-800 mx-7">
    {icon}
    <div className="text-2xl">{text}</div>
   </button>
  );
 }
 return (
  <button className="flex justify-center text-slate-900 mx-7 hover:text-purple-800">
   {icon}
   <div className="text-2xl ml-1">{text}</div>
  </button>
 );
};
