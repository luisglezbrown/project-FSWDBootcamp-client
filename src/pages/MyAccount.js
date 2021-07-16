import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { GET_CURRENT_USER } from '../config/config';

import Navbar from '../components/Navbar';
import BookingTable from "../components/BookingsTable";
import EditDetailsForm from "../components/EditDetailsForm";

export default function MyAccount() {
    const {getToken} = useAuthContext();
    const {isGuide} = useAuthContext();

    const [currentUserInfo, setCurrentUserInfo] = useState([]);

    const headers = {
        headers: {"Authorization": `Bearer ${getToken()}`}
    };

    useEffect(() => {
        fetch(GET_CURRENT_USER, headers)
        .then(response => response.json())
        .then(data => setCurrentUserInfo(data));
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <Navbar />
            <h1>¡Hola, <b>{currentUserInfo?.name}</b>!</h1>

            <h2>Tus reservas</h2>
            <BookingTable />

            {/* La siguiente línea hace que espere a obtener los datos para cargar el formulario */}
            {currentUserInfo.length !== 0 ? <EditDetailsForm user={currentUserInfo}/> : <></> }

            {isGuide() && <BookingTable />}

        </>
    )
}
