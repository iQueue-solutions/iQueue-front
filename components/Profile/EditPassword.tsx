import {User} from "../../fetchers/users";
import {useContext, useState} from "react";
import {Input} from "../Input";
import {Button} from "../Button";
import {LayoutContext} from "../Layout/Layout";

export function EditPassword() {
  const {user} : {user: User} = useContext(LayoutContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <div className="flex flex-col mx-auto w-full items-center mt-5">
      <Input value={currentPassword} handleInput={setCurrentPassword} type='password' placeholder='Теперішній пароль' />
      <Input value={newPassword} handleInput={setNewPassword} type='password' placeholder='Новий пароль' />
      <div className="flex w-1/3 mt-1 justify-around">
        <Button color="green" variant="solid">Зберегти</Button>
      </div>
    </div>
  );
}
