'use client';

import { setSearch } from '@/store/searchSlice';
import { AppDispatch, RootState } from '@/store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PokemonTable } from '../PokemonTable/PokemonTable';
import { IPokemonProps } from '@/types';
import { useEffect } from 'react';
import { pokemonApi } from '@/store/pokemonApi';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const { search, startupPokemon } = useAppSelector((state) => state.search);
  const data = useAppSelector(
    (state) =>
      state.pokemonApi.queries[`search("${search}")`]?.data as IPokemonProps[]
  );

  useEffect(() => {
    dispatch(pokemonApi.endpoints.search.initiate(search));
  }, [dispatch, search]);

  return (
    <div>
      <input
        type='text'
        value={search}
        onChange={({ target: { value } }) => dispatch(setSearch(value))}
      />
      <PokemonTable pokemons={search.length ? data ?? [] : startupPokemon} />
    </div>
  );
};
