import {API_URL} from "../constants";
import {Record} from "./records";
import {fetchWithAuth} from "./fetchWithAuth";

export type User = {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  recordsIds: Record[];
}

export const getUsers = async (): Promise<User[]> => {
  return await fetch(`${API_URL}/users`)
    .then(response => response.json())
}

export const getUser = async (id: string): Promise<User> => {
  return await fetch(`${API_URL}/users/${id}`)
    .then(response => response.json())
}

interface UpdateUserParams {
  userId: string;
  firstName: string,
  lastName: string,
  email: string,
}
export const updateUser = async ({userId, firstName, lastName, email}: UpdateUserParams): Promise<User> => {
  return fetchWithAuth(`${API_URL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: userId,
      firstName,
      lastName,
      email
    })
  })
    .then(response => response.json())
}

interface UpdatePasswordParams {
  userId: string;
  currentPassword: string;
  newPassword: string;

}
export const updatePassword = async ({userId, currentPassword, newPassword}: UpdatePasswordParams): Promise<String> => {
  return fetchWithAuth(`${API_URL}/users/${userId}/password`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      currentPassword,
      newPassword
    })
  })
    .then(async response => {
      if (response.ok) {
        return 'ok';
      } else {
        const text = await response.text();
        throw new Error(`Error updating password: ${response.statusText}, ${text}`);
      }
    })
}