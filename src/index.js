import React from 'react';
import ReactDOM from 'react-dom';

function  Title () {
  return <div className="d-flex flex-column align-items-center">
      <h1>Star Wars Planets</h1>
      <div className="spinner-border text-primary"></div>
  </div>
};

ReactDOM.render(
  <Title/>,
  document.getElementById('app')
);

module.hot.accept();