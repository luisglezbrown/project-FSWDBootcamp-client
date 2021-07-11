import { useAuthContext } from "../context/AuthContext";
import Navbar from '../components/Navbar';

export default function MyAccount() {

    const {isGuide, isAdmin, loginUser} = useAuthContext();

    return (
        <>
            <Navbar />
            <p>Hola, estás en el área privada una vez logueado</p>
            {isGuide? <p>Es guía</p> : <p>No es guía</p>}
            {isAdmin? <p>Es Admin</p> : <p>No es Admin</p>}
        </>
    )
}
