const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    apikey: process.env.API_KEY,
    secret: process.env.API_SECRET,
    sort: "fb_referrals",
    limit: 5
  },
});

export default instance;