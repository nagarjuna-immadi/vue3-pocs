import axios from 'axios';

// eslint-disable-next-line
export const fetchMessage = async function () {
  const response = await axios.get('/message');
  return response.data.message;
};
