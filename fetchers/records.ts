import {API_URL} from "../constants";
import {fetchWithAuth} from "./fetchWithAuth";

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

interface createRecordParams {
  index: number;
  participantId: string;
  labNumber?: string;
}
export const createRecord = ({index, participantId, labNumber=''}: createRecordParams): Promise<String> => {
  return fetchWithAuth(`${API_URL}/records`, {
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
    .then(response => response.json())
}

export const removeRecord = ({recordId}): Promise<String> => {
  return fetchWithAuth(`${API_URL}/records/${recordId}`, {
    method: 'DELETE',
  })
    .then(_ => 'ok')
}