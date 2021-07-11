import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

export default function TourCreated() {

    /*TODO: ¿Cómo capturo los datos del tour creado? */

    return (
        <>
            <Navbar />
            <section className='h-90vh flex' style={{background: `linear-gradient(0deg, #ffcc00 0%, rgba(255,204,0,0) 55%)`}}>
                <div className='my-3 center'>
                    <h1 className='header grey-shadow'>¡El tour ya está disponible para reservar!</h1>
                    <p className='text'>Estos son los detalles del tour:</p>
                    <div className='button-container my-3'>
                        <Link to='/' className="btn login">¡A la home!</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
