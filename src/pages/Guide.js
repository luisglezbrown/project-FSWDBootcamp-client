import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_GUIDE_DETAILS } from '../config/config';

import Navbar from "../components/Navbar";
import TourCard from "../components/TourCard";
import GuideDetails from "../components/GuideDetails";
// import { useFetch } from '../hooks/useFetch';

export default function Guide() {

    const { id } = useParams();
    const [guide, setGuide] = useState([])

    useEffect(() => {
        fetch(GET_GUIDE_DETAILS + id)
        .then(response => response.json())
        .then(data => setGuide(data))
        // eslint-disable-next-line
    }, [])
    
    const tours = guide?.tours;

    return (
        <>  
            <Navbar />
            <div className='section-container'>
                <GuideDetails guide={guide} />
                <h1>Los tours de {guide.name}:</h1>                
                <div className='cards-container'>
                    {tours?.map(tour => <TourCard tour={tour} key={tour.id}/>)}
                </div>
            </div>      
        </>
    )
}
