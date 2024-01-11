import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IProduct {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
}

const BASE_URL = 'http://localhost:3001/';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => 'items',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
