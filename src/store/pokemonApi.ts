import { IPokemonProps } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
//Imported  without 'toolkit/query/"react"' becouse its create react hooks, and can't run in server.

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  tagTypes: ['pokemon'],
  endpoints: (builder) => ({
    search: builder.query<IPokemonProps[], string>({
      query: (q) => `search?name=${q}`,
      providesTags: (result, error, search) => [{ type: 'pokemon', search }],
    }),
  }),
});
