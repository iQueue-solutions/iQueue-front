export const DateToQueueDate = (date: Date): string => {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}
export function validateEmail(email: string) {
  return /@nure.ua\s*$/.test(email);
}

