import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../shared/utils/constants';
import { IPhone } from '../models/IPhone';

export const phonesAPI = createApi({
  reducerPath: 'phonesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Phone'],
  endpoints: (build) => ({
    getPhones: build.query<IPhone[], Record<string, number | string>>({
      query: ({ sortType = 'ASC', offset = 0, limit = 12 }) => ({
        url: 'phones',
        method: 'GET',
        params: {
          sortType,
          offset,
          limit,
        },
      }),
    }),
    getHotPricePhones: build.query<IPhone[], void>({
      query: () => ({
        url: 'phones/ten-with-disc',
        method: 'GET',
      }),
    }),
    getBrandNewPhones: build.query<IPhone[], void>({
      query: () => ({
        url: 'phones/last-year-phones',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetPhonesQuery,
  useGetHotPricePhonesQuery,
  useGetBrandNewPhonesQuery,
} = phonesAPI;
