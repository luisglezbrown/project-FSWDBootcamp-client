import { Link } from "react-router-dom";

import './style/Navbar.css'

import logo2 from '../images/logo2.png'

export default function Navbar() {

    return (
        <nav>
            <Link to='/'><img src={logo2} alt="logo" className="logo"/></Link>
            <div className='button-container'>
                <Link to='/newuser' className="btn register"> registro</Link>
                <Link to='/login' className="btn login"> acceso</Link>
            </div>
        </nav>
    )
}