import { IPokemonProps } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ISearchState {
  search: string;
  startupPokemon: IPokemonProps[];
}

const initialState: ISearchState = {
  search: '',
  startupPokemon: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setStartupPokemon: (state, action: PayloadAction<IPokemonProps[]>) => {
      state.startupPokemon = action.payload;
    },
  },
});

export const { setSearch, setStartupPokemon } = searchSlice.actions;

export default searchSlice.reducer;
