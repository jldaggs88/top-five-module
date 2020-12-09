import React, { useState, useEffect } from 'react';
import axios from '../../axios.js';

const Content = () => {
  const [state, setState] = useState({Content: []});

  const getData = () => {
    axios.get(`/analytics/authors`, {})
      .then(res => {
        const data = res.data
        console.log(data)
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
