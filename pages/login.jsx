import {useSession, signIn, signOut} from "next-auth/react";

export default function Login() {
  const {data: session} = useSession();

  return (
    <div>
      {!session && <>
        Not signed in <br/>
        <button onClick={signIn}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.email} <br/>
        <img src={session.user.image} alt="avatar" /> <br/>
        <button onClick={signOut}>Sign out</button>
      </>}
    </div>
  )
}