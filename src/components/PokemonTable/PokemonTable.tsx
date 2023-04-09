import { IPokemonProps } from '@/types';

export const PokemonTable = ({ pokemons }: { pokemons: IPokemonProps[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon) => {
          return (
            <tr key={pokemon.name}>
              <td>{pokemon.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
