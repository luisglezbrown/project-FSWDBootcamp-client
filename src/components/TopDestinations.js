import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import CityCard from './CityCard';

import './style/TopDestinations.css'

export default function TopDestinations() {

    const [topCities, setTopCities] = useState([])

    const API_TOP_CITIES = "http://127.0.0.1:8000/api/topdestinations";
    useEffect(() => {
        fetch(API_TOP_CITIES)
        .then(response => response.json())
        .then(data => setTopCities(data.results))
    }, [])

    return (
        <section className='section-container'>
            <header className='header-container'>
                <h1>Los destinos más buscados</h1>
                <Link to='/allCities' className="see-more">ver todos</Link>
            </header>
            <div className='cards-container'>
                {topCities.map(city => <CityCard city={city} key={city.id}/>)}
            </div>
        </section>
    )
}