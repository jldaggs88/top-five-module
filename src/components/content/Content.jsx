import React, { useState, useEffect } from 'react';
const axios = require("axios");

const Content = () => {
  const [topFive, setTopFive] = useState([]);

  const getData = () => {
    axios.get(`/analytics/authors`, {
      baseURL: process.env.BASE_URL,
      params: {
        apikey: process.env.API_KEY,
        secret: process.env.API_SECRET,
        sort: "fb_referrals",
        period_start: '24h',
        limit: 5
      },
    })
    .then(res => {
      const data = res.data.data;
      console.log(data, 'here');
      const top = data.map((e, i)=>{
        axios.get(`/analytics/posts`, {
          baseURL: process.env.BASE_URL,
          params: {
            apikey: process.env.API_KEY,
            secret: process.env.API_SECRET,
            sort: "fb_referrals",
            limit: 20,
            page: 1,
            author: e.author,
            period_start: '24h'
          }
        })
        .then(res => {
          const authorTopData = res.data.data[0];
          setTopFive([...topFive, topFive[i] = <div className="story-card" key={i + 'story'}>
            <img className="card-img-top" src={authorTopData.image_url} alt="Card image" />
            <div className="card-body">
              <p className="card-title"><a href={authorTopData.link} className="title-button">{authorTopData.title}</a></p>
              <small className="text-muted">{e.author}</small>
            </div>
          </div>
          ])
        })
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
      <div className="stories-container">
        {topFive}
      </div>
  )
}

export default Content; 
