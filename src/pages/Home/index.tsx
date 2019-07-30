import React, { useState, useEffect } from 'react';
import { IoMdEye } from 'react-icons/io';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import api from '../../services/api';
import colors from '../../styles/colors';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  LoaderContainer,
  Container,
  Streams,
  Stream,
  StreamPreview,
  StreamInfo,
  RaidCopy,
  NoResults,
} from './styles';

interface Stream {
  game_id: string
  id: string
  language: string
  preview: string
  raidCopy: string
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
  const [loading, setLoading] = useState<boolean>(true);
  const [hasResults, setHasResults] = useState<boolean>(false);

  useEffect(() => {
    async function fetchStreams() {
      try {
        setHasResults(true);
        const response = await api.get('/streams?game_id=509670&language=pt');
        const data = response.data.data.map((item: Stream) => ({
          ...item,
          preview: `https://static-cdn.jtvnw.net/previews-ttv/live_user_${item.user_name.toLowerCase()}-300x180.jpg`,
          raidCopy: `/raid ${item.user_name}`,
        }));

        if (data.length === 0) {
          setHasResults(false);
        }
        setStreams(data);
      } catch (err) {
        toast.error('Erro ao comunicar com a API do Twitch. Tente novamente.');
      }
      setLoading(false);
    }

    fetchStreams();
  }, []);

  function handleCopy(value: string) {
    navigator.clipboard.writeText(value)
      .catch(() => {
        toast.error('Falha ao copiar. Tente novamente.');
      });
  }

  if (loading) {
    return (
      <LoaderContainer>
        <ClipLoader
          sizeUnit="px"
          size={40}
          color={colors.first}
          loading={loading}
        />
      </LoaderContainer>
    );
  }

  return (
    <Container>
      <Header />
      {!hasResults ? (
        <NoResults>
          Que pena, nenhuma stream online no momento.
          <span role="img" aria-label="Koala"> 😢</span>
        </NoResults>
        ) : (
          <Streams>
            {streams.map(stream => (
              <Stream key={stream.id}>
                <StreamPreview>
                  <a
                    href={`https://www.twitch.tv/${stream.user_name}`}
                    title={`Abrir stream de ${stream.user_name} na Twitch`}
                  >
                    <img src={stream.preview} alt="" aria-hidden="true" />
                  </a>
                  <div>
                    <IoMdEye size={14} color={colors.white} aria-hidden="true" />
                    <span>{stream.viewer_count}</span>
                  </div>
                </StreamPreview>
                <StreamInfo>
                  <a
                    href={`https://www.twitch.tv/${stream.user_name}`}
                    title={`Abrir stream de ${stream.user_name} na Twitch`}
                  >
                    <strong>{stream.title}</strong>
                  </a>
                  <span>{stream.user_name}</span>
                </StreamInfo>
                <RaidCopy>
                  <input
                    type="text"
                    id="input"
                    value={stream.raidCopy}
                    aria-label={`Comando para enviar raid para ${stream.user_name} na Twitch`}
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(stream.raidCopy)}
                    aria-label={`Copiar comando para enviar raid para ${stream.user_name} na Twitch`}
                  />
                </RaidCopy>
              </Stream>
            ))}
          </Streams>
        )
      }
      <Footer />
    </Container>

  );
};

export default Home;
