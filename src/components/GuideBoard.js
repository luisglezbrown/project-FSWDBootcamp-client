import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import jwt_decode from "jwt-decode";

import GuideToursTable from './GuideToursTable';

import { GET_TOURS_BY_GUIDE } from "../config/config"

export default function GuideBoard() {
    // const INLINE_STYLE = {backgroundImage: `linear-gradient(270deg, #fafafa 0%, rgba(255,204,0,0) 10%), url(${TOURS_FOLDER + tour.imgpath})`};
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
    }, [userId]);

    console.log(tours)

    return (
        <>
            <h2>Tus free-tours</h2>
            {tours?.enabled?.map(tour => 
                <ul key={tour.id}>
                    <li>
                        <h1>{tour?.title}</h1>
                        <Link
                            to={{
                                pathname: "/touredit",
                                state: tour,
                            }}
                            >
                            Editar
                        </Link>
                    </li>
                    <li><GuideToursTable tourId={tour.id}/></li>
                </ul>
            )}
        </>
    )
}