import React from 'react';
import searchPlanets from '../providers/SWAPIFetcher';
import PlanetsList from './PlanetsList';
import Search from './Search';

class  StarWarsApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchLoading: false,
            searchPhrase: 'a',
            planets: []
        }
    }

    async componentDidMount() {

        this.setState({
            searchLoading: true
        });

        try {
            const planets  = await searchPlanets('a');

            this.setState({
                searchLoading: false,
                planets
            });
        } catch (error) {
            console.warn(error);
        }

    }

    render() {
        return <div className="d-flex flex-column align-items-center">
            <h1>Star Wars Planets</h1>
            <Search phrase={this.state.searchPhrase}/>
            <PlanetsList isLoading={this.state.searchLoading} planets={this.state.planets}/>
        </div>
    };
}

export default StarWarsApp;