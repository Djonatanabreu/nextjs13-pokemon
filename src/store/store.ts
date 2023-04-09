import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import { pokemonApi } from './pokemonApi';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    pokemonApi: pokemonApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
