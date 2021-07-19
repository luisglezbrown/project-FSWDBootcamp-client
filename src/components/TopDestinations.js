import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { GET_CITIES_TOP } from '../config/config';

import CityCard from './CityCard';

export default function TopDestinations() {

    const [topCities, setTopCities] = useState([])

    useEffect(() => {
        fetch(GET_CITIES_TOP)
        .then(response => response.json())
        .then(data => setTopCities(data.results))
    }, [])

    return (
        <section className='section-container'>
            <header className='header-container'>
                <h1>Los destinos más buscados</h1>
                <Link to='/allCities' className="see-more">ver todos</Link>
            </header>
            <div className='grid cardsx4'>
                {topCities.map(city => <CityCard city={city} key={city.id}/>)}
            </div>
        </section>
    )
}