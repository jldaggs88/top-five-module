import React, { useState, useEffect } from 'react';
import axios from '../../axios.js';

const Content = () => {
  const [topFive, setTopFive] = useState([]);

  const getData = () => {
    axios.get(`/analytics/posts`, {})
    .then(res => {
      const data = res.data.data;
      console.log(data);
      const top = data.map((e, i)=>{
        setTopFive([...topFive, topFive[i] = <div className="story-card" key={i + 'story'}>
          <img class="card-img-top" src={e.image_url} alt="Card image" />
          <div class="card-body">
            <p class="card-title"><a href={e.link} className="title-button">{e.title}</a></p>
            <small class="text-muted">{e.author}</small>
          </div>
        </div>
        ])
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
