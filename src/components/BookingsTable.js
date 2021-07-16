import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GET_USER_BOOKINGS, BASE_URL } from '../config/config';
import { useAuthContext } from "../context/AuthContext";

import BookingCancel from './BookingCancel';

export default function BookingTable() {
    const {loginUser} = useAuthContext();
    const {getToken} = useAuthContext();
    const userId = loginUser.user.id;

    const [userBookings, setUserBookings] = useState([]);

    const headers = {
        headers: {"Authorization": `Bearer ${getToken()}`}
    };
    useEffect(() => {
        fetch(GET_USER_BOOKINGS + userId, headers)
        .then(response => response.json())
        .then(data => setUserBookings(data));
        // eslint-disable-next-line
    }, []);

      
    return (
        userBookings.totalBookings !== 0 && 
        <table>
            <thead>
                <tr>
                    <th colSpan="4">Tus próximas reservas</th>
                </tr>
                <tr>
                    <th>Ciudad</th>
                    <th>Tour</th>
                    <th>Fecha</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {userBookings?.active?.map(booking => 
                <tr key={booking.id}>
                    <td>{booking.city}</td>
                    <td><Link to={`/tour/${booking.tourId}`} target="_blank">{booking.tourTitle}</Link></td>
                    <td>{booking?.date}</td>
                    <td><BookingCancel bookingId={booking?.id}/></td>
                </tr>)}
            </tbody>
            <thead>
                <tr>
                    <th colSpan="4">Tus reservas canceladas</th>
                </tr>
                <tr>
                    <th>Ciudad</th>
                    <th>Tour</th>
                    <th>Fecha</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {userBookings?.cancelled?.map(booking => 
                <tr key={booking.id}>
                    <td>{booking.city}</td>
                    <td>{booking.tourTitle}</td>
                    <td>{booking?.date}</td>
                    <td>{booking?.id}</td>
                </tr>)}
            </tbody>
        </table>
    )
}
