import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ phrase }) {
    return (
      <form>
          <label>
              Planet name:
              <input type="text" value={phrase}/>
          </label>
      </form>
    )
}

const { string, number, shape } = PropTypes;

Search.propTypes = {
    planet: shape({
        phrase: string,
    })
};