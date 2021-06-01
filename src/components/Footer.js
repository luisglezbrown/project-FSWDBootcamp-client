import './style/Footer.css'

import logo from '../images/logo.png'

export default function Footer() {
    return (
        <footer>
            <div className="left-container">
                <p>Hecho con 🤍 por <a href="https://github.com/luisglezbrown" target="_blank" rel="noreferrer">Luis González</a> || Málaga [ES]</p>
                <p>Todas las imágenes creadas por <a href="https://www.freepik.es/" target="_blank" rel="noreferrer">Freepik</a> </p>
            </div>
            <div className="right-container">
                <img src={logo} alt="logo" className="logo"/>
            </div>
        </footer>
    )
}
