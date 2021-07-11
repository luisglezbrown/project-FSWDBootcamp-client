import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from '../components/Navbar';
import TourDetails from '../components/TourDetails';

export default function Tour() {

    const { id } = useParams();
    const [tour, setTour] = useState([])

    const API_TOUR_DETAILS = `http://127.0.0.1:8000/api/tourdetails/${id}`
    useEffect(() => {
        fetch(API_TOUR_DETAILS)
        .then(response => response.json())
        .then(data => setTour(data))
        // eslint-disable-next-line
    }, [])


	const guide = tour?.guide;

    return (
        <>
            <Navbar />
            <TourDetails guide={guide} tour={tour}/>
        </>
    )
}
