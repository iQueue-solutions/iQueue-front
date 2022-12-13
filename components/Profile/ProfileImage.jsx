import React from 'react'
import { CameraIcon } from "@heroicons/react/outline";
import styles from "../../styles/Image.module.css";

export const ProfileImage = ({img}) => {
  return (
    <div className='w-[250px] aspect-square bg-black rounded-full'>
    <div className={`w-full h-full ${styles.profile}`}>
      <img src={img} alt="Image" className={`w-full h-full cursor-pointer border-2 border-slate-50 object-cover rounded-full`} />
      <CameraIcon className={`w-12 text-white absolute left-[50%] cursor-pointer translate-x-[-50%] top-[125px] md:top-[225px] translate-y-[50%] ${styles.show}`} />
    </div>
    </div>
  )
}
