/* eslint-disable @typescript-eslint/no-explicit-any */
// const BASE_URL = 'https://fe-may23-teamscript/ecommerce-backend';

import dataFromDB from 'api/phones.json';

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

type RequestMethod = 'GET' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<string | T> {
  // after complete backend need change to Promise<string | T>
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return wait(300).then(() => {
    return dataFromDB as T;
  });
}

export const server = {
  get: <T>(url: string) => request<T>(url),
  delete: (url: string) => request(url, 'DELETE'),
};
