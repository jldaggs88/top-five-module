const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    apikey: process.env.API_KEY,
    secret: process.env.API_SECRET
  },
});

export default instance;