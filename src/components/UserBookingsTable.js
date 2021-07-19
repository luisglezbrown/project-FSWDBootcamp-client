import { Link } from 'react-router-dom';
import BookingCancel from './actions/BookingCancel';

export default function UserBookingTable({bookings}) {
    console.log(bookings.totalBookings)

    const hasBookings = bookings.totalBookings > 0;
    const hasActiveBookings = bookings?.active[0] !== undefined;
    const hasCancelledBookings = bookings?.cancelled[0] !== undefined;

    const dateFormat = formerDate => {
        const splitDate = formerDate.split('-');
    
        const year = splitDate[0];
        const month = splitDate[1];
        const day = splitDate[2].slice(0,2);

        return (day + '-' + month + '-' + year)
    }

    return (
        !hasBookings
        ? <h2>Oh! No has reservado ningún tour</h2>
        : <><h2>Tus reservas</h2>

            {!hasActiveBookings 
            ?<h2>No tienes ninguna reserva activa</h2>
            :<table> 
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
                    {bookings?.active?.map(booking => 
                    <tr key={booking.id}>
                        <td>{booking.city}</td>
                        <td><Link to={`/tour/${booking.tourId}`} target="_blank">{booking.tourTitle}</Link></td>
                        <td>{dateFormat(booking?.date)}</td>
                        <td><BookingCancel bookingId={booking?.id}/></td>
                    </tr>)}
                </tbody>
            </table>}
            
            {hasCancelledBookings
            &&<table>
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
                    {bookings?.cancelled?.map(booking => 
                    <tr key={booking.id}>
                        <td>{booking.city}</td>
                        <td>{booking.tourTitle}</td>
                        <td>{dateFormat(booking?.date)}</td>
                        <td>{booking?.id}</td>
                    </tr>)}
                </tbody>
            </table>}

        </>
    )
}
