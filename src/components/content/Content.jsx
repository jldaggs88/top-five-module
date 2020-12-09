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
          setTopFive([...topFive, topFive[i] = <div className="story-card">
            <hr className="my-4"/>
            <img src={e.image_url} alt="" />
            <a href={e.link} className="button">{e.title}</a>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">See more</a>
            </p>
          </div>])
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
