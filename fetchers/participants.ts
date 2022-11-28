import {API_URL} from "../constants";
import {User} from "./users";

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

interface createParticipantsArgs {
  queueId: string,
  userIds: User[],
}
export const createParticipants = ({queueId, userIds}: createParticipantsArgs): Promise<string> => {
  return fetch(`${API_URL}/participants/collection?queueId=${queueId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( userIds )
  })
    .then(_ => 'ok')
}