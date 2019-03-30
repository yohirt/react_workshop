import axios from 'axios';

/**
 * Searches planets in SWAPI
 * @param {string} query search phrase
 */
export default async function searchPlanets(query) {
    // exit early if query is empty
    if (!query) {
        return [];
    }

    // with use of axios fetch data from SWAPI
    const result = await axios.get(`https://swapi.co/api/planets/?search=${query}`);
    //  return only what is needed from retrieved data
    return transformPlanets(result.data.results);
}

/**
 *Transform array of planets and returns array with some data about each planet
 * @param {array} data array of planets
 */
function transformPlanets(data) {
    return data.map(({ name, climate, population, gravity, orbital_period, rotation_period }) => ({
        name,
        climate,
        population,
        gravity,
        orbitalPeriod: orbital_period,
        rotationPeriod: rotation_period
    }))
}
