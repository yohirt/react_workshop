import React from 'react';
import Loader from './Loader';
import searchPlanets from '../providers/SWAPIFetcher';

class  StarWarsApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchLoading: false,
            planets: []
        }
    }

    async componentDidMount() {
        this.setState({
            searchLoading: true
        });

        const planets  = await searchPlanets('a');

        this.setState({
            searchLoading: false,
            planets
        });
    }

    render() {
        return <div className="d-flex flex-column align-items-center">
            <h1>Star Wars Planets</h1>
            <Loader isLoading={this.state.searchLoading}/>
            <p>
                {this.state.planets.length && this.state.planets[0].name}
            </p>
        </div>
    };
}

export default StarWarsApp;