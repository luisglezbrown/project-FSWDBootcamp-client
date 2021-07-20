import { Link } from 'react-router-dom'
import './style/BecomeAGuide.css'

export default function BecomeAGuide() {
    return (
        <div className="become-container">
            <div className="become-image"></div>
            <div className="become-text">
                <h1>¿Tu city mola?</h1>
                <p> Obtén money extra enseñando los encantos de tu ciudad mientras conoces a people de todo el mundo </p>
                <Link to='/newguide' className="btn-yellow">¡Hazte localz!</Link>
            </div>
        </div>
    )
}
