import { Link } from 'react-router-dom';

import CityCardsGenerator from './CityCardsGenerator';

import './style/TopDestinations.css'

export default function TopDestinations() {

// Meter la API en un useState

    const API_TOP_CITIES = {
        total: 15,
        results: [
            {id: 1, name: "París", country: "Francia", top: true},
            {id: 2, name: "New York", country: "Estados Unidos", top: true},
            {id: 6, name: "Rio de Janeiro", country: "Brasil", top: true},
            {id: 7, name: "Abu Dhabi", country: "Emiratos Árabes", top: true},
            {id: 9, name: "Roma", country: "Italia", top: true},
            {id: 10, name: "Atenas", country: "Grecia", top: true},
            {id: 13, name: "San Petersburgo", country: "Rusia", top: true},
            {id: 14, name: "San Francisco", country: "Estados Unidos", top: true},
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