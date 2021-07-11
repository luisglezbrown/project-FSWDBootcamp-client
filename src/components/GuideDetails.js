import './style/GuideDetails.css'

export default function GuideDetails({ guide }) {

    const IMG_URL = "/images/guides/";

    return (
        <section className='guide-details-container'>
            <article className='guide-details-text'>
                <h1>¡Hola, soy {guide.name}!</h1>
                {/* <span className='city-label'>🗺 {guide.cityName}</span> */}
                <p>"{guide.shortDesc}"</p>
                <p className='about-label'>Sobre mí:</p>
                <p>{guide.description}</p>
            </article>
            <img src={`${IMG_URL}${guide.imgpath}`} className='guide-image' alt={guide.name}/>
        </section>
    )
}
