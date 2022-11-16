import {API_URL} from "../constants";
import {Record} from "./records";

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