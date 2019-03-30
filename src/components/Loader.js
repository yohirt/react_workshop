import React from 'react';
import PropTypes from 'prop-types';

function Loader (props) {
    return (
        <React.Fragment>
            {props.isLoading &&  <div className="spinner-border text-primary"></div>}
        </React.Fragment>
        );
}

const { bool } = PropTypes;

Loader.propTypes = {
    isLoading: bool.isRequired
}
export default Loader;