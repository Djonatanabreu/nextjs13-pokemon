import Preloader from '@/components/PokemonTable/Preloader';
import Providers from '@/components/Provider/Provider';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { setStartupPokemon } from '@/store/searchSlice';
import { store } from '@/store/store';

export default async function Home() {
  const req = await fetch('http://localhost:3000/api/search');
  const data = await req.json();
  console.log(data);

  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      <Preloader pokemons={data} />
      <Providers>
        <SearchInput />
      </Providers>
    </main>
  );
}
