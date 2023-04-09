// ## ITS A PURE SSR COMPONENT CONNECTING WITH THE STORE.

import SSRPokemonTable from '@/components/PokemonTable/SSRPokemonTable';
import { setStartupPokemon } from '@/store/searchSlice';
import { store } from '@/store/store';

export default async function Home() {
  const req = await fetch('http://localhost:3000/api/search');
  const data = await req.json();
  console.log(data);

  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      <SSRPokemonTable />
    </main>
  );
}
