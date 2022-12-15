import {useState} from 'react'
import {CreateQueueHeading} from '../components/CreateQueueHeading'
import {Input} from '../components/Input'
import {Button} from '../components/Button'
import {useMutation} from "@tanstack/react-query";
import {register} from "../fetchers/auth";
import {useRouter} from "next/router";
import Link from "next/link";
import {validateEmail} from "../utils";

const Registration = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);

  const router = useRouter();

  const onRegisterClick = () => {
    const isEmailValid = validateEmail(email);
    setEmailError(!isEmailValid);

    if(isEmailValid) {
      mutation.mutate({email, password, firstName, lastName});
    }
  }

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      setRegistrationError(false);
      router.push('/login');
    },
    onError: (error) => {
      console.log(error);
      setRegistrationError(true);
    }
  });

  return (
    <div className="w-[90%] md:w-[70%] mx-auto py-5 md:pt-0 mb-5 md:mb-0 md:mt-5 flex flex-col items-center justify-center bg-blue-300 rounded-lg">
   <CreateQueueHeading>
    Реєстрація
   </CreateQueueHeading>
   <div className="flex flex-col w-10/12 md:w-1/2">
     <form className="mt-9 justify-between flex flex-col">
       {emailError &&
         <div className='text-md text-red-600'>адреса має бути в домені nure.ua</div>
       }
       <Input type="email" placeholder="Email" value={email} handleInput={setEmail} />
       <div className="flex flex-col md:flex-row justify-between">
          <Input type="text" placeholder="Ім'я" value={firstName} handleInput={setFirstName} />
          <Input type="text" placeholder="Прізвище" value={lastName} handleInput={setLastName} />
        </div>
       <Input type="password" placeholder="Пароль" value={password} handleInput={setPassword} />
     </form>
    <Button
     color="purple"
     variant="solid"
      onClick={onRegisterClick}
    >
     Реєстрація
    </Button>
     {registrationError &&
       <div className='text-xl text-red-600 self-center'>Помилка реєстрації</div>
     }
   </div>
   <div className='text-md text-purple-800 mt-2'>Вже реєструвалися? <span className='underline hover:decoration-dashed cursor-pointer'>
     <Link href={'/login'}>
       <a>Увійдіть</a>
     </Link>
   </span></div>
  </div>
  )
}

export default Registration;
