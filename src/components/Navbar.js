import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

import './style/Navbar.css'

import logo2 from '../images/logo2.png'
// TODO: cambiar logo desde archivo en server

export default function Navbar() {
    
    const {isAuthenticated, signOut} = useAuthContext();

    return (
        <nav>
            <Link to='/'><img src={logo2} alt="logo" className="logo"/></Link>

            {
                isAuthenticated
                ?   <div className='button-container'>
                        <Link to='/' onClick={signOut} className="btn register"> cerrar sesión</Link>
                        <Link to='/myaccount' className="btn login"> mi cuenta</Link>
                    </div> 
                :   <div className='button-container'>
                        <Link to='/newuser' className="btn register"> registro</Link>
                        <Link to='/login' className="btn login"> acceso</Link>
                    </div>            
            }
        </nav>
    )
}
