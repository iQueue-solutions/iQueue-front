import {API_URL} from "../constants";

export type Participant = {
  id: string;
  userId: string;
  queueId: string;
}

export const createParticipant = ({queueId, userId}): Promise<string> => {
  return fetch(`${API_URL}/participants`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      queueId,
      userId
    })
  })
    .then(res => res.json())
}
