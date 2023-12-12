import { IEvent } from 'types/types.ts';

export const sendRequest = async (url: string, method: string, data: IEvent) => {
  const res = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    return res.json();
  }
  throw new Error('Network response not ok.');
};

export const fakeUrl = 'http://localhost:4000';
