import {CheckIcon, XIcon} from "@heroicons/react/outline";

export const ConfirmQueueMember = ({ title, confirmCallback, cancelCallback }) => {
    return (
        <div className="w-full bg-amber-200 h-[100px] rounded-xl mb-3">
            <div className="flex flex-col items-center px-5 py-3 font-semibold">
                <h1 className="text-2xl">{ title }</h1>
                <div className="flex">
                    <button onClick={confirmCallback} className="m-3 px-10 py-1 rounded-lg bg-green-300 transition hover:border-2 hover:border-green-400">
                        <CheckIcon className="w-6" />
                    </button>
                    <button onClick={() => cancelCallback()} className="m-3 px-10 py-1 rounded-lg bg-red-300 transition hover:border-2 hover:border-red-500">
                        <XIcon className="w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
