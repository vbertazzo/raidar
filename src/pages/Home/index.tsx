import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

import {
 Container, Streams, Stream, StreamInfo, RaidCopy,
} from './styles';

interface Stream {
  community_ids: string[]
  game_id: string
  id: string
  language: string
  pagination: string
  started_at: string
  tag_ids: string
  thumbnail_url: string
  title: string
  type: string
  user_id: string
  user_name: string
  viewer_count: number
}

const Home: React.FC = () => {
  const [streams, setStreams] = useState<Stream[]>([]);

  useEffect(() => {
    async function fetchStreams() {
      // try {
      //   const response = await api.get('/streams?game_id=509670&language=pt');

      //   setStreams(response.data);
      // } catch (err) {
      //   console.log('Error', err);
      // }

    }

    fetchStreams();
  }, []);


  return (
    <Container>
      <Header />
      <Streams>
        <Stream>
          <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_eduardorfs-300x180.jpg" alt="" />
          <StreamInfo>
            <a href="https://www.twitch.tv/userid">
              <strong>[BR/ENG] STENCYL: TESTANDO ALGUMA COISA TITULO COMPRIDO DEMAIS</strong>
            </a>
            <span>XBeowulf</span>
          </StreamInfo>
          <RaidCopy>
            <input type="text" value="/raid XBeowulf" readOnly />
            <button type="button">Copiar</button>
          </RaidCopy>
        </Stream>
        <Stream>
          <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_eduardorfs-300x180.jpg" alt="" />
          <StreamInfo>
            <a href="https://www.twitch.tv/userid">
              <strong>[BR/ENG] STENCYL: TESTANDO ALGUMA COISA TITULO COMPRIDO DEMAIS</strong>
            </a>
            <span>XBeowulf</span>
          </StreamInfo>
          <RaidCopy>
            <input type="text" value="/raid XBeowulf" readOnly />
            <button type="button">Copiar</button>
          </RaidCopy>
        </Stream>
        <Stream>
          <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_eduardorfs-300x180.jpg" alt="" />
          <StreamInfo>
            <a href="https://www.twitch.tv/userid">
              <strong>[BR/ENG] STENCYL: TESTANDO ALGUMA COISA TITULO COMPRIDO DEMAIS</strong>
            </a>
            <span>XBeowulf</span>
          </StreamInfo>
          <RaidCopy>
            <input type="text" value="/raid XBeowulf" readOnly />
            <button type="button">Copiar</button>
          </RaidCopy>
        </Stream>
        <Stream>
          <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_eduardorfs-300x180.jpg" alt="" />
          <StreamInfo>
            <a href="https://www.twitch.tv/userid">
              <strong>[BR/ENG] STENCYL: TESTANDO ALGUMA COISA TITULO COMPRIDO DEMAIS</strong>
            </a>
            <span>XBeowulf</span>
          </StreamInfo>
          <RaidCopy>
            <input type="text" value="/raid XBeowulf" readOnly />
            <button type="button">Copiar</button>
          </RaidCopy>
        </Stream>
        <Stream>
          <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_eduardorfs-300x180.jpg" alt="" />
          <StreamInfo>
            <a href="https://www.twitch.tv/userid">
              <strong>[BR/ENG] STENCYL: TESTANDO ALGUMA COISA TITULO COMPRIDO DEMAIS</strong>
            </a>
            <span>XBeowulf</span>
          </StreamInfo>
          <RaidCopy>
            <input type="text" value="/raid XBeowulf" readOnly />
            <button type="button">Copiar</button>
          </RaidCopy>
        </Stream>
      </Streams>
    </Container>

  );
};

export default Home;
