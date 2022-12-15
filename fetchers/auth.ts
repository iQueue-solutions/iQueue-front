import {API_URL} from "../constants";

interface loginArgs {
  email: string,
  password: string,
}
export const login = ({email, password}: loginArgs): Promise<string> => {
  return fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  })
    .then((response) => response.json())
}

interface registerArgs extends loginArgs {
  firstName: string,
  lastName: string,
}
export const register = ({email, password, firstName, lastName}: registerArgs): Promise<string> => {
  return fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
    })
  })
    .then(_ => 'ok')
}
