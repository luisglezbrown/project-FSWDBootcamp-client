import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import useQuery from '../hooks/useQuery';

export default function AccountCreated() {

    return (
        <>
            <Navbar />
            <section className='h-90vh flex' style={{background: `linear-gradient(0deg, #ffcc00 0%, rgba(255,204,0,0) 55%)`}}>
                <div className='my-3 center'>
                    <h1 className='header grey-shadow'>¡Tu cuenta se ha creado correctamente!</h1>
                        {
                            useQuery("role") === "user"
                            ? <p className='text'>Enhorabuena, ya puedes reservar los mejores free-tour de la mano de los mejores guías locales</p>
                            : <p className='text'>¡Yuhuuu! Estás más cerca de comenzar a ganar dinero mostrando a todos tu ciudad</p>
                        }
                    <div className='button-container my-3'>
                        {
                            useQuery("role") === "user"
                            ? <Link to='/allCities' className="btn login">¡Explora!</Link>
                            : <Link to='/login?to=newtour' className="btn login">¡Crear un tour!</Link>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
