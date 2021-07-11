import { Redirect } from "react-router";
import { useAuthContext } from "../context/AuthContext";

import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

export default function Login() {

    const {isAuthenticated} = useAuthContext();

    return isAuthenticated ? <Redirect to="/myaccount" /> : (
        <>
            <Navbar />
            <LoginForm />
        </>
    )
}
