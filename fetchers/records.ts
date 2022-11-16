import {API_URL} from "../constants";

export type Record = {
  id: string;
  participantId: string;
  userId: string;
  queueId: string;
  labNumber?: string;
  index: number;
}

export const createRecord = (index, participantId, labNumber='') => {
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
    .then(response => response.json())
}
