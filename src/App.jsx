import React from 'react';

import Content from './components/content/Content.jsx';

const App = () => {


  return (
    <div>

      <div className="jumbotron">
      <h1 className="display-4">NOLA.com's Top Five</h1>
      <p className="lead">Contributors on Facebook</p>
      <Content />
      </div>

    </div>
  )
}

export default App;

