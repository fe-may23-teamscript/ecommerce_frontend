import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../shared/utils/constants';
import { IProductModel } from 'models/IProductModel';

interface IGetPhones {
  count: number;
  rows: IProductModel[];
}

export const phonesAPI = createApi({
  reducerPath: 'phonesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Phone'],
  endpoints: (build) => ({
    getPhones: build.query<IGetPhones, Record<string, number | string>>({
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
    getHotPricePhones: build.query<IProductModel[], void>({
      query: () => ({
        url: 'phones/ten-with-disc',
        method: 'GET',
      }),
    }),
    getBrandNewPhones: build.query<IProductModel[], void>({
      query: () => ({
        url: 'phones/last-year-phones',
        method: 'GET',
      }),
    }),
    getPhoneById: build.query<IProductModel, string>({
      query: (id) => ({
        url: `phones/${id}`,
        method: 'GET',
      }),
    }),
    getPhoneBySlug: build.query<IProductModel, string>({
      query: (slug) => ({
        url: `phones/${slug}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetPhonesQuery,
  useGetHotPricePhonesQuery,
  useGetBrandNewPhonesQuery,
  useGetPhoneByIdQuery,
  useGetPhoneBySlugQuery,
} = phonesAPI;
