import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <header>
      <Link to="/" aria-label="Página inicial">
        <h1>RAIDAR</h1>
      </Link>
      <span>Streams de tecnologia em português</span>
    </header>
  </Container>
  );

export default Header;
