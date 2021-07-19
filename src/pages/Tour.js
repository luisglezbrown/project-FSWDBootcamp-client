import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_TOUR_DETAILS } from '../config/config';

import TourDetails from '../components/TourDetails';

export default function Tour() {

    const { id } = useParams();
    const [tour, setTour] = useState([])

    useEffect(() => {
        fetch(GET_TOUR_DETAILS + id)
        .then(response => response.json())
        .then(data => setTour(data))
        // eslint-disable-next-line
    }, [])


	const guide = tour?.guide;

    return (
        <>
            <TourDetails guide={guide} tour={tour}/>
        </>
    )
}
