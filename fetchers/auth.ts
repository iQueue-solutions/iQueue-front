import {API_URL} from "../constants";
import {fetchWithAuth} from "./fetchWithAuth";

interface loginArgs {
  email: string,
  password: string,
}
export const login = ({email, password}: loginArgs): Promise<Response> => {
  return fetchWithAuth(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  })
}

interface registerArgs extends loginArgs {
  firstName: string,
  lastName: string,
}
export const register = ({email, password, firstName, lastName}: registerArgs): Promise<string> => {
  return fetchWithAuth(`${API_URL}/auth/register`, {
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
