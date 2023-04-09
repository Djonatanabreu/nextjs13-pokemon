'use client';

import { setSearch } from '@/store/searchSlice';
import { AppDispatch, RootState } from '@/store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PokemonTable } from '../PokemonTable/PokemonTable';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const { search, startupPokemon } = useAppSelector((state) => state.search);

  return (
    <div>
      <input
        type='text'
        value={search}
        onChange={({ target: { value } }) => dispatch(setSearch(value))}
      />
      <PokemonTable pokemons={startupPokemon} />
    </div>
  );
};
