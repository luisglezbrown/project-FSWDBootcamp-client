import Navbar from "../components/Navbar";
import ResultsBanner from "../components/ResultsBanner";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";

export default function AllCities() {

    const [cities, setCities] = useState([])

    const API_CITIES = "http://127.0.0.1:8000/api/allcities";
    useEffect(() => {
        fetch(API_CITIES)
        .then(response => response.json())
        .then(data => setCities(data.results))
    }, [])

    const HEADER_CONTENT = `Descubre todas las ciudades...`;
    const TEXT_CONTENT = 'Cientos de localz te esperan en ellas para que no pierdas detalle';

    return (
        <>
            <Navbar />
            <ResultsBanner header={HEADER_CONTENT} text={TEXT_CONTENT} />

            <div className='section-container'>
                <div className='cards-container'>
                    {cities.map(city => <CityCard city={city} key={city.id}/>)}
                </div>
            </div>
        </>
    )
}
