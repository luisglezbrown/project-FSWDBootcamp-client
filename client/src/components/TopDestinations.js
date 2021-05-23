import { Link } from 'react-router-dom';

import TopCityCard from "./TopCityCard";

import './style/TopDestinations.css'

export default function TopDestinations() {

    const API_CITIES = {
        total: 15,
        results: [
            {id: 1, name: "París", country: "Francia", top: true},
            {id: 2, name: "New York", country: "Estados Unidos", top: true},
            {id: 3, name: "Barcelona", country: "España", top: false},
            {id: 4, name: "Estambul", country: "Turquía", top: true},
            {id: 5, name: "Londres", country: "Reino Unido", top: true},
            {id: 6, name: "Rio de Janeiro", country: "Brasil", top: true},
            {id: 7, name: "Abu Dhabi", country: "Emiratos Árabes", top: false},
            {id: 8, name: "Viena", country: "Austria", top: false},
            {id: 9, name: "Roma", country: "Italia", top: true},
            {id: 10, name: "Atenas", country: "Grecia", top: true},
            {id: 11, name: "Praga", country: "República Checa", top: false},
            {id: 12, name: "Budapest", country: "Hungría", top: false},
            {id: 13, name: "San Petersburgo", country: "Rusia", top: false},
            {id: 14, name: "San Francisco", country: "Estados Unidos", top: true},
            {id: 15, name: "Cartagena de Indias", country: "Colombia", top: false}
        ]
    };

    let cities = API_CITIES.results;

    return (
        <section className='section-container'>
            <header className='header-container'>
                <h1>Destinos destacados</h1>
                <Link to='/all_cities' className="see-more">ver todos</Link>
            </header>
            <div className='cards-container'>
                {cities.map(city => city.top && <TopCityCard city={city} />)}
            </div>
        </section>
    )
}
