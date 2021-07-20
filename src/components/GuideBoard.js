import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import jwt_decode from "jwt-decode";

import GuideToursTable from './GuideToursTable';

import { GET_TOURS_BY_GUIDE } from "../config/config"

export default function GuideBoard() {
    const {getToken} = useAuthContext();
    const token = getToken();
    const userId=jwt_decode(token).user.id;

    const [tours, setTours] = useState();

    const headers = {
        headers: {"Authorization": "Bearer " + token}
    };

    useEffect(() => {
        fetch(GET_TOURS_BY_GUIDE + userId, headers)
        .then(response => response.json())
        .then(data => setTours(data));
        // eslint-disable-next-line
    }, []);

    console.log(tours)

    return (
        <div className='yellow-card'>
            <h2 className='header-container-inverted flex space-between'>Tus free-tours <Link to="/newtour" className="btn-yellow">+</Link></h2>
                <div className='section-container sub'>   
                {tours?.enabled?.map(tour => 
                    <div className='result-card' key={tour?.id}>
                        <div className="flex space-between">
                            <h2>{tour?.title}</h2>
                            <Link
                                className='btn-yellow'
                                to={{
                                    pathname: "/touredit",
                                    state: tour,
                                }}>Editar
                            </Link>
                        </div>
                        <GuideToursTable tourId={tour.id}/>
                    </div>
                )}
            </div> 
        </div>
    )
}