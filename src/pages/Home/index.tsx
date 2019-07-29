import React from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => (
  <Container>
    <Header />
    <Streams>
      <Stream />
    </Streams>
  </Container>
);

export default Home;
