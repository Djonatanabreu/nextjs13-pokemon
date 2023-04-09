'use client';

import { setStartupPokemon } from '@/store/searchSlice';
import { store } from '@/store/store';
import { IPokemonProps } from '@/types';
import { useRef } from 'react';

function Preloader({ pokemons }: { pokemons: IPokemonProps[] }) {
  const loader = useRef(false);

  if (!loader.current) {
    store.dispatch(setStartupPokemon(pokemons));
    loader.current = true;
  }
  return null;
}

export default Preloader;
