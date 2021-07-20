import { Link } from 'react-router-dom';

export default function TourCreated() {

    /*TODO: ¿Cómo capturo los datos del tour creado? */

    return (
        <>
            <section className='h-90vh flex' style={{background: `linear-gradient(0deg, #ffcc00 0%, rgba(255,204,0,0) 55%)`}}>
                <div className='my-3 center'>
                    <h1 className='header-text text-shadow'>¡El tour ya está disponible para reservar!</h1>
                    <div className='button-container my-3'>
                        <Link to='/' className="btn-yellow">¡A la home!</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
