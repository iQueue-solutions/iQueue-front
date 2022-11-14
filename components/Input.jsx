export const Input = ({icon, placeholder, handleInput, value = "", min = "", type = "text"}) => {
  return (<div
    className={`border-2 border-purple-800 p-2 rounded-lg ${icon ? "mb-6 flex" : "mb-10"}`}
  >
    <input
      value={value}
      type={type}
      onInput={e => handleInput(e.target.value)}
      placeholder={placeholder}
      min={min}
      className="bg-transparent focus:outline-none w-full"
    />
  </div>);
};
