import {API_URL} from "../constants";
import {Queue} from "./queues";

export type Record = {
  id: string;
  participantId: string;
  userId: string;
  queueId: string;
  labNumber?: string;
  index: number;
}

export const getRecords = async (queueId: string): Promise<Record[]> => {
  return await fetch(`${API_URL}/queues/${queueId}/records`)
    .then(response => response.json())
}

export const createRecord = (index, participantId, labNumber=''): Promise<string> => {
  return fetch(`${API_URL}/records`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      index,
      participantId,
      labNumber
    })
  })
    .then(_ => "ok")
}
