import React from 'react';
import searchPlanets from '../providers/SWAPIFetcher';
import PlanetsList from './PlanetsList';

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
            <PlanetsList isLoading={this.state.searchLoading} planets={this.state.planets}/>
        </div>
    };
}

export default StarWarsApp;