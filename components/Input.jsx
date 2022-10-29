export const Input = ({ icon, placeholder, handleInput, type="text" }) => {
 return (
  <div
   className={`border-2 border-purple-800 p-2 rounded-lg ${
    icon ? "mb-6 flex" : "mb-10"
   }`}
  >
   {icon}
   <input
    type={type}
    onInput={handleInput}
    placeholder={placeholder}
    className="bg-transparent focus:outline-none w-full"
   />
  </div>
 );
};
