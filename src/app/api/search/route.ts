import pokemon from '@/pokemon.json';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');
  const pokemonData = pokemon.filter((p) =>
    p.name.toLocaleLowerCase().includes(name?.toLocaleLowerCase() ?? '')
  );
  return NextResponse.json(pokemonData.slice(0, 10));
}
