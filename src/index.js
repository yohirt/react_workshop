import React from 'react';
import ReactDOM from 'react-dom';
import StarWarsApp from './components/StarWarsApp';

ReactDOM.render(
  <StarWarsApp/>,
  document.getElementById('app')
);

module.hot.accept();