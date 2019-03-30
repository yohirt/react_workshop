import React from 'react';
import Loader from './Loader';

function  StarWarsApp () {
    return <div className="d-flex flex-column align-items-center">
        <h1>Star Wars Planets</h1>
        <Loader/>
    </div>
  };

export default StarWarsApp;