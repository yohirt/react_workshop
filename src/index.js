import React from 'react';
import ReactDOM from 'react-dom';

const title = <h1 className="d-flex justify-content-center">Dremlab ReactJS Workshop</h1>;

ReactDOM.render(
  title,
  document.getElementById('app')
);

module.hot.accept();