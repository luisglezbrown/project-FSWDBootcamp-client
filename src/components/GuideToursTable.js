import { useState, useEffect } from 'react';
import { GET_BOOKINGS_BY_TOUR } from '../config/config';
import { useAuthContext } from "../context/AuthContext";

import BookingCancel from './actions/BookingCancel';

export default function GuideToursTable({tourId}) {
    const {getToken} = useAuthContext();
    const token = getToken();

    const [tourBookings, setTourBookings] = useState([]);


    const headers = {
        headers: {"Authorization": "Bearer " + token}
    };

    useEffect(() => {
        fetch(GET_BOOKINGS_BY_TOUR + tourId, headers)
        .then(response => response.json())
        .then(data => setTourBookings(data));
        // eslint-disable-next-line
    }, []);

    // console.log(tourBookings)
    
    const hasBookings = tourBookings?.totalActiveBookings !== 0;
    const dateFormat = formerDate => {
        const splitDate = formerDate.split('-');
    
        const year = splitDate[0];
        const month = splitDate[1];
        const day = splitDate[2].slice(0,2);

        return (day + '-' + month + '-' + year)
    }
    
    return (
        hasBookings 
        ?<table>
            <thead>
                <tr>
                    <th colSpan="4" className='table-header'>Tus próximas reservas</th>
                </tr>
                <tr>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Pax</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {tourBookings?.active?.map(booking => 
                <tr key={booking.id}>
                    <td>{dateFormat(booking.date)}</td>
                    <td>{booking.clientName}</td>
                    <td>{booking.pax}</td>
                    <td><BookingCancel bookingId={booking?.id}/></td>
                </tr>)}
            </tbody>
        </table>
        :<h2 className='center yellow'>Este tour aún no tiene reservas</h2>
    )
}
