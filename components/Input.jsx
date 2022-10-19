export const Input = ({ icon, placeholder, handleInput }) => {
 return (
  <div className={`border-2 border-slate-400 p-2 rounded-lg ${icon ? "mb-6 flex" : "mb-10"}`}>
   {icon}
   <input
    type="text"
    onInput={handleInput}
    placeholder={placeholder}
    className="bg-transparent focus:outline-none w-full"
   />
  </div>
 );
};
