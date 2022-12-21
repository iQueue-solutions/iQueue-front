import {useContext, useState} from "react";
import {Input} from "../Input";
import {Button} from "../Button";
import {LayoutContext} from "../Layout/Layout";
import {updateUser, User} from "../../fetchers/users";
import {useMutation} from "@tanstack/react-query";
export function EditBasicInfo() {
  const {user, setUser} : {user: User, setUser: (User) => void} = useContext(LayoutContext);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: async (user: User) => {
      setUser(user);
    },
    onError: async (error: any) => {
      console.log(error);
    }
  })

  const updateUserInfo = () => {
    mutation.mutate({userId: user.id, firstName, lastName, email});
  }

  return (
  <div className="flex flex-col mx-auto w-full items-center mt-5">
    <div className='mt-5 w-2/3 md:w-1/3 -mb-5'>
      <Input value={firstName} handleInput={setFirstName} placeholder="Ім'я" />
      <Input value={lastName} handleInput={setLastName} placeholder="Прізвище" />
      <Input value={email} handleInput={setEmail} placeholder="email" />
    </div>
    <div className="flex w-1/3 mt-1 justify-around">
      <Button color="green" variant="solid" onClick={updateUserInfo}>Зберегти</Button>
    </div>

  </div>
  );
}