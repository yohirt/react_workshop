import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import isEmpty from 'lodash/isEmpty';
import PlanetListItem from './PlanetsListItem';

export default function PlanetList(props) {
    return (
        <React.Fragment>
            <Loader isLoading={props.isLoading}/>
            <ol className="w-75">
                {!isEmpty(props.planets)
                    ? props.planets.map(planet => <PlanetListItem planet={planet}/>)
                    : <p>Nothing found</p>}
            </ol>
        </React.Fragment>
    )
}

const { bool, array } = PropTypes;

PlanetList.propTypes = {
    isLoading: bool.isRequired,
    planets: array.isRequired
};