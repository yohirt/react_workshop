import React from 'react';
import PropTypes from 'prop-types';

export default function PlanetListItem({ planet }) {
    return (
        <li key={planet.id} className="d-flex justify-content-between">
            <span>{planet.name} </span>
            <span>{planet.climate} </span>
            <span>{planet.population}</span>
        </li>
    )
}

const { string, number, shape, oneOfType } = PropTypes;

PlanetListItem.propTypes = {
    planet: shape({
        name: string,
        climate: string,
        population: oneOfType([number, string])
    })
};