import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import isEmpty from 'lodash/isEmpty';

export default function PlanetList(props) {
    return (
        <React.Fragment>
            <Loader isLoading={props.searchLoading}/>
            {!isEmpty(props.planets) && props.planets.map(planet => <p key={planet.name}>{planet.name}</p>)}
        </React.Fragment>
    )
}

const { bool, array } = PropTypes;

PlanetList.propTypes = {
    isLoading: bool.isRequired,
    planets: array.isRequired
};