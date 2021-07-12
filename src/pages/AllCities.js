import Navbar from "../components/Navbar";
import ResultsBanner from "../components/ResultsBanner";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import { GET_CITIES_ALL } from '../config/config';

export default function AllCities() {

    const [cities, setCities] = useState({})

    useEffect(() => {
        fetch(GET_CITIES_ALL)
        .then(response => response.json())
        .then(data => setCities(data))
    }, [])

    const HEADER_CONTENT = `Descubre todas las ciudades...`;
    const TEXT_CONTENT = `Cientos de localz te esperan en ${cities.total} ciudades para que no pierdas detalle`;

    return (
        <>
            <Navbar />
            <ResultsBanner header={HEADER_CONTENT} text={TEXT_CONTENT} />

            <div className='section-container'>
                <div className='cards-container'>
                    {cities.results?.map(city => <CityCard city={city} key={city.id}/>)}
                </div>
            </div>
        </>
    )
}
