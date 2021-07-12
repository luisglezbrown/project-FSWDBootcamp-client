import { STATIC_FOLDER } from "../config/config"
import './style/Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="left-container">
                <p>Hecho con 🤍 por <a href="https://github.com/luisglezbrown" target="_blank" rel="noreferrer">Luis González</a> || Málaga [ES]</p>
                <p>Todas las imágenes creadas por <a href="https://www.freepik.es/" target="_blank" rel="noreferrer">Freepik</a> </p>
            </div>
            <div className="right-container">
                <img src={STATIC_FOLDER + "logo.png"} alt="logo" className="logo"/>
            </div>
        </footer>
    )
}
