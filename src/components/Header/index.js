import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Home } from './styles';

export default function Header() {
  return (
    <Container>
      <Home to="/">
        <h1>Pokedex</h1>
      </Home>
    </Container>
  );
}
