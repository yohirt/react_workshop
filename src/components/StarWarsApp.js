import React from 'react';

import debounce from 'lodash/debounce';
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
        this.handlePhraseChange = this.handlePhraseChange.bind(this);
        this.delayed = debounce(this.runSearchQuery, 300);
    }

    componentDidMount() {
        this.runSearchQuery();
    }

    async runSearchQuery() {
        this.setState({
            searchLoading: true
        });

        try {
            const planets  = await searchPlanets(this.state.searchPhrase);

            this.setState({
                searchLoading: false,
                planets
            });
        } catch (error) {
            console.warn(error);
        }
    }

    handlePhraseChange(event) {
        this.setState({
            searchPhrase: event.target.value
        }, this.delayed)
    }


    render() {
        return <div className="d-flex flex-column align-items-center">
            <h1>Star Wars Planets</h1>
            <Search phrase={this.state.searchPhrase} onPhraseChange={this.handlePhraseChange}/>
            <PlanetsList isLoading={this.state.searchLoading} planets={this.state.planets}/>
        </div>
    };
}

export default StarWarsApp;