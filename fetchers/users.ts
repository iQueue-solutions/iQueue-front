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

export const updateUser = async ({userId, firstName, lastName, email}): Promise<User> => {
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