import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY || '57647240-b4ea581d27336c509e2a6cd6a';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then((response) => response.data);
}
