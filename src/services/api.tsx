import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.twitch.tv/helix',
  headers: {
    'Client-ID': process.env.REACT_APP_CLIENT_ID,
  },
});

export default api;
