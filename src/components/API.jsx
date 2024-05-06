import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '42294787-218c53a6cef21d155db2a680c',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};
