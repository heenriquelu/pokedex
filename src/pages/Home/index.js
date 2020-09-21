import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { PokemonList } from './styles';

export default function Main() {
  const [pokemons, setPokemons] = useState([]);

  useState(() => {
    async function getPokemons() {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=10200';
      const response = await fetch(url);
      const data = await response.json();
      setPokemons(data.results);
    }

    getPokemons(pokemons);
  }, [setPokemons]);

  return (
    <Container>
      <PokemonList>
        {pokemons.map((poke) => (
          <li key={poke.id}>
            <strong>{poke.name}</strong>

            <button type="button">
              <Link to={`/details/${encodeURIComponent(poke.name)}`}>
                Detalhes
              </Link>
            </button>
          </li>
        ))}
      </PokemonList>
    </Container>
  );
}
