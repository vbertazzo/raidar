import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.twitch.tv/helix',
  headers: {
    'Client-ID': '4sqinlk97mxsgmiliuusupjif7i698',
  },
});

export default api;
