import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { GET_CURRENT_USER, GET_USER_BOOKINGS } from '../config/config';
import jwt_decode from "jwt-decode";

import UserBookingsTable from "../components/UserBookingsTable";
import GuideBoard from "../components/GuideBoard";

export default function MyAccount() {
    const {getToken} = useAuthContext();
    const {isGuide} = useAuthContext();
    
    const token = getToken();
    const userId=jwt_decode(token).user.id;
    const userName=jwt_decode(token).user.name;

    const [currentUserInfo, setCurrentUserInfo] = useState([]);
    const [userBookings, setUserBookings] = useState();

    const headers = {
        headers: {"Authorization": "Bearer " + token}
    };

    useEffect(() => {
        fetch(GET_USER_BOOKINGS + userId, headers)
        .then(response => response.json())
        .then(data => setUserBookings(data));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        fetch(GET_CURRENT_USER, headers)
        .then(response => response.json())
        .then(data => setCurrentUserInfo(data));
        // eslint-disable-next-line
    }, []);

    return (
        <section className="section-container">

            <div className="flex space-between pt-3">

                <h1 className="header-text text-shadow">¡Hola, <b>{userName}</b>!</h1>
                <Link to={{
                    pathname: "/useredit",
                    state: currentUserInfo,
                }} className='btn-yellow'> Editar perfil</Link>

            </div>

            <div className="grid dashboard">

                {isGuide()
                && <GuideBoard/>}

                {userBookings 
                && <UserBookingsTable bookings={userBookings}/>}

            </div>

        </section>
    )
}
