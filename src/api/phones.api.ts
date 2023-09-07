import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../shared/utils/constants';
import { IProductModel } from 'models/IProductModel';

interface IGetProducts {
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
    getAllProducts: build.query<IGetProducts, Record<string, number | string>>({
      query: () => ({
        url: 'products',
        method: 'GET',
      }),
    }),
    getProductsByCategory: build.query<
      IGetProducts,
      Record<string, number | string>
    >({
      query: ({ order = 'year:DESC', offset = 0, limit = 12, category = '' }) => ({
        url: 'products',
        method: 'GET',
        params: {
          productType: category,
          order,
          offset,
          limit,
        },
      }),
    }),
    getPhones: build.query<IGetProducts, Record<string, number | string>>({
      query: ({ order = 'year:DESC', offset = 0, limit = 12 }) => ({
        url: 'products',
        method: 'GET',
        params: {
          order,
          offset,
          limit,
        },
      }),
    }),
    getHotPricePhones: build.query<IProductModel[], void>({
      query: () => ({
        url: 'products/discount',
        method: 'GET',
      }),
    }),
    getBrandNewPhones: build.query<IProductModel[], void>({
      query: () => ({
        url: 'products/new',
        method: 'GET',
      }),
    }),
    getPhoneById: build.query<IProductModel, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'GET',
      }),
    }),
    getPhoneBySlug: build.query<IProductModel, string>({
      query: (slug) => ({
        url: `products/${slug}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetProductsByCategoryQuery,
  useGetPhonesQuery,
  useGetHotPricePhonesQuery,
  useGetBrandNewPhonesQuery,
  useGetPhoneByIdQuery,
  useGetPhoneBySlugQuery,
} = phonesAPI;
