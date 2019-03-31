import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ phrase, onPhraseChange }) {
    return (
      <form>
          <label>
              Planet name:
              <input type="text" value={phrase} onChange={onPhraseChange}/>
          </label>
      </form>
    )
}

const { string,  shape, func } = PropTypes;

Search.propTypes = {
    planet: shape({
        phrase: string,
        onPhraseChange: func
    })
};