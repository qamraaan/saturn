import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from './store';
import {BASE_URL} from '@env';

console.error(BASE_URL);
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: () => ({}),
});
