import { GUIDES_FOLDER } from "../config/config"

import './style/GuideDetails.css'

export default function GuideDetails({ guide }) {

    return (
        <section className='guide-details-container'>
            <article className='guide-details-text'>
                <h1>¡Hola, soy {guide.name}!</h1>
                {/* <span className='city-label'>🗺 {guide.cityName}</span> */}
                <p>"{guide.shortDesc}"</p>
                <p className='about-label'>Sobre mí:</p>
                <p>{guide.description}</p>
            </article>
            <img src={GUIDES_FOLDER + guide.imgpath} className='guide-image' alt={guide.name}/>
        </section>
    )
}
