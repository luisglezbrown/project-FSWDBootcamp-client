import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { STATIC_FOLDER } from "../config/config"

import './style/Navbar.css'

export default function Navbar() {
    
    const {isAuthenticated, signOut} = useAuthContext();

    return (
        <nav>
            <Link to='/'><img src={STATIC_FOLDER + 'logo2.png'} alt="logo" className="logo"/></Link>

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
