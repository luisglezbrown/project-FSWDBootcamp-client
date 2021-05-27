import { Link } from 'react-router-dom';

import CityCardsGenerator from './CityCardsGenerator';

import './style/TopDestinations.css'

export default function TopDestinations() {

// Meter la API en un useState

    const API_TOP_CITIES = {
        total: 15,
        results: [
            {id: 1, name: "París", country: "Francia"},
            {id: 2, name: "New York", country: "Estados Unidos"},
            {id: 3, name: "Barcelona", country: "España"},
            {id: 15, name: "Cartagena de Indias", country: "Colombia"},
            {id: 16, name: "Tokio", country: "Japón"},
            {id: 5, name: "Londres", country: "Reino Unido"},
            {id: 6, name: "Rio de Janeiro", country: "Brasil"},
            {id: 7, name: "Abu Dhabi", country: "Emiratos Árabes"},
        ]
    };

    /*     useEffect(() => {
        // TODO: fetch a mi endpoint "crear uno con los más visitados"
    }, []) */

    let cities = API_TOP_CITIES.results;

    return (
        <section className='section-container'>
            <header className='header-container'>
                <h1>Los destinos más buscados</h1>
                <Link to='/all_cities' className="see-more">ver todos</Link>
            </header>
            <CityCardsGenerator data={cities} />
        </section>
    )
}