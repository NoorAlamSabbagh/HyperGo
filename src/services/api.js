// src/services/api.js

import axios from 'axios';

const BASE_URL = 'https://internship-service.onrender.com';

export const fetchVideos = (page) => {
  return axios.get(`${BASE_URL}/videos?page=${page}`);
};
