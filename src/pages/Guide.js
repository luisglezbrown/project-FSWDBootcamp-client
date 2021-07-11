import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import TourCard from "../components/TourCard";
import GuideDetails from "../components/GuideDetails";
// import { useFetch } from '../hooks/useFetch';

export default function Guide() {

    const { id } = useParams();
    const [guide, setGuide] = useState([])

    const API_GUIDE_DETAILS = `http://127.0.0.1:8000/api/guidedetails/${id}`;
    useEffect(() => {
        fetch(API_GUIDE_DETAILS)
        .then(response => response.json())
        .then(data => setGuide(data))
    }, [API_GUIDE_DETAILS])
    
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
