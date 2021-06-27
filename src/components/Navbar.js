import { Link } from "react-router-dom";

import './style/Navbar.css'

import logo2 from '../images/logo2.png'

export default function Navbar() {

    let userLogged = false;
    /* TODO: ¿Cómo capturo si el usuario está logueado? */


    return (
        <nav>
            <Link to='/'><img src={logo2} alt="logo" className="logo"/></Link>

            {
                userLogged
                ?   <div className='button-container'>
                        <Link to='/logout' className="btn register"> cerrar sesión</Link>
                        <Link to='/my-account' className="btn login"> mi cuenta</Link>
                    </div> 
                :   <div className='button-container'>
                        <Link to='/newuser' className="btn register"> registro</Link>
                        <Link to='/login' className="btn login"> acceso</Link>
                    </div>            
            }
        </nav>
    )
}
