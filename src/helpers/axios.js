import axios from 'axios';

import { API_URL } from 'consts';

const axiosCustom = axios.create({
  baseURL: API_URL,
});

const post = (url, payload) =>
  axiosCustom
    .post(url, payload)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

export { post };
