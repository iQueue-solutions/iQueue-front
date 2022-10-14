const QueueCreationForm = ({icon}) => {
  return (
    <form className="w-1/4 mt-24">
      <div className="border-2 border-slate-400 p-2 rounded-lg mb-10"><input type="text" placeholder="Назва" className="bg-transparent focus:outline-none w-full" /></div>
      <div className="border-2 border-slate-400 p-2 rounded-lg mb-6 flex">{icon}<input type="text" placeholder="Початок запису в чергу" className="bg-transparent focus:outline-none w-full" /></div>
      <div className="border-2 border-slate-400 p-2 rounded-lg mb-6 flex">{icon}<input type="text" placeholder="Кінець запису в чергу" className="bg-transparent focus:outline-none w-full" /></div>
    </form>
  )
}


export default QueueCreationForm;