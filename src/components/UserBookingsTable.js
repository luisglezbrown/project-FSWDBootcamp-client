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
        ? <h2 className='header-text text-shadow'>💔 Oh! No tienes reservas</h2>
        : <div className='yellow-card'>
            <h2 className='header-container-inverted'>Tus reservas</h2>

            {!hasActiveBookings 
            ? <div className='result-card'>
                <h2>No tienes ninguna reserva activa</h2>
            </div>
            
            :<div className='result-card'>
                <table> 
                <thead>
                    <tr>
                        <th colSpan="4" className='table-header'>Tus próximas reservas</th>
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
            </table></div>}
            
            {hasCancelledBookings
            &&<div className='result-card'><table>
                <thead>
                    <tr>
                        <th colSpan="4">Tus reservas canceladas</th>
                    </tr>
                    <tr>
                        <th>Ciudad</th>
                        <th>Tour</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings?.cancelled?.map(booking => 
                    <tr key={booking.id}>
                        <td>{booking.city}</td>
                        <td>{booking.tourTitle}</td>
                        <td>{dateFormat(booking?.date)}</td>
                    </tr>)}
                </tbody>
            </table></div>}

        </div>
    )
}
