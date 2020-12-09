import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
  return <App />;
};
ReactDOM.render(<Index />, document.getElementById('root'));