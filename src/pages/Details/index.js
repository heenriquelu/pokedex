import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { PokemonDetail } from './styles';

function Details({ match }) {
  const [newPokemon, setNewPokemon] = useState([]);
  const [statHP, setStatsHP] = useState([]);
  const [statsAttack, setStatsAttack] = useState([]);
  const [statsDefense, setStatsDefense] = useState([]);
  const [statsSpecialAttack, setStatsSpecialAttack] = useState([]);
  const [statsSpecialDefense, setStatsSpecialDefense] = useState([]);
  const [statsSpeed, setStatsSpeed] = useState([]);
  const [abilitieOne, setAbilitieOne] = useState([]);
  const [abilitieTwo, setAbilitieTwo] = useState([]);
  const [typeOne, setTypeOne] = useState([]);
  const [typeTwo, setTypeTwo] = useState([]);

  const { poke } = match.params;
  const idPoke = newPokemon.id;
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const urlDetail = url + poke;
  const urlSpritesFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPoke}.png`;
  const urlSpritesBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${idPoke}.png`;

  useState(() => {
    async function getNewPokemon() {
      const response = await fetch(urlDetail);
      const data = await response.json();

      setNewPokemon(data);
    }

    getNewPokemon(newPokemon);
  }, []);

  useEffect(() => {
    async function getStatsHP() {
      const response = await fetch(urlDetail);
      const data = await response.json();
      const stat = data.stats[0].base_stat;

      setStatsHP(stat);
    }

    getStatsHP(statHP);
  }, []);

  useEffect(() => {
    async function getStatsAttack() {
      const response = await fetch(urlDetail);
      const data = await response.json();
      const stat = data.stats[1].base_stat;

      setStatsAttack(stat);
    }

    getStatsAttack(statsAttack);
  }, []);

  useEffect(() => {
    async function getStatsDefense() {
      const response = await fetch(urlDetail);
      const data = await response.json();
      const stat = data.stats[2].base_stat;

      setStatsDefense(stat);
    }

    getStatsDefense(statsDefense);
  }, []);

  useEffect(() => {
    async function getStatsSpecialAttack() {
      const response = await fetch(urlDetail);
      const data = await response.json();
      const stat = data.stats[3].base_stat;

      setStatsSpecialAttack(stat);
    }

    getStatsSpecialAttack(statsSpecialAttack);
  }, []);

  useEffect(() => {
    async function getStatsSpecialDefense() {
      const response = await fetch(urlDetail);
      const data = await response.json();
      const stat = data.stats[4].base_stat;

      setStatsSpecialDefense(stat);
    }

    getStatsSpecialDefense(statsSpecialDefense);
  }, []);

  useEffect(() => {
    async function getStatsSpeed() {
      const response = await fetch(urlDetail);
      const data = await response.json();
      const stat = data.stats[5].base_stat;

      setStatsSpeed(stat);
    }

    getStatsSpeed(statsSpeed);
  }, []);

  useEffect(() => {
    async function getAbilitieOne() {
      const response = await fetch(urlDetail);
      const data = await response.json();
      const abilitie = data.abilities[0].ability.name;

      setAbilitieOne(abilitie);
    }

    getAbilitieOne(abilitieOne);
  }, []);

  useEffect(() => {
    async function getAbilitieTwo() {
      const response = await fetch(urlDetail);
      const data = await response.json();
      const abilitie = data.abilities[1].ability.name;

      setAbilitieTwo(abilitie);
    }

    getAbilitieTwo(abilitieOne);
  }, []);

  useEffect(() => {
    async function getTypeOne() {
      const response = await fetch(urlDetail);
      const data = await response.json();
      const abilitie = data.types[0].type.name;

      setTypeOne(abilitie);
    }

    getTypeOne(typeOne);
  }, []);

  useEffect(() => {
    async function getTypeTwo() {
      const response = await fetch(urlDetail);
      const data = await response.json();
      const abilitie = data.types[1].type.name;
      setTypeTwo(abilitie);
    }

    getTypeTwo(typeTwo);
  }, []);

  const weight = newPokemon.weight / 10;
  const height = newPokemon.height / 10;

  return (
    <Container>
      <PokemonDetail>
        <li>
          <div className="imgBack">
            <img src={urlSpritesFront} alt={newPokemon.name} />
            <img src={urlSpritesBack} alt={newPokemon.name} />
          </div>
          <div>
            <strong>{newPokemon.name}</strong> <span />{' '}
          </div>
          <span>Altura: {height} cm</span>
          <span>Peso: {weight} kg</span>
          <span>
            Status Base:
            <li>
              <p>Vida: {statHP}</p>
              <p>Ataque: {statsAttack}</p>
              <p>Defesa: {statsDefense}</p>
              <p>Ataque Especial: {statsSpecialAttack}</p>
              <p>Defesa Especial: {statsSpecialDefense}</p>
              <p>Velocidade: {statsSpeed}</p>
            </li>
          </span>
          <span>
            Habilidades:
            <li>
              <p>{abilitieOne}</p>
              <p>{abilitieTwo}</p>
            </li>
          </span>
          <span>
            Tipos:
            <li>
              <p>{typeOne}</p>
              <p>{typeTwo}</p>
            </li>
          </span>
          <div>
            <Link to="/">VER LISTA</Link>
          </div>
        </li>
      </PokemonDetail>
    </Container>
  );
}

export default Details;
