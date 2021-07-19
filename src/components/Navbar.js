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
                ?   <div>
                        <Link to='/' onClick={signOut} className="btn-no-bg"> cerrar sesión</Link>
                        <Link to='/myaccount' className="btn-yellow"> mi cuenta</Link>
                    </div> 
                :   <div>
                        <Link to='/newuser' className="btn-no-bg"> registro</Link>
                        <Link to='/login' className="btn-yellow"> acceso</Link>
                    </div>            
            }
        </nav>
    )
}
