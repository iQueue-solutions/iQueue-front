import {API_URL} from "../constants";
import {Participant} from "./participants";
import {fetchWithAuth} from "./fetchWithAuth";

export type Queue = {
  id: string;
  name?: string;
  adminId?: string;
  createTime: string;
  openTime?: string;
  closeTime?: string;
  isOpen: boolean;
  maxRecordNumber?: number;
  participants?: Participant[];
}

export const getQueues = async (): Promise<Queue[]> => {
  return await fetch(`${API_URL}/queues`)
    .then(response => response.json())
}

export const getQueue = async (id: string): Promise<Queue> => {
  return await fetch(`${API_URL}/queues/${id}`)
    .then(response => response.json())
}

export const createQueue = async ({name, adminId, openTime, closeTime, maxRecordNumber}
: {name: string, adminId: string, openTime: string, closeTime: string, maxRecordNumber: number  }
): Promise<string> => {
  console.log("createQueueM args", {name, adminId, openTime, closeTime, maxRecordNumber})
  return fetchWithAuth(`${API_URL}/queues`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      adminId,
      openTime: new Date(openTime).toISOString(),
      closeTime: new Date(closeTime).toISOString(),
      isOpen: true,
      maxRecordNumber,
    }),
  })
    .then(res => res.json())
}

interface closeQueueArgs {
  id: string;
  userId: string;
}

export const openQueue = async ({id, userId} : closeQueueArgs): Promise<string> => {
  return fetchWithAuth(`${API_URL}/queues/${id}/open`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then(_ => `queue ${id} opened`)
}

export const closeQueue = async ({id, userId} : closeQueueArgs): Promise<string> => {
  return fetchWithAuth(`${API_URL}/queues/${id}/close`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then(_ => `queue ${id} closed`)
}

export const removeQueue = async ({id}: {id: string}): Promise<string> => {
  return fetchWithAuth(`${API_URL}/queues/${id}`, {
    method: "DELETE",
  })
    .then(_ => `queue ${id} deleted`)
}

export const changeAdmin = async ({queueId, userId}: {queueId: string, userId: string}): Promise<string> => {
  return fetchWithAuth(`${API_URL}/queues/${queueId}/admin-status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      userId,
    ),
  })
    .then(async res => {
      if (res.ok) {
        return `queue ${queueId} admin changed to ${userId}`
      } else {
        const text = await res.text()
        throw new Error(`queue ${queueId} admin change failed with status ${res.status} (${res.statusText}): ${text}`)
      }
    })
}
