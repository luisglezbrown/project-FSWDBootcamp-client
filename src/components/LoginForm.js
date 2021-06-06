import React from 'react'
import './style/LoginForm.css'

export default function LoginForm() {
    return (
        <section className="">
            <h1>¡Nos encanta volver a verte!</h1>
            <form class="login-box">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Contraseña" />
                <button>Login</button>
            </form>
        </section>
    )
}
