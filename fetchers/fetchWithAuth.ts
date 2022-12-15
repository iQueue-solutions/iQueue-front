
export const fetchWithAuth = async (
  input: RequestInfo | URL,
  init: RequestInit
): Promise<Response> => {
  const token = localStorage.getItem('iQueue-jwt');
  const headers = {
    ...init.headers,
    Authorization: `Bearer ${token}`,
  }
  return fetch(input, { ...init, headers });
}
