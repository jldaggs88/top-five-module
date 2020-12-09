import React, { useState, useEffect } from 'react';
import axios from '../../axios.js';

const Content = () => {
  const [topFive, setTopFive] = useState({});

  const getData = () => {
    axios.get(`/analytics/posts`, {})
      .then(res => {
        const data = res.data
        console.log(data);
        // setTopFive(data);
        // const content = data.map(e => {

        // })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getData();
  });

  return (
      <div>
      </div>
  )
}

export default Content; 
