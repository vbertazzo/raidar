import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <footer>
      <span>
        Feito com
        <span role="img" aria-label="Purple Heart"> 💜 </span>
        por um
        <span role="img" aria-label="Koala"> 🐨</span>
      </span>
    </footer>
  </Container>
);

export default Footer;
