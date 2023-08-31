import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../shared/utils/constants';
import { IPhone } from '../models/IPhone';

export const phonesAPI = createApi({
  reducerPath: 'phonesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes: ['Phone'],
  endpoints: (build) => ({
    getPhones: build.query<IPhone[], Record<string, number | string >>({
      query: ({sortType, page, limit}) => ({
        url: `/`,
        method: 'GET',
        params: {
          sortType,
          page,
          limit
        }
      }),
    }),
  })
})

export const {
  useGetPhonesQuery
} = phonesAPI;
