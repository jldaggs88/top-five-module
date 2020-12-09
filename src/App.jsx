import React from 'react';
import Users from './components/content/Content.jsx';

const App = () => {


  return (
    <div>

      <div className="jumbotron">
      <h1 className="display-4">Top Stories</h1>

      <p className="lead">Some text here</p>
      <Users />
      <hr className="my-4"/>
      <p>some boilerplate</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">See more</a>
        </p>

      </div>

    </div>
  )
}

export default App;

