import axios from 'axios';

export const BASE_URL = 'https://6465bb5e9c09d77a62f25f2e.mockapi.io/items';

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}`);

  return data;
};
