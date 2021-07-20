import { Link } from 'react-router-dom';
export default function BookingCreated() {

    /* TODO: ¿Cómo capturo los datos de la reserva creada? */

    return (
        <>
            <section className='h-90vh flex' style={{background: `linear-gradient(0deg, #ffcc00 0%, rgba(255,204,0,0) 55%)`}}>
                <div className='my-3 center'>
                    <h1 className='header-text text-shadow'>¡Reserva realizada correctamente!</h1>
                    <p>Tu localz te espera con muuuuuchas historias que contarte.</p>
                    <p> Si por cualquier motivo no puedes realizar el free-tour, puedes cancelar la reserva desde tu cuenta. ¡Tu localz agradecerá el gesto!</p>
                    <div className='button-container my-3'>
                        <Link to='/allCities' className="btn-yellow">¡Explora más tours!</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
