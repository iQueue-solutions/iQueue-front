import {API_URL} from "../constants";

export const getParticipants = (queueId) => {
  return fetch(`${API_URL}/queues/${queueId}/participants`)
    .then(response => response.json())
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
    .then(response => response.json())
}
