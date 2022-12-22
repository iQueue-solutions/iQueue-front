import {InformationCircleIcon} from "@heroicons/react/solid";

interface AlertSuccessProps {
  title: string;
  message: string;
}
export function AlertSuccess({title, message}: AlertSuccessProps) {
  return (
    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
      <div className="flex">
        <div className="py-1">
          <InformationCircleIcon className="h-6 w-6 text-teal-500 mr-4"/>
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  )
}
