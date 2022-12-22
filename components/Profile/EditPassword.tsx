import {updatePassword, User} from "../../fetchers/users";
import {useContext, useState} from "react";
import {Input} from "../Input";
import {Button} from "../Button";
import {LayoutContext} from "../Layout/Layout";
import {AlertSuccess} from "../alerts/AlertSuccess";
import {AlertError} from "../alerts/AlertError";
import {useMutation} from "@tanstack/react-query";

export function EditPassword() {
  const {user} : {user: User} = useContext(LayoutContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [isSuccessUpdate, setIsSuccessUpdate] = useState(false);
  const [isErrorUpdate, setIsErrorUpdate] = useState(false);

  const mutation = useMutation({
    mutationFn: updatePassword,
    onSuccess: async (_) => {
      setIsErrorUpdate(false);
      setIsSuccessUpdate(true);
    },
    onError: async (error: any) => {
      setIsSuccessUpdate(false);
      setIsErrorUpdate(true);
      console.log(error);
    }
  })

  const updatePasswordCallback = () => {
    mutation.mutate({userId: user.id, currentPassword, newPassword});
  }

  return (
    <div className="flex flex-col mx-auto w-full items-center mt-5">
      {isSuccessUpdate &&
        <AlertSuccess title="Пароль успішно змінено" message="Ваш пароль успішно змінено" />
      }
      {isErrorUpdate &&
        <AlertError title="Помилка" message="Щось пішло не так" />
      }

      <Input value={currentPassword} handleInput={setCurrentPassword} type='password' placeholder='Теперішній пароль' />
      <Input value={newPassword} handleInput={setNewPassword} type='password' placeholder='Новий пароль' />
      <div className="flex w-1/3 mt-1 justify-around">
        <Button color="green" variant="solid" onClick={updatePasswordCallback}>Зберегти</Button>
      </div>
    </div>
  );
}
