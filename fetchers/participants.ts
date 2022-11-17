import {API_URL} from "../constants";

export type Participant = {
  id: string;
  userId: string;
  queueId: string;
}

export const createParticipant = (queueId, userId) => {
  return fetch(`${API_URL}/queues/${queueId}/add-participants`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      userId
    ])
  })
}