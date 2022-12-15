import {useContext, useMemo, useState} from 'react'
import {CreateQueueHeading} from '../components/CreateQueueHeading'
import {Input} from '../components/Input'
import {Button} from '../components/Button'
import {useMutation, useQuery} from "@tanstack/react-query";
import {login} from "../fetchers/auth";
import Link from "next/link";
import {validateEmail} from "../utils";
import {useRouter} from "next/router";
import {getUsers} from "../fetchers/users";
import {LayoutContext} from "../components/Layout/Layout";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const router = useRouter();

  const onRegisterClick = () => {
    const isEmailValid = validateEmail(email);
    setEmailError(!isEmailValid);

    if(isEmailValid) {
      mutation.mutate({email, password});
    }
  }

  const {data: users} = useQuery({queryKey: ['users'], queryFn: getUsers});
  const userByEmail = useMemo(() => {
    return users?.find(user => user.email === email);
  }, [users, email]);

  const { setUser } = useContext(LayoutContext);
  function onSuccessLogin(jwt: string) {
    localStorage.setItem('iQueue-jwt', jwt);
    setUser(userByEmail);
    router.push('/profile');
  }

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: async (res) => {
      if(res.ok) {
        setLoginError(false);

        const jwt = await res.text();
        onSuccessLogin(jwt);
      } else {
        const error = await res.text();
        console.error('Login error: ', error);
        setLoginError(true);
      }
    },
    onError: (error) => {
      console.log(error);
      setLoginError(true);
    }
  });

  return (
    <div className="w-[90%] md:w-[70%] mx-auto py-5 md:pt-0 mb-5 md:mb-0 md:mt-5 flex flex-col items-center justify-center bg-blue-300 rounded-lg">
   <CreateQueueHeading>
    Вхід в систему
   </CreateQueueHeading>
   <div className="flex flex-col w-10/12 md:w-1/2">
     <form className="mt-9 justify-between flex flex-col">
       {emailError &&
         <div className='text-md text-red-600'>адреса має бути в домені nure.ua</div>
       }
       <Input type="email" placeholder="Email" value={email} handleInput={setEmail} />
       <Input type="password" placeholder="Пароль" value={password} handleInput={setPassword} />
     </form>
    <Button
     color="purple"
     variant="solid"
      onClick={onRegisterClick}
    >
     Увійти
    </Button>
     {loginError &&
       <div className='text-xl text-red-600 self-center'>Помилка входу</div>
     }
   </div>
   <div className='text-md text-purple-800 mt-2'>Ще не зареєструвались? <span className='underline hover:decoration-dashed cursor-pointer'>
     <Link href={'/registration'}>
       <a>Реєстрація</a>
     </Link>
   </span></div>
  </div>
  )
}

export default Login;
