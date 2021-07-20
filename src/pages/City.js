import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_TOURS_BY_CITY, CITIES_FOLDER } from '../config/config';

import ResultsBanner from "../components/ResultsBanner";
import TourCard from "../components/TourCard";

export default function City() {

    const { id } = useParams();
    const [results, setResults] = useState([])

    useEffect(() => {
        fetch(GET_TOURS_BY_CITY + id)
        .then(response => response.json())
        .then(data => setResults(data))
        // eslint-disable-next-line
    }, [])

    let city = results?.city;
    let tours = results?.tours;

    const HEADER_CONTENT = `¡Vamos a ${city?.name}!`;
    const TEXT_CONTENT = results?.totalTours > 1
                        ? `${results?.totalTours} free-tours disponibles. Echa un vistazo y reserva el tuyo ¡GRATIS!`
                        : `Solo hay un tour, ¡Esto es amor a primera vista!`;
    const INLINE_STYLE = {backgroundImage: `linear-gradient(95deg, #d4d4d4 0%, rgba(255,255,255,1) 65%, rgba(255,204,0,0) 75%), url(${CITIES_FOLDER + city?.imgpath})`};

    return (
        <>
            <ResultsBanner header={HEADER_CONTENT} text={TEXT_CONTENT} style={INLINE_STYLE}/>

            <div className='section-container'>
                <div className='cards-container'>
                    {tours?.map(tour => <TourCard tour={tour} key={tour.id}/>)}
                </div>
            </div>
        </>
    )
}
